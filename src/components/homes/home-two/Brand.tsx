import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const brand_data: string[] = [
   "/assets/img/brand/logo-1.png",
   "/assets/img/brand/logo-2.png",
   "/assets/img/brand/logo-3.png",
   "/assets/img/brand/logo-4.png",
   "/assets/img/brand/logo-5.png",
   "/assets/img/brand/logo-3.png",
];

const setting = {
   loop: true,
   freeMode: true,
   slidesPerView: 'auto' as const,
   spaceBetween: 30,
   centeredSlides: true,
   allowTouchMove: false,
   speed: 8000,
   autoplay: {
      delay: 1,
      disableOnInteraction: true,
   },
};

const Brand = () => {
   return (
      <div className="td-brands-area pt-115">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="td-brand-wrap">
                     <Swiper {...setting} modules={[Autoplay]} onSwiper={(swiper) => {
                        swiper.wrapperEl.classList.add("slide-transition");
                     }} className="swiper-container td-brand-slide-active">
                        {brand_data.map((brand, i) => (
                           <SwiperSlide key={i} className="swiper-slide">
                              <div className="td-brand-item">
                                 <img src={brand} alt="" />
                              </div>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Brand
