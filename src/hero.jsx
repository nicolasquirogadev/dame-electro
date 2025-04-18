// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.css';
import './mediaqueries.css';
import './hero.css';

function Hero() {

    return (

        <>

    <section id="hero">

        <Swiper
      className='swiper1'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='slide1'>
        
        <div className="slide-content">
        <h1>Potencia tu negocio con los mejores productos eléctricos</h1>
        <p>Distribuidores líderes en soluciones eléctricas de alta calidad</p>
        <button className="cta-button">Explora nuestro catálogo</button>

        </div>

      </SwiperSlide>

      <SwiperSlide className='slide2'>

        <div className="slide-content">
        <h1>Lideres en iluminacion </h1>
        <p>Venta mayorista y minorista para industrias y hogares</p>
        <button className="cta-button">Ver productos</button>
        </div>

      </SwiperSlide>
      
      <SwiperSlide className='slide3'>
        <div className="slide-content">
        <h1>Ilumina tus espacios con tecnología LED de vanguardia</h1>
        <p>Ofrecemos las mejores soluciones en iluminación eficiente y sostenible</p>
        <button className="cta-button">Descubre nuestras soluciones LED</button>
        </div>
      </SwiperSlide>

      <SwiperSlide className='slide4'>
        <div className="slide-content">
        <h1>Automatiza y controla tus sistemas eléctricos</h1>
        <p>Soluciones inteligentes para una gestión eficiente de la energía</p>
        <button className="cta-button">Explora la automatización</button>
        </div>
      </SwiperSlide>
      ...
    </Swiper>

<div className="banda">
    <h3 className="banda-title">Comprometidos con el Rubro Eléctrico</h3>
  
  <div className="banda-content">

    <div className="banda-item">
      <i className="fa-solid fa-industry"></i>
      <p>EMPRESAS</p>
    </div>

    <div className="banda-item">
      <i className="fa-solid fa-users"></i>
      <p>CONSUMIDOR FINAL</p>
    </div>

    <div className="banda-item">
      <i className="fa-solid fa-helmet-safety"></i>
      <p>GREMIO</p>
    </div>

    <div className="banda-item">
      <i className="fa-solid fa-landmark"></i>
      <p>ORGANISMOS PUIBLICOS</p>
    </div>

    </div>
   </div>
   
 <section className="parallax1">
        <div className="parallax-inner">
          <h1>Scroll Down</h1>
        </div>
      </section>
      <h2>Parallax Effect</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero, eum accusantium beatae aspernatur consequatur iste? Delectus, repellendus nisi. Eos numquam quaerat autem at temporibus necessitatibus deleniti id minus distinctio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero, eum accusantium beatae aspernatur consequatur iste? Delectus, repellendus nisi. Eos numquam quaerat autem at temporibus necessitatibus deleniti id minus distinctio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero, eum accusantium beatae aspernatur consequatur iste? Delectus, repellendus nisi. Eos numquam quaerat autem at temporibus necessitatibus deleniti id minus distinctio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero, eum accusantium beatae aspernatur consequatur iste? Delectus, repellendus nisi. Eos numquam quaerat autem at temporibus necessitatibus deleniti id minus distinctio!</p>
      <section className="parallax2">
        <div className="parallax-inner">
          <h1>Parallax Effect</h1>
        </div>
      </section>
      <h2>Parallax Effect</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero, eum accusantium beatae aspernatur consequatur iste? Delectus, repellendus nisi. Eos numquam quaerat autem at temporibus necessitatibus deleniti id minus distinctio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero, eum accusantium beatae aspernatur consequatur iste? Delectus, repellendus nisi. Eos numquam quaerat autem at temporibus necessitatibus deleniti id minus distinctio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero, eum accusantium beatae aspernatur consequatur iste? Delectus, repellendus nisi. Eos numquam quaerat autem at temporibus necessitatibus deleniti id minus distinctio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero, eum accusantium beatae aspernatur consequatur iste? Delectus, repellendus nisi. Eos numquam quaerat autem at temporibus necessitatibus deleniti id minus distinctio!</p>
      <section className="parallax3">
        <div className="parallax-inner">
          <h1>Parallax Effect</h1>
        </div>
      </section>
      <h2>Parallax Effect</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero, eum accusantium beatae aspernatur consequatur iste? Delectus, repellendus nisi. Eos numquam quaerat autem at temporibus necessitatibus deleniti id minus distinctio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero, eum accusantium beatae aspernatur consequatur iste? Delectus, repellendus nisi. Eos numquam quaerat autem at temporibus necessitatibus deleniti id minus distinctio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero, eum accusantium beatae aspernatur consequatur iste? Delectus, repellendus nisi. Eos numquam quaerat autem at temporibus necessitatibus deleniti id minus distinctio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero, eum accusantium beatae aspernatur consequatur iste? Delectus, repellendus nisi. Eos numquam quaerat autem at temporibus necessitatibus deleniti id minus distinctio!</p>


   

   <div className="logos">
    <div className="logos-slide">
      <img src="https://www.argenplas.net/wp-content/uploads/2020/05/logo_curves-white.png" alt="" />
      <img src="https://cambre.com.ar/web/images/cambre-logo.png" alt="" />
      <img src="https://www.candil.com.ar/Resources/candil.jpg" alt="" />
      <img src="" alt="" />
      <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/86/206072686/logo-2020041815021906700.png" alt="" />
      <img src="https://www.elibet.com/wp-content/uploads/2020/03/elibet.png" alt="" />
      <img src="https://kalop.com.ar/wp-content/uploads/2024/05/logokalopv0.webp" alt="" />
      <img src="https://ferrolux.com.ar/public/img/logo_ferrolux.png" alt="" />
      <img src="https://bawelectric.com/assets/LOGO" alt="" />
      <img src="" alt="" />
      <img src="https://www.forli.com.ar/wp-content/uploads/2017/02/logo-blanco3.png" alt="" />
      <img src="https://genrod.com.ar/img/logo-genrod-footer-tagline.svg" alt="" />
      <img src="http://www.w3.org/2000/svg" alt="" />
      <img src="https://herramientasjadever.cl/cdn/shop/files/LOGO_JADEVER_1.png?v=1727963455&width=170" alt="" />
      <img src="https://jeluz.net/cdn/shop/files/jeluz-logo-header_500x.png?v=1668704909" alt="" />
      <img src="" alt="" />
      <img src="https://microcontrol.com.ar/storage/2023/11/isologo-microcontrol-180x80-1.png" alt="" />
      <img src="https://industriapriolo.com.ar/wp-content/uploads/2024/04/PRIOLO-2048x714.png" alt="" />
      <img src="https://www.se.com/ar/es/assets/v2/696/media/202250/SE_logo-LIO-white_header.svg" alt="" />
      <img src="https://sicaelec.vtexassets.com/arquivos/logo-header.png" alt="" />
      <img src="" alt="" />
      <img src="https://tecnocomonline.com.ar/wp-content/uploads/sites/71/2023/02/Logo-tecnocom-.png" alt="" />
      <img src="" alt="" />
      <img src="https://richi.com.ar/img/logo.svg" alt="" />
      <img src="https://www.tbcin.com.ar/static/img/logos/tbcin-bg-transparent.png" alt="" />
      <img src="https://www.zoloda.com.ar/wp-content/uploads/ICONO-1.png" alt="" />
      <img src="https://viyilant.com.ar/wp-content/uploads/2021/03/cropped-cropped-cropped-logo-viyi-pleno-RGB.png" alt="" />
      <img src="https://samet.com.ar/assets/img/logo.png" alt="" />
    </div>

    <div className="logos-slide">
      <img src="https://www.argenplas.net/wp-content/uploads/2020/05/logo_curves-white.png" alt="" />
      <img src="https://cambre.com.ar/web/images/cambre-logo.png" alt="" />
      <img src="https://www.candil.com.ar/Resources/candil.jpg" alt="" />
      <img src="" alt="" />
      <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/86/206072686/logo-2020041815021906700.png" alt="" />
      <img src="https://www.elibet.com/wp-content/uploads/2020/03/elibet.png" alt="" />
      <img src="https://kalop.com.ar/wp-content/uploads/2024/05/logokalopv0.webp" alt="" />
      <img src="https://ferrolux.com.ar/public/img/logo_ferrolux.png" alt="" />
      <img src="https://bawelectric.com/assets/LOGO" alt="" />
      <img src="" alt="" />
      <img src="https://www.forli.com.ar/wp-content/uploads/2017/02/logo-blanco3.png" alt="" />
      <img src="https://genrod.com.ar/img/logo-genrod-footer-tagline.svg" alt="" />
      <img src="http://www.w3.org/2000/svg" alt="" />
      <img src="https://herramientasjadever.cl/cdn/shop/files/LOGO_JADEVER_1.png?v=1727963455&width=170" alt="" />
      <img src="https://jeluz.net/cdn/shop/files/jeluz-logo-header_500x.png?v=1668704909" alt="" />
      <img src="" alt="" />
      <img src="https://microcontrol.com.ar/storage/2023/11/isologo-microcontrol-180x80-1.png" alt="" />
      <img src="https://industriapriolo.com.ar/wp-content/uploads/2024/04/PRIOLO-2048x714.png" alt="" />
      <img src="https://www.se.com/ar/es/assets/v2/696/media/202250/SE_logo-LIO-white_header.svg" alt="" />
      <img src="https://sicaelec.vtexassets.com/arquivos/logo-header.png" alt="" />
      <img src="" alt="" />
      <img src="https://tecnocomonline.com.ar/wp-content/uploads/sites/71/2023/02/Logo-tecnocom-.png" alt="" />
      <img src="" alt="" />
      <img src="https://richi.com.ar/img/logo.svg" alt="" />
      <img src="https://www.tbcin.com.ar/static/img/logos/tbcin-bg-transparent.png" alt="" />
      <img src="https://www.zoloda.com.ar/wp-content/uploads/ICONO-1.png" alt="" />
      <img src="https://viyilant.com.ar/wp-content/uploads/2021/03/cropped-cropped-cropped-logo-viyi-pleno-RGB.png" alt="" />
      <img src="https://samet.com.ar/assets/img/logo.png" alt="" />
    </div>
   </div>

    </section>

    </>
    )
}

export default Hero