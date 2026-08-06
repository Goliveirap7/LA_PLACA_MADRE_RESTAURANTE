import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer'

import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Cartas from './pages/Cartas'
import Reservas from './pages/Reservas'
import Delivery from './pages/Delivery'

import './index.css'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cartas" element={<Cartas />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>

      <Footer />      
    </BrowserRouter>
  )
}

export default App

