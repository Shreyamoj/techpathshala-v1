from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from backend.config import APP_TITLE, FRONTEND_ORIGINS
from backend.database.connection import Base, engine
# Ensure models are imported so tables are created
from backend.models import user as _user_model  # noqa: F401
from backend.models import course as _course_model  # noqa: F401
from backend.models import contact_message as _contact_model  # noqa: F401
from backend.routes.auth import router as auth_router
from backend.routes.courses import router as courses_router
from backend.routes.contact import router as contact_router

app = FastAPI(title=APP_TITLE)

app.add_middleware(
    CORSMiddleware,
    allow_origins=FRONTEND_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup() -> None:
    # Create database tables
    Base.metadata.create_all(bind=engine)
    # Clean up expired tokens
    from backend.auth.token_store import cleanup_expired_tokens
    cleanup_expired_tokens()


app.include_router(auth_router)
app.include_router(courses_router)
app.include_router(contact_router)


@app.get("/ping")
def health_check():
    return {"status": "ok"}

# API Endpoint: /ping (GET) - Health check

class Course(BaseModel):
    id: int
    title: str
    description: str
    image: str

@app.get("/courses")
def get_courses():
    return [
        {
            "id": 1,
            "title": "Python Programming Fundamentals",
            "description": "Learn Python from scratch with fun projects and games.",
            "image": "/static/images/python-course.jpg",
        },
        {
            "id": 2,
            "title": "Web Development Bootcamp",
            "description": "Create beautiful websites from scratch.",
            "image": "/static/images/web-dev-course.jpg",
        },
    ]