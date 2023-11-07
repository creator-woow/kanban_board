import os
from datetime import datetime

import jwt

import models.token_model

# Consts with time of expiration in seconds for tokens
JWT_EXPIRATION = 60 * 60 * 24
JWT_REFRESH_EXPIRATION = 60 * 60 * 24 * 21


def generate_tokens(user_data):
    current_time = datetime.now().timestamp()
    token_payload = {
        "email": user_data.email,
        "sub": user_data.id,
    }
    access_token = jwt.encode({
        **token_payload,
        "exp": current_time + JWT_EXPIRATION
    }, os.getenv("JWT_SECRET"))
    refresh_token = jwt.encode({
        **token_payload,
        "exp": current_time + JWT_REFRESH_EXPIRATION
    }, os.getenv("JWT_REFRESH_SECRET"))
    return {
        "access": access_token,
        "refresh": refresh_token
    }


def save_refresh_token(user_id: int, token: str):
    if models.token_model.find_one(user_id):
        return models.token_model.update(user_id, token)
    return models.token_model.save(user_id, token)
