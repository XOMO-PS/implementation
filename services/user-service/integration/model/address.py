from dataclasses import dataclass

@dataclass
class Address:
    streetName: str
    house: str
    postal: str
    city: str
    country: str