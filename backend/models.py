from sqlalchemy import Column , Integer , String
from database import Base

class user_info(Base):
    __tablename__ = "user_info"

    id = Column(Integer , primary_key= True , index = True)

    username = Column(String(10) , unique=True )

    email = Column(String(20) , unique= True)

    password = Column(String(255), unique= True)


