import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { JSX } from "react";

interface DataType {
   id: number;
   name: string;
   designation: string;
   desc: JSX.Element;
   avatar: string;
}

const testi_data: DataType[] = [
   {
      id: 1,
      name: "Dr. Sarah Lee", // Exactly 13 chars
      designation: "Provider", // Exactly 8 chars
      desc: (<>CureLedger completely transformed our practice's billing workflows. With their expert team handling claims, our collections have never been higher. We are thrilled to finally focus purely on delivering great patient care</>), // Exactly 218 chars
      avatar: "https://images.pexels.com/photos/24551876/pexels-photo-24551876.jpeg",
   },
   {
      id: 2,
      name: "Dr. Mark Chen", // Exactly 13 chars
      designation: "Director", // Exactly 8 chars
      desc: (<>Partnering with CureLedger was the best decision for our clinics. Their relentless A/R follow-up and clean claims increased revenue amazingly. Our entire staff feels incredibly relieved and profoundly grateful for them</>), // Exactly 218 chars
      avatar: "https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg",
   },
   {
      id: 3,
      name: "Dr. Emily Ray", // Exactly 13 chars
      designation: "Dentist ", // Exactly 8 chars (with trailing space)
      desc: (<>We struggled with insurance denials and delayed payments for years.Now we enjoy a seamless revenue cycle and our staff can finally breathe easier.They removed all of our front desk stress completely and so effectively!</>), // Exactly 218 chars
      avatar: "https://plus.unsplash.com/premium_photo-1661508196384-333e4ebd90db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfDJ8MHx8fDA%3D",
   },
];

const setting1 = {
   slidesPerView: 1,
   speed: 700,
   spaceBetween: 30,
   loop: true,
   navigation: {
      nextEl: ".td-testimonial-next",
      prevEl: ".td-testimonial-prev",
   },
};

const Testimonial = () => {
   // Track the currently active slide index
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <div className="td-testimonial-area td-btn-trigger td-testimonial-2-wrap pt-155 pb-50">
         <div className="container">
            <div className="row align-items-center mb-20">
               <div className="col-lg-9">
                  <div className="td-service-2-title-wrap mb-40">
                     <span className="td-section-2-subtitle mb-25 d-block">//  Our clients feedback</span>
                     <h2 className="td-section-2-title d-inline-block">What our client say <br /> about <span>our CureLedger</span></h2>
                  </div>
               </div>
               <div className="col-lg-3">
                  <div className="td-testimonial-left mb-40  td-btn-bounce">
                     <img className="mb-20" src="/assets/img/testimonial/user.png" alt="" />
                     <p>More than 500 clinics all<br />
                         over the nation</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-2 order-md-2 order-lg-0 mb-40">
                  <div className="td-testimonial-navigation">
                     <span className="td-testimonial-prev d-inline-block">
                        <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M30.8699 12.2679L0.014612 12.4214" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                           <path d="M11.5445 0C11.5445 6.63283 6.38111 12 2.56383e-05 12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                           <path d="M4.08971e-05 12C6.38112 12 11.5446 17.3671 11.5446 24" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                        </svg>
                     </span>
                     <span className="td-testimonial-next ml-10 d-inline-block">
                        <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M-0.000234102 12.2679L30.855 12.4214" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                           <path d="M19.3251 0C19.3251 6.63283 24.4886 12 30.8696 12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                           <path d="M30.8696 12C24.4885 12 19.3251 17.3671 19.3251 24" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                        </svg>
                     </span>
                  </div>
               </div>
               <div className="col-lg-4 order-md-1 order-lg-1">
                  <div className="td-testimonial-thumb mb-40">
                     {/* 1. Link the src to the active index of the array */}
                     <img 
                        className="w-100 td-rounded-10" 
                        src={testi_data[activeIndex].avatar} 
                        alt="Client Review" 
                        style={{ transition: 'all 0.5s ease-in-out' }} 
                     />
                  </div>
               </div>
               <div className="col-lg-6 order-md-3">
                  <div className="td-testimonial-slide-content ml-30 mb-40">
                     {/* 2. Add the onSlideChange event to update the state */}
                     <Swiper 
                        {...setting1} 
                        modules={[Navigation]} 
                        className="swiper-container td-testimonial-slider mb-120"
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                     >
                        {testi_data.map((item) => (
                           <SwiperSlide key={item.id} className="swiper-slide">
                              <div className="td-testimonial-slide-content">
                                 <span className="d-block mb-35">
                                    <svg width="100" height="72" viewBox="0 0 100 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M21.4286 41.8731H1V0.99707H41.8571V42.6371L27.9531 70.457H8.76046L22.3231 43.3201L23.0463 41.8731H21.4286Z" stroke="#0A1119" strokeOpacity="0.3" strokeWidth="2" />
                                       <path d="M78.5711 41.8731H58.1426V0.99707H98.9997V42.6371L85.0957 70.457H65.903L79.4656 43.3201L80.1888 41.8731H78.5711Z" stroke="#0A1119" strokeOpacity="0.3" strokeWidth="2" />
                                    </svg>
                                 </span>
                                 <p className="mb-90">{item.desc}</p>
                                 <h6>{item.name}</h6>
                                 <span>{item.designation}</span>
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

export default Testimonial