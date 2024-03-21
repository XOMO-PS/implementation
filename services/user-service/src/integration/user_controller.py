from flask import Flask, jsonify
import json

from src.application.user_service import UserService
from src.integration.model import user
from src.integration.model import response_config, response

app = Flask(__name__)

def registration_handler(event, context):

    with app.app_context():
        if 'body' in event and event['body']:
            request_body = json.loads(event['body'])            
            try:
                new_user = user.User(**request_body)
                service = UserService()
                return jsonize(service.register_user(user_info=new_user))
        
            except Exception as e:
                print("fell in block")
                error_message = str(e)
                operation_error = {
                    'statusCode': 500,
                    'body': json.dumps({'error': f'{error_message}'})
                 }
                return operation_error
    
        else:
            return jsonize(response_config.INVALID_REQUEST)


def jsonize(result: response) -> json:
    result = {
                'statusCode': response.status_code,
                'body': json.dumps({'message': response.message})
            }
    return result
