from src.integration.model import user
from src.persistence import user_repository_impl
from src.domain.service import user_factory
from src.integration.model import response_config
from src.integration.model import response

class UserService:

    def __init__(self, user_repo=None):
        self.user_repo = user_repo or user_repository_impl.UserRepositoryImpl()
        self.user_factory = user_factory.UserFactory()
    
    def is_user_info_incomplete(self, user_info:user) -> bool:
        return not user_info.email and not user_info.password_hash and not user_info.first_name and not user_info.last_name


    def is_user_registered(self, email: str) -> bool:
        existing_user = self.user_repo.find_user_by_email(email)
        return existing_user is not None


    def register_user(self, user_info: user) -> response:
        if self.is_user_info_incomplete(user_info):
           return response_config.USER_INFO_INCOMPLETE
        
        if not self.is_user_registered(user_info.email):
            print("Registering new user")
            self.user_repo.save(self.user_factory.map_user_to_storage(user_info))
            print("User registered.")
            return response_config.USER_SUCCESSFULLY_REGISTERED
        else:
            print("User already exists")
            return response_config.USER_ALREADY_REGISTERED


    def is_user_registered(self, email: str) -> bool:
        return self.user_repo.find_user_by_email(email) is not None
    

    def find_user(self, user_info: user) -> user:
        print("Implement me!")
    
