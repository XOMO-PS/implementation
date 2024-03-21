from src.integration.model import user
from src.persistence import user_repository_impl
from src.domain.service import user_factory
from src.integration.model import response_config
from src.integration.model import response
# for sign in
from werkzeug.security import check_password_hash

class UserService:

    def __init__(self, user_repo=None):
        self.user_repo = user_repo or user_repository_impl.UserRepositoryImpl()
        self.user_factory = user_factory.UserFactory()
    

    def is_user_info_incomplete(self, user_info:user) -> bool:
        return not user_info.email or not user_info.password_hash or not user_info.first_name or not user_info.last_name or not user_info.type


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


    def is_user_registered(self, email: str) -> bool:
        return self.user_repo.find_user_by_email(email) is not None
    
    # Add a function to return the user when looking up by email.
    def find_user_byEmail_and_return(self, user_email: str) -> user:
        user_found = self.user_repo.find_user_by_email(user_email)
        return user_found
    
    # Assuming your user_service has a method to get user by email or username
    def authenticate_user(self, email, password: str):
        found_user =  self.user_repo.find_user_by_email(email)
        if found_user and check_password_hash(found_user.passwordHash, password):
            return found_user
        return None
    
    
    
