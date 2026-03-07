
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import type { JSX } from "react";
import { Link } from "react-router-dom";

interface DataType {
   id: number;
   thumb: string;
   title: JSX.Element;
   tag: string;
}

const portfolio_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/img/showcase/thumb.jpg",
      title: (<>BLUE <span>SHADOW</span></>),
      tag: "MARKETING-2024",
   },
   {
      id: 2,
      thumb: "/assets/img/showcase/thumb-2.jpg",
      title: (<>BLUE <span>SHADOW</span></>),
      tag: "MARKETING-2024",
   },
   {
      id: 3,
      thumb: "/assets/img/showcase/thumb-3.jpg",
      title: (<>BLUE <span>SHADOW</span></>),
      tag: "MARKETING-2024",
   },
   {
      id: 4,
      thumb: "/assets/img/showcase/thumb.jpg",
      title: (<>BLUE <span>SHADOW</span></>),
      tag: "MARKETING-2024",
   },
   {
      id: 5,
      thumb: "/assets/img/showcase/thumb-2.jpg",
      title: (<>BLUE <span>SHADOW</span></>),
      tag: "MARKETING-2024",
   },
   {
      id: 6,
      thumb: "/assets/img/showcase/thumb-3.jpg",
      title: (<>BLUE <span>SHADOW</span></>),
      tag: "MARKETING-2024",
   }
];

const setting = {
   spaceBetween: 80,
   slidesPerView: 2,
   loop: true,
   allowTouchMove: true,
   centeredSlides: true,
   speed: 600,
   navigation: {
      nextEl: '.td-portfolio-showcase-button-next',
      prevEl: '.td-portfolio-showcase-button-prev',
   },
   pagination: {
      el: ".td-portfolio-showcase-pagenation",
      clickable: true,
   },
   breakpoints: {
      '1400': {
         slidesPerView: 2,
      },
      '1200': {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      '991': {
         slidesPerView: 1,
         spaceBetween: 40,
      },
      '768': {
         slidesPerView: 1,
         spaceBetween: 40,
      },
      '576': {
         slidesPerView: 1,
         spaceBetween: 30,
      },
      '0': {
         slidesPerView: 1,
         spaceBetween: 40,
      },
   },
};

const Portfolio = () => {
   return (
      <div className="td-portfolio-showcase-slider-spacing">
         <div className="container-fluid p-0">
            <div className="row">
               <div className="col-lg-12">
                  <Swiper {...setting} modules={[Pagination, Navigation]} className="swiper-container td-portfolio-showcase-slide-active">
                     {portfolio_data.map((item) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                           <div className="td-portfolio-showcase-wrap">
                              <div className="td-portfolio-showcase-inner">
                                 <img className="w-100" src={item.thumb} alt="" />
                                 <div className="td-portfolio-showcase-content text-center">
                                    <h2 className="title mb-15"><Link to="/portfolio-details">{item.title}</Link></h2>
                                    <span className="dates">{item.tag}</span>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
         <div className="td-portfolio-showcase-pagenation-wrap pb-20">
            <div className="row">
               <div className="col-12">
                  <div className="td-portfolio-showcase-pagenation"></div>
                  <div className="slider-nav-box">
                     <div className="container-fluid container-1750">
                        <div className="td-portfolio-showcase-nav">
                           <span className="td-portfolio-showcase-button-prev">
                              PREV
                           </span>
                           <span className="td-portfolio-showcase-button-next">
                              NEXT
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Portfolio
