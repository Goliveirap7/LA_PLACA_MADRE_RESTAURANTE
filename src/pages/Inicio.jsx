import './Inicio.css'
export default function Inicio() {
  return (
    <>
    <header className='header-inicio'>
        <img src="/logo_con_texto.png" alt="Banner de la tienda"/>
    </header>

    <main>
        <section id="Inicio" class="Inicio">
            <h2>Promociones</h2>
            <div className="Promociones">
                <div className="tarjeta-plato">
                    <p className="nombre-plato">Lomo Saltado</p>
                    <img src="/lomo_saltado.jpg" alt="Lomo Saltado"/>
                    <a href="#" class="btn-precio">S/. 40.00</a>
                </div>

                <div className="tarjeta-plato">
                    <p className="nombre-plato">Aji de Gallina</p>
                    <img src="/aji_de_gallina.jpg" alt="Ají de gallina"/>
                    <a href="#" class="btn-precio">S/. 40.00</a>
                </div>

                <div className="tarjeta-plato">
                    <p className="nombre-plato">Ceviche</p>
                    <img src="/ceviche.jpg" alt="Ceviche"/>
                    <a href="#" class="btn-precio">S/. 40.00</a>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

