 #add fields of user class

from dataclasses import dataclass

@dataclass
class User:
   firstName: str
   lastName: str
   email: str
   type: str
   passwordHash: str
   streetName: str
   house: str
   postal: str
   city: str
   country: str