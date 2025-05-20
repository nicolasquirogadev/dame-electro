import Footer from './Footer'
import './servicios.css'

function Servicios() {

    return (
        <>
        <div className="servicios-section">
        <div className="servicios-grid">
  {/* Tarjeta 1 */}
  <div className="servicio-card">
    <div className="icono-electrico">⚡</div>
    <h3>Atención Personalizada</h3>
    <p>Asesoramiento técnico especializado para identificar tus necesidades reales</p>
    <div className="chip-azul">Soluciones a medida</div>
  </div>
  
  {/* Tarjeta 2 */}
  <div className="servicio-card">
    <div className="icono-camion">🚚</div>
    <h3>Logística Completa</h3>
    <p>Envíos express a todo AMBA e interior con seguimiento en tiempo real</p>
    <div className="chip-rojo">48-72hs hábiles</div>
  </div>
</div>


<div className="proceso-compra">
  <div className="paso">
    <div className="circulo">1</div>
    <p>Consulta personalizada</p>
  </div>
  
  <div className="paso">
    <div className="circulo">2</div>
    <p>Cotización competitiva</p>
  </div>
  {/* ... más pasos ... */}
</div>


<div className="medios-pago">
  <h3>Flexibilidad en pagos</h3>
  <div className="pagos-scroll">
    <img src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png" alt="Visa"/>
    <img src="https://mtf.mastercard.co.za/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg" alt="Mastercard"/>
    <div className="destacado">
      <img src="https://www.bancoprovincia.com.ar/CDN/Get/logo_2021_S" alt="Banco Provincia"/>
      <span>4 cuotas sin interés</span>
    </div>
    {/* ... más métodos ... */}
  </div>
</div>

</div>



        < Footer />

        </>
    )
}

export default Servicios