from src.persistence.provider_repository import ProviderRepository
from src.model.Provider import Provider

class ProviderService:
    
    def __init__(self) -> None:
        pass
    
    def create_provider(self,request_body):
       new_provider = Provider(email=request_body['email'],
                                    password=request_body['password'],
                                    first_name=request_body['first_name'],
                                    last_name=request_body['last_name'],
                                    profile_info=request_body['profile_info']) 
       response = ProviderRepository().save_provider(new_provider)
       return response
    

    