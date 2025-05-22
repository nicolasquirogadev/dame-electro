import { useState, useEffect } from 'react';
import './productos.css';
import { useParams, useNavigate } from 'react-router-dom';

// imagenes Forli
import forliImg from './assets/forli.jpg';
import gabEstancoImg from './assets/gab-estanco.jpg';
import trefilconImg from './assets/trefilcon.png';
import macroledLogo from './assets/Macroled.logo.png';
import kalopLogo from './assets/kalop-logo.png'

//imagenes categorias 
import iluminacionImg from './assets/lamparas.jpeg';
import cat4Img from './assets/cat4ph.png';
import cat6Img from './assets/cat6.png'
import electricidadImg from './assets/inteck.jpeg';

// catalogos pdf
import macroledCat4 from './assets/Macroled_cat4_artf_iluminacion_lamparas.pdf';
import macroledCat6 from './assets/macroled_cat6.pdf'
import kalopCat3 from './assets/kalop_cat3.pdf';
import kalopCat2 from './assets/kalop_cat2.pdf';
import kalopCat6 from './assets/kalop_cat6.pdf';

const Productos = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  // Efecto para cargar la categoría cuando cambia el parámetro de la URL
  useEffect(() => {
    if (categoryId) {
      const categoria = categorias.find(cat => cat.id === parseInt(categoryId));
      setCategoriaSeleccionada(categoria || null);
    } else {
      setCategoriaSeleccionada(null);
    }
  }, [categoryId]);
  
  // Definimos las categorías principales
  const categorias = [
    {
      id: 1,
      nombre: 'Térmicas / Diferenciales / Equip. Eléctrico / Industria',
      imagen: iluminacionImg,
    },
    {
      id: 2,
      nombre: 'Canalización / Cajas / Tableros',
      imagen: gabEstancoImg,
    },
    {
      id: 3,
      nombre: 'Conductores Eléctricos',
      imagen: 'https://kalop.com.ar/wp-content/uploads/2024/11/cable-subterraneo-kalop.webp',
    },
    {
      id: 4,
      nombre: 'Artefactos iluminación / Lámparas',
      imagen: cat4Img,
    },
    {
      id: 5,
      nombre: 'Herramientas / Grupos electrógenos',
      imagen: 'https://cdn.prod.website-files.com/66671b125fca5d407bd27dce/669578bca62351d120ea1c99_JDPS0623.png',
    },
    {
      id: 6,
      nombre: 'Llaves de luz / Porteros / Domicilios',
      imagen: cat6Img,
    },
  ];

  // Datos de los proveedores organizados por categorías
  const proveedoresPorCategoria = {
    // Térmicas / Diferenciales / Equip. Eléctrico / Industria
    1: [
      {
        id: 1,
        nombre: 'Sica',
        imagen: 'https://sicaelec.vtexassets.com/arquivos/logo-header.png',
        link: 'https://sicaelec.com.ar/'
      },
      {
        id: 2,
        nombre: 'Chint',
        imagen: 'https://imgs.search.brave.com/Kv08z_BtZ-0_w3YKHtpUEfyFtMBNrPCuMwsea6ccsyc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly94bi0t/YW9zbHV6LXd3YS5j/b20uYXIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDYvY2hp/bnRFbGVjdHJpYy5q/cGc',
        link: 'https://www.chintargentina.com.ar/'
      },
      {
        id: 3,
        nombre: 'Schneider',
        imagen: 'https://www.se.com/ar/es/assets/v2/696/media/202250/SE_logo-LIO-white_header.svg',
        link: 'https://www.se.com/ar/es/'
      },
      {
        id: 4,
        nombre: 'ABB',
        imagen: 'https://global.abb/content/dam/abb-etc/commons/abb-logo.svg',
        link: 'https://new.abb.com/ar'
      },
      {
        id: 5,
        nombre: 'Elibet',
        imagen: 'https://www.elibet.com/wp-content/uploads/2020/03/elibet.png',
        link: 'https://www.elibet.com/'
      },
      {
        id: 6,
        nombre: 'Baw',
        imagen: 'https://bawelectric.com/assets/LOGO',
        link: 'https://bawelectric.com/'
      },
    ],
    
    // Canalización / Cajas / Tableros
    2: [
      {
        id: 1,
        nombre: 'FORLI',
        imagen: forliImg,
        link: 'https://www.forli.com.ar/productos/',
      },
      {
        id: 2,
        nombre: 'Genrod',
        imagen: 'https://genrod.com.ar/img/logo-genrod-footer-tagline.svg',
        link: 'https://genrod.com.ar/productos/'
      },
      {
        id: 3,
        nombre: 'Cabrera',
        imagen: 'https://cabrera.net.ar/wp-content/uploads/2024/11/logo-white.svg',
        link: 'https://cabrera.net.ar/'
      },
      {
        id: 4,
        nombre: 'Kalop',
        imagen: 'https://kalop.com.ar/wp-content/uploads/2024/05/logokalopv0.webp',
        link: kalopCat2,
      },
      {
        id: 5,
        nombre: 'AG',
        imagen: 'https://agmetalurgica.com.ar/images/agm_web_marca_blanco.png',
        link: 'https://agmetalurgica.com.ar/files/AGM_catalogo_de_productos_2019.pdf',
      },
      {
        id: 6,
        nombre: 'Prodem',
        imagen: 'https://bandejasprodem.com.ar/images/logo/logo-white.png',
        link: 'https://bandejasprodem.com.ar/'
      },
      {
        id: 7,
        nombre: 'Tecnocom',
        imagen: 'https://tecnocomonline.com.ar/wp-content/uploads/sites/71/2023/02/Logo-tecnocom-.png',
        link: 'https://tecnocomonline.com.ar/'
      },
      {
        id: 8,
        nombre: 'DAISA',
        imagen: 'https://microcontrol.com.ar/storage/2023/12/daisa.png',
        link: 'https://microcontrol.com.ar/categoria-producto/daisa/',
      },
    ],
    
    // Conductores Eléctricos 
    3: [
      {
        id: 1,
        nombre: 'Trefilcom',
        imagen: trefilconImg,
        link: 'https://trefilcon.com.ar/productos/'
      },
      {
        id: 2,
        nombre: 'Argenplas',
        imagen: 'https://www.argenplas.net/wp-content/uploads/2020/05/logo_curves-white.png',
        link: 'https://www.argenplas.net/productos/'
      },
      {
        id: 3,
        nombre: 'Kalop',
        imagen: kalopLogo,
        link: kalopCat3
      },
    ],
    // Artefactos iluminación / Lámparas
    4: [
      {
        id: 1,
        nombre: 'Macroled',
        imagen: macroledLogo,
        link: macroledCat4
      },
      {
        id: 2,
        nombre: 'Ferrolux',
        imagen: 'https://ferrolux.com.ar/public/img/logo_ferrolux.png',
        link: 'https://ferrolux.com.ar/public/catalogo/ferrolux-catalogo_2023.pdf '
      },
      {
        id: 3,
        nombre: 'Candil',
        imagen: 'https://www.candil.com.ar/Resources/candil.jpg',
        link: 'https://www.candil.com.ar/home.aspx'
      }
    ],
    // Herramientas / Grupos electrógenos
    5: [
      {
        id: 1,
        nombre: 'Jadever',
        imagen: 'https://herramientasjadever.cl/cdn/shop/files/LOGO_JADEVER_1.png?v=1727963455&width=170',
        link: 'https://www.jadeverherramientas.com/productos'
      },
      {
        id: 2,
        nombre: 'Fischer',
        imagen: 'https://media.fischer.group/v7/_media-prod_/national/samples/logos/fischer-logo-s-pos-rgb.png?func=bound&w=194&h=30',
        link: 'https://www.fischer-group.com/es-AR'
      }
    ],
    // Llaves de luz / Porteros / Domicilios
    6: [
      {
        id: 1,
        nombre: 'Comax',
        imagen: 'https://http2.mlstatic.com/storage/mshops-appearance-api/images/86/206072686/logo-2020041815021906700.png',
        link: 'https://comax.com.ar/'
      },
      {
        id: 2,
        nombre: 'Richi',
        imagen: 'https://richi.com.ar/img/logo.svg',
        link: 'https://richi.com.ar/'
      },
      {
        id: 3,
        nombre: 'Jeluz',
        imagen: 'https://jeluz.net/cdn/shop/files/jeluz-logo-header_500x.png?v=1668704909',
        link: 'https://cdn.shopify.com/s/files/1/0259/9292/1137/files/catalogo_productos-2023.pdf?v=1736446950'
      },
      {
        id: 4,
        nombre: 'Cambre',
        imagen: 'https://cambre.com.ar/web/images/cambre-logo.png',
        link: 'https://cambre.com.ar/'
      },
      {
        id: 5,
        nombre: 'Kalop',
        imagen: kalopLogo,
        link: kalopCat6,
      },
      {
        id: 6,
        nombre: 'Macroled',
        imagen: macroledLogo,
        link: macroledCat6
      },
    ],
  };

   // Función para manejar el clic en una categoría
  const handleCategoriaClick = (categoria) => {
    navigate(`/productos/${categoria.id}`);
  };

 // Función para manejar el clic en un proveedor
  const handleProveedorClick = (proveedor) => {
    if (proveedor.link) {
      window.open(proveedor.link, '_blank');
    }
  };

  // Función para volver atrás
  const handleVolver = () => {
    navigate('/productos');
  };

  return (
    <section id="productos" className="productos-section">
      <h1>Nuestros Productos</h1>
      
      {categoriaSeleccionada ? (
        <div className="proveedores-container">
          <button onClick={handleVolver} className="btn-volver">
            Volver a categorías
          </button>
          <h2>Proveedores de {categoriaSeleccionada.nombre}</h2>
          
          <div className="proveedores-grid">
            {proveedoresPorCategoria[categoriaSeleccionada.id]?.map(proveedor => (
              <div 
                key={proveedor.id} 
                className="proveedor-card"
                onClick={() => handleProveedorClick(proveedor)}
              >
                <img src={proveedor.imagen} alt={proveedor.nombre} />
                <h3>{proveedor.nombre}</h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="categorias-grid">
          {categorias.map(categoria => (
            <div 
              key={categoria.id} 
              className="categoria-card"
              onClick={() => handleCategoriaClick(categoria)}
            >
              <img src={categoria.imagen} alt={categoria.nombre} />
              <h3>{categoria.nombre}</h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Productos;