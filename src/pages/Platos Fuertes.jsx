import './entrada.css';

function SeccionPlatos({ descripcion, platos, containerClass }) {
  return (
    <section>
      {descripcion && <p className="brow">{descripcion}</p>}
      <div className={containerClass}>
        {platos.map((plato) => (
          <div className="carta" key={plato.id} id={plato.id}>
            <img src={plato.img} alt={plato.titulo} />
            <h3>{plato.titulo}</h3>
            <p>{plato.descripcion}</p>
            <div className="precio">
              <p>{plato.precio}</p>
              <button aria-label={`Agregar ${plato.titulo} al carrito`}>
                <i className="fa-solid fa-cart-arrow-down fa-xl" style={{ color: '#ffffff' }}></i>
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Entrada() {
  const seccionCeviche = {
    descripcion: "1. Ceviche de Pescado...",
    platos: [
      {
        id: "ceviche-1",
        img: "../IMG/Nueva carpeta/ceviche-con-leche-de-tigre-2.jpg",
        titulo: "Cebiche de Pescado",
        descripcion: "Consiste en trozos de pescado fresco marinado en jugo puro de limón...",
        precio: "S/ 45.00"
      },
      {
        id: "ceviche-2",
        img: "../IMG/Nueva carpeta/210-imagen-106565112021.jpg",
        titulo: "Arroz con Mariscos",
        descripcion: "Un plato caliente y muy sabroso donde el arroz se cocina...",
        precio: "S/ 48.00"
      },
      {
        id: "ceviche-3",
        img: "../IMG/Nueva carpeta/lomo saltado.jpg",
        titulo: "Lomo Saltado",
        descripcion: "Es el rey de la fusión chino-peruana...",
        precio: "S/ 50.00"
      }
    ]
  };

  const seccionCausa = {
    descripcion: "2. Jalea Mixta y más...",
    platos: [
      {
        id: "causa-1",
        img: "../IMG/carta2/entrada1.jpg",
        titulo: "Jalea Mixta",
        descripcion: "Un festival de texturas crocantes...",
        precio: "S/ 55.00"
      },
      {
        id: "causa-2",
        img: "../IMG/Nueva carpeta/seco de cabrito.webp",
        titulo: "Seco de Cabrito con Frijoles",
        descripcion: "El plato bandera del norte de la costa...",
        precio: "S/ 48.00"
      },
      {
        id: "causa-3",
        img: "../IMG/Nueva carpeta/Aji-gallina.jpg",
        titulo: "Ají de Gallina",
        descripcion: "Un guiso criollo reconfortante...",
        precio: "S/ 40.00"
      }
    ]
  };

  const seccionTiradito = {
    descripcion: "3. Tiradito de Pescado...",
    platos: [
      {
        id: "tiradito-1",
        img: "../IMG/Nueva carpeta/pescado-a-lo-macho-ajustada-web.jpg",
        titulo: "Pescado a lo Macho",
        descripcion: "Un imponente filete de pescado frito bañado...",
        precio: "S/ 55.00"
      },
      {
        id: "tiradito-2",
        img: "../IMG/Nueva carpeta/arroz con pato.jpg",
        titulo: "Arroz con Pato a la Chiclayana",
        descripcion: "Es el plato principal más célebre del norte...",
        precio: "S/ 52.00"
      },
      {
        id: "tiradito-3",
        img: "../IMG/Nueva carpeta/escabeche-de-pescado_800x534.webp",
        titulo: "Escabeche de Pescado",
        descripcion: "Un plato criollo clásico que se disfruta...",
        precio: "S/ 42.00"
      }
    ]
  };

  return (
    <>
      <nav>
        {/* Aquí puedes mantener tu menú como estaba */}
      </nav>

      <header>
        <img src="../IMG/image_af11eb5f.png" alt="Banner de la tienda" />
      </header>

      <main>
        <SeccionPlatos {...seccionCeviche} containerClass="container" />
        <SeccionPlatos {...seccionCausa} containerClass="container1" />
        <SeccionPlatos {...seccionTiradito} containerClass="container2" />
      </main>

      <footer>
        <hr />
        <p>© 2026 Heladería Artesanal. Todos los derechos reservados.</p>
        <p>Política de privacidad · Términos y condiciones</p>
        <p>Horario de atención: 10:00 AM - 10:00 PM</p>
        <div className="RedesSociales">
          <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram" style={{ color: '#4a3728' }}></i></a>
          <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" style={{ color: '#4a3728' }}></i></a>
          <a href="https://www.tiktok.com/es-419/" target="_blank"><i className="fa-brands fa-tiktok" style={{ color: '#4a3728' }}></i></a>
        </div>
      </footer>
    </>
  );
}