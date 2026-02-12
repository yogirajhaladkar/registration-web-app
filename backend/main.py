from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import engine, SessionLocal
import models, schemas
from passlib.context import CryptContext
from typing import Annotated

app = FastAPI()

# IMPORTANT: Enables frontend (port 5500) to talk to backend (8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

models.Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


@app.post("/register", status_code=status.HTTP_201_CREATED)
async def register(user: schemas.UserCreate, db: db_dependency):

    
    hashed_password = pwd_context.hash(user.password)

    new_user = models.user_info(
        username=user.username,
        email=user.email,
        password=hashed_password
    )

    db.add(new_user)
    db.commit()

    return {"message": "User registered successfully"}


@app.post("/login")
async def login(user: schemas.UserLogin, db: db_dependency):

    db_user = db.query(models.user_info).filter(
        models.user_info.username == user.username
    ).first()

    if not db_user:
        raise HTTPException(status_code=400, detail="User not found")

    # Verifying hashed password
    if not pwd_context.verify(user.password, db_user.password):
        raise HTTPException(status_code=400, detail="Incorrect password")

    return {"message": "Login successful"}
