import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const testi_data = [
   { id: 1, name: "Dr. Sarah Jenkins", title: "Practice Owner", desc: "CureLedger completely transformed our front desk. By taking over the insurance verifications and billing, my team finally has time to actually focus on patient care. Our collections have never been higher." },
   { id: 2, name: "Mark T.", title: "Office Manager", desc: "Their denial management is unmatched. Claims that used to sit in A/R for 90 days are now resolved and paid within weeks. They are truly an extension of our team." },
   { id: 3, name: "Dr. Ahmed R.", title: "Orthodontist", desc: "The onboarding was seamless. They found thousands of dollars in unbilled procedures we didn't even realize we were missing. Highly recommend their services." },
];

const setting = {
   slidesPerView: 1, speed: 700, spaceBetween: 30, loop: true,
   navigation: { nextEl: ".testi-next", prevEl: ".testi-prev" },
   autoplay: { delay: 5000, disableOnInteraction: false }
};

const Testimonial = () => {
   return (
      <div className="pt-120 pb-120" style={{ backgroundColor: '#FAFAFA' }}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-4 mb-5 mb-lg-0">
                  <h2 className="fw-bold mb-4" style={{ color: '#003941', fontSize: 'clamp(2rem, 3vw, 3rem)' }}>What our <br/><span style={{ color: '#09B2AB' }}>clients say</span></h2>
                  <div className="d-flex align-items-center mb-4">
                     <h1 className="fw-black m-0 me-3" style={{ color: '#003941', fontSize: '4rem' }}>4.9</h1>
                     <div>
                        <div className="mb-1" style={{ color: '#FF9800', fontSize: '1.2rem' }}>
                           <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                        </div>
                        <span className="fw-bold" style={{ color: '#002C34' }}>Average Rating</span>
                     </div>
                  </div>
                  <div className="d-flex gap-3">
                     <button className="testi-prev rounded-circle border-0 d-flex align-items-center justify-content-center transition-all" style={{ width: '50px', height: '50px', backgroundColor: '#003941', color: '#fff' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#09B2AB'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#003941'}><i className="fa-solid fa-arrow-left"></i></button>
                     <button className="testi-next rounded-circle border-0 d-flex align-items-center justify-content-center transition-all" style={{ width: '50px', height: '50px', backgroundColor: '#003941', color: '#fff' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#09B2AB'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#003941'}><i className="fa-solid fa-arrow-right"></i></button>
                  </div>
               </div>
               
               <div className="col-lg-8 ps-lg-5">
                  <Swiper {...setting} modules={[Autoplay, Navigation]} className="overflow-hidden p-3">
                     {testi_data.map((item) => (
                        <SwiperSlide key={item.id}>
                           <div className="p-5 rounded-4 bg-white shadow-sm" style={{ borderLeft: '4px solid #09B2AB' }}>
                              <i className="fa-solid fa-quote-left mb-4" style={{ fontSize: '3rem', color: 'rgba(9,178,171,0.2)' }}></i>
                              <p className="fs-4 mb-5 fst-italic" style={{ color: '#002C34', lineHeight: '1.6' }}>"{item.desc}"</p>
                              <div>
                                 <h5 className="fw-bold m-0" style={{ color: '#003941' }}>{item.name}</h5>
                                 <span className="small text-uppercase fw-bold" style={{ color: '#09B2AB', letterSpacing: '1px' }}>{item.title}</span>
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

export default Testimonial;