import pytest
from unittest.mock import MagicMock

from persistence import user_repository_impl
from domain.model import storage_user

@pytest.fixture
def mock_session():
    return MagicMock()

@pytest.fixture
def mock_engine():
    return MagicMock()

@pytest.fixture
def user_repo(mock_session, mock_engine):
    repo = user_repository_impl.UserRepositoryImpl(engine=mock_engine)
    repo.Session = MagicMock(return_value=mock_session)
    return repo

def test_save_user(mock_session, user_repo):
    user = MagicMock(spec=storage_user)
    user_repo.save(user)

    mock_session.add.assert_called_once_with(user)
    mock_session.commit.assert_called_once()