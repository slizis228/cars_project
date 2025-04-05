import React from 'react'
import { useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import { TbSteeringWheel } from "react-icons/tb";
import { LuCarFront } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isActive,setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(true)
  }

  return (
    <>
    {/* left navbar */}
    <div className='relative  w-[248px] h-screen p-5 shadow-2xl'>
        <div className='flex flex-col space-y-10'>

          {/* logo */}
          <div className='absolute top-[25px]  flex flex-row  items-center space-x-3'>
            {/* logo */}
            <div className='w-[30px] h-[30px] bg-[#a162f7] rounded-lg my-auto mt-2'></div>
            <Link to="/" className='font-bold text-4xl text-[#1f2128]'>caradver</Link>
          </div>

          {/* menu */}
          <div className='absolute top-[100px]  w-[174px] h-[210px] '>
            <ul className='space-y-5'>
              <Link className='bg-gray-200 flex flex-row rounded-md w-[174px] h-[34px] text-xl text-[#5f6165] font-semibold items-center cursor-pointer'><RxDashboard color='#5f6165' size={25} className='mx-2'/> Dashboard </Link>
              <Link className='flex flex-row rounded-md w-[174px] h-[34px] text-xl text-[#5f6165] font-semibold items-center cursor-pointer'><TbSteeringWheel color='#5f6165' size={25} className='mx-2'/>Assets </Link>
              <Link onClick={handleClick} to="/cars" className='flex flex-row rounded-md w-[174px] h-[34px] text-xl text-[#5f6165] font-semibold items-center cursor-pointer'><LuCarFront color='#5f6165' size={25} className='mx-2'/> Booking </Link>
              <Link className='flex flex-row rounded-md w-[174px] h-[34px] text-xl text-[#5f6165] font-semibold items-center cursor-pointer'><MdOutlineShoppingBag color='#5f6165' size={25} className='mx-2'/> Sell Cars </Link>
              <Link className='flex flex-row rounded-md w-[174px] h-[34px] text-xl text-[#5f6165] font-semibold items-center cursor-pointer'><MdOutlineMiscellaneousServices color='#5f6165' size={25} className='mx-2'/> Services </Link>

            </ul>
          </div>
        </div>

        {/* bottom menu */}
        <div className='absolute bottom-[50px] flex flex-col justify-between w-[174px] h-[92px] '>

          <div className=' w-[174px] h-[34px] flex flex-row p-2 items-center space-x-2  cursor-pointer'>
            <IoSettingsOutline size={21} color='#5f6165'  />
            <h1 className='text-xl font-semibold text-[#5f6165]'>Settings</h1>
          </div>

          <div className=' w-[174px] h-[34px] flex flex-row p-2 items-center space-x-2 cursor-pointer'>
            <BiLogOut size={21} color='#5f6165'/>
            <h1 className='text-xl font-semibold text-[#5f6165]'>Log out</h1>
          </div>

        </div>

    </div>
    </>
  )
}

export default Nav