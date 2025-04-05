import React from 'react'
import { RiLoopLeftLine } from "react-icons/ri";
import { SlLoop } from "react-icons/sl";
import { RiSettings2Line } from "react-icons/ri";
import { IoFlashOutline } from "react-icons/io5";

const CarCard = ({id,name,choice_percentage,image_url,reposts,rental_price_per_hour}) => {
  return (
    <div key={id} className=" ">
        {/* car card */}
        <div className="flex flex-col space-y-2  w-[418px] h-[248px] p-4 items-center rounded-xl shadow-2xl">
        <div className="flex flex-row items-center space-x-2">
            <RiLoopLeftLine size={25} />
            <h2 className="font-bold text-xl">{choice_percentage}% Recomended</h2>
        </div>

        <div className=" w-[275px] h-[123px]">
            <img src={image_url} alt={name} className="w-full h-full object-contain scale-110" />
        </div>

        <div>
            <h1 className="font-bold text-2xl">{name}</h1>
            <div className="flex flex-row text-[#72767c] justify-between w-[275px] ">
            {/* icon's list */}
            <ul className="flex flex-row items-center font-semibold space-x-3.5 ">
                <li><SlLoop size={20} /></li>
                <li>{reposts}k</li>
                <li><RiSettings2Line size={20} /></li>
                <li><IoFlashOutline size={20} /></li>
            </ul>

            <p className="font-semibold">${rental_price_per_hour}/h</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CarCard