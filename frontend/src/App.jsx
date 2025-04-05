import { useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import CarsPage from './pages/CarsPage'
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
          </Routes>
        </BrowserRouter>

      </div>
    </>

  )
}

export default App
