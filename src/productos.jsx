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
import lamparasImg from './assets/lamparas.jpeg';
import artefactosImg from './assets/artefactos.jpeg';
import metalicosImg from './assets/metalicos.jpeg';
import pcImg from './assets/pc.jpeg';
import interruptoresImg from './assets/interruptores.jpeg'
import smartImg from './assets/smart.jpeg'
import sensoresImg from './assets/sensores.jpeg'
import interiorImg from './assets/interior.jpeg'
import emergenciaImg from './assets/emergencia.jpeg'
import exteriorImg from './assets/exterior.jpeg'
import inteckImg from './assets/inteck.jpeg'
import solarImg from './assets/solar.jpeg'
import mesaImg from './assets/mesa.jpeg'
import altapotImg from './assets/altapot.jpeg'
import tirasImg from './assets/tiras.jpeg'


const Productos = () => {
  // Estado para almacenar el proveedor seleccionado
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState(null);

  // Datos de los proveedores (puedes cambiarlos o cargarlos dinámicamente)
  const proveedores = [
    {
      id: 1,
      nombre: 'Macroled',
      imagen: macroledLogo,
      subcategorias: [
        {
          id: 1,
          nombre: 'Lámparas',
          imagen: lamparasImg, 
          productos: [
            {
              id: 1,
              nombre: 'BT-55-7',
              imagen: 'BT-55-7',
              detalles: "Lámpara LED de alta eficiencia energética, ideal para uso residencial y comercial",
              especificaciones: 
                {
                  potencia: '6.5W',
                  eficiencia: 'A++',
                  conector: 'E27',
                  corriente: '55mA',
                  equivalencia: "55W", // Equivalencia en lámparas incandescentes
                  flujoLuminoso: "600 lm", 
                  temperaturaColor: "3000K",
                  indiceReproduccionCromatica: ">80 CRI", 
                  anguloApertura: "120°", 
                  vidaUtil: "15.000 horas", 
                  eficienciaEnergetica: "A++", 
                  tension: "100-240V", 
                  frecuencia: "50/60Hz", 
                  factorPotencia: ">0.5", 
                  proteccion: "IP20", 
                  material: "Plástico ABS", 
                  dimensiones: {
                    diametro: "55mm",
                    altura: "110mm"
                  },
                  certificaciones: ["CE", "RoHS"], // Certificaciones del producto
                },
              enlaceFichaTecnica: "https://cdn.prod.website-files.com/65f1fdd7248b6709fdebe904/678e6b1bd61c9aa89e6f8fdc_bulbos.pdf", // Enlace al PDF 
            },
            {
              id: 2,
              nombre: 'BT-60-10',
              imagen: 'BT-60-10',
              detalles: 'Lámpara LED de alta eficiencia energética, ideal para uso residencial y comercial',
              especificaciones: {
                potencia: '9.5W',
                eficiencia: 'A+',
                conector: 'E27',
                corriente: '77mA',
                equivalencia: '75W',
                flujoLuminoso: '950 lm',
                temperaturaColor: '3000K',
                indiceReproduccionCromatica: '>80 CRI',
                anguloApertura: '220°',
                vidaUtil: '15.000 horas',
                eficienciaEnergetica: 'A+',
                tension: '220-240V',
                frecuencia: '50/60Hz',
                factorPotencia: '>0.5',
                proteccion: 'IP20',
                material: 'PC y Aluminio',
                dimensiones: {
                  diametro: '60mm',
                  altura: '113mm',
                },
                peso: '30g',
                certificaciones: ['CE', 'RoHS'],
              },
              enlaceFichaTecnica: 'https://cdn.prod.website-files.com/65f1fdd7248b6709fdebe904/678e6b1bd61c9aa89e6f8fdc_bulbos.pdf',
            },
            {
              id: 3,
              nombre: 'BT-60-12',
              imagen: 'BT-60-12',
              detalles: 'Lámpara LED de alta eficiencia energética, ideal para uso residencial y comercial',
              especificaciones: {
                potencia: '11.5W',
                eficiencia: 'A+',
                conector: 'E27',
                corriente: '93mA',
                equivalencia: '85W',
                flujoLuminoso: '1100 lm',
                temperaturaColor: '3000K',
                indiceReproduccionCromatica: '>80 CRI',
                anguloApertura: '220°',
                vidaUtil: '15.000 horas',
                eficienciaEnergetica: 'A+',
                tension: '220-240V',
                frecuencia: '50/60Hz',
                factorPotencia: '>0.5',
                proteccion: 'IP20',
                material: 'PC y Aluminio',
                dimensiones: {
                  diametro: '60mm',
                  altura: '118mm',
                },
                peso: '36g',
                certificaciones: ['CE', 'RoHS'],
              },
              enlaceFichaTecnica: 'https://cdn.prod.website-files.com/65f1fdd7248b6709fdebe904/678e6b1bd61c9aa89e6f8fdc_bulbos.pdf',
            },
            {
              id: 4,
              nombre: 'BT-60-15',
              imagen: 'BT-60-15',
              detalles: 'Lámpara LED de alta eficiencia energética, ideal para uso residencial y comercial',
              especificaciones: {
                potencia: '14.5W',
                eficiencia: 'A+',
                conector: 'E27',
                corriente: '117mA',
                equivalencia: '100W',
                flujoLuminoso: '1400 lm',
                temperaturaColor: '3000K',
                indiceReproduccionCromatica: '>80 CRI',
                anguloApertura: '220°',
                vidaUtil: '15.000 horas',
                eficienciaEnergetica: 'A+',
                tension: '220-240V',
                frecuencia: '50/60Hz',
                factorPotencia: '>0.5',
                proteccion: 'IP20',
                material: 'PC y Aluminio',
                dimensiones: {
                  diametro: '60mm',
                  altura: '118mm',
                },
                peso: '43g',
                certificaciones: ['CE', 'RoHS'],
              },
              enlaceFichaTecnica: 'https://cdn.prod.website-files.com/65f1fdd7248b6709fdebe904/678e6b1bd61c9aa89e6f8fdc_bulbos.pdf',
            },
            {
              id: 5,
              nombre: 'BTF-1.8-14',
              imagen: 'BTF-1.8-14',
              detalles: "Lámpara LED especial para refrigeradores y pequeños espacios.",
              especificaciones: {
                  potencia: '1.8W',
                  eficiencia: 'A+',
                  conector: 'E14',
                  corriente: '13mA',
                  equivalencia: '15W',
                  flujoLuminoso: '140 lm',
                  temperaturaColor: '3000K',
                  indiceReproduccionCromatica: '>80 CRI',
                  anguloApertura: '360°',
                  vidaUtil: '15.000 horas',
                  eficienciaEnergetica: 'A+',
                  tension: '180-240V',
                  frecuencia: '50/60Hz',
                  factorPotencia: '>0.5',
                  proteccion: 'IP20',
                  material: 'PC y Aluminio',
                  dimensiones: {
                      diametro: '18mm',
                      altura: '51mm',
                  },
                  peso: '10.2g',
                  certificaciones: ['CE', 'RoHS'],
              },
              enlaceFichaTecnica: "https://cdn.prod.website-files.com/65f1fdd7248b6709fdebe904/678e6b1bd61c9aa89e6f8fdc_bulbos.pdf#page=2"
          },
          {
              id: 6,
              nombre: 'BTF-4-14',
              imagen: 'BTF-4-14',
              detalles: "Lámpara LED especial para refrigeradores y pequeños espacios.",
              especificaciones: {
                  potencia: '3W',
                  eficiencia: 'A+',
                  conector: 'E14',
                  corriente: '30mA',
                  equivalencia: '40W',
                  flujoLuminoso: '270 lm',
                  temperaturaColor: '3000K',
                  indiceReproduccionCromatica: '>80 CRI',
                  anguloApertura: '360°',
                  vidaUtil: '15.000 horas',
                  eficienciaEnergetica: 'A+',
                  tension: '180-240V',
                  frecuencia: '50/60Hz',
                  factorPotencia: '>0.5',
                  proteccion: 'IP20',
                  material: 'PC y Aluminio',
                  dimensiones: {
                      diametro: '18mm',
                      altura: '51mm',
                  },
                  peso: '10.2g',
                  certificaciones: ['CE', 'RoHS'],
              },
              enlaceFichaTecnica: "https://cdn.prod.website-files.com/65f1fdd7248b6709fdebe904/678e6b1bd61c9aa89e6f8fdc_bulbos.pdf#page=2"
          },
          ],
        },
        {
          id: 2,
          nombre: 'Artefactos Lámparas',
          imagen: artefactosImg, 
          productos: [
            {
              id: 1,
              nombre: 'Producto 1',
              detalles: 'Detalles del producto 1',
              imagen: '',
            }
          ],
        },
        {
          id: 3,
          nombre: 'Artefactos Metálicos',
          imagen: metalicosImg, 
          productos: [
            {
              id: 1,
              nombre: 'Metal Slug 2',
              detalles: 'Es un juegazo por eso lo pongo',
              imagen: '',
            }
          ],
        },
        {
          id: 4,
          nombre: 'Artefactos PC',
          imagen: pcImg, 
          productos: [
            {
              id: 1,
              nombre: 'Producto 1',
              detalles: 'Detalles del producto 1',
              imagen: '',
            }
          ],
        },
        {
          id: 5,
          nombre: 'Interruptores y tomas',
          imagen: interruptoresImg, 
          productos: [
            {
              id: 1,
              nombre: 'Producto 1',
              detalles: 'Detalles del producto 1',
              imagen: '',
            }
          ],
        },
        {
          id: 6,
          nombre: 'Smart',
          imagen: smartImg, 
          productos: [
            {
              id: 1,
              nombre: 'Producto 1',
              detalles: 'Detalles del producto 1',
              imagen: '',
            }
          ],
        },
        {
          id: 7,
          nombre: 'Sensores y Fotocélulas',
          imagen: sensoresImg, 
          productos: [
            {
              id: 1,
              nombre: 'Producto 1',
              detalles: 'Detalles del producto 1',
              imagen: '',
            }
          ],
        },
        {
          id: 8,
          nombre: 'Artefactos Integrados Interior',
          imagen: interiorImg, 
          productos: [
            {
              id: 1,
              nombre: 'Producto 1',
              detalles: 'Detalles del producto 1',
              imagen: '',
            }
          ],
        },
        {
          id: 9,
          nombre: 'Luces de Emergencia',
          imagen: emergenciaImg, 
          productos: [
            {
              id: 1,
              nombre: 'Producto 1',
              detalles: 'Detalles del producto 1',
              imagen: '',
            }
          ],
        },
        {
          id: 10,
          nombre: 'Artefactos Exterior',
          imagen: exteriorImg, 
          productos: [
            {
              id: 1,
              nombre: 'Producto 1',
              detalles: 'Detalles del producto 1',
              imagen: '',
            }
          ],
        },
        {
          id: 11,
          nombre: 'INTECK',
          imagen: inteckImg, 
          productos: [
            {
              id: 1,
              nombre: 'Producto 1',
              detalles: 'Detalles del producto 1',
              imagen: '',
            }
          ],
        },
        {
          id: 12,
          nombre: 'Solar',
          imagen: solarImg, 
          productos: [
            {
              id: 1,
              nombre: 'Producto 1',
              detalles: 'Detalles del producto 1',
              imagen: '',
            }
          ],
        },
        {
          id: 13,
          nombre: 'Lámparas de Mesa y Pie',
          imagen: mesaImg, 
          productos: [
            {
              id: 1,
              nombre: 'Producto 1',
              detalles: 'Detalles del producto 1',
              imagen: '',
            }
          ],
        },
        {
          id: 14,
          nombre: 'Alta Potencia',
          imagen: altapotImg, 
          productos: [
            {
              id: 1,
              nombre: 'Producto 1',
              detalles: 'Detalles del producto 1',
              imagen: '',
            }
          ],
        },
        {
          id: 15,
          nombre: 'Tiras y Fuentes',
          imagen: tirasImg, 
          productos: [
            {
              id: 1,
              nombre: 'Producto 1',
              detalles: 'Detalles del producto 1',
              imagen: '',
            }
          ],
        },
      ],
    },
    {
      id: 2,
      nombre: 'FORLI',
      imagen: forliImg,
      subcategorias: [
        {
          id: 1,
          nombre: 'Gabinetes Estancos',
          imagen: gabEstancoImg, 
          enlace: 'https://www.forli.com.ar/gabinetes-estancos/',
        },
        {
          id: 2,
          nombre: 'Gabinetes Especiales',
          imagen: gabEspecialImg, 
          enlace: 'https://www.forli.com.ar/gabinetes-especiales/',
        },
        {
            id: 3,
            nombre: 'Gabinetes Modulares F50M',
            imagen: gabModularImg, 
            enlace: 'https://www.forli.com.ar/gabinetes-especiales/',
          },
          {
            id: 4,
            nombre: 'Cajas de Empotrar y Derivación',
            imagen: cajaEmpotrarImg,
            enlace: 'https://www.forli.com.ar/cajas-de-empotrar-y-derivacion/',
          },
          {
            id: 5,
            nombre: 'Accesorios',
            imagen: accesoriosImg, 
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
          imagen: 'ruta/a/subcategoriaX.jpg',
          enlace: 'https://www.proveedor3.com/catalogoX',
        },
        {
          id: 2,
          nombre: 'Subcategoría Y',
          imagen: 'ruta/a/subcategoriaY.jpg', 
          enlace: 'https://www.proveedor3.com/catalogoY',
        },
      ],
    },
  ];

  // Función para manejar el clic en un proveedor
  const handleProveedorClick = (proveedor) => {
    setProveedorSeleccionado(proveedor);
  };

  // Función para manejar el clic en una subcategoría
  const handleSubcategoriaClick = (subcategoria) => {
    setSubcategoriaSeleccionada(subcategoria);
  };

  // Función para volver a la vista de todos los proveedores
  const handleVolver = () => {
    setProveedorSeleccionado(null);
  };

  return (
    <section id="productos" className="productos-section">
      <h1>Nuestros Proveedores</h1>
      {subcategoriaSeleccionada ? (
        // Muestra los productos de la subcategoría seleccionada
        <ProductosSubcategoria
          subcategoria={subcategoriaSeleccionada}
          onVolver={() => setSubcategoriaSeleccionada(null)}
        />
      ) : proveedorSeleccionado ? (
        // Muestra el catálogo del proveedor seleccionado
        <CatalogoProveedor
          nombreProveedor={proveedorSeleccionado.nombre}
          subcategorias={proveedorSeleccionado.subcategorias}
          onSubcategoriaClick={handleSubcategoriaClick} // Pasa la función para manejar el clic en una subcategoría
          onVolver={handleVolver}
        />
      ) : (
        // Muestra la lista de proveedores
        <div className="proveedores-grid">
          {proveedores.map((proveedor) => (
            <div
              key={proveedor.id}
              className="proveedor-link"
              onClick={() => setProveedorSeleccionado(proveedor)}
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