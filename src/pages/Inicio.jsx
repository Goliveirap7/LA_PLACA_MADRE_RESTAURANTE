import { useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import './Inicio.css'
export default function Inicio() {
    let promocionesRef = useRef([])
    
    let [resenas, setResenas] = useState([
        {  
        id: "resena1",
        nombre: "Anton Ego",
        cargo: "Crítico Gastronómico",
        estrellas: "★★★★★",
        comentario: "El Lomo Saltado me hizo recordar mi infancia de la forma más pura y emotiva. Una cocina que respeta la tradición pero se atreve a emocionar.",
        avatar: "/anton_ego.png"
        },
        {
        id: "resena2",
        nombre: "Gordon Ramsay",
        cargo: "Chef Internacional",
        estrellas: "★★★★★",
        comentario: "El punto de cocción de la carne en el Wok es simplemente perfecto. Crujiente por fuera, jugoso por dentro. Simplemente sublime.",
        avatar: "/gordon.png"
        },
        {
        id: "resena3",
        nombre: "Adan",
        cargo: "Primer Hombre de la Tierra",
        estrellas: "★★★★★",
        comentario: "El Ceviche es extremadamente fresco. El balance cítrico con el ají limo es la combinación perfecta para un fin de semana con Eva y los niños",
        avatar: "/Adan.png"
        },
        {
        id: "resena4",
        nombre: "Cristiano Ronaldo",
        cargo: "Youtuber y Futbolista",
        estrellas: "★★★★★",
        comentario: "La textura del Ají de Gallina es de otro mundo. Cremosa, cremosa y llena de sabor. Sin duda mi restaurante criollo favorito en Perú. SIIIIIIIIIUUUUUUUU",
        avatar: "/CR7.png"
        }
    ])

        let [indexResena, setIndexResena] = useState(0)
        let [mostrarModal, setMostrarModal] = useState(false)
        let [nuevaResena, setNuevaResena] = useState({
        nombre: '',
        cargo: '',
        estrellas: '★★★★★',
        comentario: '',
        avatar: ''
    })
        let siguienteResena = () => {
            setIndexResena((prev) => (prev + 1) % resenas.length)
        }
        let anteriorResena = () => {
            setIndexResena((prev) => (prev - 1 + resenas.length) % resenas.length)
        }
        let handleInputChange = (e) => {
        let { name, value } = e.target
        setNuevaResena((prev) => ({
        ...prev,
        [name]: value
        }))
    }
        let agregarResena = (e) => {
        e.preventDefault()

        if (!nuevaResena.nombre || !nuevaResena.comentario) {
        alert("Por favor completa al menos el nombre y el comentario.")
        return
        }

        let nuevaEntry = {
        id: Date.now(),
        nombre: nuevaResena.nombre,
        cargo: nuevaResena.cargo || "Comensal",
        estrellas: nuevaResena.estrellas,
        comentario: nuevaResena.comentario,
        avatar: nuevaResena.avatar || `https://thispersondoesnotexist.com/?v=${Date.now()}`
        }

        let resenasActualizadas = [...resenas, nuevaEntry]
        setResenas(resenasActualizadas)
        setIndexResena(resenasActualizadas.length - 1)
        setNuevaResena({ nombre: '', cargo: '', estrellas: '★★★★★', comentario: '', avatar: '' })
        setMostrarModal(false)
    }
    
    useEffect(() => {
    let observer = new IntersectionObserver(
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
                  <ul> <br />
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
                  <ul> <br />
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
                  <ul> <br />
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

        <section id="Resenas" className="seccion-resenas">
          <h2 className="titulo-resenas">LO QUE DICEN NUESTROS CLIENTES</h2>
          
          <div className="contenedor-slider">
            <button className="btn-slider btn-prev" onClick={anteriorResena}>
              &#10094;
            </button>

            <div className="tarjeta-resena">
              <div className="estrellas">{resenas[indexResena]?.estrellas}</div>
              <p className="comentario-resena">"{resenas[indexResena]?.comentario}"</p>
              
              <div className="autor-info">
                <img 
                  src={resenas[indexResena]?.avatar} 
                  alt={resenas[indexResena]?.nombre} 
                  className="avatar-resena" 
                />
                <div>
                  <h4 className="nombre-autor">{resenas[indexResena]?.nombre}</h4>
                  <span className="cargo-autor">{resenas[indexResena]?.cargo}</span>
                </div>
              </div>

              <button 
                className="btn-lapiz-editar" 
                title="Escribir una reseña"
                onClick={() => setMostrarModal(true)}
              >
                ✏️
              </button>
            </div>

            <button className="btn-slider btn-next" onClick={siguienteResena}>
              &#10095;
            </button>
          </div>

          <div className="puntos-slider">
            {resenas.map((resena, i) => (
              <span 
                key={resena.id} 
                className={`punto ${i === indexResena ? 'activo' : ''}`}
                onClick={() => setIndexResena(i)}
              />
            ))}
          </div>
        </section>

        {mostrarModal && (
          <div className="modal-overlay">
            <div className="modal-contenido">
              <h3>Escribir una Reseña</h3>
              <form onSubmit={agregarResena}>
                <div className="grupo-input">
                  <label>Tu Nombre *</label>
                  <input 
                    type="text" 
                    name="nombre" 
                    value={nuevaResena.nombre} 
                    onChange={handleInputChange} 
                    placeholder="Ej. Carlos Mendoza"
                    required 
                  />
                </div>

                <div className="grupo-input">
                  <label>Cargo / Ocupación</label>
                  <input 
                    type="text" 
                    name="cargo" 
                    value={nuevaResena.cargo} 
                    onChange={handleInputChange} 
                    placeholder="Ej. Cliente frecuente / Foodie" 
                  />
                </div>

                <div className="grupo-input">
                  <label>Puntuación</label>
                  <select 
                    name="estrellas" 
                    value={nuevaResena.estrellas} 
                    onChange={handleInputChange}
                  >
                    <option value="★★★★★">★★★★★ (5/5)</option>
                    <option value="★★★★☆">★★★★☆ (4/5)</option>
                    <option value="★★★☆☆">★★★☆☆ (3/5)</option>
                  </select>
                </div>

                <div className="grupo-input">
                  <label>Comentario *</label>
                  <textarea 
                    name="comentario" 
                    rows="3" 
                    value={nuevaResena.comentario} 
                    onChange={handleInputChange} 
                    placeholder="Escribe tu opinión sobre el restaurante..."
                    required
                  />
                </div>

                <div className="grupo-input">
                  <label>URL Foto de Perfil (Opcional)</label>
                  <input 
                    type="url" 
                    name="avatar" 
                    value={nuevaResena.avatar} 
                    onChange={handleInputChange} 
                    placeholder="https://..." 
                  />
                </div>

                <div className="acciones-modal">
                  <button type="button" className="btn-cancelar" onClick={() => setMostrarModal(false)}>
                    Cancelar
                  </button>
                  <button type="submit" className="btn-guardar">
                    Publicar Reseña
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <section id="ubicacion" className="seccion-ubicacion">
  <div className="ubicacion-container">
    
    {/* Columna Izquierda: Información y Horarios */}
    <div className="ubicacion-info">
      <h2>VISÍTANOS</h2>
      <p className="subtitulo-ubicacion">Vive la experiencia culinaria tradicional en el corazón de la ciudad.</p>
      
      <div className="bloque-detalle">
        <h3>📍 Dirección</h3>
        <p>Av. Paseo de la República 170, Centro Histórico de Lima, Perú</p>
      </div>

      <div className="bloque-detalle">
        <h3>🕒 Horarios de Atención</h3>
        <ul className="lista-horarios">
          <li>
            <span>Lunes a Jueves:</span>
            <strong>12:00 PM – 10:00 PM</strong>
          </li>
          <li>
            <span>Viernes y Sábados:</span>
            <strong>12:00 PM – 11:30 PM</strong>
          </li>
          <li>
            <span>Domingos y Feriados:</span>
            <strong>12:00 PM – 09:00 PM</strong>
          </li>
        </ul>
      </div>

      <div className="bloque-detalle">
        <h3>📞 Contacto & Reservas</h3>
        <p>Central: +51 987 654 321 | reservas@laplacamadre.pe</p>
      </div>
    </div>

    {/* Columna Derecha: Mapa embebido */}
    <div className="ubicacion-mapa">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.6010666386933!2d-77.03797401131303!3d-12.057660294475928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c6d103eef1%3A0x21e996eeb5d06b7d!2sSheraton%20Lima%20Historic%20Center!5e0!3m2!1ses-419!2spe!4v1786731082086!5m2!1ses-419!2spe" 
        title="Ubicación La Placa Madre"
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>

  </div>
</section>
    </main>
    </>
  )
}

