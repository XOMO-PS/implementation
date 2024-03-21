import hashlib

from src.integration.model.user import User
from src.domain.model.storage_user import StorageUser

class UserFactory:

    def map_user_to_storage(self, user: User) -> StorageUser:
        storage_user = StorageUser()

        hashed_password = hashlib.sha256(user.password_hash.encode()).hexdigest()

        storage_user.first_name = user.first_name
        storage_user.last_name = user.last_name
        storage_user.email = user.email
        storage_user.type = user.type,
        storage_user.password_hash = hashed_password

        storage_user.street_name = user.street_name
        storage_user.house = user.house
        storage_user.postal_code = user.postal_code
        storage_user.city = user.city
        storage_user.country = user.country

        return storage_user