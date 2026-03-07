import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const text_slider: string[] = ["STARTUP AGENCY", "GROWING BUSINEES", "STARTUP AGENCY  GROWING BUSINEES", "GROWING BUSINEES"];

const setting = {
   loop: true,
   freeMode: true,
   slidesPerView: 'auto' as const,
   spaceBetween: 100,
   centeredSlides: true,
   allowTouchMove: false,
   speed: 8000,
   autoplay: {
      delay: 1,
      disableOnInteraction: true,
   },
};

const TextSlider = () => {
   return (
      <div className="td-text-slider-2-area fix pb-140">
         <Swiper {...setting} modules={[Autoplay]} onSwiper={(swiper) => {
            swiper.wrapperEl.classList.add("slide-transition");
         }} className="swiper-container td-text-2-home-slider">
            {text_slider.map((text, i) => (
               <SwiperSlide key={i} className="swiper-slide">
                  <div className="td-text-home-2">
                     <h2>{text}</h2>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

export default TextSlider
