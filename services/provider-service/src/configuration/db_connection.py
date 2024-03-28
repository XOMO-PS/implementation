import pg8000
from src.configuration.db_config import DBConfig

class DBConnection:
    def __init__(self):
        self.db_config = DBConfig()

    def get_connection(self):
        username, password, host, port, dbname = self.db_config.get_secrets()
        connection = pg8000.connect(
            user=username,
            password=password,
            host=host,
            port=port,
            database=dbname
        )
        return connection