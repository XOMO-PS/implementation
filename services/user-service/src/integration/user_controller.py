from flask import jsonify
import json

from src.application import user_service
from src.integration.model import user
from src.integration.model import response_config

def registration_handler(event, context):

    if 'body' in event and event['body']:
        request_body = json.loads(event['body'])
        
        try:
            new_user = user.User(**request_body)
            user_service.register_user(new_user)
            return jsonify({'status': response_config.USER_SUCCESSFULLY_REGISTERED.message}), response_config.USER_SUCCESSFULLY_REGISTERED.status_code
    
        except Exception as e:
            error_message = str(e)
            if error_message == response_config.USER_ALREADY_REGISTERED.message:
                return jsonify({'error': error_message}), response_config.USER_ALREADY_REGISTERED.status_code
            else:
                return jsonify({'error': error_message}), response_config.REGISTRATION_FAILED.status_code
  
    else:
        return response_config.INVALID_REQUEST.status_code
