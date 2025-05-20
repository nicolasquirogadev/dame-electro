import './nosotros.css';
import Footer from './Footer'
import equipoImg from './assets/solar.jpeg'; // Reemplaza con tu imagen
import obrasImg from './assets/inner-local-vert.jpg'; // Reemplaza con tu imagen

function Nosotros() {

    return (
        <>
{/* comment 
        <section id="nosotros">
            <div className="parallax1">
        <div className="parallax-inner">
          <h1>NOSOTROS</h1>
        </div>
      </div>
      <h2>Distribuidora Argentina de Materiales Eléctricos</h2>

      <p>Empresa con una trayectoria de 20 años, dedicada a la 
        comercialización mayorista y minorista de materiales eléctricos e 
        iluminación de marcas lideres en el rubro, garantizando 
        instalaciones 100% seguras.</p>

     <p>Somos proveedores de constructoras y desarrolladoras 
        inmobiliarias lo que nos brinda 
        una vasta experiencia en abastecimiento de obras de gran porte.</p>
      
      <div className="parallax2">
        <div className="parallax-inner">
          <h1>Titulo Titulo</h1>
        </div>
      </div>
        
        <p>Contamos con un amplio conocimiento puesto al servicio de profesionales y empresas 
            Pyme acompañando y construyendo relaciones de confianza a largo plazo.</p>
        
        <p>Si buscas un aliado estratégico no dudes en contactarnos  y conocernos.</p>
        </section>
*/}

<section id="nosotros" className="nosotros-section">
      
      {/* Hero Section */}
      <div className="nosotros-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>20 años iluminando proyectos</h1>
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
            <button className="contacto-btn">Contactanos</button>
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