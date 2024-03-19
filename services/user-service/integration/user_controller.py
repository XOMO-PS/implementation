from flask import Flask, request, jsonify
from app import user_service
from model import user
from model import response_config

app = Flask(__name__)
user_service = user_service()

@app.route('user/register/', methods=['POST'])
def register_user():
    data = request.get_json()

    try:
        new_user = user(**data)
        user_service.register_user(new_user)
        return jsonify({'status': response_config.USER_SUCCESSFULLY_REGISTERED.message}), response_config.USER_SUCCESSFULLY_REGISTERED.status_code
    
    except Exception as e:
        error_message = str(e)
        if error_message == response_config.USER_ALREADY_REGISTERED.message:
            return jsonify({'error': error_message}), response_config.USER_ALREADY_REGISTERED.status_code
        else:
            return jsonify({'error': error_message}), response_config.REGISTRATION_FAILED.status_code

if __name__ == '__main__':
    app.run(debug=True)
