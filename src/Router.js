import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router
