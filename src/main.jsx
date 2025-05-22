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

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => setMenuOpen(false);

  return (
    <StrictMode>
      <nav>
        <div className="top-wrapper">
          <div className="logo-container">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              <img src={dameLogo} alt="D.A.M.E. logo" />
            </Link>
          </div>

          {/* Botón de hamburguesa para móviles */}
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

        {/* Menú de navegación */}
        <ul className={`nav-wrapper ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/nosotros" 
              className={`nav-link ${location.pathname === '/nosotros' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/productos" 
              className={`nav-link ${location.pathname.startsWith('/productos') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/servicios" 
              className={`nav-link ${location.pathname === '/servicios' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Servicios
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contacto" 
              className={`nav-link ${location.pathname === '/contacto' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Hero />} />
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
          <img alt="Chat on WhatsApp" src="https://imgs.search.brave.com/mm-hPdGqieeJmtzX92vizsQekbTeHtmB7735QC3RLjY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi82LzZiL1do/YXRzQXBwLnN2Zy8y/NTBweC1XaGF0c0Fw/cC5zdmcucG5n" />
        </a>
      </div>
    </StrictMode>
  );
};

// Envolvemos App con Router en el render
createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);