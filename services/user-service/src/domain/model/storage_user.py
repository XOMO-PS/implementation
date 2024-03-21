from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy.orm import declarative_base
Base = declarative_base()

class StorageUser(Base):

   __tablename__ = 'users'

   user_id = Column(Integer, primary_key=True)

   first_name = Column(String)
   last_name = Column(String)
   email = Column(String)
   type = Column(String)
   password_hash = Column(String)
   street_name = Column(String)
   house = Column(String)
   postal_code = Column(String)
   city = Column(String)
   country = Column(String)