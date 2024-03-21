import boto3
import json

class AppConfig:

    def __init__(self, region_name='eu-north-1'):
        self.region_name = region_name
        self.session = boto3.session.Session()
        self.client = self.session.client(service_name='secretsmanager', region_name=self.region_name)


    def get_secret(self, secret_name):
        try:
            response = self.client.get_secret_value(SecretId=secret_name)
        except Exception as e:
            print(f"Error occurred: {e}")
            return None

        if 'SecretString' in response:
            secret = response['SecretString']
        else:
            secret = response['SecretBinary']

        return secret


    def create_psql_uri(self, username, password, hostname, port, dbname='xomops'):
        return f"postgresql+pg8000://{username}:{password}@{hostname}:{port}/{dbname}"


    def get_uri(self, secret_name='user-service'):
        secret_values = self.get_secret(secret_name)
        if secret_values:
            secrets = json.loads(secret_values)
            username = secrets.get('username', '')
            password = secrets.get('password', '')
            hostname = secrets.get('hostname', '')
            port     = secrets.get('port', '')
            print("Fetched all necessary secrets")
            return self.create_psql_uri(username, password, hostname, port)
        else:
            return None
