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