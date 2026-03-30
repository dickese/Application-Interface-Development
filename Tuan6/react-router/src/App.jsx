import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div className="" style={{display: 'flex', justifyContent: 'space-between'}}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About us</Link>
        <Link to={"/contact"}>Contact us</Link>
      </div>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Contact/>} path='/contact'/>
      </Routes>
    
    </>
  )
}

export default App
