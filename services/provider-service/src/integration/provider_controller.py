import json
import hashlib
import os

from src.application.provider_service import ProviderService

def registration_handler(event,context):
   
   if event['body'] is not None:
        request_body = json.loads(event['body']) 
        response = ProviderService().create_provider(request_body)
        return response
   elif event is None:
       empty_error = {
                'statusCode': 400,
                'body': json.dumps({'error': 'empty fields'})
                }
       return empty_error
       
       
       

def signin_handler(event,context):
    return


