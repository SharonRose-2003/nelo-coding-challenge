import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import './index.css'

function PrivateRoute({ children }) {
  const user = sessionStorage.getItem('user')
  return user ? children : <Navigate to="/login" />
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
