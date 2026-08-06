export default function Navbar(){
    return(
        <nav>
        <div className="menu">

            <ul>
                <li><a href="#inicio">INICIO</a></li>

                <li>
                    <a href="#Nosotros">NOSOTROS</a>
                    <ul>
                        <li><a href="#">Nuestra Historia</a></li>
                        <li><a href="#">Misión y Visión</a></li>
                        <li><a href="#">Nuestro Equipo</a></li>
                        <li><a href="#">Galería de Fotos</a></li>
                    </ul>
                </li>
            
                <li>
                    <a href="#perifericos">CARTAS</a>
                    <ul>
                        <li><a href="#">Entrada</a></li>
                        <li><a href="#">Platos fuertes</a></li>
                        <li><a href="#">Postres</a></li>
                        <li><a href="#">Bebidas</a></li>
                    </ul>
                </li>

                <li>
                    <a href="#perifericos">RESERVAS</a>
                    <ul><a href="#">Separa tu reserva</a></ul>
                </li>

                <li>
                    <a href="#perifericos">DELIVERY</a>
                    <ul>
                        <li><a href="#">Zona de Cobertura</a></li>
                        <li><a href="#">Formulario de pedidos</a></li>
                        <li><a href="#">Método de pago</a></li>
                        <li><a href="#">Seguimiento</a></li>
                    </ul>
                </li>
            </ul>
              
        </div>
    </nav>
    )
}