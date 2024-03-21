# User Service Deployment Notes

We use Serverless framework for deployment and thus require a serverless.yaml conifguration. The configuration for user-service can be found [here](https://github.com/XOMO-PS/implementation/blob/main/services/user-service/serverless.yaml).
This can be adapted for other service(s).

## AWS SecretsManager
We have stored Database credentials in [SecretsManager](https://eu-north-1.console.aws.amazon.com/secretsmanager/listsecrets?region=eu-north-1).

To read these secrets, we have created an [IAM Policy](https://us-east-1.console.aws.amazon.com/iam/home?region=eu-north-1#/policies/details/arn%3Aaws%3Aiam%3A%3A381492106198%3Apolicy%2FUserServiceReadSecrets?section=permissions)

The policy ARN is to be specied in [serverless.yaml](https://github.com/XOMO-PS/implementation/blob/main/services/user-service/serverless.yaml#L13)

## Deployment Steps
#### Install npm on your machine
`brew install npm`

#### Install serverless framework 
`npm -g install serverless`

#### Configure AWS CLI on your machine
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html

#### Extract python dependencies
Every dependency your python project needs, must be installed using pip/pip3 inside your .venv directory
##### Navigate to your virtual environment directory:
`cd .venv`
##### Install Serverless requirement package manager
`serverless-python-requirements`
##### Extract dependencies:
`pip freeze > requirements.txt`     
This creates a requirements.tx file in your project root.

#### Deploy Lambda Function
`serverless deploy`     

You can continue doing any changes to your code base and deploy again using `serverless deploy`. 
If any dependency is to be added, then follow below steps:
##### Install new dependency 
In your .venv install new dependency, suing pip/pip3:       
`pip3 install <<new library>>`
##### Update requirements.txt
Execute in your .venv:      
`pip freeze > requirements.txt`

##### Deploy Lambda again
`serverless deploy`

Head over to https://eu-north-1.console.aws.amazon.com/lambda/home?region=eu-north-1#/functions  to see your Lambda function deployed.
#### Destroy Lambda Function
Do not delete your lambda functions directly from AWS Console, please use Serverless to delete the complete resources for you.      
`serverless remove`


