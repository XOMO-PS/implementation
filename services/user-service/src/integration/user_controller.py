from flask import jsonify, request
from flask import Flask
import json

from src.application.user_service import UserService
from src.integration.model import user
from src.integration.model import response_config
from src.persistence import user_repository_impl


app = Flask(__name__)

def sign_in(event, context):
    if 'body' in event and event['body']:
        request_body = json.loads(event['body'])

        try:
            data = request_body
            email = data.get('email')
            password = data.get('password')
    
            if not email or not password:
                return jsonify({'error': 'Missing credentials'}), 400

            user = UserService.authenticate_user(email, password)
            if user:
                return jsonify({'status': 'Successfully signed in'}), 200
            else:
                return jsonify({'error': 'Invalid credentials'}), 401
        
        except Exception as e:
            error_message = str(e)
            operation_error = {
                'statusCode': 500,
                'body': json.dumps({'Error': f'{error_message}'})
                }
            return operation_error

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