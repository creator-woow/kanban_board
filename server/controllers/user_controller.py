import services.user_service


def register(email: str, password: str):
    return services.user_service.register(email=email, password=password)


def login(email: str, password: str):
    return services.user_service.login(email=email, password=password)


def logout():
    return services.user_service.logout()