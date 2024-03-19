from domain.model import user_repository
from domain.model import storage_user

# This class implements the interfaces from user_repository.py. 
# This class contains the actual interfaction with database.

class UserRepositoryImpl(user_repository):

    def save_user(userInfo:storage_user):
        print("Implement me!")


    def find_user(userInfo:storage_user):
        print("Implement me!")