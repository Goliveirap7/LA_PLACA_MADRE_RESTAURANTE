import { Link } from 'react-router-dom'

import './Navbar.css'
export default function Navbar() {
  return (
    <nav>
      <div className="menu">
        <ul>
          <li><Link to="/">INICIO</Link></li>
          
          <li>
            <Link to="/nosotros">NOSOTROS</Link>
            <ul>
              <li><Link to="/nosotros">Nuestra Historia</Link></li>
              <li><Link to="/nosotros">Misión y Visión</Link></li>
              <li><Link to="/nosotros">Nuestro Equipo</Link></li>
            </ul>
          </li>
          
          <li>
             <Link to="/cartas">CARTAS</Link>
             <ul>
                 <li><Link to="/cartas">Entradas</Link></li>
                 <li><Link to="/cartas">Platos Fuertes</Link></li>
             </ul>
          </li>
          
          <li><Link to="/reservas">RESERVAS</Link>
            <ul>
                <a href="#">Separa tu reserva</a>
            </ul>
          </li>
          <li><Link to="/delivery">DELIVERY</Link>
            <ul>
              <li><Link to="/delivery">Zona de Cobertura</Link></li>
              <li><Link to="/delivery">Formulario de Pedidos</Link></li>
            </ul>              
          </li>
        </ul>
      </div>
    </nav>
  )
}