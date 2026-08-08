import React, { useState } from 'react';
import "./Delivery.css";

export default function Delivery() {
    const [pagina, setPagina] = useState(1);

    // Paso 1: cobertura
    const [direccion, setDireccion] = useState("");
    const [zonaValida, setZonaValida] = useState(null); // null | true | false

    // Paso 1: formulario
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccionEntrega, setDireccionEntrega] = useState("");
    const [referencia, setReferencia] = useState("");
    const [observaciones, setObservaciones] = useState("");

    // Paso 2: pago
    const [pago, setPago] = useState("Efectivo");
    const [confirmado, setConfirmado] = useState(false);

    const [error, setError] = useState("");

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

    return (
<>

      <header className="header_delivery">
            </header>

            {/* 2. Main content */}
            <main className="delivery-main">
                <section className="delivery">
                    <div className="delivery-titulo-seccion">
                        <h1>DELIVERY</h1>
                        <p>Haz tu pedido y recíbelo donde estés</p>
                    </div>

                {error && <div className="alerta-error">{error}</div>}

                {pagina === 1 && (
                    <div className="pagina">
                        {/* 1. ZONA DE COBERTURA */}
                        <div className="caja">
                            <h2>1. Zona de cobertura</h2>
                            <p className="subtitulo">¿A qué dirección quieres que llevemos tu pedido?</p>

                            <div className="fila">
                                <input
                                    type="text"
                                    placeholder="Ingresa tu dirección (ej. Av. Los Olivos 123, San Borja)"
                                    value={direccion}
                                    onChange={(e) => {
                                        setDireccion(e.target.value);
                                        setZonaValida(null);
                                    }}
                                />
                                <button type="button" onClick={verificarDireccion}>
                                    Verificar
                                </button>
                            </div>

                            {zonaValida === true && <p className="ayuda ok">Llegamos a tu zona de entrega.</p>}
                            {zonaValida === false && <p className="ayuda">Ingresa una dirección válida para verificar.</p>}
                            {zonaValida === null && <p className="ayuda">Ingresa tu dirección para verificar si llegamos a tu zona.</p>}

                            <img className="mapa" src="/MapaCobertura.png" alt="Mapa de zona de cobertura" />
                        </div>

                        {/* 2. FORMULARIO DE PEDIDO */}
                        <div className="caja">
                            <h2>2. Formulario de pedido</h2>

                            <div className="grid2">
                                <div>
                                    <label>Nombre completo</label>
                                    <input type="text" placeholder="Ej. Cristiano Ronaldo" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </div>
                                <div>
                                <label>Teléfono / WhatsApp</label>
                                <input
                                  type="text" // Usamos text para evitar los problemas de type="number"
                                  placeholder="Ej. 912 345 678"
                                  value={telefono}
                                  maxLength={12} // Límite nativo del navegador
                                  onChange={(e) => {
                                const soloDigitos = e.target.value.replace(/[^0-9]/g, '');
      
                                setTelefono(soloDigitos);
                                }}
                               />
                               </div>
                                <div>
                                    <label>Dirección de entrega</label>
                                    <input
                                        type="text"
                                        placeholder="Calle, número, urbanización, distrito"
                                        value={direccionEntrega}
                                        onChange={(e) => setDireccionEntrega(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Referencia (opcional)</label>
                                    <input
                                        type="text"
                                        placeholder="Ej. Casa blanca con reja negra"
                                        value={referencia}
                                        onChange={(e) => setReferencia(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="campo">
                                <label>Observaciones (opcional)</label>
                                <textarea
                                    placeholder="Indica algo adicional para tu pedido..."
                                    value={observaciones}
                                    onChange={(e) => setObservaciones(e.target.value)}
                                />
                            </div>

                            <button type="button" className="btn-ancho" onClick={irAPagina2}>
                                Continuar al pago →
                            </button>
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

                        <div className="caja">
                        <h2>4. Confirmación y seguimiento</h2>
                        <p className="subtitulo">Sigue el estado de tu pedido en tiempo real</p>

                        <div className="timeline">
                        {[
                          { paso: "Pedido recibido", hora: "10:00 AM" },
                          { paso: "En preparación", hora: "10:05 AM" },
                          { paso: "En camino", hora: "10:20 AM" },
                          { paso: "Entregado", hora: "10:35 AM" }
                          ].map((item, i) => (
            <div className="paso" key={item.paso}>
                <div className={`circulo ${confirmado && i === 0 ? "activo" : ""}`}>{i + 1}</div>
                <span>{item.paso}</span>
                <small style={{ color: "#999", fontSize: "11px" }}>{item.hora}</small>
            </div>
        ))}
    </div>

    {confirmado && (
        <div className="resumen">
            <p><strong>Cliente:</strong> {nombre}</p>
            <p><strong>Dirección:</strong> {direccionEntrega}</p>
            <p><strong>Pago:</strong> {pago}</p>
        </div>
    )}
</div>
                        <button type="button" className="btn-volver" onClick={() => setPagina(1)}>
                            ← Volver al pedido
                        </button>
                    </div>
                )}

                <p className="footer">Gracias por elegirnos. ¡Buen provecho!</p>
            </section>
        </main>
</>

    );
}
