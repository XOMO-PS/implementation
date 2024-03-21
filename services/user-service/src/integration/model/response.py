import json

class Response:
    def __init__(self, message, status_code):
        self.message = message
        self.status_code = status_code


    def to_json(self):
        return {
            'statusCode': self.status_code,
            'body': json.dumps({'message': self.message})
        }