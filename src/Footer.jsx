import './footer.css'

const Footer = () => {
    const businessAddress = "Av. Triunvirato 5515, Ciudad de Buenos Aires.";
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1161.5771535864565!2d-58.49364287046134!3d-34.56782456064262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb75b8d44e37b%3A0xe905724413446035!2sElectricidad%20DAME!5e0!3m2!1ses!2sar!4v1746136187457!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`;
  
    return (
      <footer className="site-footer" id='footer'>
        <div className="footer-content">
          <div className="map-container">
            <iframe
              title="Ubicación del negocio"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src={mapUrl}
              zoom="200%"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="footer-info">
            <h3>Distribuidora Argentina de Materiales Eléctricos</h3>
            <p>{businessAddress}</p>
            
            <a href="https://wa.me/5491130733557" target="_blank">
              <i class="fa-brands fa-whatsapp"></i>
            +54 11 3073-3557
            </a>

            <a href="#footer"> 
              <i class="fa-regular fa-clock"></i>
              Lunes a Viernes de 9:00 a 17:00
              </a>

            <a href="mailto:dameelectricidad.ventas@gmail.com" target='_blank'> 
              <i class="fa-regular fa-envelope"></i>
               dameelectricidad.ventas@gmail.com
            </a>

          
            <a href="https://www.instagram.com/dame.electricidad/" target='_blank'>
            <i className="fa-brands fa-instagram"></i>
            @dame.electricidad
            </a>
          
            
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} D.A.M.E. - Todos los derechos reservados</p>
        </div>
      </footer>
    );
  };

  export default Footer;