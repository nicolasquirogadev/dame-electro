// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
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
        
        <Swiper
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

    <section id="hero">

    </section>

    </>
    )
}

export default Hero