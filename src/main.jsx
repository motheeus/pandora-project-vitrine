import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./styles/index.css"

import LandingPage from './pages/LandingPage/LandingPage.jsx'
import SearchPage from './pages/SearchPage/SearchPage.jsx'
import { CarPage } from './pages/CarPage/CarPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="search" element={<SearchPage/>} />
        <Route path="estoque" element={<SearchPage/>} />
        <Route path="carro" element={<CarPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
