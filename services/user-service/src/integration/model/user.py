from dataclasses import dataclass
from typing import Optional

@dataclass
class User:
   email: str
   password_hash: str
   first_name: Optional[str] = None
   last_name: Optional[str] = None
   type: Optional[str] = "customer"
   street_name: Optional[str] = None
   house: Optional[str] = None
   postal_code: Optional[str] = None
   city: Optional[str] = None
   country: Optional[str] = None

   # Added Constructor
   def __init__(self, firstName: str, lastName: str, email: str, type: str, passwordHash: str, streetName: Optional[str] = None, house: Optional[str] = None, postalCode: Optional[str] = None, city: Optional[str] = None, country: Optional[str] = None):
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.type = type
        self.passwordHash = passwordHash
        self.streetName = streetName
        self.house = house
        self.postalCode = postalCode
        self.city = city
        self.country = country
