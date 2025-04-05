import React from 'react'
import TopNav from '../components/TopNav'
import Slider from '../components/Slider'
import Cars from '../components/Cars'
const Home = () => {
  return (
    <>
        <div className='w-[1660px] h-screen'>
            <TopNav/>

            {/* main content */}
            <Slider/>
            <Cars/>
            

        </div>
    </>
  )
}

export default Home