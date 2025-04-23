import React, { useState } from 'react';
import './productos.css'; // Archivo de estilos para este componente
import CatalogoProveedor from './CatalogoProveedor';
import ProductosSubcategoria from './ProductosSubcategoria';

// imagenes Forli
import forliImg from './assets/forli.jpg';
import gabEstancoImg from './assets/gab-estanco.jpg';
import gabEspecialImg from './assets/gab-especial.jpg';
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
        nombre: 'Iluminación',
        imagen: iluminacionImg,
      },
      {
        id: 2,
        nombre: 'Electricidad',
        imagen: electricidadImg,
      },
      {
        id: 3,
        nombre: 'Smart Home',
        imagen: smartHomeImg,
      },
      // Otras categorías según necesites
    ];
  
    // Datos de los proveedores organizados por categorías
    const proveedoresPorCategoria = {
      // Iluminación
      1: [
        {
          id: 1,
          nombre: 'Macroled',
          imagen: macroledLogo,
          productos: [
            // Lámparas
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
            // Más productos de iluminación de Macroled
          ]
        },
        // Otros proveedores de iluminación
      ],
      
      // Electricidad
      2: [
        {
          id: 2,
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
            // Más productos eléctricos de FORLI
          ]
        },
        // Otros proveedores de electricidad
      ],
      
      // Smart Home
      3: [
        // Proveedores de Smart Home
      ]
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