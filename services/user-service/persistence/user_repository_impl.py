from config.app_config import MYSQL_URI

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from domain.model import user_repository
from domain.model import storage_user

class UserRepositoryImpl(user_repository):

    def __init__(self):
        self.engine = create_engine(MYSQL_URI)
        Base.metadata.create_all(self.engine)
        self.Session = sessionmaker(bind=self.engine)


    def save_user(new_user:storage_user):
        session = self.Session()
        session.add(new_user)
        session.commit()
        session.close()


    def find_user(self, userInfo:storage_user):
        print("Implement me!") 