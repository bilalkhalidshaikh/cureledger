import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const brand_data: string[] = [
   "https://cdn.prod.website-files.com/65bb764f26eb7d803c3e8518/67915009256809209746f23b_image%201.png",
   "https://cdn.prod.website-files.com/65bb764f26eb7d803c3e8518/65c0aa141a1612d9d51e4cab_image%206.webp",
   "https://cdn.prod.website-files.com/65bb764f26eb7d803c3e8518/65c0aa146d2f7c8b3968e633_image%207.webp",
   "https://cdn.prod.website-files.com/65bb764f26eb7d803c3e8518/65c0aa1422947ab2f5225ad4_image%208.webp",
   "https://cdn.prod.website-files.com/65bb764f26eb7d803c3e8518/65c0aa148fc0fa115a073c54_image%2010.webp",
   "https://cdn.prod.website-files.com/65bb764f26eb7d803c3e8518/67bc8b717f851a4b664884bf_ff0e1cbd8931bf2c0bdd82e7ee737eb6_life-style.png",
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
