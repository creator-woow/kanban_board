from singletons.database import Database


def create(email: str, password: bytes):
    with Database().connection as connection:
        with connection.cursor() as cursor:
            cursor.execute('''
                INSERT INTO Users (email, password)
                VALUES (%(email)s, %(password)s)
                RETURNING *;
            ''', {"email": email, "password": password.decode()})
            return cursor.fetchone()


def find_one(email: str):
    with Database().connection as connection:
        with connection.cursor() as cursor:
            cursor.execute('''
                SELECT * FROM Users
                WHERE email=%(email)s;
            ''', {"email": email})
            return cursor.fetchone()
