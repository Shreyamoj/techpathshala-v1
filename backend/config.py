import os
from typing import List, Set

from dotenv import load_dotenv

# Load variables from .env if present
load_dotenv()

# Core application settings
APP_TITLE: str = os.getenv("APP_TITLE", "TechPathshala API")

# Database
DEFAULT_SQLITE_PATH = "sqlite:///./backend/techpathsala.db"
DATABASE_URL: str = os.getenv("DATABASE_URL", DEFAULT_SQLITE_PATH)

# JWT / Auth
JWT_SECRET_KEY: str = os.getenv("JWT_SECRET_KEY", "CHANGE_ME_SUPER_SECRET")
JWT_ALGORITHM: str = os.getenv("JWT_ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "60"))

# CORS
DEFAULT_ORIGINS = ",".join(
    [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ]
)
FRONTEND_ORIGINS: List[str] = [o.strip() for o in os.getenv("FRONTEND_ORIGINS", DEFAULT_ORIGINS).split(",") if o.strip()]

# Admins
DEFAULT_ADMIN_EMAILS = "admin@techpathshala.com"
ADMIN_EMAILS: Set[str] = {e.strip().lower() for e in os.getenv("ADMIN_EMAILS", DEFAULT_ADMIN_EMAILS).split(",") if e.strip()} 