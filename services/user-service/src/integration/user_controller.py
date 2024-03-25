from flask import Flask
import json

from src.application.user_service import UserService
from src.integration.model import user
from src.integration.model import response_config
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def registration_handler(event, context):
 
    with app.app_context():
        if 'body' in event and event['body']:
            request_body = json.loads(event['body'])            
            try:
                new_user = user.User(**request_body)
                response = UserService().register_user(user_info=new_user)
                return response.to_json()
        
            except Exception as e:
                error_message = str(e)
                operation_error = {
                    'statusCode': 500,
                    'body': json.dumps({'Error': f'{error_message}'})
                 }
                return operation_error
        else:
            response = response_config.INVALID_REQUEST
            return response.to_json()

def sign_in_handler(event, context):

    with app.app_context():
        if 'body' in event and event['body']:
            request_body = json.loads(event['body'])
            try:
                email = request_body.get('email')
                password = request_body.get('password_hash')
                response = UserService().authenticate_user(email, password)
                return response.to_json()
            
            except Exception as e:
                error_message = str(e)
                operation_error = {
                    'statusCode': 500,
                    'body': json.dumps({'Error': f'{error_message}'})
                    }
                return operation_error
            
        else:
            response = response_config.INVALID_REQUEST
            return response.to_json()