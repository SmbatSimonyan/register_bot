from sqlalchemy import create_engine, Column, Integer, String, BigInteger, TIMESTAMP
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.sql import func
import os
from dotenv import load_dotenv

load_dotenv()

DB_URL = os.getenv("DB_URL")

engine = create_engine(DB_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    telegram_id = Column(BigInteger, unique=True, nullable=False)
    first_name = Column(String(255), nullable=False)
    last_name = Column(String(255))
    username = Column(String(255))
    created_at = Column(TIMESTAMP, server_default=func.now(), nullable=False)

Base.metadata.create_all(bind=engine)