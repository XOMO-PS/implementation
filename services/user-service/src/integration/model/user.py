from dataclasses import dataclass
from typing import Optional

@dataclass
class User:
   firstName: str
   lastName: str
   email: str
   type: str
   passwordHash: str
   streetName: Optional[str] = None
   house: Optional[str] = None
   postalCode: Optional[str] = None
   city: Optional[str] = None
   country: Optional[str] = None