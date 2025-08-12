from datetime import datetime, timezone
from typing import Dict, Optional
import json
import os

# File to store tokens
TOKEN_STORE_PATH = "backend/token_store.json"

class TokenStore:
    def __init__(self):
        self._tokens: Dict[str, Dict] = {}
        self._load_tokens()

    def _load_tokens(self) -> None:
        """Load tokens from file if it exists"""
        if os.path.exists(TOKEN_STORE_PATH):
            try:
                with open(TOKEN_STORE_PATH, 'r') as f:
                    self._tokens = json.load(f)
            except:
                self._tokens = {}

    def _save_tokens(self) -> None:
        """Save tokens to file"""
        os.makedirs(os.path.dirname(TOKEN_STORE_PATH), exist_ok=True)
        with open(TOKEN_STORE_PATH, 'w') as f:
            json.dump(self._tokens, f)

    def add_token(self, token: str, expires_at: datetime) -> None:
        """Add a new token with expiry"""
        self._tokens[token] = {
            "expires_at": expires_at.isoformat(),
            "revoked": False
        }
        self._save_tokens()

    def is_token_active(self, token: str) -> bool:
        """Check if token exists and is not expired or revoked"""
        token_data = self._tokens.get(token)
        if not token_data:
            return False
        
        if token_data.get("revoked", False):
            return False

        expires_at = datetime.fromisoformat(token_data["expires_at"])
        if expires_at < datetime.now(timezone.utc):
            return False

        return True

    def revoke_token(self, token: str) -> None:
        """Mark a token as revoked"""
        if token in self._tokens:
            self._tokens[token]["revoked"] = True
            self._save_tokens()

    def cleanup_expired(self) -> None:
        """Remove expired tokens"""
        now = datetime.now(timezone.utc)
        active_tokens = {}
        for token, data in self._tokens.items():
            expires_at = datetime.fromisoformat(data["expires_at"])
            if expires_at > now and not data.get("revoked", False):
                active_tokens[token] = data
        
        self._tokens = active_tokens
        self._save_tokens()

# Global instance
_token_store: Optional[TokenStore] = None

def get_token_store() -> TokenStore:
    global _token_store
    if _token_store is None:
        _token_store = TokenStore()
    return _token_store

# Convenience functions
def add_token(token: str, expires_at: datetime) -> None:
    get_token_store().add_token(token, expires_at)

def is_token_active(token: str) -> bool:
    return get_token_store().is_token_active(token)

def revoke_token(token: str) -> None:
    get_token_store().revoke_token(token)

def cleanup_expired_tokens() -> None:
    get_token_store().cleanup_expired()