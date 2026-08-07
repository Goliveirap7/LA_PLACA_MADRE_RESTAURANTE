import './Reservas.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Reservas() {
  const [paso, setPaso] = useState(1);

const [inicioHorario, setInicioHorario] = useState(0);

const listaHorarios = [
    '10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:00 pm',
    '12:30 pm', '01:00 pm', '01:30 pm', '02:00 pm', '02:30 pm',
    '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm', '05:00 pm',
    '05:30 pm', '06:00 pm', '06:30 pm', '07:00 pm', '07:30 pm',
    '08:00 pm', '08:30 pm', '09:00 pm', '09:30 pm', '10:00 pm'
  ];

const [inicioPersonas, setInicioPersonas] = useState(0);

  const listaPersonas = [
    '1', '2', '3', '4',
    '5', '6', '7', '8',
    '9', '10', '11', '12',
    '13', '14', '15+'
  ];


  const [formData, setFormData] = useState({
    espacio: '',
    fecha: '',
    hora: '',
    personas: '', 
    nombre: '',
    tipoDoc: 'DNI',
    numDoc: '',
    prefijoTel: '+51',
    telefono: '',
    email: '',
    celebracion: 'no',
    detalleCelebracion: ''
  });

function handleChange(e) {
    let { name, value } = e.target;

    if (name === 'numDoc') {
      const soloNumeros = value.replace(/\D/g, '');
      if (soloNumeros.length <= 9) {
        setFormData({
          ...formData,
          [name]: soloNumeros
        });
      }
      return;
    }

    if (name === 'telefono') {
      const soloNumeros = value.replace(/\D/g, '');
      if (soloNumeros.length <= 11) {
        setFormData({
          ...formData,
          [name]: soloNumeros
        });
      }
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function seleccionarEspacio(nombreEspacio) {
    setFormData({
      ...formData,
      espacio: nombreEspacio
    });
  }

  function seleccionarHora(horaSeleccionada) {
    setFormData({
      ...formData,
      hora: horaSeleccionada
    });
  }

function siguienteGrupoHorarios() {
    if (inicioHorario + 5 < listaHorarios.length) {
      setInicioHorario(inicioHorario + 5);
    } else {
      setInicioHorario(0);
    }
  }


  function seleccionarPersonas(cant) {
    setFormData({
      ...formData,
      personas: cant
    });
  }


 function siguienteGrupoPersonas() {
    if (inicioPersonas + 4 < listaPersonas.length) {
      setInicioPersonas(inicioPersonas + 4);
    } else {
      setInicioPersonas(0);
    }
  } 


 function irAlPaso2() {
    if (!formData.fecha || !formData.hora || !formData.personas) {
      alert('Por favor, selecciona una fecha, un horario y la cantidad de personas para continuar.');
      return;
    }
    
    setPaso(2); 
  }

  function regresarAlPaso1(e) {
    e.preventDefault();
    setPaso(1);
  }


  function handleSubmit(e) {
    e.preventDefault();
    setPaso(3);
  }


  function AsideContacto() {
    return (
      <aside className="aside-contacto">
        <div className="bloque-contacto">
          <h3>Datos de Contacto:</h3>
          <p>✉ restaurantelaplacamadre.com</p>
          <p>📞 (+51) 987654321</p>
        </div>
        <div className="bloque-redes">
          <h3>Redes Sociales:</h3>
          <p><i className="fab fa-facebook"></i> La Placa Madre</p>
          <p><i className="fab fa-instagram"></i> LaPlacaMadrePeru</p>
        </div>
      </aside>
    );
  }


  if (paso === 1) {
    return (
      <>
        <header className="header-restaurante">
          <img src="/Logo_Restaurante-removebg-preview.png" alt="Logo del Restaurante" />
        </header>

      <main>
        <h1 className="titulo-reserva1">Realiza tu Reserva</h1>
        <br />

        <div className="pasos-bar">
          <div className="paso-activo">
            <span>1.Selección de datos</span>
          </div>
          <span className="separador">.</span>
          <div className="paso">
            <span>2. Confirmar reserva</span>
          </div>
        </div>

        <div className="seccion-espacios">
          <section className="galeria-izquierdo">
            <h2>Quiero ir a:</h2>

            <div className="grid-espacios">
              <div 
                className={`tarjeta-espacio ${formData.espacio === 'Salón Principal' ? 'seleccionado' : ''}`}
                onClick={() => seleccionarEspacio('Salón Principal')}
              >
                <img src="/salon-principal.jpeg" alt="Espacio 1" />
                <p>Salón Principal</p>
              </div>

              <div 
                className={`tarjeta-espacio ${formData.espacio === 'Terraza' ? 'seleccionado' : ''}`}
                onClick={() => seleccionarEspacio('Terraza')}
              >
                <img src="/terraza.jpg" alt="Espacio 2" />
                <p>Terraza</p>
              </div>

              <div 
                className={`tarjeta-espacio ${formData.espacio === 'Zona de Barra' ? 'seleccionado' : ''}`}
                onClick={() => seleccionarEspacio('Zona de Barra')}
              >
                <img src="/barra-bar.jpg" alt="Espacio 3" />
                <p>Zona de Barra</p>
              </div>

              <div 
                className={`tarjeta-espacio ${formData.espacio === 'Salón Privado' ? 'seleccionado' : ''}`}
                onClick={() => seleccionarEspacio('Salón Privado')}
              >
                <img src="/salon-privado.jpg" alt="Espacio 4" />
                <p>Salón Privado</p>
              </div>
            </div>

            <div className="alerta">
              <span>Selecciona un local para ver las fechas disponibles</span>
            </div>

            <div className="contenedor-reserva-fecha">
              <h2 className="titulo-seccion">Día de la reserva:</h2>
              <div className="tarjeta-reserva">
                <div className="grupo-campo">
                  <label htmlFor="fecha">Selecciona la fecha:</label>
                  <input 
                    type="date" 
                    id="fecha" 
                    name="fecha" 
                    value={formData.fecha}
                    onChange={handleChange}
                    className="input-nativo" 
                  />
                </div>
              </div>
            </div>

            <div className="alerta">
              <span>Selecciona una fecha para visualizar los horarios disponibles</span>
            </div>

            <div className="contenedor-horarios">
              <p className="subtitulo-horario">Selecciona un horario disponible:</p>
              <div className="grilla-horarios">
              {listaHorarios.slice(inicioHorario, inicioHorario + 5).map((h) => (
                <button 
                  key={h} 
                  type="button" 
                  className={`btn-hora ${formData.hora === h ? 'activo' : ''}`}
                  onClick={() => seleccionarHora(h)}
                  translate="no"
                >
                  {h}
                </button>
              ))}
              <button 
                type="button" 
                className="btn-siguiente-horario" 
                title="Ver más horarios"
                onClick={siguienteGrupoHorarios}
              >
                <i className="fa-solid fa-chevron-right">+</i>
              </button>
            </div>
            </div>

            <div className="contenedor-personas-continuar">
              <h2 className="titulo-seccion">Cantidad de personas:</h2>
              <div className="selector-personas">
                {listaPersonas.slice(inicioPersonas, inicioPersonas + 4).map((p) => (
                  <button 
                    key={p} 
                    type="button" 
                    className={`btn-persona ${formData.personas === p ? 'activo' : ''}`}
                    onClick={() => seleccionarPersonas(p)}
                  >
                    {p}
                  </button>
                ))}
                <button 
                  type="button" 
                  className="btn-persona btn-mas" 
                  title="Más personas"
                  onClick={siguienteGrupoPersonas}
                >
                  +
                </button>
              </div>

              <button type="button" className="btn-continuar" onClick={irAlPaso2}>
                <span className="punto-decorativo">●</span> Continuar
              </button>
            </div>
          </section>

          <AsideContacto />
        </div>
      </main>
      </>
    );
  }


  if (paso === 2) {
    return (
      <>
      <header className="header-restaurante">
          <img src="/Logo_Restaurante-removebg-preview.png" alt="Logo del Restaurante" />
      </header>
      
      <main>
        <h1 className="titulo-reserva2">Realiza tu Reserva</h1>
        <br />

        <div className="pasos-bar">
          <div className="paso">
            <span>1.Selección de datos</span>
          </div>
          <span className="separador">.</span>
          <div className="paso-activo">
            <span>2. Confirmar reserva</span>
          </div>
        </div>

        <div className="seccion-formulario">
          <div className="columna-izquierda">
            <a href="#" className="btn-atras" onClick={regresarAlPaso1}>
              <span className="flecha">&lt;</span> Atrás
            </a>

            <h2 className="subtitulo-confirmacion">¡Estamos a un paso de terminar! Completa tus datos:</h2>

            <form onSubmit={handleSubmit}>
            <div className="grupo-campo">
              <label>Nombre Completo</label>
              <input 
                type="text" 
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Escribe aquí" 
                className="input-estilizado" 
                required
              />
            </div>

            <div className="grupo-campo">
              <label>Coloca tu DNI, CE o pasaporte</label>
              <div className="contenedor-input-combinado">
                <select 
                  name="tipoDoc" 
                  value={formData.tipoDoc} 
                  onChange={handleChange}
                  className="select-documento"
                >
                  <option value="DNI">DNI</option>
                  <option value="CE">CE</option>
                  <option value="Pasaporte">Pasaporte</option>
                </select>
                <span className="separador"></span>
                <input 
                  type="text" 
                  name="numDoc"
                  value={formData.numDoc}
                  onChange={handleChange}
                  placeholder="Escribe aquí" 
                  className="input-numero-documento" 
                  minLength={7}
                  maxLength={9}
                  pattern="\d{7,9}"
                  inputMode="numeric"
                  title="El documento debe contener entre 7 y 9 dígitos"
                  required
                />
              </div>
            </div>

            <div className="grupo-campo">
              <label>Datos de contacto</label>
              <div className="contenedor-input-combinado">
                <select 
                  name="prefijoTel" 
                  value={formData.prefijoTel} 
                  onChange={handleChange}
                  className="select-documento"
                >
                  <option value="+51">🇵🇪 +51</option>
                  <option value="+54">🇦🇷 +54</option>
                  <option value="+591">🇧🇴 +591</option>
                  <option value="+55">🇧🇷 +55</option>
                  <option value="+56">🇨🇱 +56</option>
                  <option value="+57">🇨🇴 +57</option>
                  <option value="+593">🇪🇨 +593</option>
                  <option value="+34">🇪🇸 +34</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+52">🇲🇽 +52</option>
                  <option value="+595">🇵🇾 +595</option>
                  <option value="+598">🇺🇾 +598</option>
                  <option value="+58">🇻🇪 +58</option>
                </select>
                <span className="separador"></span>
                <input 
                  type="tel" 
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Escribe aquí" 
                  className="input-numero-documento" 
                  minLength={7}
                  maxLength={11}
                  pattern="\d{7,11}"
                  inputMode="numeric"
                  title="El teléfono debe contener entre 7 y 11 dígitos"
                  required
                />
              </div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo electrónico" 
                className="input-estilizado margin-top-campo" 
                required
              />
            </div>

            <div className="grupo-campo">
              <label>¿Celebras algo especial?</label>
              <div className="opciones-radio">
                <label className="opcion-radio">
                  <input 
                    type="radio" 
                    name="celebracion" 
                    value="si" 
                    checked={formData.celebracion === 'si'}
                    onChange={handleChange}
                    required
                  />
                  <span>Sí</span>
                </label>
                <label className="opcion-radio">
                  <input 
                    type="radio" 
                    name="celebracion" 
                    value="no" 
                    checked={formData.celebracion === 'no'}
                    onChange={handleChange}
                    required
                  />
                  <span>No</span>
                </label>
              </div>

              {formData.celebracion === 'si' && (
                <textarea 
                  name="detalleCelebracion"
                  value={formData.detalleCelebracion}
                  onChange={handleChange}
                  placeholder="¿Qué celebras?" 
                  className="textarea-estilizado margin-top-campo"
                  required
                ></textarea>
              )}
            </div>

            <button type="submit" className="btn-enviar">
              <span className="punto-icono">•</span> Enviar
            </button>
          </form>
          </div>

          <AsideContacto />
        </div>
      </main>
      </>
    );
  }


  return (
    <main>
      <h1 className="titulo-reserva3">¡Reserva realizada!</h1>

      <div className="contenedor-confirmacion">
        <p className="mensaje-exito">
          ¡Tu reserva ha sido confirmada! Recuerda que cuentas con 10 minutos de tolerancia, 
          pasado este tiempo la atención será por orden de llegada ¡Te esperamos!
        </p>

        <div className="resumen-datos">
          <div className="fila-dato">
            <div className="etiqueta">Espacio de reserva:</div>
            <div className="valor">{formData.espacio}</div>
          </div>

          <div className="fila-dato">
            <div className="etiqueta">Día y hora de la reserva:</div>
            <div className="valor">
              {formData.fecha ? formData.fecha : 'Fecha no seleccionada'} – {formData.hora}
            </div>
          </div>

          <div className="fila-dato">
            <div className="etiqueta">Cantidad de personas:</div>
            <div className="valor">{formData.personas}</div>
          </div>

          <div className="fila-dato">
            <div className="etiqueta">{formData.tipoDoc}:</div>
            <div className="valor">{formData.numDoc || 'No ingresado'}</div>
          </div>

          <div className="fila-dato">
            <div className="etiqueta">Datos de contacto:</div>
            <div className="valor">
              <span>{formData.prefijoTel}{formData.telefono}</span>
              <span>{formData.email}</span>
            </div>
          </div>

          <div className="fila-dato">
            <div className="etiqueta">Celebras algo especial:</div>
            <div className="valor">
              {formData.celebracion === 'si' 
                ? (formData.detalleCelebracion || 'Sí') 
                : 'No'}
            </div>
          </div>
        </div>

        <div className="acciones-confirmacion">
          < Link to="/" className="btn-confirmacion btn-inicio">
            <span className="punto-icono">•</span> Ir a inicio
          </Link>
        </div>
      </div>
    </main>
  );
}