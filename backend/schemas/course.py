from datetime import datetime

from pydantic import BaseModel, Field
from pydantic import ConfigDict


class CourseCreate(BaseModel):
    title: str = Field(min_length=1, max_length=200)
    description: str = Field(min_length=1)
    level: str = Field(min_length=1, max_length=50)


class CourseOut(BaseModel):
    id: int
    title: str
    description: str
    level: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True) 