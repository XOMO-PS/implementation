from flask import Flask, jsonify
import json

from src.application.user_service import UserService
from src.integration.model import user
from src.integration.model import response_config, response

app = Flask(__name__)

def registration_handler(event, context):

    with app.app_context():
        if 'body' in event and event['body']:
            print("Body: ", event['body'])
            request_body = json.loads(event['body'])
            print("Json body: ", request_body)
            
            try:
                new_user = user.User(**request_body)
                service = UserService()
                response = service.register_user(user_info=new_user)
                print("Response: ", response.Response)
                if response.status_code == 200:
                    return jsonify({'message': response.message}), response.status_code
                else:
                    return jsonify({'error': response.message}), response.status_code
        
            except Exception as e:
                print("Exception occurred: ", str(e))
                error_message = str(e)
                operation_error = {
                    'statusCode': 500,
                    'body': json.dumps({'error': f'Exception occurred: {error_message}'})
                 }
                return operation_error
                #return jsonify({'error': str(e)}), 500
    
        else:
            return jsonify({'error': response_config.INVALID_REQUEST.message}), 409
