from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from domain.model import user_repository
from domain.model import storage_user

class UserRepositoryImpl(user_repository):

    def __init__(self, db_uri):
        self.engine = create_engine(db_uri)
        Base.metadata.create_all(self.engine)
        self.Session = sessionmaker(bind=self.engine)


    def save_user(userInfo:storage_user):
        session = self.Session()
        new_user = storage_user(username=userInfo.username, email=userInfo.email)
        session.add(new_user)
        session.commit()
        session.close()


    def find_user(userInfo:storage_user):
        print("Implement me!")