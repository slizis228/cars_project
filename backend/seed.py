from database import get_connection

def seed_data():
    cars = [
        ("BMW X1", 45, "src/assets/car_images/bmwx1.png", 2037, 100),
        ("LAMBORGHINI URUS", 20, "src/assets/car_images/lamborghini_urus.png", 5983, 500),
        ("VOLVO XC90", 10, "src/assets/car_images/volvo_xc90.png", 3071, 120),
        ("JEEP RUBICON", 8, "src/assets/car_images/jeep_rubicon.png", 1942, 150),
        ("ГЕЛИК", 12, "src/assets/car_images/mercedes_benz.png", 4178, 350),
        ("PORSCHE 911", 5, "src/assets/car_images/porshe911.png", 2803, 450),
        ("AUDI Q7", 18, "src/assets/audi_q7.png", 2900, 220),
        ("MERCEDES-BENZ G-WAGON", 25, "src/assets/mercedes_g_wagon.png", 3400, 450),
        ("TESLA MODEL X", 30, "src/assets/tesla_model_x.png", 5000, 600),
        ("FERRARI 488 GTB", 35, "src/assets/ferrari_488_gtb.png", 4100, 800),
        ("BMW M4", 15, "src/assets/bmw_m4.png", 2200, 350),
        ("JAGUAR F-PACE", 10, "src/assets/jaguar_f_pace.png", 1800, 400),
        ("RANGE ROVER SPORT", 40, "src/assets/range_rover_sport.png", 5000, 550),
        ("AUDI R8", 28, "src/assets/audi_r8.png", 4500, 700),
        ("PORSCHE CAYENNE", 12, "src/assets/porsche_cayenne.png", 3800, 500),
        ("MITSUBISHI OUTLANDER", 7, "src/assets/mitsubishi_outlander.png", 2500, 120),
        ("HONDA CR-V", 6, "src/assets/honda_crv.png", 3000, 150),
        ("TOYOTA LAND CRUISER", 22, "src/assets/toyota_land_cruiser.png", 4300, 350),
        ("NISSAN PATROL", 18, "src/assets/nissan_patrol.png", 2000, 320),
        ("FORD MUSTANG", 33, "src/assets/ford_mustang.png", 4000, 700),
        ("CHEVROLET CAMARO", 27, "src/assets/chevrolet_camaro.png", 3500, 650)
    ]


    conn = get_connection()
    cursor = conn.cursor()
    cursor.executemany("INSERT INTO cars (name, choice_percentage, image_url, reposts, rental_price_per_hour) VALUES (?, ?, ?, ?, ?)", cars)
    conn.commit()
    conn.close()
    print("База данных успешно заполнена машинами")

if __name__ == "__main__":
    seed_data()
