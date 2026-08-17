import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Cartas.css'; // Ajusta la ruta según la ubicación de tu CSS

export default function Cartas() {
  const [categoriaActiva, setCategoriaActiva] = useState('entradas');
  const location = useLocation(); // Hook para escuchar cambios en la URL (incluyendo el hash)

  useEffect(() => {
    // Convierte el hash a minúsculas para evitar problemas de mayúsculas/minúsculas
    const hash = location.hash.toLowerCase();

    if (hash === '#platosfuertes' || hash === '#platos-fuertes') {
      setCategoriaActiva('fuertes');
    } else {
      setCategoriaActiva('entradas');
    }
  }, [location]); // Se ejecuta cada vez que cambia la URL o el hash

  // DATOS DE ENTRADAS
  let seccionCeviche = {
    descripcion:
      "1. Ceviche de Pescado Es el plato bandera de la costa. Se elabora con cubos de pescado fresco cocidos en jugo de limón sutil, acompañados de cebolla morada, ají limo y cilantro.",
    platos: [
      { id: "ceviche-1", img: "/carta1/carta1.jpg", titulo: "Ceviche peruano: La receta tradicional", categoria: "plato de entrada", precio: "S/ 10.00" },
      { id: "ceviche-2", img: "/carta1/carta2.jpg", titulo: "Clásico ceviche de pescado", categoria: "plato de entrada", precio: "S/ 12.00" },
      { id: "ceviche-3", img: "/carta1/carta3.jpg", titulo: "Ceviche PERUANO - ¡Receta original!", categoria: "plato de entrada", precio: "S/ 14.00" }
    ]
  };

  let seccionCausa = {
    descripcion:
      "2. Causa Rellena (de Cangrejo o Pollo) Una entrada fría construida con capas de masa de papa amarilla prensada, sazonada con pasta de ají amarillo, aceite y limón.",
    platos: [
      { id: "causa-1", img: "/carta2/entrada1.jpg", titulo: "CAUSA DE POLLO", categoria: "plato de entrada", precio: "S/ 10.00" },
      { id: "causa-2", img: "/carta2/entrada2.jpg", titulo: "Receta tradicional de causa rellena", categoria: "plato de entrada", precio: "S/ 12.00" },
      { id: "causa-3", img: "/carta2/entrada3.jpg", titulo: "Causa rellena de pulpa de cangrejo", categoria: "plato de entrada", precio: "S/ 14.00" }
    ]
  };

  let seccionTiradito = {
    descripcion:
      "3. Tiradito de Pescado Es una variante del ceviche influenciada por la cocina japonesa. El pescado se corta en finas láminas y se sirve cubierto por una emulsión de ají.",
    platos: [
      { id: "tiradito-1", img: "/carta3/descarga1.jpg", titulo: "Tiradito a la crema de ají amarillo", categoria: "plato de entrada", precio: "S/ 10.00" },
      { id: "tiradito-2", img: "/carta3/descarga2.jpg", titulo: "El tiradito", categoria: "plato de entrada", precio: "S/ 12.00" },
      { id: "tiradito-3", img: "/carta3/descarga3.jpg", titulo: "Tiradito de ají amarillo", categoria: "plato de entrada", precio: "S/ 14.00" }
    ]
  };

  // DATOS DE PLATOS FUERTES
  let seccionPlatosFuertes1 = [
    { id: "pf-1", img: "/platos fuertes/ceviche-con-leche-de-tigre-2.jpg", titulo: "Cebiche de Pescado", descripcion: "Consiste en trozos de pescado fresco marinado en jugo puro de limón, sazonados al instante con sal, ají limo y cebolla roja.", precio: "S/ 45.00" },
    { id: "pf-2", img: "/platos fuertes/210-imagen-106565112021.jpg", titulo: "Arroz con Mariscos", descripcion: "Un plato caliente donde el arroz se cocina en un concentrado de mariscos con aderezo de ají amarillo y chicha de jora.", precio: "S/ 48.00" },
    { id: "pf-3", img: "/platos fuertes/lomo saltado.jpg", titulo: "Lomo Saltado", descripcion: "El rey de la fusión chino-peruana. Se prepara salteando tiras de lomo de res a fuego alto en un wok con cebolla, tomate y ají amarillo.", precio: "S/ 50.00" }
  ];

  let seccionPlatosFuertes2 = [
    { id: "pf-4", img: "/platos fuertes/jaleamixta.jpg", titulo: "Jalea Mixta", descripcion: "Pescado y mariscos variados rebozados y fritos a la perfección. Se sirve montado sobre una cama de yucas fritas con salsa criolla.", precio: "S/ 55.00" },
    { id: "pf-5", img: "/platos fuertes/seco de cabrito.webp", titulo: "Seco de Cabrito con Frijoles", descripcion: "Tierno guiso de cabrito macerado en chicha de jora y culantro, cocido a fuego lento. Se acompaña con frijoles cremosos.", precio: "S/ 48.00" },
    { id: "pf-6", img: "/platos fuertes/Aji-gallina.jpg", titulo: "Ají de Gallina", descripcion: "Guiso criollo hecho con pechuga de gallina deshilachada en una crema espesa a base de ají amarillo, pan remojado y leche.", precio: "S/ 40.00" }
  ];

  let seccionPlatosFuertes3 = [
    { id: "pf-7", img: "/platos fuertes/pescado-a-lo-macho-ajustada-web.jpg", titulo: "Pescado a lo Macho", descripcion: "Filete de pescado frito bañado en una salsa cremosa y picante de mariscos, acompañado de arroz blanco.", precio: "S/ 55.00" },
    { id: "pf-8", img: "/platos fuertes/arroz con pato.jpg", titulo: "Arroz con Pato a la Chiclayana", descripcion: "Arroz cocinado con culantro licuado, chicha de jora y cerveza negra, servido con una presa de pato jugosa.", precio: "S/ 52.00" },
    { id: "pf-9", img: "/platos fuertes/escabeche-de-pescado_800x534.webp", titulo: "Escabeche de Pescado", descripcion: "Filete de pescado frito bañado en salsa de cebolla y ají amarillo cocidos en vinagre y ají panca.", precio: "S/ 42.00" }
  ];

  return (
    <>
      <header className="header-cartas"></header>

      <main>
        {/* VISTA 1: ENTRADAS */}
        {categoriaActiva === 'entradas' && (
          <div className="vista-entradas">
            <section>
              <p className="brow">{seccionCeviche.descripcion}</p>
              <div className="container">
                {seccionCeviche.platos.map((plato) => (
                  <div className="carta" key={plato.id}>
                    <img src={plato.img} alt={plato.titulo} />
                    <h3>{plato.titulo}</h3>
                    <p>{plato.categoria}</p>
                    <div className="precio">
                      <p>{plato.precio}</p>
                      <button>
                        <i className="fa-solid fa-cart-arrow-down fa-xl" style={{ color: '#ffffff' }}></i>
                        Agregar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="brow">{seccionCausa.descripcion}</p>
              <div className="container1">
                {seccionCausa.platos.map((plato) => (
                  <div className="carta" key={plato.id}>
                    <img src={plato.img} alt={plato.titulo} />
                    <h3>{plato.titulo}</h3>
                    <p>{plato.categoria}</p>
                    <div className="precio">
                      <p>{plato.precio}</p>
                      <button>
                        <i className="fa-solid fa-cart-arrow-down fa-xl" style={{ color: '#ffffff' }}></i>
                        Agregar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="brow">{seccionTiradito.descripcion}</p>
              <div className="container2">
                {seccionTiradito.platos.map((plato) => (
                  <div className="carta" key={plato.id}>
                    <img src={plato.img} alt={plato.titulo} />
                    <h3>{plato.titulo}</h3>
                    <p>{plato.categoria}</p>
                    <div className="precio">
                      <p>{plato.precio}</p>
                      <button>
                        <i className="fa-solid fa-cart-arrow-down fa-xl" style={{ color: '#ffffff' }}></i>
                        Agregar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* VISTA 2: PLATOS FUERTES */}
        {categoriaActiva === 'fuertes' && (
          <div className="vista-fuertes" id="platos-fuertes">
            <section>
              <div className="container">
                {seccionPlatosFuertes1.map((plato) => (
                  <div className="carta" key={plato.id}>
                    <img src={plato.img} alt={plato.titulo} />
                    <h3>{plato.titulo}</h3>
                    <p>{plato.descripcion}</p>
                    <br />
                    <div className="precio">
                      <p>{plato.precio}</p>
                      <button>
                        <i className="fa-solid fa-cart-arrow-down fa-xl" style={{ color: '#ffffff' }}></i>
                        Agregar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="container1">
                {seccionPlatosFuertes2.map((plato) => (
                  <div className="carta" key={plato.id}>
                    <img src={plato.img} alt={plato.titulo} />
                    <h3>{plato.titulo}</h3>
                    <p>{plato.descripcion}</p>
                    <br />
                    <div className="precio">
                      <p>{plato.precio}</p>
                      <button>
                        <i className="fa-solid fa-cart-arrow-down fa-xl" style={{ color: '#ffffff' }}></i>
                        Agregar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="container2">
                {seccionPlatosFuertes3.map((plato) => (
                  <div className="carta" key={plato.id}>
                    <img src={plato.img} alt={plato.titulo} />
                    <h3>{plato.titulo}</h3>
                    <p>{plato.descripcion}</p>
                    <br />
                    <div className="precio">
                      <p>{plato.precio}</p>
                      <button>
                        <i className="fa-solid fa-cart-arrow-down fa-xl" style={{ color: '#ffffff' }}></i>
                        Agregar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>
    </>
  );
}