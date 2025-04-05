import { useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import CarsPage from './pages/CarsPage'
import CarDetailPage from './pages/CarDetailPage'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='flex flex-row justify-between'>
        <BrowserRouter >
          <Nav/>     
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cars" element={<CarsPage/>}/>
            <Route path="/cars/:name" element={<CarDetailPage/>}/>
          </Routes>
        </BrowserRouter>

      </div>
    </>

  )
}

export default App
