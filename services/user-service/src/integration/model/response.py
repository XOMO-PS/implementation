import json

class Response:
    def __init__(self, message, status_code):
        self.message = message
        self.status_code = status_code


    def to_json(self):
        return {
            'statusCode': self.status_code,
            'body': json.dumps({'message': self.message}),
            'headers': {
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*'
            },
        }