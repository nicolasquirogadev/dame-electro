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
    <p>Envíos express a todo AMBA e interior</p>
    <div className="chip-rojo">Cotización sin cargo</div>
  </div>
</div>


<div className="proceso-compra-container">
  <h2 className="proceso-titulo">Proceso de Compra</h2>
  <div className="proceso-compra">
    
    <div className="paso">
      <div className="circulo">1</div>
      <div className="contenido-paso">
        <h3 className="titulo-paso">Consulta Personalizada</h3>
        <p className="descripcion-paso">Nos contactas y analizamos juntos tus necesidades específicas.</p>
      </div>
      <div className="conector"></div>
    </div>
    
    <div className="paso">
      <div className="circulo">2</div>
      <div className="contenido-paso">
        <h3 className="titulo-paso">Cotización Detallada</h3>
        <p className="descripcion-paso">Preparamos una propuesta económica adaptada a tus requerimientos.</p>
      </div>
      <div className="conector"></div>
    </div>
    
    <div className="paso">
      <div className="circulo">3</div>
      <div className="contenido-paso">
        <h3 className="titulo-paso">Confirmación</h3>
        <p className="descripcion-paso">Validamos juntos el presupuesto y ajustamos detalles finales.</p>
      </div>
      <div className="conector"></div>
    </div>

    <div className="paso">
      <div className="circulo">4</div>
      <div className="contenido-paso">
        <h3 className="titulo-paso">Preparación</h3>
        <p className="descripcion-paso">Armamos tu pedido con los productos seleccionados.</p>
      </div>
      <div className="conector"></div>
    </div>

    <div className="paso">
      <div className="circulo">5</div>
      <div className="contenido-paso">
        <h3 className="titulo-paso">Finalización</h3>
        <p className="descripcion-paso">Coordinamos el pago y el retiro/envío de tu mercadería.</p>
      </div>
    </div>

  </div>
</div>




<div className="medios-pago">
  <h3>Flexibilidad en pagos</h3>
  <div className="pagos-scroll">
    <img src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png" alt="Visa"/>
    <img src="https://mtf.mastercard.co.za/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg" alt="Mastercard"/>
    <img src="https://http2.mlstatic.com/frontend-assets/mp-web-navigation/ui-navigation/6.7.69/mercadopago/logo__large@2x.png" alt="Mercado Pago"/>
    <div className="destacado">
      <img src="https://www.bancoprovincia.com.ar/CDN/Get/logo_2021_S" alt="Banco Provincia"/>
      <span>4 cuotas sin interés</span>
    </div>
    
  </div>
</div>

</div>



        < Footer />

        </>
    )
}

export default Servicios