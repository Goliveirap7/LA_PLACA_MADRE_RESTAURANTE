import { useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import './Inicio.css'
export default function Inicio() {
    const promocionesRef = useRef([])
    
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }else {
            entry.target.classList.remove('visible')
          }
        })
      },
      { threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
      
    )

    promocionesRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
  return (
    <>
    <header className='header-inicio'>
        <div className='header-hero'>
            <img src="/logo_con_texto.png" alt="Banner de la tienda"/>
        <Link to="/reservas" className="btn-reserva-header">
          RESERVA AQUÍ
        </Link>
        </div>
        
    </header>

    <main>
        <section id="LomoSaltado" className="promocion-destacada" ref={(el) => (promocionesRef.current[0] = el)}>
          <div className="promocion-imagen">
            <img src="/lomo_saltado.jpg" alt="Lomo Saltado"/>
          </div>
          <div className="promocion-contenido">
            <h2>Lomo Saltado</h2>
            <div className="plato-info">
              <p className="descripcion-principal">
                Un verdadero espectáculo de fuego y sabor que rinde homenaje a nuestra herencia. Nuestro lomo saltado fusiona la rica tradición criolla con la intensidad y el ahumado perfecto del wok oriental. Jugosos y tiernos cortes de carne flambeados a alta temperatura, envueltos en una salsa vibrante y servidos sobre una cama de papas doradas ultra crujientes.
              </p>
              <div className="Ingredientes">
                <div className="titulo-opcion"><strong>Ingredientes Principales</strong>
                  <ul>
                    <li>Lomo fino de res</li>
                    <li>Cebolla roja gruesa</li>
                    <li>Tomates frescos</li>
                    <li>Ají amarillo en tiras</li>
                    <li>Sillao (salsa de soya) y vinagre tinto</li>
                  </ul>
                </div>
              </div>
              <div className="seccion-maestros">
                <p className="titulo-chef"><strong>Nuestros maestros de la olla</strong></p>
                <div className="chef-plato">
                  <p className="desc-chef"><strong>Chef Remy </strong> Una rata que sueña con ser un gran chef en París, viajó a Lima y aprendió a preparar el mejor Lomo Saltado del país.</p>
                  <p className="desc-chef"><strong>Chef Alfredo Linguini:</strong> El alma joven de nuestra cocina; con movimientos mágicos y coordinados, le inyecta un toque casero y rebelde a cada plato.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="AjiGallina" className="promocion-destacada invertido" ref={(el) => (promocionesRef.current[1] = el)}>
          <div className="promocion-imagen">
            <img src="/aji_de_gallina.jpg" alt="Ají de Gallina"/>
          </div>
          <div className="promocion-contenido">
            <h2>Ají de Gallina</h2>
            <div className="plato-info">
              <p className="descripcion-principal">
                Un clásico reconfortante que abraza el alma. Una cremosa y suave salsa a base de ají amarillo, pecanas y queso parmesano, bañando tiernas tiras de pechuga de pollo. Acompañado de papas peruanas, huevo duro y aceitunas botija, este plato es la definición del calor de hogar hecho con amor y tradición.
              </p>
              <div className="Ingredientes">
                <div className="titulo-opcion"><strong>Ingredientes Principales</strong>
                  <ul>
                    <li>Pechuga de pollo deshilachada</li>
                    <li>Pasta de ají amarillo</li>
                    <li>Leche evaporada y pan (o galleta)</li>
                    <li>Pecanas molidas</li>
                    <li>Queso parmesano rallado</li>
                  </ul>
                </div>
              </div>
              <div className="seccion-maestros">
            <p className="titulo-chef"><strong>Nuestros maestros de la Olla</strong></p>
            <div className="chef-plato">
                <p className="desc-chef">
                    <strong>Chef Bob Esponja</strong> ADejó temporalmente Fondo de Bikini y viajó hasta Lima para aprender los secretos de las picanterías. Con su inagotable entusiasmo y su fiel espátula, bate la salsa hasta lograr una textura tan cremosa que haría olvidar a cualquiera la fórmula de la Cangreburger.
                </p>
                <p className="desc-chef">
                    <strong>Chef Bob Belcher</strong> Aunque es un maestro de la parrilla, su inmensa pasión por la comida reconfortante asegura que esta crema tenga todo el amor de una receta verdaderamente familiar.
                </p>
            </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Ceviche" className="promocion-destacada" ref={(el) => (promocionesRef.current[2] = el)}>
          <div className="promocion-imagen">
            <img src="/ceviche.jpg" alt="Ceviche"/>
          </div>
          <div className="promocion-contenido">
            <h2>Ceviche</h2>
            <div className="plato-info">
              <p className="descripcion-principal">
                El orgullo de nuestras costas, fresco, vibrante y lleno de vida. Cubos de pescado del día curtidos en el punto exacto de jugo de limón sutil recién exprimido, coronados con cebolla crujiente, ají limo y cilantro. Una explosión cítrica y picante acompañada de camote glaseado y choclo tierno que despertará todos tus sentidos.
              </p>
              <div className="Ingredientes">
                <div className="titulo-opcion"><strong>Ingredientes Principales</strong>
                  <ul>
                    <li>Pescado blanco fresco del día</li>
                    <li>Jugo de limón sutil</li>
                    <li>Cebolla roja en pluma fina</li>
                    <li>Ají limo picado finamente</li>
                    <li>Cilantro fresco</li>
                    <li>Acompañamientos: Choclo y camote</li>
                  </ul>
                </div>
              </div>
              <div className="seccion-maestros">
            <p className="titulo-chef"><strong>Nuestros maestros del Mar</strong></p>
            <div className="chef-plato">
                <p className="desc-chef">
                    <strong>Chef Carmy Berzatto</strong> Aplica su intensidad y precisión milimétrica para que los cortes de pescado sean exactos y el tiempo de curtido sea una obra maestra de la alta cocina.
                </p>
                <p className="desc-chef">
                    <strong>Chef Sanji</strong> El cocinero de los mares por excelencia; trata cada pescado con el máximo respeto y utiliza sus técnicas oceánicas para resaltar la frescura natural de cada ingrediente marino.
                </p>
            </div>
            </div>
            </div>
          </div>
        </section>
    </main>
    </>
  )
}

