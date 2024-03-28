import json
import hashlib

from src.model.Provider import Provider
from src.configuration.db_connection import DBConnection

class ProviderRepository:
    

    def save_provider(self,provider):
        
        #initiating DB Connection
        dbConnection = DBConnection()
        hashed_password = hashlib.sha256(provider.password.encode()).hexdigest()

        #checking for required fields
        response = self.check_required_fields(provider)

        connection = dbConnection.get_connection()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM users WHERE email = %s", (provider.email,))
        
        #checking for existing users
        existing_user = cursor.fetchone()
        response = self.check_registered_provider(existing_user)

        #creating user
        if response is None:

            insert_query = "INSERT INTO users (email, password_hash, type, first_name, last_name, profile_info) VALUES (%s, %s, %s, %s, %s, %s)"
            cursor.execute(insert_query, (provider.email, hashed_password, "provider", provider.first_name, provider.last_name, provider.profile_info ))
            connection.commit()
            response = {
                        'statusCode': 201,
                        'message': 'provider registered successfully'
                    }
        
        return response
    
       
        
    def check_required_fields(self,provider):

        if not provider.email or not provider.password or not provider.first_name or not provider.last_name:
            required_error = {
                'statusCode': 400,
                'body': json.dumps({'error': 'Missing required fields'})
                }
            return required_error

    def check_registered_provider(self,existing_user):
         
       
         if existing_user is not None:
                email_error = {
                    'statusCode': 409,
                    'body': json.dumps({'error': 'Email is already registered'})
                    }
                return email_error 

