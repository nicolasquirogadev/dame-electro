import './nosotros.css';
import Footer from './Footer'

function Nosotros() {

    return (
        <>

        <section id="nosotros">
            <div className="parallax1">
        <div className="parallax-inner">
          <h1>NOSOTROS</h1>
        </div>
      </div>
      <h2>Distribuidora Argentina de Materiales Eléctricos</h2>

      <p>Empresa con una trayectoria de 20 años, dedicada a la 
        comercialización mayorista y minorista de materiales eléctricos e 
        iluminación de marcas lideres en el rubro, garantizando 
        instalaciones 100% seguras.</p>

     <p>Somos proveedores de constructoras y desarrolladoras 
        inmobiliarias lo que nos brinda 
        una vasta experiencia en abastecimiento de obras de gran porte.</p>
      
      <div className="parallax2">
        <div className="parallax-inner">
          <h1>Titulo Titulo</h1>
        </div>
      </div>
        
        <p>Contamos con un amplio conocimiento puesto al servicio de profesionales y empresas 
            Pyme acompañando y construyendo relaciones de confianza a largo plazo.</p>
        
        <p>Si buscas un aliado estratégico no dudes en contactarnos  y conocernos.</p>
        </section>

        < Footer />

        
       </>
    )
}

export default Nosotros