import React from 'react'
import { useState,useEffect } from 'react';
import { RiLoopLeftLine } from "react-icons/ri";
import { SlLoop } from "react-icons/sl";
import { RiSettings2Line } from "react-icons/ri";
import { IoFlashOutline } from "react-icons/io5";
import axios from 'axios';


const Cars = () => {
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
            {cars.map((car) => (
                <div key={car.id} className=" ">
                    {/* car card */}
                    <div className="flex flex-col space-y-2  w-[418px] h-[248px] p-4 items-center rounded-xl shadow-2xl">
                    <div className="flex flex-row items-center space-x-2">
                        <RiLoopLeftLine size={25} />
                        <h2 className="font-bold text-xl">{car.choice_percentage}% Recomended</h2>
                    </div>

                    <div className=" w-[275px] h-[123px]">
                        <img src={car.image_url} alt={car.name} className="w-full h-full object-contain scale-110" />
                    </div>

                    <div>
                        <h1 className="font-bold text-2xl">{car.name}</h1>
                        <div className="flex flex-row text-[#72767c] justify-between w-[275px] ">
                        {/* icon's list */}
                        <ul className="flex flex-row items-center font-semibold space-x-3.5 ">
                            <li><SlLoop size={20} /></li>
                            <li>{car.reposts}k</li>
                            <li><RiSettings2Line size={20} /></li>
                            <li><IoFlashOutline size={20} /></li>
                        </ul>

                        <p className="font-semibold">${car.rental_price_per_hour}/h</p>
                        </div>
                    </div>
                    </div>
                </div>
            ))}




        </div>
    
    </>
  )
}

export default Cars