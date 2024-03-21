from abc import ABC, abstractmethod
from domain.model import storage_user

class UserRepository(ABC):

    @abstractmethod
    def user(userInfo:storage_user) -> storage_user:
        pass

    @abstractmethod
    def find_user_by_email(self, email:str) -> storage_user:
        pass

    @abstractmethod
    def find_user_id_by_email(self, email:str):
        pass