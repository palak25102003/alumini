import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import { Toaster } from 'react-hot-toast'
function Router() {

  const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('userToken') !== null;

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: '#4ade80',
              color: 'white',
            },
          },
          error: {
            style: {
              background: '#f87171',
              color: 'white',
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default Router