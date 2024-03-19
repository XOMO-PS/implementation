 #add fields of user class

from dataclasses import dataclass
from model import address

@dataclass
class User:
   firstName: str
   lastName: str
   email: str
   type: str
   passwordHash: str
   location: address