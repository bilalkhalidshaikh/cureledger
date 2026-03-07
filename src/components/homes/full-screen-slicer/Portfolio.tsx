import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCreative } from "swiper/modules";
import type { JSX } from "react";
import { Link } from "react-router-dom"

interface DataType {
   id: number;
   thumb: string;
   title: JSX.Element;
}

const portfolio_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/img/full-slider/thumb.jpg",
      title: (<>RUSTIC <span>WODERS</span></>),
   },
   {
      id: 2,
      thumb: "/assets/img/full-slider/thumb-2.jpg",
      title: (<>RUSTIC <span>WODERS</span></>),
   },
   {
      id: 3,
      thumb: "/assets/img/full-slider/thumb-3.jpg",
      title: (<>RUSTIC <span>WODERS</span></>),
   },
   {
      id: 4,
      thumb: "/assets/img/full-slider/thumb-4.jpg",
      title: (<>RUSTIC <span>WODERS</span></>),
   },
   {
      id: 5,
      thumb: "/assets/img/full-slider/thumb-5.jpg",
      title: (<>RUSTIC <span>WODERS</span></>),
   },
   {
      id: 6,
      thumb: "/assets/img/full-slider/thumb-6.jpg",
      title: (<>RUSTIC <span>WODERS</span></>),
   },
   {
      id: 7,
      thumb: "/assets/img/full-slider/thumb-7.jpg",
      title: (<>RUSTIC <span>WODERS</span></>),
   },
   {
      id: 8,
      thumb: "/assets/img/full-slider/thumb-8.jpg",
      title: (<>RUSTIC <span>WODERS</span></>),
   },
];

const Portfolio = () => {
   return (
      <div className="td-portfolio-slicer-area p-relative">
         <div className="td-portfolio-slicer-area-inner">
            <div id="app" className="td-portfolio-slicer-slider">
               <Swiper
                  direction="vertical"
                  speed={600}
                  grabCursor={true}
                  autoplay={{ delay: 3000 }}
                  effect="creative"
                  creativeEffect={{
                     prev: { translate: [0, 0, -400] },
                     next: { translate: [0, "100%", 0] },
                  }}
                  navigation={{
                     nextEl: ".td-portfolio-slicer-button-next",
                     prevEl: ".td-portfolio-slicer-button-prev",
                  }}
                  modules={[Navigation, EffectCreative]}
                  className="swiper td-portfolio-slicer-active"
               >
                  {portfolio_data.map((item) => (
                     <SwiperSlide key={item.id} className="swiper-slide has_fade_anim">
                        <img className="swiper-slicer-image" src={item.thumb} alt="" />
                        <div className="slide-content">
                           <div className="container">
                              <h2 className="td-portfolio-slicer-title"><Link to="/portfolio-details">{item.title}</Link></h2>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
               <div className="slider-nav-box overflow-hidden">
                  <div className="container-fluid container-1750">
                     <div className="slider-nav">
                        <div className="td-portfolio-slicer-button-prev nav-icon has_fade_anim" data-fade-from="left" data-on-scroll="0"
                           data-delay="0.30">
                           <i className="fa-solid fa-angle-left"></i>
                        </div>
                        <div className="td-portfolio-slicer-button-next nav-icon has_fade_anim" data-fade-from="right"
                           data-on-scroll="0" data-delay="0.30">
                           <i className="fa-solid fa-angle-right"></i>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <span className="td-portfolio-slicer-click">CLICK OR DRAG</span>
      </div>
   )
}

export default Portfolio
