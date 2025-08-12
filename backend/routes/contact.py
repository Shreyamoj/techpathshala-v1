from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from backend.auth.admin import require_admin
from backend.database.connection import get_db
from backend.models.contact_message import ContactMessage
from backend.schemas.contact import ContactCreate, ContactOut

router = APIRouter(prefix="/contact", tags=["contact"])


@router.post("/", response_model=ContactOut)
def submit_contact(payload: ContactCreate, db: Session = Depends(get_db)):
    message = ContactMessage(name=payload.name, email=payload.email, message=payload.message)
    db.add(message)
    db.commit()
    db.refresh(message)
    return message


@router.get("/", response_model=list[ContactOut])
def list_contacts(db: Session = Depends(get_db), _: None = Depends(require_admin)):
    messages = db.query(ContactMessage).order_by(ContactMessage.created_at.desc()).all()
    return messages 