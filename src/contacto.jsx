import './contacto.css';
import Footer from './Footer'

function Contacto() {
  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-header">
        <h1 className="contacto-title">Comunicate con <span className="highlight">D.A.M.E.</span></h1>
        <p className="contacto-subtitle">Envianos tu consulta o pedí tu presupuesto por el medio que prefieras</p>
      </div>

      <div className="contacto-grid">
        <div className="contacto-card" onClick={() => window.location.href = 'tel:+5491145678901'}>
          <div className="contacto-icon" style={{ color: 'var(--amarillo-accento)' }}>
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="contacto-content">
            <h3>Teléfono</h3>
            <p>+54 9 11 4567-8901</p>
            <span className="contacto-action">Llamar ahora</span>
          </div>
        </div>

        <div className="contacto-card" onClick={() => window.location.href = 'mailto:dame@gmail.com'}>
          <div className="contacto-icon" style={{ color: 'var(--azul-electrico)' }}>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="contacto-content">
            <h3>Email</h3>
            <p>dame@gmail.com</p>
            <span className="contacto-action">Enviar email</span>
          </div>
        </div>

        <div className="contacto-card" onClick={() => window.open('https://wa.me/5491145678901', '_blank')}>
          <div className="contacto-icon" style={{ color: '#25D366' }}>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <div className="contacto-content">
            <h3>WhatsApp</h3>
            <p>+54 9 11 4567-8901</p>
            <span className="contacto-action">Enviar mensaje</span>
          </div>
        </div>

      </div>

      < Footer />

    </section>
  );
}

export default Contacto;