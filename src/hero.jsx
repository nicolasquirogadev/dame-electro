// import Swiper core and required modules
import Footer from './Footer'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.css';
import './mediaqueries.css';
import './hero.css';
import trefilconImg from './assets/trefilcon.png';
import piroloImg from './assets/pirolo.png';
import kalopLogo from './assets/kalop-logo.png'
import productImg from './assets/macroled/BT-55-7.jpeg'

function Hero() {

    return (

        <>

    <section id="hero">

        <Swiper
      className='swiper1'
      modules={[Navigation, Pagination, ]}
      /* autoplay= {{6000}} */ 
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide className='slide1'>
        
        <div className="slide-content">
        <h1>Potenciá tu negocio con los mejores productos eléctricos</h1>
        <p>Distribuidores líderes en soluciones eléctricas de alta calidad</p>
        < Link to='/productos' className='swiper-cta'>
        <button className="cta-button">Explora nuestro catálogo</button>
        </Link>
        </div>

      </SwiperSlide>

      <SwiperSlide className="slide slide-financiacion">
          <div className="slide-content">
            <div className="bank-promo">
              <img src="https://www.bancoprovincia.com.ar/CDN/Get/logo_2021_S" alt="Banco Provincia" />
              <div className="promo-text">
                <h1><span className="highlight">4 CUOTAS SIN INTERÉS</span></h1>
                <p>+ 15% OFF en pagos con transferencia bancaria</p>
                <div className="promo-details">
                  <span>✅ Todos los productos</span>
                  <span>✅ Sin costo adicional</span>
                </div>
              </div>
            </div>
            < Link to='/servicios' className='swiper-cta'>
            <button className="cta-button">Ver condiciones</button>
            </Link>
          </div>
        </SwiperSlide>
      
      <SwiperSlide className='slide3'>
        <div className="slide-content">
        <h1><span className='neon-text'>Iluminá</span> tus espacios</h1>
        <p>Ofrecemos las mejores soluciones en iluminación eficiente y sostenible</p>
        < Link to='/productos/4' className='swiper-cta'>
        <button className="cta-button">Descubre nuestras lámparas LED</button>
        </Link>
        </div>
      </SwiperSlide>

      <SwiperSlide className="slide slide-promo">
        <div className="slide-content">
          <div className="promo-badge">MÁS VENDIDO</div>
          <h1>Lámparas LED Macroled <span className="highlight">30% OFF</span></h1>
          <p>Calidad profesional con garantía extendida de 3 años</p>
          <div className="product-features">
            <span>✔ Ahorro energético</span>
            <span>✔ Instalación inmediata</span>
            <span>✔ Stock permanente</span>
          </div>
          < Link to='/productos' className='swiper-cta'>
          <button className="cta-button">Ver oferta</button>
          </Link>
        </div>
        <div className="product-image">
          <img src={productImg} alt="Lámpara LED Macroled" />
        </div>
      </SwiperSlide>


      <SwiperSlide className="slide slide-kit">
          <div className="slide-content">
            <h1>Kit Electricista <span className="highlight">Premium</span></h1>
            <p className="kit-includes">Incluye: Cables Trefilcon + Termicas Chint + Herramientas Jadever</p>
            <div className="price-container">
              <span className="old-price">$245.000</span>
              <span className="new-price">$199.900</span>
            </div>
            <div className="stock-warning">
              <span>⚠ Últimas 15 unidades disponibles</span>
            </div>
            < Link to='/productos' className='swiper-cta'>
            <button className="cta-button">Comprar ahora</button>
            </Link>
          </div>
        </SwiperSlide>

    </Swiper>

  <div className="logos">
    <div className="logos-slide">
      <img src="https://www.argenplas.net/wp-content/uploads/2020/05/logo_curves-white.png" alt="ArgenPlas" />
      <img src="https://cambre.com.ar/web/images/cambre-logo.png" alt="Cambre" />
      <img src="https://www.candil.com.ar/Resources/candil.jpg" alt="Candil" />
      <img src="https://imgs.search.brave.com/Kv08z_BtZ-0_w3YKHtpUEfyFtMBNrPCuMwsea6ccsyc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly94bi0t/YW9zbHV6LXd3YS5j/b20uYXIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDYvY2hp/bnRFbGVjdHJpYy5q/cGc" alt="Chint" />
      <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/86/206072686/logo-2020041815021906700.png" alt="Comax" />
      <img src="https://www.elibet.com/wp-content/uploads/2020/03/elibet.png" alt="Elibet" />
      <img src={kalopLogo} alt="Kalop" />
      <img src="https://ferrolux.com.ar/public/img/logo_ferrolux.png" alt="Ferrolux" />
      <img src="https://bawelectric.com/assets/LOGO" alt="Baw" />
      <img src="https://media.fischer.group/v7/_media-prod_/national/samples/logos/fischer-logo-s-pos-rgb.png?func=bound&w=194&h=30" alt="Fischer" />
      <img src="https://www.forli.com.ar/wp-content/uploads/2017/02/logo-blanco3.png" alt="Forli" />
      <img src="https://genrod.com.ar/img/logo-genrod-footer-tagline.svg" alt="Genrod" />
      <img src="" alt="" />
      <img src="https://herramientasjadever.cl/cdn/shop/files/LOGO_JADEVER_1.png?v=1727963455&width=170" alt="Jadever" />
      <img src="https://jeluz.net/cdn/shop/files/jeluz-logo-header_500x.png?v=1668704909" alt="Jeluz" />
      <img src="" alt="" />
      <img src="https://microcontrol.com.ar/storage/2023/11/isologo-microcontrol-180x80-1.png" alt="Microcontrol" />
      <img src={piroloImg} alt="Pirolo" />
      <img src="https://www.se.com/ar/es/assets/v2/696/media/202250/SE_logo-LIO-white_header.svg" alt="Schneider" />
      <img src="https://sicaelec.vtexassets.com/arquivos/logo-header.png" alt="Sica" />
      <img src={trefilconImg} alt="Trefilcon" />
      <img src="https://tecnocomonline.com.ar/wp-content/uploads/sites/71/2023/02/Logo-tecnocom-.png" alt="Tecnocom" />
      <img src="" alt="" />
      <img src="https://richi.com.ar/img/logo.svg" alt="Richi" />
      <img src="https://www.tbcin.com.ar/static/img/logos/tbcin-bg-transparent.png" alt="TBC" />
      <img src="https://www.zoloda.com.ar/wp-content/uploads/ICONO-1.png" alt="Zoloda" />
      <img src="https://viyilant.com.ar/wp-content/uploads/2021/03/cropped-cropped-cropped-logo-viyi-pleno-RGB.png" alt="Viyilant" />
      <img src="https://samet.com.ar/assets/img/logo.png" alt="Samet" />
    </div>

    <div className="logos-slide">
      <img src="https://www.argenplas.net/wp-content/uploads/2020/05/logo_curves-white.png" alt="ArgenPlas" />
      <img src="https://cambre.com.ar/web/images/cambre-logo.png" alt="Cambre" />
      <img src="https://www.candil.com.ar/Resources/candil.jpg" alt="Candil" />
      <img src="https://imgs.search.brave.com/Kv08z_BtZ-0_w3YKHtpUEfyFtMBNrPCuMwsea6ccsyc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly94bi0t/YW9zbHV6LXd3YS5j/b20uYXIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDYvY2hp/bnRFbGVjdHJpYy5q/cGc" alt="Chint" />
      <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/86/206072686/logo-2020041815021906700.png" alt="Comax" />
      <img src="https://www.elibet.com/wp-content/uploads/2020/03/elibet.png" alt="Elibet" />
      <img src={kalopLogo} alt="Kalop" />
      <img src="https://ferrolux.com.ar/public/img/logo_ferrolux.png" alt="Ferrolux" />
      <img src="https://bawelectric.com/assets/LOGO" alt="Baw" />
      <img src="https://media.fischer.group/v7/_media-prod_/national/samples/logos/fischer-logo-s-pos-rgb.png?func=bound&w=194&h=30" alt="Fischer" />
      <img src="https://www.forli.com.ar/wp-content/uploads/2017/02/logo-blanco3.png" alt="Forli" />
      <img src="https://genrod.com.ar/img/logo-genrod-footer-tagline.svg" alt="Genrod" />
      <img src="" alt="" />
      <img src="https://herramientasjadever.cl/cdn/shop/files/LOGO_JADEVER_1.png?v=1727963455&width=170" alt="Jadever" />
      <img src="https://jeluz.net/cdn/shop/files/jeluz-logo-header_500x.png?v=1668704909" alt="Jeluz" />
      <img src="" alt="" />
      <img src="https://microcontrol.com.ar/storage/2023/11/isologo-microcontrol-180x80-1.png" alt="Microcontrol" />
      <img src={piroloImg} alt="Pirolo" />
      <img src="https://www.se.com/ar/es/assets/v2/696/media/202250/SE_logo-LIO-white_header.svg" alt="Schneider" />
      <img src="https://sicaelec.vtexassets.com/arquivos/logo-header.png" alt="Sica" />
      <img src={trefilconImg} alt="Trefilcon" />
      <img src="https://tecnocomonline.com.ar/wp-content/uploads/sites/71/2023/02/Logo-tecnocom-.png" alt="Tecnocom" />
      <img src="" alt="" />
      <img src="https://richi.com.ar/img/logo.svg" alt="Richi" />
      <img src="https://www.tbcin.com.ar/static/img/logos/tbcin-bg-transparent.png" alt="TBC" />
      <img src="https://www.zoloda.com.ar/wp-content/uploads/ICONO-1.png" alt="Zoloda" />
      <img src="https://viyilant.com.ar/wp-content/uploads/2021/03/cropped-cropped-cropped-logo-viyi-pleno-RGB.png" alt="Viyilant" />
      <img src="https://samet.com.ar/assets/img/logo.png" alt="Samet" />
    </div>
   </div>


  {/* Sección de Valor */}
      <div className="valor-section">
        <div className="valor-card">
          <div className="valor-icon">🚚</div>
          <h3>Envíos a todo el país</h3>
          <p>Logística especializada para AMBA e interior</p>
        </div>
        <div className="valor-card">
          <div className="valor-icon">💳</div>
          <h3>Flexibilidad de pagos</h3>
          <p>Hasta 4 cuotas sin interés</p>
        </div>
        <div className="valor-card">
          <div className="valor-icon">🛠️</div>
          <h3>Asesoramiento técnico</h3>
          <p>Expertos en soluciones eléctricas</p>
        </div>
      </div>
    </section>

    < Footer />

    </>
    )
}

export default Hero