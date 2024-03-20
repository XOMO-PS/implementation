import pytest
from flask import json
from unittest.mock import patch, MagicMock
from sqlalchemy.engine import Engine
from sqlalchemy.orm import sessionmaker

import os
import sys

cwd = os.getcwd()
sys.path.insert(0, os.path.join(cwd, "src"))

from integration import user_controller
from application import user_service
from persistence import user_repository_impl

@pytest.fixture
def client():
    with user_controller.test_client() as client:
        yield client

@pytest.fixture
def mock_engine():
    return MagicMock()

@patch('persistence.user_repository_impl.create_engine')
def test_register_user_success(mock_create_engine, client, monkeypatch):
    def mock_register_user(new_user):
        pass  # Implement mock behavior if needed

    mock_engine = MagicMock(spec=Engine)
    mock_create_engine.return_value = mock_engine

    mock_session = MagicMock(spec=sessionmaker)
    user_repository_impl.sessionmaker = mock_session
    
    monkeypatch.setattr(user_service, 'register_user', mock_register_user)

    # Mock request data
    request_data = {
        'username': 'test_user',
        'password': 'test_password'
    }

    # Sending POST request to register user
    response = client.post('/user/register/', json=request_data)

    # Asserting response
    assert response.status_code == 200
    assert json.loads(response.data) == {'status': 'User successfully registered'}


@patch('persistence.user_repository_impl.create_engine')
def test_register_user_failure(mock_create_engine, client, monkeypatch):
    # Mocking user service method
    def mock_register_user(new_user):
        raise Exception('User already registered')  # Simulate failure

    mock_engine = MagicMock(spec=Engine)
    mock_create_engine.return_value = mock_engine

    mock_session = MagicMock(spec=sessionmaker)
    user_repository_impl.sessionmaker = mock_session

    monkeypatch.setattr(user_service, 'register_user', mock_register_user)

    # Mock request data
    request_data = {
        'username': 'test_user',
        'password': 'test_password'
    }

    # Sending POST request to register user
    response = client.post('/user/register/', json=request_data)

    # Asserting response
    assert response.status_code == 400
    assert json.loads(response.data) == {'error': 'User already registered'}
