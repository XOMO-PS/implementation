# User Service

## Development Notes

### Pre-requisites
Clone the Github repository: https://github.com/XOMO-PS/implementation      
Install Visual Studio of you machine: https://code.visualstudio.com/Download

### Visual Studio Setup for Python
Follow the official guid from VS:   
	Start with Pre-requisites: https://code.visualstudio.com/docs/python/python-tutorial#_prerequisites     
	Complete all steps up-to Creating virtual env: https://code.visualstudio.com/docs/python/python-tutorial#_create-a-virtual-environment      
	Add .venv to .gitignore, so that you don't commit this directory to repository.
	
NOTE: If your are working on user-service, ensure that your .venv is created under user-service directory.

### Add your python code
Now you are free to add necessary python code. Make sure you follow along the existing package structure and coding standards, to maintain consistency.

#### Food for thought
The goal during development of user-service is to follow the concepts of Domain Driven Design and Clean Architecture principles. 
This is visible starting with the package structure explained here https://miro.com/app/board/uXjVNWEdOSY=/?moveToWidget=3458764582560284120&cot=14
This way responsibilities are contained closely and there's clear separation of concerns in each layer.

#### Code Structure of user-service
1. The entry point into this service is at **src/integration/user_controller.py**
2. Necessary Lambda functions for user login and register can be found in here.
3. Every Lambda functions entry point is pre-defined:
```
def lambda_handler(event, context):
   # add your code here. 
   # The name lambda_handler can be changed to what suits your requirement.
   # Refer existing lambda handler(s)
```
4. controller interacts with your service:  **src/application/user_service.py** . 
5. service interacts with your repository to talk to database: **src/domain/model/user_repository.py**
6. the actual implementation of database queries under persistence layer: **src/persistence/user_repository_impl.py**
7. at the end, response is delivered from the controller. Response should be in json format.
```
result = {

	'statusCode': <HTTP status code>,
	'body': json.dumps({'message': <your message>})
}
return result
```

### Adding Unit and Integration Test
It's important that you add Tests for your code-base.
All Test must go under test directory: **test/***
Refer the existing structure in test directory and test class, before you add new ones.

### Connecting to SQL 
We are using Postgress as Relation Database tech. Follow the steps for access via CLI.
1. Install psql on your machine: `brew install libpq`
2. Connect to DB: `psql -h XXX.compute-1.amazonaws.com -U <username> -d <password>`
3. When prompted for password, add the password.
4. Once you are connected, you can list tables(`/dt`)  and other PSQL commands.

### Deploying your Lambda to AWS
 Follow the DeploymentNotes.md in the user-service.

