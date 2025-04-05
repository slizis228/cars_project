import React from 'react'
import CarCard from '../components/CarCard'
import { useState,useEffect } from 'react';
import axios from 'axios';

const CarsPage = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
      // Запрос к серверу для получения машин
      axios.get('http://localhost:8000/cars')  // Замените URL на свой сервер
        .then(response => {
          setCars(response.data);  // Ответ содержит массив машин
        })
        .catch(error => {
          console.error("Error fetching cars data:", error);
        });
    }, []);

    return (
    <>
        {/* div with cars cards */}
        <div className=' w-[95%] h-screen  mx-auto grid grid-cols-3 space-y-7 ml-20 overflow-scroll'>
            
            {/* car card */}
            {cars.map((car) => (
                <CarCard
                    key={car.id}  
                    id={car.id}
                    name={car.name}
                    choice_percentage={car.choice_percentage}
                    image_url={car.image_url}
                    reposts={car.reposts}
                    rental_price_per_hour={car.rental_price_per_hour}
                />
            ))}




        </div>
    </>    
  )
}

export default CarsPage