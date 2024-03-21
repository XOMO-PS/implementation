from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from src.config.app_config import AppConfig
from src.domain.model import storage_user

from sqlalchemy.orm import declarative_base
Base = declarative_base()

class UserRepositoryImpl:

    def __init__(self, engine=None, session_factory=None):
        config = AppConfig()
        self.engine = engine or create_engine(config.get_uri())
        Base.metadata.create_all(self.engine)
        self.Session = session_factory or sessionmaker(bind=self.engine)


    def save(self, new_user:storage_user):
        session = self.Session()
        print("Adding user to Database")
        session.add(new_user)
        session.commit()
        session.close()

    def find_user_id_by_email(self, email:str):
        session = self.Session()
        try:
            user = session.query(storage_user.StorageUser.user_id).filter_by(email=email).scalar()
            return user
        finally:
            session.close()
    
    def find_user_by_email(self, email:str) -> storage_user.StorageUser:
        session = self.Session()
        try:
            user = session.query(storage_user.StorageUser).filter_by(email=email).first()
            return user
        finally:
            session.close()