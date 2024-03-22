import boto3
import json

class DBConfig:
    def __init__(self):
        self.secret_name = 'provider-services'
        self.region_name = 'eu-north-1'

    def get_secrets(self):
        session = boto3.session.Session()
        client = session.client(
            service_name='secretsmanager',
            region_name=self.region_name
        )
        response = client.get_secret_value(SecretId=self.secret_name)
        secret_dict = json.loads(response['SecretString'])
        return secret_dict['username'], secret_dict['password'], secret_dict['host'], secret_dict['port'], secret_dict['dbname']