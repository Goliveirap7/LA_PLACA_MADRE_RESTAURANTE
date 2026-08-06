import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Footer from './componentes/Footer'
import Navbar from './componentes/Navbar'
import Inicio from './pages/inicio'


import './index.css'
import './pages/Inicio.css'
import './componentes/Navbar.css'
import './componentes/Footer.css'
import './App.css';

function App() {
  return(
  <>
      <Navbar />
      <Inicio />
      <Footer />      

      </>
      )
}

export default App

