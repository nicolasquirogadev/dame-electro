import React, { useState } from 'react';
import './ProductosSubcategoria.css'; // Archivo de estilos para este componente
import images from './utils/imageLoader'
import ProductoCard from './ProductoCard'

//imagenes para Lamparas
import bubloImg from './assets/macroled/bulbos.jpeg'




const ProductosSubcategoria = ({ subcategoria, onVolver }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Datos de ejemplo para los productos (puedes cargarlos dinámicamente)
  


  return (
    <div id="productos-subcategoria" className="productos-subcategoria-section">
      <h2>{subcategoria.nombre}</h2>
      <button className="volver-btn" onClick={onVolver}>
        Volver
      </button>

      <div className="productos-grid">
        {subcategoria.productos.map((producto) => (
          <div
            key={producto.id}
            className="producto-card"
            onClick={() => setProductoSeleccionado(producto)}
          >
            <img
              src={images[producto.imagen]}
              alt={producto.nombre}
              className="producto-imagen"
              loading='lazy'
            />
            <p className="producto-nombre">{producto.nombre}</p>
          </div>
        ))}
      </div>

      {/* Tarjeta de detalles del producto */}
      {productoSeleccionado && (
        <div className="producto-detalle-overlay">
          <ProductoCard
            producto={productoSeleccionado}
            onCerrar={() => setProductoSeleccionado(null)}
          />
        </div>
      )}
    </div>
  );
};
export default ProductosSubcategoria;