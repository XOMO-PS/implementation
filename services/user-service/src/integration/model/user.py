from dataclasses import dataclass
from typing import Optional

@dataclass
class User:
   first_name: str
   last_name: str
   email: str
   type: str
   password_hash: str
   street_name: Optional[str] = None
   house: Optional[str] = None
   postal_code: Optional[str] = None
   city: Optional[str] = None
   country: Optional[str] = None