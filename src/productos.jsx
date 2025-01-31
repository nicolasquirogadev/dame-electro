import React, { useState } from 'react';
import './productos.css'; // Archivo de estilos para este componente
import CatalogoProveedor from './CatalogoProveedor'; // Importar el componente reutilizable

const Productos = () => {
  // Estado para almacenar el proveedor seleccionado
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);

  // Datos de los proveedores (puedes cambiarlos o cargarlos dinámicamente)
  const proveedores = [
    {
      id: 1,
      nombre: 'Proveedor 1',
      imagen: 'ruta/a/imagen1.jpg',
      subcategorias: [
        {
          id: 1,
          nombre: 'Subcategoría 1',
          imagen: 'ruta/a/subcategoria1.jpg', // Ruta de la imagen de la subcategoría 1
          enlace: 'https://www.ejemplo.com/catalogo1',
        },
        {
          id: 2,
          nombre: 'Subcategoría 2',
          imagen: 'ruta/a/subcategoria2.jpg', // Ruta de la imagen de la subcategoría 2
          enlace: 'https://www.ejemplo.com/catalogo2',
        },
      ],
    },
    {
      id: 2,
      nombre: 'FORLI',
      imagen: '/src/assets/forli.jpg',
      subcategorias: [
        {
          id: 1,
          nombre: 'Gabinetes Estancos',
          imagen: '/src/assets/gab-estanco.jpg', // Ruta de la imagen de la subcategoría A
          enlace: 'https://www.forli.com.ar/gabinetes-estancos/',
        },
        {
          id: 2,
          nombre: 'Gabinetes Especiales',
          imagen: '/src/assets/gab-especial.jpg', // Ruta de la imagen de la subcategoría B
          enlace: 'https://www.forli.com.ar/gabinetes-especiales/',
        },
        {
            id: 3,
            nombre: 'Gabinetes Modulares F50M',
            imagen: '/src/assets/gab-modular.jpg', // Ruta de la imagen de la subcategoría B
            enlace: 'https://www.forli.com.ar/gabinetes-especiales/',
          },
          {
            id: 4,
            nombre: 'Cajas Plasticas',
            imagen: '/src/assets/gab-especial.jpg', // Ruta de la imagen de la subcategoría B
            enlace: 'https://www.forli.com.ar/cajas-plasticas/',
          },
          {
            id: 5,
            nombre: 'Cajas de Empotrar y Derivación',
            imagen: '/src/assets/caja-empotrar.jpg', // Ruta de la imagen de la subcategoría B
            enlace: 'https://www.forli.com.ar/cajas-de-empotrar-y-derivacion/',
          },
          {
            id: 6,
            nombre: 'Accesorios',
            imagen: '/src/assets/accesorios.jpg', // Ruta de la imagen de la subcategoría B
            enlace: 'https://www.forli.com.ar/accesorios/',
          }
      ],
    },
    {
      id: 3,
      nombre: 'Proveedor 3',
      imagen: 'ruta/a/imagen3.jpg',
      subcategorias: [
        {
          id: 1,
          nombre: 'Subcategoría X',
          imagen: 'ruta/a/subcategoriaX.jpg', // Ruta de la imagen de la subcategoría X
          enlace: 'https://www.proveedor3.com/catalogoX',
        },
        {
          id: 2,
          nombre: 'Subcategoría Y',
          imagen: 'ruta/a/subcategoriaY.jpg', // Ruta de la imagen de la subcategoría Y
          enlace: 'https://www.proveedor3.com/catalogoY',
        },
      ],
    },
  ];

  // Función para manejar el clic en un proveedor
  const handleProveedorClick = (proveedor) => {
    setProveedorSeleccionado(proveedor);
  };

  // Función para volver a la vista de todos los proveedores
  const handleVolver = () => {
    setProveedorSeleccionado(null);
  };

  return (
    <section id="productos" className="productos-section">
      <h1>Nuestros Proveedores</h1>
      {proveedorSeleccionado ? (
        // Muestra el catálogo del proveedor seleccionado
        <CatalogoProveedor
          nombreProveedor={proveedorSeleccionado.nombre}
          subcategorias={proveedorSeleccionado.subcategorias}
          onVolver={handleVolver} // Pasa la función para volver atrás
        />
      ) : (
        // Muestra la lista de proveedores
        <div className="proveedores-grid">
          {proveedores.map((proveedor) => (
            <div
              key={proveedor.id}
              className="proveedor-link"
              onClick={() => handleProveedorClick(proveedor)} // Maneja el clic en el proveedor
            >
              <img
                src={proveedor.imagen}
                alt={proveedor.nombre}
                className="proveedor-imagen"
              />
              <p className="proveedor-nombre">{proveedor.nombre}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Productos;