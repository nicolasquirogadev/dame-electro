import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';
import './nav.css';
import './mediaqueries.css';
import Hero from './hero';
import Productos from './productos';
import Servicios from './servicios';
import Contacto from './contacto';
import Nosotros from './nosotros';
import dameLogo from './assets/dame.logo.jpg';

// Componente principal que contiene la lógica de navegación
const AppContent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const closeAndScroll = () => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav>
        <div className="top-wrapper">
          <div className="logo-container">
            <Link to="/" className="nav-link" onClick={closeAndScroll}>
              <img src={dameLogo} alt="D.A.M.E. logo" />
            </Link>
          </div>

          <button 
            className={`hamburger-menu ${menuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menú"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        <ul className={`nav-wrapper ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/nosotros" 
              className={`nav-link ${location.pathname === '/nosotros' ? 'active' : ''}`}
              onClick={closeAndScroll}
            >
              Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/productos" 
              className={`nav-link ${location.pathname.startsWith('/productos') ? 'active' : ''}`}
              onClick={closeAndScroll}
            >
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/servicios" 
              className={`nav-link ${location.pathname === '/servicios' ? 'active' : ''}`}
              onClick={closeAndScroll}
            >
              Servicios
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contacto" 
              className={`nav-link ${location.pathname === '/contacto' ? 'active' : ''}`}
              onClick={closeAndScroll}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route index element={<Hero />} /> 
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:categoryId" element={<Productos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <div className="wpp-button">
        <a 
          aria-label="Chat on WhatsApp" 
          href="https://wa.me/5491130733557" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img alt="Chat on WhatsApp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" />
        </a>
      </div>
    </>
  );
};

// Componente raíz 
const App = () => {
  return (
    <StrictMode>
      <Router basename="/">
        <AppContent />
      </Router>
    </StrictMode>
  );
};

// Renderizado
createRoot(document.getElementById('root')).render(<App />);