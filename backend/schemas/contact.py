from datetime import datetime

from pydantic import BaseModel, EmailStr, Field
from pydantic import ConfigDict


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(min_length=1)


class ContactOut(BaseModel):
    id: int
    name: str
    email: EmailStr
    message: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True) 