import sqlite3
from database import get_connection
from models import Car

def get_all_cars():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM cars")
    cars = cursor.fetchall()
    conn.close()
    return cars

def get_car_by_name(name: str):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM cars WHERE name = ?",(name,))
    cars = cursor.fetchall()
    conn.close()
    return cars

def create_car(car: Car):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO cars (id, name, choice_percentage, image_url, reposts, rental_price_per_hour) 
        VALUES (?, ?, ?, ?, ?, ?)
    """, (
        car.id, car.name, car.choice_percentage, car.image_url, car.reposts, car.rental_price_per_hour
    ))
    conn.commit()
    conn.close()
    return True
    
    
def update_car(car_id: int, car: Car):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
        UPDATE cars 
        SET name = ?, choice_percentage = ?, image_url = ?, reposts = ?, rental_price_per_hour = ? 
        WHERE id = ?
    """, (
        car.name, car.choice_percentage, car.image_url, car.reposts, car.rental_price_per_hour, car_id
    ))
    conn.commit()
    updated = cursor.rowcount > 0  # True, если была обновлена хотя бы одна запись
    conn.close()
    return updated

def delete_car(car_id: int):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM cars WHERE id = ?", (car_id,))
    conn.commit()
    deleted = cursor.rowcount > 0  # True, если запись была удалена
    conn.close()
    return deleted