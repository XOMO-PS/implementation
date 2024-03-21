from src.integration.model import user
from src.persistence import user_repository_impl
from src.domain.service import user_factory
from src.integration.model import response_config
from src.integration.model import response
import hashlib

class UserService:

    def __init__(self, user_repo=None):
        self.user_repo = user_repo or user_repository_impl.UserRepositoryImpl()
        self.user_factory = user_factory.UserFactory()
    
    def register_user(self, user_info: user) -> response:
        if self.is_user_info_incomplete(user_info):
           return response_config.USER_INFO_INCOMPLETE
        
        if not self.is_user_registered(user_info.email):
            print("Registering new user")
            self.user_repo.save(self.user_factory.map_user_to_storage(user_info))
            return response_config.USER_SUCCESSFULLY_REGISTERED
        else:
            print("User already exists")
            return response_config.USER_ALREADY_REGISTERED


    def is_user_info_incomplete(self, user_info:user) -> bool:
        return not user_info.email or not user_info.password_hash or not user_info.first_name or not user_info.last_name or not user_info.type


    def is_user_registered(self, email: str) -> bool:
        return self.user_repo.find_user_id_by_email(email) is not None
    
    
    def authenticate_user(self, email, password: str) -> response:
        if not email or not password:
            return response_config.USER_INFO_INCOMPLETE
        
        found_user =  self.user_repo.find_user_by_email(email)
        if found_user and self.verify_password(found_user.password_hash, password):
            return response_config.USER_REGISTRATION_FOUND
        else:
            return response_config.USER_NOT_FOUND


    def verify_password(self, stored_hashed_password: str, input_password: str) -> bool:
        hashed_input_password = hashlib.sha256(input_password.encode()).hexdigest()
        if hashed_input_password == stored_hashed_password:
            return True
        else:
            return False
    
    
    
