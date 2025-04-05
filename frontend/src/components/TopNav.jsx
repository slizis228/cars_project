import React from 'react'
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { GoBell } from "react-icons/go";

const TopNav = () => {
  return (
    <>
        {/* seach menu and top navbar */}
        <div className='relative flex flex-row h-[78px] px-[31px] py-[15px] shadow-xl rounded-md'>
          {/* search */}
          <div className='absolute left-[40px] bg-[#f5f4f6] w-[358px] h-[46px] flex flex-row text-[#7c7c8d] items-center px-[14px] py-[12px] space-x-3 rounded-lg'>
              <PiMagnifyingGlassBold color='#7c7c8d' size={25}/>
              <input type="text" placeholder='Search or type' className='text-[#7c7c8d] font-semibold h-[46px] focus:outline-none focus:ring-0 focus:border-transparent'/>
          </div>

        
          
          {/* account and notifications*/}
          <div className='absolute right-[40px] flex flex-row justify-between w-[107px] h-[48px] items-center my-auto'>
              <GoBell size={25} color='#72767c'/>
              {/* account avatar(instead there is a bg colored div) */}
              <div className='w-[48px] h-[48px] rounded-full bg-orange-300'></div>
          </div>

        </div>
    </>
  )
}

export default TopNav