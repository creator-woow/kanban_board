from singletons.database import Database


def save(user_id: int, token: str):
    with Database().connection as connection:
        with connection.cursor() as cursor:
            cursor.execute('''
                INSERT INTO Refresh_Tokens (user_id, token)
                VALUES (%(user_id)s, %(token)s)
                RETURNING *;
            ''', {"user_id": user_id, "token": token})
            return cursor.fetchone()


def update(user_id: int, token: str):
    with Database().connection as connection:
        with connection.cursor() as cursor:
            cursor.execute('''
               UPDATE Refresh_Tokens
               SET token = %(token)s
               WHERE user_id = %(user_id)s
            ''', {"user_id": user_id, "token": token})


def find_one(user_id: int):
    with Database().connection as connection:
        with connection.cursor() as cursor:
            cursor.execute('''
                SELECT * FROM Refresh_Tokens
                WHERE user_id = %(user_id)s
            ''', {"user_id": user_id})
            return cursor.fetchone()
