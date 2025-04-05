import { useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-row justify-between'>
        <Nav/>     
        <Home/>
      </div>
    </>

  )
}

export default App
