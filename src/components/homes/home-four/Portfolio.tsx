import { Swiper, SwiperSlide } from 'swiper/react';
import type { JSX } from "react";
import { Link } from "react-router-dom";

interface DataType {
   id: number;
   thumb: string;
   date: string;
   title: JSX.Element;
}

const project_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/img/portfolio/portfolio.jpg",
      date: "Jan 6, 2024",
      title: (<>VORTEX<br /> VANGURDSIX</>),
   },
   {
      id: 2,
      thumb: "/assets/img/portfolio/portfolio-2.jpg",
      date: "Jan 6, 2024",
      title: (<>HELLO<br /> VANGURDSIX</>),
   },
   {
      id: 3,
      thumb: "/assets/img/portfolio/portfolio-3.jpg",
      date: "Jan 6, 2024",
      title: (<>NAIL <br /> SALLOON</>),
   },
];

const setting = {
   slidesPerView: 1,
   speed: 700,
   spaceBetween: 30,
   loop: true,
};

const Portfolio = () => {
   return (
      <div className="td-portfolio-area pt-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="td-portfolio-4-content-wrap">
                     <div className="text-center">
                        <h2 className="td-portfolio-4-bigtitle mb-0 td-split-text td-split-in-right">
                           OUR SHOWCASE
                           </h2>
                     </div>
                     <Swiper {...setting} className="swiper-container td-portfolio-4-slider">
                        {project_data.map((item) => (
                           <SwiperSlide key={item.id} className="swiper-slide">
                              <div className="td-portfolio-4-main-wrap">
                                 <div className="row align-items-center">
                                    <div className="col-lg-3 col-md-4">
                                       <div className="td-portfolio-4-slider-wrap">
                                          <span className="td-portfolio-4-subtitle d-inline-block mb-20">{item.date}</span>
                                          <h3 className="td-portfolio-4-title mb-40">{item.title}</h3>
                                          <Link to="/portfolio-details" className="td-portfolio-4-btn">
                                             <span>
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M15.7767 7.45005C15.9198 7.60217 16 7.80764 16 8.02177C16 8.2359 15.9198 8.44137 15.7767 8.59351L8.92138 15.8154C8.77516 15.9627 8.58094 16.0453 8.37867 16.0461C8.27759 16.0456 8.17746 16.0253 8.08351 15.9859C7.94489 15.9246 7.8266 15.8213 7.74358 15.6892C7.66056 15.5571 7.61651 15.4021 7.61698 15.2437V8.82421H0.761697C0.559684 8.82421 0.365942 8.73968 0.223096 8.58918C0.0802502 8.43869 0 8.2346 0 8.02177C0 7.80896 0.0802502 7.60485 0.223096 7.45437C0.365942 7.30388 0.559684 7.21935 0.761697 7.21935H7.61698V0.79985C7.61651 0.64143 7.66056 0.486407 7.74358 0.354318C7.8266 0.222228 7.94489 0.118984 8.08351 0.0575969C8.2242 -0.000214525 8.37756 -0.0148812 8.52585 0.0152958C8.67412 0.0454711 8.81125 0.119257 8.92138 0.228116L15.7767 7.45005Z" fill="#05341D" />
                                                </svg>
                                             </span>
                                             VIEW SHOWCASE
                                          </Link>
                                       </div>
                                    </div>
                                    <div className="col-lg-9 col-md-8">
                                       <div className="td-portfolio-4-thumb">
                                          <img className="w-100" src={item.thumb} alt="" />
                                       </div>
                                    </div>
                                 </div>
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

export default Portfolio
