import { Link, NavLink } from 'react-router-dom'

import './Navbar.css'
export default function Navbar() {
  return (
    <nav>
      <div className="menu">
        <ul>
          <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            INICIO
          </NavLink>
        </li>
          
          <li>
            <NavLink 
            to="/nosotros" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            NOSOTROS
          </NavLink>
            <ul>
              <li><Link to="/nosotros#historia">Nuestra Historia</Link></li>
              <li><Link to="/nosotros#mision">Misión y Visión</Link></li>
              <li><Link to="/nosotros#equipo">Nuestro Equipo</Link></li>
              <li><Link to="/nosotros#galeria">Galería</Link></li>
            </ul>
          </li>
          
          <li>
             <NavLink 
            to="/cartas" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            CARTAS
          </NavLink>
             <ul>
                 <li><Link to="/cartas">Entradas</Link></li>
                 <li><Link to="/cartas">Platos Fuertes</Link></li>
             </ul>
          </li>
          
          <li><NavLink 
            to="/reservas" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            RESERVAS
          </NavLink>
            <ul>
                <a href="#">Separa tu reserva</a>
            </ul>
          </li>
          <li><NavLink 
            to="/delivery" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            DELIVERY
          </NavLink>
            <ul>
              <li><Link to="/delivery#cobertura">Zona de Cobertura</Link></li>
              <li><Link to="/delivery#">Formulario de Pedidos</Link></li>
            </ul>              
          </li>
        </ul>
      </div>
    </nav>
  )
}