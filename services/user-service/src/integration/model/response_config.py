from src.integration.model import response

INVALID_REQUEST = response.Response(message="Missing or empty request body", status_code=400)

USER_REGISTRATION_FOUND = response.Response(message="User registration found", status_code=200)
USER_NOT_FOUND = response.Response(message="User not found with provided credentials", status_code=401)

USER_SUCCESSFULLY_REGISTERED = response.Response(message="User succesfully registered", status_code=200)
USER_ALREADY_REGISTERED = response.Response(message="User with this email is already registered", status_code=409)
USER_INFO_INCOMPLETE = response.Response(message="Missing required fields", status_code=400)
REGISTRATION_FAILED = response.Response(message="Error occurred during registration", status_code=500)