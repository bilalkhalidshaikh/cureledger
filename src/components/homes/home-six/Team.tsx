import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom"
import team_data from '../../../data/TeamData';
import { useMemo } from 'react';

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

const Team = () => {

   const filteredData = useMemo(() => {
      return team_data.filter((items) => items.page === "home_6");
   }, []);

   return (
      <div className="td-team-area pt-105 fix">
         <div className="container">
            <div className="row mb-15">
               <div className="col-lg-3">
                  <div className="td-team-6-subtitle mb-20">
                     <span className="td-section-6-subtitle">WHO WE ARE</span>
                  </div>
               </div>
               <div className="col-lg-9">
                  <div className="td-team-6-title-wrap mb-50">
                     <h2 className="td-section-6-bigtitle td-text-opacity">EXPERIENCED<br /> TEAM MEMBERS</h2>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid p-0">
            <div className="row">
               <div className="col-lg-12">
                  <Swiper {...setting} modules={[Autoplay]} onSwiper={(swiper) => {
                     swiper.wrapperEl.classList.add("slide-transition");
                  }} className="swiper-container td-team-6-slider">
                     {filteredData.map((item) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                           <div className="td-team-6-wrap">
                              <div className="td-team-6-thumb mb-20">
                                 <Link to="#">
                                    <img className="w-100" src={item.thumb} alt="" />
                                 </Link>
                              </div>
                              <div className="td-team-6-content">
                                 <Link to="/team-details" className="name d-inline-block mb-5">{item.name}</Link>
                                 <span className="tag d-block">{item.designation}</span>
                              </div>
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

export default Team
