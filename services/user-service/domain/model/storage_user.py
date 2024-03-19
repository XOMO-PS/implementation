from dataclasses import dataclass
from model import storage_address as address

@dataclass
class StorageUser:
   firstName: str
   lastName: str
   email: str
   type: str
   passwordHash: str
   location: address