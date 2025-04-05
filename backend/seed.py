from database import get_connection

def seed_data():
    cars = [
        ("BMW X1", 45, "src/assets/bmwx1.png", 2037, 100),
        ("LAMBORGHINI URUS", 20, "src/assets/lamborghini_urus.png", 5983, 500),
        ("VOLVO XC90", 10, "src/assets/volvo_xc90.png", 3071, 120),
        ("JEEP RUBICON", 8, "src/assets/jeep_rubicon.png", 1942, 150),
        ("ГЕЛИК", 12, "src/assets/mercedes_benz.png", 4178, 350),
        ("PORSCHE 911", 5, "src/assets/porshe911.png", 2803, 450)
    ]

    conn = get_connection()
    cursor = conn.cursor()
    cursor.executemany("INSERT INTO cars (name, choice_percentage, image_url, reposts, rental_price_per_hour) VALUES (?, ?, ?, ?, ?)", cars)
    conn.commit()
    conn.close()
    print("База данных успешно заполнена машинами")

if __name__ == "__main__":
    seed_data()
