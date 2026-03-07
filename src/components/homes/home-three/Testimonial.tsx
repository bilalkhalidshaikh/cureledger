import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import testi_data from '../../../data/TestimonialData';
import { useMemo } from 'react';

const setting = {
   slidesPerView: 3,
   speed: 700,
   spaceBetween: 30,
   loop: true,
   navigation: {
      nextEl: ".td-testimonial-next",
      prevEl: ".td-testimonial-prev",
   },
   autoplay: {
      delay: 4000,
   },
   breakpoints: {
      '1400': {
         slidesPerView: 3,
      },
      '1200': {
         slidesPerView: 2,
      },
      '991': {
         slidesPerView: 2,
      },
      '768': {
         slidesPerView: 2,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },
};

const Testimonial = () => {

   const filteredData = useMemo(() => {
      return testi_data.filter((items) => items.page === "home_3");
   }, []);

   return (
      <div className="td-testimonial-3-area td-testimonial-3-spacing fix green-bg-2 pt-155 p-relative">
         <h3 className="td-testimonial-3-bigtext d-none d-md-block">DIGITAL STUDIO</h3>
         <div className="container">
            <div className="row">
               <div className="col-lg-4">
                  <div className="td-testimonial-3-title-wrap mb-70">
                     <span className="td-section-3-subtitle d-inline-block mb-15">AROUND THE GLOB</span>
                     <h2 className="td-section-3-title mb-45">Here some <span className="italic-style">feedback</span></h2>
                     <div className="td-testimonial-3-navigation">
                        <span className="td-testimonial-prev">
                           <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.2473 7.49976H1.25866" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                              <path d="M7.94873 0C7.94873 4.14553 4.39363 7.5 0.000152359 7.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                              <path d="M0.000152359 7.49976C4.39363 7.49976 7.94873 10.8542 7.94873 14.9998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                           </svg>
                        </span>
                        <span className="td-testimonial-next">
                           <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.752686 7.49976H17.7413" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                              <path d="M11.0513 0C11.0513 4.14553 14.6064 7.5 18.9998 7.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                              <path d="M18.9998 7.49976C14.6064 7.49976 11.0513 10.8542 11.0513 14.9998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                           </svg>
                        </span>
                     </div>
                  </div>
               </div>
               <div className="col-lg-8">
                  <Swiper {...setting} modules={[Navigation]} className="swiper-container td-testimonial-3-slider">
                     {filteredData.map((item) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                           <div className="td-testimonial-3-wrap">
                              <span className="mb-15 d-inline-block">{item.name}</span>
                              <p className="mb-30">{item.desc}</p>
                              <span className="td-border mb-30"></span>
                              <img className="td-rounded" src={item.avatar} alt="" />
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

export default Testimonial
