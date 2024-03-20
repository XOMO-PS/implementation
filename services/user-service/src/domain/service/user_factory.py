import bcrypt

from src.integration.model import user
from src.domain.model.storage_user import StorageUser

class UserFactory:

    def map_user_to_storage(self, user: user) -> StorageUser:
        storage_user = StorageUser()

        hashed_password = bcrypt.hashpw(user.passwordHash.encode('utf-8'), bcrypt.gensalt())

        storage_user.firstName = user.firstName
        storage_user.lastName = user.lastName
        storage_user.email = user.email
        storage_user.type = "customer",
        storage_user.passwordHash = hashed_password

        storage_user.streetName = user.streetName
        storage_user.house = user.house
        storage_user.postalCode = user.postalCode
        storage_user.city = user.city
        storage_user.country = user.country

        return storage_user