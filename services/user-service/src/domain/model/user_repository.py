from abc import ABC, abstractmethod
from domain.model import storage_user

# This class contains the interfaces to get data from database


class UserRepository(ABC):

    @abstractmethod
    def save_user(userInfo:storage_user):
        pass


    @abstractmethod
    def find_user(userInfo:storage_user):
        pass
