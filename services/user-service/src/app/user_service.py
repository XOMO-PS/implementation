from integration.model import user
from persistence import user_repository_impl
from domain.service import user_factory
from integration.model import response_config
from integration.model import response

class UserService:

    def __init__(self):
        self.user_repo = user_repository_impl()
    
    def is_user_info_complete(self, user_info:user) -> bool:
        return user_info.email or not user_info.passwordHash or not user_info.first_name or not user_info.last_name


    def is_user_registered(self, email: str) -> bool:
        existing_user = self.user_repo.find_user_by_email(email)
        return existing_user is not None


    def register_user(self, user_info: user) -> response:
        if not self.is_user_info_complete(user_info):
           return response_config.USER_INFO_INCOMPLETE
        
        if not self.is_user_registered(user_info.email):
            self.user_repo.save(user_factory.map_user_to_storage(user_info))
            return response_config.USER_SUCCESSFULLY_REGISTERED
        else:
            return response_config.USER_ALREADY_REGISTERD


    def is_user_registered(self, user_info: user) -> bool:
        print("Implement me!")
    

    def find_user(self, user_info: user) -> user:
        print("Implement me!")
    
