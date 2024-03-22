import json
import hashlib


from integration.db_connection import DBConnection

def provider_handler(event,context):
   dbConnection = DBConnection()

   email = event['email']
   password = event['password']
   first_name = event['first_name']
   last_name = event['last_name']
   profile_info = event['profile_info']
   hashed_password = hashlib.sha256(password.encode()).hexdigest()
   
   if not email or not password or not first_name or not last_name:
    required_error = {
         'statusCode': 400,
         'body': json.dumps({'error': 'Missing required fields'})
         }
    return required_error
   
   try:
    connection = dbConnection.get_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    existing_user = cursor.fetchone()
    
    if existing_user:
        email_error = {
            'statusCode': 409,
            'body': json.dumps({'error': 'Email is already registered'})
            }
        return email_error
    insert_query = "INSERT INTO users (email, password_hash, type, first_name, last_name, profile_info) VALUES (%s, %s, %s, %s, %s, %s)"
    cursor.execute(insert_query, (email, hashed_password, "provider", first_name, last_name, profile_info ))
    connection.commit()
    response = {
                'statusCode': 201,
                'message': 'Provider registered successfully'
            }
    return response
   
   except Exception as error:
    db_error = {
       'statusCode': 500,
       'body': json.dumps({'error': f'Database error: {str(error)}'})
       }
    return db_error
  


