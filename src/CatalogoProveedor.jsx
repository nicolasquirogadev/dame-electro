import React from 'react';
import './CatalogoProveedor.css';

const CatalogoProveedor = ({ nombreProveedor, subcategorias, onSubcategoriaClick, onVolver }) => {
  return (
    <div id="catalogo-proveedor" className="catalogo-proveedor-section">
      <h2>Catálogo {nombreProveedor}</h2>
      <button className="volver-btn" onClick={onVolver}>
        Volver
      </button>

      <div className="subcategorias-grid">
        {subcategorias.map((subcategoria) => (
          <div
            key={subcategoria.id}
            className="subcategoria-link"
            onClick={() => onSubcategoriaClick(subcategoria)}
          >
            <img
              src={subcategoria.imagen}
              alt={subcategoria.nombre}
              className="subcategoria-imagen"
            />
            <p className="subcategoria-nombre">{subcategoria.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogoProveedor;