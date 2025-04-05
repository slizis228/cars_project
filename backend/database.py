import sqlite3

DATABASE_FILE = "cars.sqlite"

def get_connection():
    conn = sqlite3.connect(DATABASE_FILE)
    conn.row_factory = sqlite3.Row 
    return conn


def initialize_database():
    """Creates the items table"""
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS cars(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        choice_percentage INTEGER ,
        image_url TEXT DEFAULT NULL,
        reposts INTEGER,
        rental_price_per_hour INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    """)
    conn.commit()
    conn.close()
    

initialize_database()
    