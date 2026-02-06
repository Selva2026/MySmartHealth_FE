import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import DashBord from './pages/DashBord'
import Login from './pages/Login'

function App() {
  return (
   <>
   
   <BrowserRouter>

   <Routes>

    <Route path="/" element={<Login/>} />
    <Route path="/regis" element={<Register/>} />
    <Route path="/dash" element={<DashBord/>} />

   </Routes>
   
   
   </BrowserRouter>
   
   </>
  )
}

export default App
