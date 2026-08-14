import { useState } from 'react'
import './Nosotros.css'

export default function Nosotros() {
  // Estado para la Galería de Fotos (Modal para ver la imagen ampliada)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)
  const [misionVolteada, setMisionVolteada] = useState(false)
  const [visionVolteada, setVisionVolteada] = useState(false)
  const equipo = [
    {
      nombre: "Chef Linguini",
      cargo: "Chef de Cocina y Coordinador Técnico",
      bio: "Dejó París y las sombras de la crítica gastronómica para dirigir la operativa de La Placa Madre. Destaca por su intuición para los sabores y su gran humildad en los fogones.",
      foto: "/linguini_nosotros.png"
    },
    {
      nombre: "Chef Sanji",
      cargo: "Chef de Pescados y Mariscos / Sommelier.",
      bio: "Cambió la piratería en el Thousand Sunny por la riqueza marina del Pacífico peruano. Aporta elegancia y cortes de mariscos perfectos.",
      foto: "/onep_nosotros.png"
    },
    {
      nombre: "Chef Bob Esponja",
      cargo: "Chef Ejecutivo de Parri-Plancha.",
      bio: "Abandonó el Crustáceo Cascarudo y Fondo de Bikini tras dominar la Cangreburguer. Llegó a Lima aportando una rapidez sobrehumana y precisión impecable en la plancha.",
      foto: "/bob_nosotros.png"
    }
  ]

  const galeria = [
    { id: 1, titulo: "Un sabor familiar", url: "/galeria_nosotros1.jpg" },
    { id: 2, titulo: "Vista Exterior", url: "/galeria_nosotros2.jpg" },
    { id: 3, titulo: "Nuestros chefs en su labor", url: "/galeria_nosotros3.jpg" },
    { id: 4, titulo: "Ambientes limpios", url: "/galeria_nosotros4.jpg" },
    { id: 5, titulo: "Próximo local", url: "/galeria_nosotros5.jpg" },
    { id: 6, titulo: "Disfrutando!", url: "/galeria_nosotros6.jpg" }
  ]

  return (
    <div className="nosotros-container">
       <header className="header-nosotros">
          <img src="/logo_con_texto.png" alt="Logo del Restaurante" />
        </header>

      <main className="nosotros-main">
        <section id="historia" className="seccion-nosotros historia-sec">
          <div className="historia-texto">
            <h2>Nuestra Historia</h2>
            <p className="subtitulo-sec">Un sueño fundado sobre el fuego, el sazón y la familia.</p>
            <p>
              La Placa Madre nació con la visión de rendir homenaje a las picanterías y tabernas tradicionales del Perú, elevándolas a una experiencia gastronómica contemporánea. 
            </p>
            <p>
              Desde nuestros inicios, nos hemos dedicado a rescatar insumos autóctonos —desde el ají limo costero hasta las papas nativas andinas— para transformarlos en platillos que cuentan una historia en cada bocado.
            </p>
          </div>
          <div className="historia-imagen">
            <img src="/periodico.jpg" alt="Historia del restaurante" />
          </div>
        </section>

        <section id="mision" className="seccion-nosotros mision-vision-sec">
          <div className='cajas-mision-vision'>
              <div 
            className={`tarjeta-mv-contenedor ${misionVolteada ? 'volteada' : ''}`}
            onClick={() => setMisionVolteada(!misionVolteada)}
          >
            <div className="tarjeta-mv-inner">
              <div className="cara-frontal">
                <h3>Nuestra Misión</h3>
              </div>
              
              <div className="cara-trasera">
                <p>
                  Ofrecer una propuesta gastronómica autóctona e inolvidable, combinando ingredientes de la más alta calidad con técnicas culinarias impecables y una atención cálida que haga sentir a cada cliente como en casa.
                </p>
              </div>
            </div>
          </div>
          <div 
            className={`tarjeta-mv-contenedor ${visionVolteada ? 'volteada' : ''}`}
            onClick={() => setVisionVolteada(!visionVolteada)}
          >
            <div className="tarjeta-mv-inner">
              <div className="cara-frontal">
                <h3>Nuestra Visión</h3>
              </div>

              <div className="cara-trasera">
                <p>
                  Ser reconocidos como el restaurante referente de cocina peruana de vanguardia, preservando las raíces criollas e innovando constantemente para trascender fronteras culinarias.
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section id="equipo" className="seccion-nosotros equipo-sec">
          <h2>Nuestro Equipo</h2>
          <p className="subtitulo-centrado">Las mentes y manos detrás de cada obra maestra de la carta.</p>
          
          <div className="grid-equipo">
            {equipo.map((miembro, index) => (
              <div key={index} className="tarjeta-equipo">
                <img src={miembro.foto} alt={miembro.nombre} className="foto-equipo" />
                <h3>{miembro.nombre}</h3>
                <span className="cargo-equipo">{miembro.cargo}</span>
                <p className="bio-equipo">{miembro.bio}</p>
              </div>
            ))}
          </div>
        </section>


        <section id="galeria" className="seccion-nosotros galeria-sec">
          <h2>Galería de Fotos</h2>
          <p className="subtitulo-centrado">Un recorrido visual por nuestros ambientes y equipos.</p>
          
          <div className="grid-galeria">
            {galeria.map((item) => (
              <div 
                key={item.id} 
                className="item-galeria" 
                onClick={() => setFotoSeleccionada(item)}
              >
                <img src={item.url} alt={item.titulo} />
                <div className="overlay-galeria">
                  <span>🔍 {item.titulo}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {fotoSeleccionada && (
        <div className="modal-lightbox" onClick={() => setFotoSeleccionada(null)}>
          <div className="contenido-lightbox" onClick={(e) => e.stopPropagation()}>
            <img src={fotoSeleccionada.url} alt={fotoSeleccionada.titulo} />
            <p>{fotoSeleccionada.titulo}</p>
            <button className="btn-cerrar-lightbox" onClick={() => setFotoSeleccionada(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  )
}