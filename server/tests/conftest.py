
from fastapi.testclient import TestClient
import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker

from config import DB_URL
from app import app

engine = create_engine(DB_URL, connect_args={"check_same_thread": False})


@pytest.fixture
def test_db_session():
    SessionLocal = sessionmaker(bind=engine)
    session: Session = SessionLocal()
    yield session
    session.close()


@pytest.fixture(scope="module")
def client():
    with TestClient(app) as c:
        yield c
