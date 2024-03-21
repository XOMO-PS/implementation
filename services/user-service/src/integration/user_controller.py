from flask import Flask, jsonify
import json

from src.application.user_service import UserService
from src.integration.model import user
from src.integration.model import response_config

app = Flask(__name__)

def registration_handler(event, context):

    with app.app_context():
        if 'body' in event and event['body']:
            request_body = json.loads(event['body'])            
            try:
                new_user = user.User(**request_body)
                service = UserService()
                response = service.register_user(user_info=new_user)
                result = {
                'statusCode': response.status_code,
                'body': json.dumps({'message': response.message})
                }
                return jsonify({'message': 'Blah blah'}), 201
        
            except Exception as e:
                print("Exception occurred: ", str(e))
                error_message = str(e)
                operation_error = {
                    'statusCode': 500,
                    'body': json.dumps({'error': f'Exception occurred: {error_message}'})
                 }
                return operation_error
    
        else:
            return jsonify({'error': response_config.INVALID_REQUEST.message}), 409
