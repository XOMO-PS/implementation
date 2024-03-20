import pytest
from flask import json
from unittest.mock import patch, MagicMock
from sqlalchemy.engine import Engine
from sqlalchemy.orm import sessionmaker

import os
import sys

cwd = os.getcwd()
sys.path.insert(0, os.path.join(cwd, "src"))
os.environ['TESTING'] = 'true'

from config.app_config import MYSQL_URI_TEST
from integration import user_controller
from integration.user_controller import app
from application.user_service import UserService
from persistence import user_repository_impl

@pytest.fixture
def mock_engine():
    return MagicMock(spec=Engine)


@pytest.fixture
def mock_user_repo(mock_engine):
    mock_session_factory = MagicMock(spec=sessionmaker)
    
    mock_user_repo = MagicMock(spec=user_repository_impl.UserRepositoryImpl)
    print("Using Engine:", mock_engine)
    mock_user_repo.Session = mock_session_factory
    
    return mock_user_repo


@pytest.fixture
def user_service_instance(mock_user_repo):
    user_service = UserService(user_repo=mock_user_repo)
    user_service.user_repo = mock_user_repo
    return user_service


@pytest.fixture
def client():
    with app.test_client() as client:
        yield client


def test_register_user_success(client, user_service_instance):
    
    with patch.object(user_service_instance, 'register_user'):
        request_data = {
            'firstName': 'test_user_fname',
            'lastName': 'test_user_lname',
            'passwordHash': 'test_password',
            'email': 'test_email',
            'type': 'user'
        }

    response = client.post('/user/register/', json=request_data)

    assert response.status_code == 200
    assert json.loads(response.data) == {'status': 'User successfully registered'}
