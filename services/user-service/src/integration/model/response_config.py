from integration.model import response

USER_SUCCESSFULLY_REGISTERED = response(message="User succesfully registered", status_code=200)
USER_ALREADY_REGISTERD = response(message="User with this email is already registered", status_code=409)
USER_INFO_INCOMPLETE = response(message="Missing required fields", status_code=400)
REGISTRATION_FAILED = response(message="Error occurred during registration", status_code=500)