from fastapi import Depends, HTTPException, status

from backend.auth.security import get_current_user
from backend.config import ADMIN_EMAILS
from backend.models.user import User


def require_admin(current_user: User = Depends(get_current_user)) -> User:
    if current_user.email.lower() not in ADMIN_EMAILS:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Admin access required")
    return current_user 