import React, { useState, useEffect } from 'react';
import "./Delivery.css";

export default function Delivery() {
    const [pagina, setPagina] = useState(1);
    const [listaDelivery, setListaDelivery] = useState([]);
   
    const [direccion, setDireccion] = useState("");
    const [zonaValida, setZonaValida] = useState(null);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccionEntrega, setDireccionEntrega] = useState("");
    const [referencia, setReferencia] = useState("");
    const [observaciones, setObservaciones] = useState("");
    const [pago, setPago] = useState("Efectivo");
    const [confirmado, setConfirmado] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const pedidoGuardado = JSON.parse(localStorage.getItem('pedidoDelivery')) || [];
        setListaDelivery(pedidoGuardado);
    }, []);

    const verificarDireccion = () => {
        if (!direccion.trim()) {
            setError("Ingresa una dirección para verificar.");
            setZonaValida(false);
            return;
        }
        setError("");
        setZonaValida(true);
        setDireccionEntrega(direccion);
    };

    const irAPagina2 = () => {
        if (zonaValida !== true) {
            setError("Verifica tu dirección antes de continuar.");
            return;
        }
        if (!nombre.trim() || !telefono.trim() || !direccionEntrega.trim()) {
            setError("Completa nombre, teléfono y dirección de entrega.");
            return;
        }
        setError("");
        setPagina(2);
    };

    const confirmarPedido = () => {
        setConfirmado(true);
    };

    const agregarItem = (plato) => {
        const platoOriginal = { id: plato.id, img: plato.img, titulo: plato.titulo, categoria: plato.categoria, precio: plato.precio };
        const nuevoPedido = [...listaDelivery, platoOriginal];
        localStorage.setItem('pedidoDelivery', JSON.stringify(nuevoPedido));
        setListaDelivery(nuevoPedido);
    };

    const quitarItem = (platoId) => {
        const index = listaDelivery.findIndex(item => item.id === platoId);
        if (index !== -1) {
            const nuevoPedido = [...listaDelivery];
            nuevoPedido.splice(index, 1);
            localStorage.setItem('pedidoDelivery', JSON.stringify(nuevoPedido));
            setListaDelivery(nuevoPedido);
        }
    };

    const extraerPrecio = (precioStr) => {
        return parseFloat(precioStr.replace(/[^\d.-]/g, ''));
    };

    const totalPedido = listaDelivery.reduce((total, item) => total + extraerPrecio(item.precio), 0);

    const pedidoAgrupado = listaDelivery.reduce((acc, item) => {
        const existente = acc.find(p => p.id === item.id);
        if (existente) {
            existente.cantidad += 1;
            existente.subtotal += extraerPrecio(item.precio);
        } else {
            acc.push({ 
                ...item, 
                cantidad: 1, 
                subtotal: extraerPrecio(item.precio) 
            });
        }
        return acc;
    }, []);

    return (
        <>
            <header className="header_delivery"></header>

            <main className="delivery-main">
                
                <div className="delivery-titulo-seccion" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h1>DELIVERYYYYYYYYYYYYYYYYY</h1>
                    <p>Haz tu pedido y recíbelo donde estés</p>
                </div>

                {error && <div className="alerta-error">{error}</div>}

                <div className="delivery-layout">

                    <aside className="columna-carrito caja">
                        <h2>Resumen de tu Pedido</h2>
                        <hr style={{ margin: '10px 0' }}/>
                        
                        {pedidoAgrupado.length === 0 ? (
                            <p>Tu carrito está vacío. ¡Agrega unos platos deliciosos!</p>
                        ) : (
                            <>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {pedidoAgrupado.map((item, index) => (
                                        <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                            
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <button 
                                                    onClick={() => quitarItem(item.id)} 
                                                    style={{ width: '25px', height: '25px', cursor: 'pointer', border: '1px solid #ccc', background: '#fff', borderRadius: '4px', fontWeight: 'bold' }}>-
                                                </button>
                                                
                                                <strong style={{ minWidth: '15px', textAlign: 'center' }}>{item.cantidad}</strong>
                                                
                                                <button 
                                                    onClick={() => agregarItem(item)} 
                                                    style={{ width: '25px', height: '25px', cursor: 'pointer', border: '1px solid #ccc', background: '#fff', borderRadius: '4px', fontWeight: 'bold' }}>+
                                                </button>
                                                
                                                <span style={{ marginLeft: '5px' }}>{item.titulo}</span>
                                            </div>

                                            <span style={{ fontWeight: '500' }}>S/ {item.subtotal.toFixed(2)}</span>
                                        </li>
                                    ))}
                                </ul>
                                <hr style={{ margin: '15px 0' }}/>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2em', fontWeight: 'bold' }}>
                                    <span>TOTAL:</span>
                                    <span>S/ {totalPedido.toFixed(2)}</span>
                                </div>
                            </>
                        )}
                    </aside>

                    <section className="columna-formulario">
                        {pagina === 1 && (
                            <div className="pagina">
                                <div className="caja">
                                    <h2>1. Zona de cobertura</h2>
                                    <p className="subtitulo">¿A qué dirección quieres que llevemos tu pedido?</p>
                                    <div className="fila">
                                        <input type="text" placeholder="Ingresa tu dirección..." value={direccion} onChange={(e) => { setDireccion(e.target.value); setZonaValida(null); }} />
                                        <button type="button" onClick={verificarDireccion}>Verificar</button>
                                    </div>
                                    {zonaValida === true && <p className="ayuda ok">Llegamos a tu zona de entrega.</p>}
                                    {zonaValida === false && <p className="ayuda">Ingresa una dirección válida para verificar.</p>}
                                    {zonaValida === null && <p className="ayuda">Ingresa tu dirección para verificar si llegamos a tu zona.</p>}
                                    <img className="mapa" src="/MapaCobertura.png" alt="Mapa de zona de cobertura" style={{ width: '100%' }} />
                                </div>

                                <div className="caja">
                                    <h2>2. Formulario de pedido</h2>
                                    <div className="grid2">
                                        <div>
                                            <label>Nombre completo</label>
                                            <input type="text" placeholder="Ej. Cristiano Ronaldo" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                        </div>
                                        <div>
                                            <label>Teléfono / WhatsApp</label>
                                            <input type="text" placeholder="Ej. 912 345 678" value={telefono} maxLength={12} onChange={(e) => setTelefono(e.target.value.replace(/[^0-9]/g, ''))} />
                                        </div>
                                        <div>
                                            <label>Dirección de entrega</label>
                                            <input type="text" placeholder="Calle, número..." value={direccionEntrega} onChange={(e) => setDireccionEntrega(e.target.value)} />
                                        </div>
                                        <div>
                                            <label>Referencia (opcional)</label>
                                            <input type="text" placeholder="Ej. Casa blanca con reja negra" value={referencia} onChange={(e) => setReferencia(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="campo">
                                        <label>Observaciones (opcional)</label>
                                        <textarea placeholder="Indica algo adicional para tu pedido..." value={observaciones} onChange={(e) => setObservaciones(e.target.value)} />
                                    </div>
                                    <button type="button" className="btn-ancho" onClick={irAPagina2}>Continuar al pago →</button>
                                </div>
                            </div>
                        )}

                        {pagina === 2 && (
                            <div className="pagina">
                                <div className="caja">
                                    <h2>3. Método de pago</h2>
                                    <p className="subtitulo">Selecciona cómo deseas pagar tu pedido</p>
                                    <div className="pagos">
                                        {[
                                            { valor: "Efectivo", emoji: "💵", desc: "Paga al recibir tu pedido" },
                                            { valor: "Yape / Plin", emoji: "📱", desc: "Pago por Yape o Plin" },
                                            { valor: "Tarjeta", emoji: "💳", desc: "Visa, MasterCard, etc." },
                                        ].map((op) => (
                                            <label key={op.valor} className={`pago ${pago === op.valor ? "seleccionado" : ""}`}>
                                                <input type="radio" name="pago" checked={pago === op.valor} onChange={() => setPago(op.valor)} />
                                                <span className="emoji">{op.emoji}</span>
                                                <strong>{op.valor}</strong>
                                                <small>{op.desc}</small>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="caja centrado">
                                    <button type="button" className="btn-ancho" onClick={confirmarPedido}>
                                        {confirmado ? "Pedido confirmado ✓" : "Confirmar pedido"}
                                    </button>
                                    <p className="ayuda">🔒 Tu información está segura</p>
                                </div>
                                <button type="button" className="btn-volver" onClick={() => setPagina(1)}>← Volver al pedido</button>
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </>
    );
}