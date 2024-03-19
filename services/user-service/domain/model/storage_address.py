from dataclasses import dataclass

@dataclass
class StorageAddress:
    streetName: str
    house: str
    postal: str
    city: str
    country: str