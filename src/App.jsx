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
        <h1>Hello world</h1>
      </div>
    </>

  )
}

export default App
