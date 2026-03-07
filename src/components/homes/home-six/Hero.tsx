import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom"

const banner_slider: string[] = [
   "/assets/img/hero/hero-6/thumb.jpg",
   "/assets/img/hero/hero-6/thumb-2.jpg",
   "/assets/img/hero/hero-6/thumb-3.jpg",
   "/assets/img/hero/hero-6/thumb-4.jpg",
   "/assets/img/hero/hero-6/thumb-5.jpg",
   "/assets/img/hero/hero-6/thumb-6.jpg",
   "/assets/img/hero/hero-6/thumb-7.jpg",
   "/assets/img/hero/hero-6/thumb-4.jpg",
   "/assets/img/hero/hero-6/thumb-5.jpg",
];

const setting = {
   loop: true,
   freeMode: true,
   slidesPerView: 'auto' as const,
   spaceBetween: 30,
   centeredSlides: true,
   allowTouchMove: false,
   speed: 30000,
   autoplay: {
      delay: 1,
      disableOnInteraction: true,
   },
};

const Hero = () => {
   return (
      <div className="td-hero-area td-hero-6-spacing include-bg" style={{ backgroundImage: `url(/assets/img/hero/hero-6/bg.jpg)` }}>
         <div className="container">
            <div className="td-hero-6-top pb-45 p-relative z-index-1">
               <div className="td-hero-6-line">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="td-hero-6-title-wrap ml-70 pb-90">
                        <h2 className="td-hero-6-title  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                           <span>DIGITAL
                              <video loop muted autoPlay playsInline>
                                 <source src="https://themedox.com/videos/parody-video.mp4" type="video/mp4" />
                              </video>
                           </span>
                           <br />
                           <span className="ml-30 d-inline-block">
                              <img className="d-none d-lg-inline-block" src="/assets/img/hero/hero-6/shape.png" alt="" />
                              MARKETING
                           </span>
                        </h2>
                     </div>
                  </div>
                  <div className="col-12  wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                     <div className="td-hero-6-tag">
                        <ul>
                           <li><Link to="#">(Ui/Ux Design)</Link></li>
                           <li><Link to="#">(Branding)</Link></li>
                           <li><Link to="#">(Visual Design)</Link></li>
                           <li><Link to="#">(Development)</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid container-1680 wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
            <div className="row">
               <div className="col-lg-12">
                  <Swiper {...setting} modules={[Autoplay]} onSwiper={(swiper) => {
                     swiper.wrapperEl.classList.add("slide-transition");
                  }} className="swiper-container td-hero-6-slider">
                     {banner_slider.map((thumb, i) => (
                        <SwiperSlide key={i} className="swiper-slide">
                           <div className="td-hero-6-thumb">
                              <img src={thumb} alt="" />
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
