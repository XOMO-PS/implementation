import bcrypt

from integration.model import user
from domain.model import storage_user

class UserFactory:
    def map_user_to_storage(user: user) -> storage_user:
        storage_user = storage_user()

        hashed_password = bcrypt.hashpw(user.passwordHash.encode('utf-8'), bcrypt.gensalt())

        storage_user.firstName = user.firstName
        storage_user.lastName = user.lastName
        storage_user.email = user.email
        storage_user.type = "customer",
        storage_user.passwordHash = hashed_password

        storage_user.streetName = user.street
        storage_user.house = user.house
        storage_user.postalCode = user.postal_code
        storage_user.city = user.city
        storage_user.country = user.country

        return storage_user