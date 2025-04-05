import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
const CarDetailPage = () => {
    const { name } = useParams(); 
    const [carDetails, setCarDetails] = useState();

    useEffect(() => {
        axios
          .get(`http://localhost:8000/cars/${name}`)
          .then((response) => {
            setCarDetails(response.data); 
          })
          .catch((error) => {
            console.error('Error fetching car details:', error);
          });
      }, [name]);

    if (!carDetails) {
        
        return <div>Loading...</div>;
    }
  return (
    <>
        <div className="w-[80%] mx-auto p-6">
        <h1 className="font-bold text-3xl">{name}</h1>
        <div className="flex flex-col md:flex-row items-center space-x-6">
            <div className="w-[275px] h-[150px]">
            <img
                src={carDetails.image_url}
                alt={carDetails.name}
                className="w-full h-full object-contain"
            />
            </div>
            <div className="flex flex-col space-y-4">
            <p className="text-lg">Choice Percentage: {carDetails.choice_percentage}%</p>
            <p className="text-lg">Reposts: {carDetails.reposts}k</p>
            <p className="text-lg">Price per Hour: ${carDetails.rental_price_per_hour}/h</p>
            </div>
        </div>
        </div>
    
    </>
  )
}

export default CarDetailPage