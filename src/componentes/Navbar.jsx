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
              <li><NavLink to="/nosotros">Nuestra Historia</NavLink></li>
              <li><NavLink to="/nosotros">Misión y Visión</NavLink></li>
              <li><NavLink to="/nosotros">Nuestro Equipo</NavLink></li>
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
              <li><NavLink to="/delivery">Zona de Cobertura</NavLink></li>
              <li><NavLink to="/delivery">Formulario de Pedidos</NavLink></li>
            </ul>              
          </li>
        </ul>
      </div>
    </nav>
  )
}