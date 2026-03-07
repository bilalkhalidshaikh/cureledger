import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom"
import HomeContact from '../../forms/HomeContact';

interface DataType {
   id: number;
   title: string;
   class?: string;
}

const contact_slider: DataType[] = [
   {
      id: 1,
      title: "LET’S",
   },
   {
      id: 2,
      title: "CONTACT",
      class: "yellows",
   },
   {
      id: 3,
      title: "LET’S",
   },
   {
      id: 4,
      title: "CONTACT",
      class: "yellows",
   },
   {
      id: 5,
      title: "LET’S",
   },
   {
      id: 6,
      title: "CONTACT",
      class: "yellows",
   },
];

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

const Contact = () => {
   return (
      <div className="td-contact-area pt-90 fix pb-60">
         <div className="td-contact-7-text-slider">
            <div className="td-contact-7-text-btn text-center pt-30">
               <Link to="/contact">
                  <img className="td-live-anim-spin" src="/assets/img/contact/text.png" alt="" />
                  <span className="icon">
                     <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.07031 22.0708L21.2124 7.92867" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.2124 22.0713V7.9292H7.07031" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </span>
               </Link>
            </div>
            <Swiper {...setting} modules={[Autoplay]} onSwiper={(swiper) => {
               swiper.wrapperEl.classList.add("slide-transition");
            }} className="swiper-container td-contact-7-slide-active">
               {contact_slider.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                     <h2 className={`td-contact-7-slide-text ${item.class}`}>{item.title}</h2>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
         <div className="td-contact-7-bottom pt-75">
            <div className="container">
               <div className="row">
                  <div className="col-lg-5 mb-40">
                     <div className="td-contact-7-content wow fadeInLeft" data-wow-delay=".4s" data-wow-duration="1s">
                        <h2 className="td-section-7-title mb-70">Let’s get in<br /> touch 🤟</h2>
                        <h6 className="td-contact-7-subtitle mb-35">Don't be afraid man !<br /> say hello</h6>
                        <div className="td-contact-7-social">
                           <div className="td-contact-7-social-item mb-25 d-flex">
                              <span className="icon mr-20">
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.67161 3.68095C10.3263 3.80867 10.9279 4.12884 11.3995 4.60047C11.8712 5.0721 12.1913 5.67374 12.319 6.32839M9.67161 1C11.0317 1.1511 12.3 1.76017 13.2683 2.72721C14.2365 3.69425 14.8472 4.96178 15 6.32169M14.3298 11.6702V13.6809C14.3305 13.8676 14.2923 14.0523 14.2175 14.2233C14.1427 14.3944 14.033 14.5479 13.8955 14.6741C13.758 14.8003 13.5956 14.8964 13.4187 14.9562C13.2419 15.016 13.0546 15.0382 12.8686 15.0214C10.8062 14.7973 8.8251 14.0925 7.08449 12.9637C5.46509 11.9347 4.09211 10.5617 3.06307 8.94232C1.93035 7.1938 1.22544 5.20306 1.00544 3.13136C0.988691 2.94601 1.01072 2.75921 1.07012 2.58285C1.12952 2.40649 1.22499 2.24442 1.35046 2.10698C1.47592 1.96953 1.62863 1.85972 1.79886 1.78453C1.96909 1.70934 2.15312 1.67041 2.33921 1.67024H4.34993C4.6752 1.66704 4.99053 1.78222 5.23716 1.99432C5.48379 2.20642 5.64488 2.50096 5.6904 2.82305C5.77527 3.46652 5.93266 4.09833 6.15957 4.70641C6.24974 4.94631 6.26926 5.20702 6.2158 5.45767C6.16235 5.70832 6.03816 5.93838 5.85796 6.12062L5.00676 6.97182C5.96088 8.64979 7.35021 10.0391 9.02818 10.9932L9.87939 10.142C10.0616 9.96184 10.2917 9.83765 10.5423 9.7842C10.793 9.73074 11.0537 9.75026 11.2936 9.84043C11.9017 10.0673 12.5335 10.2247 13.177 10.3096C13.5025 10.3555 13.7999 10.5195 14.0124 10.7704C14.225 11.0212 14.3379 11.3415 14.3298 11.6702Z" stroke="#1F1306" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </span>
                              <div>
                                 <span className="cetagory">Phone</span>
                                 <Link className="link" to="tel:+18105851224">+1 810 585 12 24</Link>
                              </div>
                           </div>
                           <div className="td-contact-7-social-item mb-25 d-flex">
                              <span className="icon mr-20">
                                 <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.4 1H13.6C14.37 1 15 1.63 15 2.4V10.8C15 11.57 14.37 12.2 13.6 12.2H2.4C1.63 12.2 1 11.57 1 10.8V2.4C1 1.63 1.63 1 2.4 1Z" stroke="#1F1306" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 4L8 8.9L1 4" stroke="#1F1306" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </span>
                              <div>
                                 <span className="cetagory">Email</span>
                                 <Link className="link emails" to="mailto:info@example.com">info@example.com</Link>
                              </div>
                           </div>
                           <div className="td-contact-7-social-item d-flex">
                              <span className="icon mr-20">
                                 <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 7.81818C15 13.1212 8 17.6667 8 17.6667C8 17.6667 1 13.1212 1 7.81818C1 6.00989 1.7375 4.27566 3.05025 2.997C4.36301 1.71834 6.14348 1 8 1C9.85652 1 11.637 1.71834 12.9497 2.997C14.2625 4.27566 15 6.00989 15 7.81818Z" stroke="#1F1306" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99935 10.0909C9.28801 10.0909 10.3327 9.07333 10.3327 7.81814C10.3327 6.56294 9.28801 5.54541 7.99935 5.54541C6.71068 5.54541 5.66602 6.56294 5.66602 7.81814C5.66602 9.07333 6.71068 10.0909 7.99935 10.0909Z" stroke="#1F1306" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </span>
                              <div>
                                 <span className="cetagory mb-5">Address</span>
                                 <Link className="link" to="tel:+18105851224">Burline Avenue of<br /> 25 CH , Germany</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-7 mb-40">
                     <div className="td-contact-7-form ml-80 wow fadeInRight" data-wow-delay=".4s" data-wow-duration="1s">
                        <p className="mb-70">Some definitions of marketing highlight marketing's ability to
                           produce  value to shareholders of the firm as well. In this
                           context, marketing  can be defined as</p>
                        <HomeContact />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact
