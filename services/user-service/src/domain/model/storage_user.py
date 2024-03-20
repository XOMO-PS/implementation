from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy.orm import declarative_base
Base = declarative_base()

class StorageUser(Base):

   __tablename__ = 'user'

   id = Column(Integer, primary_key=True)

   firstName = Column(String)
   lastName = Column(String)
   email = Column(String)
   type = Column(String)
   passwordHash = Column(String)
   streetName = Column(String)
   house = Column(String)
   postalCode = Column(String)
   city = Column(String)
   country = Column(String)