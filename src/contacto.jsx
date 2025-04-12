import './contacto.css'

function Contacto() {

    return (
        <section id="contacto">
            <h1>Comunicate con D.A.M.E.</h1>
            <p>Envianos tu consulta o pedi tu presupuesto por el medio que elijas:</p>

            <div className="cont-wrapper">

            <div className="contact-link">
                <div className="contact-icon">
                    <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-content">
                    <h4 className='contact-title'>Telefono:</h4>
                    <p>+54 9 11 4567-8901</p>
                </div>
            </div>

            <div className="contact-link">
                <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-content">
                    <h4 className='contact-title'>Escribinos por email:</h4>
                    <p>dame@gmail.com</p>
                </div>
            </div>

            <div className="contact-link">
                <div className="contact-icon">
                <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="contact-content">
                    <h4 className='contact-title'>WhatsApp:</h4>
                    <p>+54 9 11 4567-8901</p>
                </div>
            </div>

            <div className="contact-link">
                <div className="contact-icon">
                    <i className="fa-regular fa-clock"></i>
                </div>
                <div className="contact-content">
                    <h4 className='contact-title'>Horario de atencion:</h4>
                    <p>Lunes a Viernes de 9:00 a 17:00</p>
                </div>
            </div>

            </div>
        </section>
    )
}

export default Contacto