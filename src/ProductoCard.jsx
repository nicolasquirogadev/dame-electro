import './ProductoCard.css'; // Archivo de estilos para este componente
import images from './utils/imageLoader'

const ProductoCard = ({ producto, onCerrar }) => {
  return (
    <div className="producto-detalle-card">
      <div className="producto-left">
        <img src={images[producto.imagen]} alt={producto.nombre} />
      </div>
      <div className="producto-right">
        <h3>{producto.nombre}</h3>
        <p>{producto.detalles}</p>
        <div className="ficha-tecnica">
          <h5>Potencia</h5>
          <p>{producto.especificaciones.potencia}</p>
          <h5>Equivalencia</h5>
          <p>{producto.especificaciones.equivalencia}</p>
          <h5>Flujo Luminoso</h5>
          <p>{producto.especificaciones.flujoLuminoso}</p>
          <h5>Temperatura de Color</h5>
          <p>{producto.especificaciones.temperaturaColor}</p>
          <h5>Vida Útil</h5>
          <p>{producto.especificaciones.vidaUtil}</p>
          <h5>Eficiencia Energética</h5>
          <p>{producto.especificaciones.eficiencia}</p>
          <h5>Diámetro</h5>
          <p>{producto.especificaciones.dimensiones.diametro}</p>
          <h5>Altura</h5>
          <p>{producto.especificaciones.dimensiones.altura}</p>
          <h5>Certificaciones</h5>
          <p>{producto.especificaciones.certificaciones.join(", ")}</p>
        <a
          href={producto.enlaceFichaTecnica}
          target="_blank"
          rel="noopener noreferrer"
          className="ficha-tecnica-link"
        >
          Ver Ficha Técnica Completa
        </a>
        </div>
      </div>
      <button className="cerrar-btn" onClick={onCerrar}>Cerrar</button>
    </div>
  );
};

export default ProductoCard;