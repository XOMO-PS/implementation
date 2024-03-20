from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from src.config.app_config import AppConfig
from src.domain.model import storage_user

from sqlalchemy.orm import declarative_base
Base = declarative_base()

class UserRepositoryImpl:

    def __init__(self, engine=None, session_factory=None):
        uri = AppConfig().get_mysql_uri
        self.engine = engine or create_engine(uri)
        Base.metadata.create_all(self.engine)
        self.Session = session_factory or sessionmaker(bind=self.engine)


    def save(self, new_user:storage_user):
        session = self.Session()
        session.add(new_user)
        session.commit()
        session.close()

    def find_user_by_email(self, email:str):
        session = self.Session()
        try:
            user = session.query(storage_user.StorageUser).filter_by(email=email).first()
            return user
        finally:
            session.close()


    def find_user(self, userInfo:storage_user):
        print("Implement me!") 