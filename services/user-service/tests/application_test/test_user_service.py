import pytest
from unittest.mock import MagicMock

import os
import sys

cwd = os.getcwd()
sys.path.insert(0, os.path.join(cwd, "src"))

from integration.model import user
from application.user_service import UserService
from persistence import user_repository_impl
from integration.model import response_config

# Define mocked user info
mock_user_info_complete = user.User(email="test@example.com", passwordHash="hashed_password", firstName="John", lastName="Doe", type="user")
mock_user_info_incomplete = user.User(email="", passwordHash="", firstName="", lastName="", type="user")

@pytest.fixture
def mock_user_repo():
    # Mocking UserRepositoryImpl with engine and session_factory
    mock_user_repo = MagicMock(spec=user_repository_impl.UserRepositoryImpl)
    
    mock_engine = MagicMock()
    mock_session_factory = MagicMock()
    
    mock_user_repo.engine = mock_engine
    mock_user_repo.Session = mock_session_factory
    
    return mock_user_repo

@pytest.fixture
def user_service_instance(mock_user_repo):
    user_service = UserService(user_repo=mock_user_repo)
    user_service.user_repo = mock_user_repo
    return user_service


# Test case for registering a user with complete information
def test_register_user_complete_info(user_service_instance, mock_user_repo):
    # Mock is_user_registered to return False
    mock_user_repo.find_user_by_email.return_value = None

    response = user_service_instance.register_user(mock_user_info_complete)

    assert response == response_config.USER_SUCCESSFULLY_REGISTERED


# Test case for registering a user with incomplete information
def test_register_user_incomplete_info(user_service_instance, mock_user_repo):

    response = user_service_instance.register_user(mock_user_info_incomplete)

    assert response == response_config.USER_INFO_INCOMPLETE

    mock_user_repo.save.assert_not_called()

 # Test case for registering a user who is already registered
def test_register_user_already_registered(user_service_instance, mock_user_repo):
    # Mock is_user_registered to return True
    mock_user_repo.find_user_by_email.return_value = mock_user_info_complete

    response = user_service_instance.register_user(mock_user_info_complete)

    assert response == response_config.USER_ALREADY_REGISTERD

    mock_user_repo.save.assert_not_called()   