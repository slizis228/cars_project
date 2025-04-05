import React from 'react'
import { useState,useEffect } from 'react';
import CarCard from './CarCard';

import axios from 'axios';



const Cars = ({limit = 6}) => {
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
        <div className=' w-[95%] mx-auto grid grid-cols-3 space-y-6'>
            
            {/* car card */}
            {cars.slice(0,limit).map((car) => (
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

export default Cars