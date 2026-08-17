import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Cartas.css'; 

export default function Cartas() {
  const [categoriaActiva, setCategoriaActiva] = useState('entradas');
  const [carrito, setCarrito] = useState([]); 
  const location = useLocation(); 

  useEffect(() => {
    const pedidoGuardado = JSON.parse(localStorage.getItem('pedidoDelivery')) || [];
    setCarrito(pedidoGuardado);
  }, []);

  useEffect(() => {
    const hash = location.hash.toLowerCase();
    if (hash === '#platosfuertes' || hash === '#platos-fuertes') {
      setCategoriaActiva('fuertes');
    } else {
      setCategoriaActiva('entradas');
    }
  }, [location]); 

  const agregarAlDelivery = (plato) => {
    const pedidoActual = JSON.parse(localStorage.getItem('pedidoDelivery')) || [];
    const nuevoPedido = [...pedidoActual, plato];
    
    localStorage.setItem('pedidoDelivery', JSON.stringify(nuevoPedido));
    setCarrito(nuevoPedido); 
  };

  const quitarDelDelivery = (platoId) => {
    const pedidoActual = JSON.parse(localStorage.getItem('pedidoDelivery')) || [];
    const index = pedidoActual.findIndex(item => item.id === platoId);
    
    if (index !== -1) {
      pedidoActual.splice(index, 1);
      localStorage.setItem('pedidoDelivery', JSON.stringify(pedidoActual));
      setCarrito(pedidoActual);
    }
  };

  const renderBotonAgregar = (plato) => {
    const cantidad = carrito.filter(item => item.id === plato.id).length;
    
    if (cantidad === 0) {
      return (
        <button onClick={() => agregarAlDelivery(plato)}>
          <i className="fa-solid fa-cart-arrow-down fa-xl" style={{ color: '#ffffff', marginRight: '5px' }}></i>
          Agregar
        </button>
      );
    }

    return (
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#2b2b2b', borderRadius: '5px', overflow: 'hidden' }}>
        <button onClick={() => quitarDelDelivery(plato.id)} style={{ backgroundColor: 'transparent', padding: '8px 15px', color: '#fff', fontSize: '18px', border: 'none', cursor: 'pointer' }}>-</button>
        <span style={{ fontWeight: 'bold', color: '#ffcc00', padding: '0 10px' }}>{cantidad}</span>
        <button onClick={() => agregarAlDelivery(plato)} style={{ backgroundColor: 'transparent', padding: '8px 15px', color: '#fff', fontSize: '18px', border: 'none', cursor: 'pointer' }}>+</button>
      </div>
    );
  };

  let seccionCeviche = {
    descripcion: "1. Ceviche de Pescado Es el plato bandera de la costa...",
    platos: [
      { id: "ceviche-1", img: "/carta1/carta1.jpg", titulo: "Ceviche peruano: La receta tradicional", categoria: "plato de entrada", precio: "S/ 10.00" },
      { id: "ceviche-2", img: "/carta1/carta2.jpg", titulo: "Clásico ceviche de pescado", categoria: "plato de entrada", precio: "S/ 12.00" },
      { id: "ceviche-3", img: "/carta1/carta3.jpg", titulo: "Ceviche PERUANO - ¡Receta original!", categoria: "plato de entrada", precio: "S/ 14.00" }
    ]
  };

  let seccionCausa = {
    descripcion: "2. Causa Rellena (de Cangrejo o Pollo)...",
    platos: [
      { id: "causa-1", img: "/carta2/entrada1.jpg", titulo: "CAUSA DE POLLO", categoria: "plato de entrada", precio: "S/ 10.00" },
      { id: "causa-2", img: "/carta2/entrada2.jpg", titulo: "Receta tradicional de causa rellena", categoria: "plato de entrada", precio: "S/ 12.00" },
      { id: "causa-3", img: "/carta2/entrada3.jpg", titulo: "Causa rellena de pulpa de cangrejo", categoria: "plato de entrada", precio: "S/ 14.00" }
    ]
  };

  let seccionTiradito = {
    descripcion: "3. Tiradito de Pescado Es una variante del ceviche...",
    platos: [
      { id: "tiradito-1", img: "/carta3/descarga1.jpg", titulo: "Tiradito a la crema de ají amarillo", categoria: "plato de entrada", precio: "S/ 10.00" },
      { id: "tiradito-2", img: "/carta3/descarga2.jpg", titulo: "El tiradito", categoria: "plato de entrada", precio: "S/ 12.00" },
      { id: "tiradito-3", img: "/carta3/descarga3.jpg", titulo: "Tiradito de ají amarillo", categoria: "plato de entrada", precio: "S/ 14.00" }
    ]
  };

  let seccionPlatosFuertes1 = [
    { id: "pf-1", img: "/platos fuertes/ceviche-con-leche-de-tigre-2.jpg", titulo: "Cebiche de Pescado", descripcion: "Consiste en trozos de pescado fresco...", precio: "S/ 45.00" },
    { id: "pf-2", img: "/platos fuertes/210-imagen-106565112021.jpg", titulo: "Arroz con Mariscos", descripcion: "Un plato caliente donde el arroz se cocina...", precio: "S/ 48.00" },
    { id: "pf-3", img: "/platos fuertes/lomo saltado.jpg", titulo: "Lomo Saltado", descripcion: "El rey de la fusión chino-peruana...", precio: "S/ 50.00" }
  ];

  let seccionPlatosFuertes2 = [
    { id: "pf-4", img: "/platos fuertes/jaleamixta.jpg", titulo: "Jalea Mixta", descripcion: "Pescado y mariscos variados rebozados...", precio: "S/ 55.00" },
    { id: "pf-5", img: "/platos fuertes/seco de cabrito.webp", titulo: "Seco de Cabrito con Frijoles", descripcion: "Tierno guiso de cabrito macerado...", precio: "S/ 48.00" },
    { id: "pf-6", img: "/platos fuertes/Aji-gallina.jpg", titulo: "Ají de Gallina", descripcion: "Guiso criollo hecho con pechuga de gallina...", precio: "S/ 40.00" }
  ];

  let seccionPlatosFuertes3 = [
    { id: "pf-7", img: "/platos fuertes/pescado-a-lo-macho-ajustada-web.jpg", titulo: "Pescado a lo Macho", descripcion: "Filete de pescado frito bañado...", precio: "S/ 55.00" },
    { id: "pf-8", img: "/platos fuertes/arroz con pato.jpg", titulo: "Arroz con Pato a la Chiclayana", descripcion: "Arroz cocinado con culantro licuado...", precio: "S/ 52.00" },
    { id: "pf-9", img: "/platos fuertes/escabeche-de-pescado_800x534.webp", titulo: "Escabeche de Pescado", descripcion: "Filete de pescado frito bañado en salsa...", precio: "S/ 42.00" }
  ];

  return (
    <>
      <header className="header-cartas"></header>
      <main>
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
                      {renderBotonAgregar(plato)}
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
                      {renderBotonAgregar(plato)}
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
                      {renderBotonAgregar(plato)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

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
                      {renderBotonAgregar(plato)}
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
                      {renderBotonAgregar(plato)}
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
                      {renderBotonAgregar(plato)}
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