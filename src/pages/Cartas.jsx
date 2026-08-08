import './Cartas.css'

export default function Cartas() {
  let seccionCeviche = {
    descripcion: "1. Ceviche de Pescado Es el plato bandera de la costa. Se elabora con cubos de pescado fresco cocidos en jugo de limón sutil, acompañados de cebolla morada, ají limo y cilantro. Se sirve tradicionalmente frío con guarniciones de camote dulce y choclo (maíz tierno).",
    platos: [
      {
        id: "ceviche-1",
        img: "/carta1/carta1.jpg",
        titulo: "ceviche peruano: La receta tradicional",
        categoria: "plato de entrada",
        precio: "S/ 10.00"
      },
      {
        id: "ceviche-2",
        img: "/carta1/carta2.jpg",
        titulo: "Clásico ceviche de pescado: receta tradicional",
        categoria: "plato de entrada",
        precio: "S/ 12.00"
      },
      {
        id: "ceviche-3",
        img: "/carta1/carta3.jpg",
        titulo: "Ceviche PERUANO - ¡Receta original!",
        categoria: "plato de entrada",
        precio: "S/ 14.00"
      }
    ]
  };

  let seccionCausa = {
    descripcion: "2. Causa Rellena (de Cangrejo o Pollo) Una entrada fría construida con capas de masa de papa amarilla prensada, sazonada con pasta de ají amarillo, aceite y limón. El centro lleva un relleno cremoso mezclado con mayonesa, palta (aguacate) y finas láminas de huevo cocido.",
    platos: [
      {
        id: "causa-1",
        img: "/carta2/entrada1.jpg",
        titulo: "CAUSA DE POLLO",
        categoria: "plato de entrada",
        precio: "S/ 10.00"
      },
      {
        id: "causa-2",
        img: "/carta2/entrada2.jpg",
        titulo: "Receta tradicional de la causa rellena con pulpa de cangrejo",
        categoria: "plato de entrada",
        precio: "S/ 12.00"
      },
      {
        id: "causa-3",
        img: "/carta2/entrada3.jpg",
        titulo: "Causa rellena de pulpa de cangrejo",
        categoria: "plato de entrada",
        precio: "S/ 14.00"
      }
    ]
  };

  let seccionTiradito = {
    descripcion: "3. Tiradito de Pescado Es una variante del ceviche influenciada por la cocina japonesa (corte tipo sashimi). El pescado se corta en finas láminas y no lleva cebolla; se sirve inmediatamente cubierto por una emulsión helada de ají amarillo, rocoto o limón.",
    platos: [
      {
        id: "tiradito-1",
        img: "/carta3/descarga1.jpg",
        titulo: "Tiradito de pescado a la crema de ají amarillo",
        categoria: "plato de entrada",
        precio: "S/ 10.00"
      },
      {
        id: "tiradito-2",
        img: "/carta3/descarga2.jpg",
        titulo: "El tiradito",
        categoria: "plato de entrada",
        precio: "S/ 12.00"
      },
      {
        id: "tiradito-3",
        img: "/carta3/descarga3.jpg",
        titulo: "Tiradito de ají amarillo",
        categoria: "plato de entrada",
        precio: "S/ 14.00"
      }
    ]
  };

  return (
  <>
      <header className='header-cartas'>
        <img src="/logo_con_texto.png" alt="banner_restaurante" />
      </header>
    <main>
      <section>
        <p className="brow">{seccionCeviche.descripcion}</p>
        <div className="container">
          {seccionCeviche.platos.map((plato) => (
            <div className="carta" key={plato.id} id={plato.id}>
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
            <div className="carta" key={plato.id} id={plato.id}>
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
            <div className="carta" key={plato.id} id={plato.id}>
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
    </main>
    </> 
  );
}