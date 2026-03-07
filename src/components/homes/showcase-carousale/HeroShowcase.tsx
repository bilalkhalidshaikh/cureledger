import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Mousewheel } from "swiper/modules";
import type { JSX } from "react";
import { Link } from "react-router-dom";

interface DataType {
   id: number;
   title: JSX.Element;
   thumb: string;
}

const showcase_data: DataType[] = [
   {
      id: 1,
      title: (<>VISUAL<br /> <span>PASTOMER</span></>),
      thumb: "/assets/img/showcase-carosel/thumb-2.jpg",
   },
   {
      id: 2,
      title: (<>ACTION<br /> <span>KYEBOARD</span></>),
      thumb: "/assets/img/showcase-carosel/thumb.jpg",
   },
   {
      id: 3,
      title: (<>ZOILK<br /> <span>FORESTER</span></>),
      thumb: "/assets/img/showcase-carosel/thumb-3.jpg",
   },
   {
      id: 4,
      title: (<>TOP <br /> <span>PADDOCS</span></>),
      thumb: "/assets/img/showcase-carosel/thumb-4.jpg",
   },
   {
      id: 5,
      title: (<>RUSTIC<br /> <span>WONDERS</span></>),
      thumb: "/assets/img/showcase-carosel/thumb-5.jpg",
   },
];

const formatSerial = (num: number): string => {
   return `${num < 10 ? `0${num}` : num}`;
};

const setting = {
   slidesPerView: 1,
   spaceBetween: 0,
   effect: 'fade',
   loop: false,
   mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
   },
}

const HeroShowcase = () => {
   return (
      <>
         <div className="td-hero-showcase-mains">
            <Swiper {...setting} modules={[Navigation, EffectFade, Mousewheel]} className="swiper-container slider-showcase-active">
               {showcase_data.map((item, i) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                     <div className="td-hero-showcase-slider-wrap">
                        <div className="container">
                           <div className="row align-items-center">
                              <div className="col-lg-2">
                                 <div className="td-hero-showcase-title-wrap p-relative z-index-1">
                                    <span className="td-hero-showcase-number d-inline-block mb-10">{formatSerial(i + 1)}</span>
                                    <h2 className="td-hero-showcase-title"><Link to="/portfolio-details">{item.title}</Link></h2>
                                 </div>
                              </div>
                              <div className="col-lg-10">
                                 <div className="td-hero-showcase-thumb ml-25">
                                    <img className="w-100" src={item.thumb} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
         <div className="td-hero-showcase-bottom" style={{ backgroundImage: `url(/assets/img/showcase-carosel/bg.jpg)` }}>
            <div className="container-fluid container-1750">
               <div className="row">
                  <div className="col-12">
                     <div className="td-hero-showcase-social">
                        <span className="d-flex align-items-center">Follow Us
                           <svg className="ml-10" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.7537 4.90002C11.8307 4.90002 12.7037 4.02697 12.7037 2.95001C12.7037 1.87305 11.8307 1 10.7537 1C9.67676 1 8.80371 1.87305 8.80371 2.95001C8.80371 4.02697 9.67676 4.90002 10.7537 4.90002Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M2.95001 9.45032C4.02697 9.45032 4.90002 8.57727 4.90002 7.5003C4.90002 6.42334 4.02697 5.55029 2.95001 5.55029C1.87305 5.55029 1 6.42334 1 7.5003C1 8.57727 1.87305 9.45032 2.95001 9.45032Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M10.7537 14.0001C11.8307 14.0001 12.7037 13.1271 12.7037 12.0501C12.7037 10.9731 11.8307 10.1001 10.7537 10.1001C9.67676 10.1001 8.80371 10.9731 8.80371 12.0501C8.80371 13.1271 9.67676 14.0001 10.7537 14.0001Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M4.63477 8.48145L9.07429 11.0685" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M9.06779 3.93164L4.63477 6.51866" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default HeroShowcase
