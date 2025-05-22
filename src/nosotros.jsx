import './nosotros.css';
import Footer from './Footer'
import equipoImg from './assets/solar.jpeg'; 
import obrasImg from './assets/inner-local-vert.jpg'; 
import { Link } from 'react-router-dom';

function Nosotros() {

    return (
        <>

  <section id="nosotros" className="nosotros-section">
      
      {/* Hero Section */}
      <div className="nosotros-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>20 años impulsando proyectos</h1>
          <p>Expertos en soluciones eléctricas para grandes obras y profesionales</p>
        </div>
      </div>

      {/* Trayectoria */}
      <div className="trayectoria-container">
        <div className="trayectoria-content">
          <h2>Nuestra Trayectoria</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2003</div>
              <div className="timeline-desc">Fundación de DAME como distribuidor minorista</div>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-desc">Expansión al mercado mayorista</div>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-desc">Líderes en abastecimiento para grandes obras</div>
            </div>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="valores-container">
        <h2>Lo que nos define</h2>
        <div className="valores-grid">
          <div className="valor-card">
            <div className="valor-icon">🛡️</div>
            <h3>Seguridad Garantizada</h3>
            <p>Materiales certificados para instalaciones 100% seguras</p>
          </div>
          <div className="valor-card">
            <div className="valor-icon">🤝</div>
            <h3>Relaciones a largo plazo</h3>
            <p>Acompañamos el crecimiento de nuestros clientes</p>
          </div>
          <div className="valor-card">
            <div className="valor-icon">🏗️</div>
            <h3>Experiencia en obras</h3>
            <p>Soluciones probadas en proyectos de gran envergadura</p>
          </div>
        </div>
      </div>

      {/* Aliados */}
      <div className="aliados-container">
        <div className="aliados-content">
          <div className="aliados-text">
            <h2>Tu aliado estratégico</h2>
            <p>En DAME combinamos dos décadas de experiencia con el catálogo más completo de marcas líderes para ofrecerte soluciones eléctricas integrales.</p>
            < Link to='/contacto' className='nosotros-cta'>
            <button className="contacto-btn">Contactanos</button>
            </Link>
          </div>
          <div className="aliados-img">
            <img src={obrasImg} alt="Trabajos eléctricos en obra" />
          </div>
        </div>
      </div>

    </section>

        < Footer />

        
       </>
    )
}

export default Nosotros