import bcrypt
from flask import make_response


import models.user_model
import dtos.user_dto
import services.token_service


def register(email: str, password: str):
    if models.user_model.find_one(email=email):
        raise Exception("User already exists")
    hash_password = bcrypt.hashpw(
        password.encode(),
        bcrypt.gensalt()
    )
    user = models.user_model.create(email=email, password=hash_password)
    user_dto = dtos.user_dto.UserDTO(user)
    tokens_pair = services.token_service.generate_tokens(user_dto)
    services.token_service.save_refresh_token(user_dto.id, tokens_pair["refresh"])
    response = make_response({
        "access_token": tokens_pair["access"],
        "refresh_token": tokens_pair["refresh"],
    })
    response.set_cookie("refresh_token", tokens_pair["refresh"], httponly=True)
    return response


def login(email: str, password: str):
    user = models.user_model.find_one(email=email)
    if not user:
        raise Exception("User is not defined")
    if not bcrypt.checkpw(password.encode(), user["password"].encode()):
        return "Wrong credentials"
    user_dto = dtos.user_dto.UserDTO(user)
    tokens_pair = services.token_service.generate_tokens(user_dto)
    services.token_service.save_refresh_token(user_dto.id, tokens_pair["refresh"])
    return {
        "access_token": tokens_pair["access"],
        "refresh_token": tokens_pair["refresh"],
    }
