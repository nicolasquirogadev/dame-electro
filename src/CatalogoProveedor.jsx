import React from 'react';
import './CatalogoProveedor.css'; // Archivo de estilos para este componente

const CatalogoProveedor = ({ nombreProveedor, subcategorias, onVolver }) => {
  return (
    <div id="catalogo-proveedor" className="catalogo-proveedor-section">
      <h2>Catálogo {nombreProveedor}</h2>
      <div className="subcategorias-grid">
        {subcategorias.map((subcategoria) => (
          <a
            key={subcategoria.id}
            href={subcategoria.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="subcategoria-link"
          >
            <img
              src={subcategoria.imagen}
              alt={subcategoria.nombre}
              className="subcategoria-imagen"
            />
            <p className="subcategoria-nombre">{subcategoria.nombre}</p>
          </a>
        ))}
      </div>
      {/* Botón para volver atrás */}
      <button className="volver-btn" onClick={onVolver}>
        Volver
      </button>
    </div>
  );
};

export default CatalogoProveedor;