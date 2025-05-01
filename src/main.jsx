import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './nav.css';
import './mediaqueries.css'
import Hero from './hero';
import Productos from './productos';
import Servicios from './servicios';
import Contacto from './contacto';
import Nosotros from './nosotros';
import dameLogo from './assets/dame.logo.jpg';
import wppImg from './assets/WhatsAppButtonGreenLarge.svg';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú móvil

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <Hero />;
      case 'nosotros':
        return <Nosotros />;
      case 'productos':
        return <Productos />;
      case 'servicios':
        return <Servicios />;
      case 'contacto':
        return <Contacto />;
      default:
        return null;
    }
  };

  // Función para alternar el menú móvil
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false); // Cierra el menú móvil
  };

  return (
    <StrictMode>
      <nav>
        <div className="top-wrapper">
        <div className="logo-container">
          <a
            href="#hero"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
          >
            <img src={dameLogo} alt="D.A.M.E. logo" />
          </a>
        </div>

        {/* Botón de hamburguesa para móviles */}
        <button className={`hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        </div>

        {/* Menú de navegación */}
        <ul className={`nav-wrapper ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a
              href="#nosotros"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('nosotros');
              }}
            >
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#productos"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('productos');
              }}
            >
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#servicios"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('servicios');
              }}
            >
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contacto"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contacto');
              }}
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      {renderSection()}


         <div className="wpp-button">
         <a aria-label="Chat on WhatsApp" href="https://wa.me/5491130733557" target="_blank">
         <img alt="Chat on WhatsApp" src= {wppImg} />
         </a>
         </div>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);