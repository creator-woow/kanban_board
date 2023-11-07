from flask import Flask, request
from dotenv import load_dotenv

import controllers.user_controller


load_dotenv("../.env")
app = Flask(__name__)
app.config["APPLICATION_ROOT"] = "/v1"


@app.post('/registration')
def registration_handler():
    return controllers.user_controller.register(
        email=request.form["email"],
        password=request.form["password"]
    )


@app.post('/login')
def login_handler():
    return controllers.user_controller.login(
        email=request.form["email"],
        password=request.form["password"]
    )


if __name__ == "__main__":
    try:
        app.run()
    except Exception as e:
        print(e)

