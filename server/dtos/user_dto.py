class UserDTO:
    def __init__(self, data: dict):
        self.id = data["id"]
        self.email = data["email"]
