import os

import psycopg2
import psycopg2.extras

from decorators.singleton import singleton


@singleton
class Database:
    def __init__(self):
        self.connection = psycopg2.connect(
            database=os.getenv("DB_NAME"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            host="database",
            port=os.getenv("DB_PORT"),
            cursor_factory=psycopg2.extras.RealDictCursor
        )
