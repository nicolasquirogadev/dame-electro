import React, { useState } from 'react';
import './productos.css'; // Archivo de estilos para este componente

// imagenes Forli
import forliImg from './assets/forli.jpg';
import gabEstancoImg from './assets/gab-estanco.jpg';
import trefilconImg from './assets/trefilcon.png';
import gabModularImg from './assets/gab-modular.jpg';
import cajaEmpotrarImg from './assets/caja-empotrar.jpg';
import accesoriosImg from './assets/accesorios.jpg';

//imagenes categorias Macroled
import macroledLogo from './assets/Macroled.logo.png';
import iluminacionImg from './assets/lamparas.jpeg';
import artefactosImg from './assets/artefactos.jpeg';
import metalicosImg from './assets/metalicos.jpeg';
import pcImg from './assets/pc.jpeg';
import interruptoresImg from './assets/interruptores.jpeg'
import smartHomeImg from './assets/smart.jpeg'
import sensoresImg from './assets/sensores.jpeg'
import interiorImg from './assets/interior.jpeg'
import emergenciaImg from './assets/emergencia.jpeg'
import exteriorImg from './assets/exterior.jpeg'
import electricidadImg from './assets/inteck.jpeg'
import solarImg from './assets/solar.jpeg'
import mesaImg from './assets/mesa.jpeg'
import altapotImg from './assets/altapot.jpeg'
import tirasImg from './assets/tiras.jpeg'


  // Datos de los proveedores (puedes cambiarlos o cargarlos dinámicamente)
  const Productos = () => {
    // Estados para manejar la navegación
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);
  
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
        imagen: electricidadImg,
      },
      {
        id: 3,
        nombre: 'Conductores Eléctricos',
        imagen: smartHomeImg,
      },
      {
        id: 4,
        nombre: 'Artefactos iluminación / Lámparas',
        imagen: smartHomeImg,
      },
      {
        id: 5,
        nombre: 'Herramientas / Grupos electrógenos',
        imagen: smartHomeImg,
      },
      {
        id: 6,
        nombre: 'Llaves de luz / Porteros / Domicilios',
        imagen: smartHomeImg,
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
          productos: [
            {
              id: 1,
              nombre: 'BT-55-7',
              imagen: 'BT-55-7',
              detalles: "Lámpara LED de alta eficiencia energética...",
              especificaciones: {
                // ... especificaciones del producto
              },
              enlaceFichaTecnica: "..."
            },
            // Más productos de iluminación del proveedor
          ]
        },
        {
          id: 2,
          nombre: 'Chint',
          imagen: 'https://imgs.search.brave.com/Kv08z_BtZ-0_w3YKHtpUEfyFtMBNrPCuMwsea6ccsyc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly94bi0t/YW9zbHV6LXd3YS5j/b20uYXIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDYvY2hp/bnRFbGVjdHJpYy5q/cGc',
          productos: [
            {
              id: 1,
              nombre: 'BT-55-7',
              imagen: 'BT-55-7',
              detalles: "Lámpara LED de alta eficiencia energética...",
              especificaciones: {
                // ... especificaciones del producto
              },
              enlaceFichaTecnica: "..."
            },
            // Más productos de iluminación del proveedor
          ]
        },
        {
          id: 3,
          nombre: 'Schneider',
          imagen: 'https://www.se.com/ar/es/assets/v2/696/media/202250/SE_logo-LIO-white_header.svg',
          productos: [
            {
              id: 1,
              nombre: 'BT-55-7',
              imagen: 'BT-55-7',
              detalles: "Lámpara LED de alta eficiencia energética...",
              especificaciones: {
                // ... especificaciones del producto
              },
              enlaceFichaTecnica: "..."
            },
            // Más productos de iluminación del proveedor
          ]
        },
        {
          id: 4,
          nombre: 'ABB',
          imagen: 'https://global.abb/content/dam/abb-etc/commons/abb-logo.svg',
          productos: [
            {
              id: 1,
              nombre: 'BT-55-7',
              imagen: 'BT-55-7',
              detalles: "Lámpara LED de alta eficiencia energética...",
              especificaciones: {
                // ... especificaciones del producto
              },
              enlaceFichaTecnica: "..."
            },
            // Más productos de iluminación del proveedor
          ]
        },
        {
          id: 5,
          nombre: 'Elibet',
          imagen: 'https://www.elibet.com/wp-content/uploads/2020/03/elibet.png',
          productos: [
            {
              id: 1,
              nombre: 'BT-55-7',
              imagen: 'BT-55-7',
              detalles: "Lámpara LED de alta eficiencia energética...",
              especificaciones: {
                // ... especificaciones del producto
              },
              enlaceFichaTecnica: "..."
            },
            // Más productos de iluminación del proveedor
          ]
        },
        {
          id: 6,
          nombre: 'Baw',
          imagen: 'https://bawelectric.com/assets/LOGO',
          productos: [
            {
              id: 1,
              nombre: 'BT-55-7',
              imagen: 'BT-55-7',
              detalles: "Lámpara LED de alta eficiencia energética...",
              especificaciones: {
                // ... especificaciones del producto
              },
              enlaceFichaTecnica: "..."
            },
            // Más productos de iluminación del proveedor
          ]
        },
      ],
      
      // Canalización / Cajas / Tableros
      2: [
        {
          id: 1,
          nombre: 'FORLI',
          imagen: forliImg,
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 2,
          nombre: 'Genrod',
          imagen: 'https://genrod.com.ar/img/logo-genrod-footer-tagline.svg',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 3,
          nombre: 'Cabrera',
          imagen: 'https://cabrera.net.ar/wp-content/uploads/2024/11/logo-white.svg',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 4,
          nombre: 'Kalop',
          imagen: 'https://kalop.com.ar/wp-content/uploads/2024/05/logokalopv0.webp',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 5,
          nombre: 'AG',
          imagen: 'https://agmetalurgica.com.ar/images/agm_web_marca_blanco.png',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 6,
          nombre: 'Prodem',
          imagen: 'https://bandejasprodem.com.ar/images/logo/logo-white.png',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 7,
          nombre: 'Tecnocom',
          imagen: 'https://tecnocomonline.com.ar/wp-content/uploads/sites/71/2023/02/Logo-tecnocom-.png',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 8,
          nombre: 'DAISA',
          imagen: 'https://microcontrol.com.ar/storage/2023/12/daisa.png',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
      ],
      
      // Conductores Eléctricos 
      3: [
        {
          id: 1,
          nombre: 'Trefilcom',
          imagen: trefilconImg,
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 2,
          nombre: 'Argenplas',
          imagen: 'https://www.argenplas.net/wp-content/uploads/2020/05/logo_curves-white.png',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 3,
          nombre: 'Kalop',
          imagen: 'https://kalop.com.ar/wp-content/uploads/2024/05/logokalopv0.webp',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
      ],
      // Artefactos iluminación / Lámparas
      4: [
        {
          id: 1,
          nombre: 'Macroled',
          imagen: macroledLogo,
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 2,
          nombre: 'Ferrolux',
          imagen: 'https://ferrolux.com.ar/public/img/logo_ferrolux.png',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 3,
          nombre: 'Candil',
          imagen: 'https://www.candil.com.ar/Resources/candil.jpg',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        }
      ],
      // Herramientas / Grupos electrógenos
      5: [
        {
          id: 1,
          nombre: 'Jadever',
          imagen: 'https://herramientasjadever.cl/cdn/shop/files/LOGO_JADEVER_1.png?v=1727963455&width=170',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 2,
          nombre: 'Fischer',
          imagen: 'https://media.fischer.group/v7/_media-prod_/national/samples/logos/fischer-logo-s-pos-rgb.png?func=bound&w=194&h=30',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        }
      ],
      // Llaves de luz / Porteros / Domicilios
      6: [
        {
          id: 1,
          nombre: 'Comax',
          imagen: 'https://http2.mlstatic.com/storage/mshops-appearance-api/images/86/206072686/logo-2020041815021906700.png',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 2,
          nombre: 'Richi',
          imagen: 'https://richi.com.ar/img/logo.svg',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 3,
          nombre: 'Jeluz',
          imagen: 'https://jeluz.net/cdn/shop/files/jeluz-logo-header_500x.png?v=1668704909',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 4,
          nombre: 'Cambre',
          imagen: 'https://cambre.com.ar/web/images/cambre-logo.png',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 5,
          nombre: 'Kalop',
          imagen: 'https://kalop.com.ar/wp-content/uploads/2024/05/logokalopv0.webp',
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
        {
          id: 6,
          nombre: 'Macroled',
          imagen: macroledLogo,
          productos: [
            // Gabinetes
            {
              id: 1,
              nombre: 'Gabinetes Estancos',
              imagen: gabEstancoImg,
              detalles: "Gabinetes estancos para instalaciones eléctricas...",
              enlace: 'https://www.forli.com.ar/gabinetes-estancos/'
            },
            // Más productos eléctricos del proveedor
          ]
        },
      ],
    };
  
    // Función para manejar el clic en una categoría
    const handleCategoriaClick = (categoria) => {
      setCategoriaSeleccionada(categoria);
    };
  
    // Función para manejar el clic en un proveedor
    const handleProveedorClick = (proveedor) => {
      setProveedorSeleccionado(proveedor);
    };
  
    // Función para volver atrás
    const handleVolver = () => {
      if (proveedorSeleccionado) {
        setProveedorSeleccionado(null);
      } else {
        setCategoriaSeleccionada(null);
      }
    };
  
    return (
      <section id="productos" className="productos-section">
        <h1>Nuestros Productos</h1>
        
        {proveedorSeleccionado ? (
          // Vista de productos del proveedor en la categoría seleccionada
          <div className="productos-container">
            <button onClick={handleVolver} className="btn-volver">
              Volver a proveedores
            </button>
            <h2>{proveedorSeleccionado.nombre} - {categoriaSeleccionada.nombre}</h2>
            
            <div className="productos-grid">
              {proveedorSeleccionado.productos
                .filter(producto => 
                  // Aquí podrías añadir lógica para filtrar por categoría si es necesario
                  true
                )
                .map(producto => (
                  <div key={producto.id} className="producto-card">
                    <img src={producto.imagen} alt={producto.nombre} />
                    <h3>{producto.nombre}</h3>
                    <p>{producto.detalles}</p>
                    {/* Más detalles del producto */}
                  </div>
                ))}
            </div>
          </div>
        ) : categoriaSeleccionada ? (
          // Vista de proveedores para la categoría seleccionada
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
          // Vista inicial de categorías
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