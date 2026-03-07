import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import gsap from "gsap";

interface DataType {
   id: number;
   title: string;
   class?: string;
}

const contact_slider: DataType[] = [
   { id: 1, title: "CLEAN CLAIMS" },
   { id: 2, title: "ERASE THE CHASE", class: "brand-highlight" },
   { id: 3, title: "FAST PAYMENTS" },
   { id: 4, title: "MAXIMIZE REVENUE", class: "brand-highlight" },
   { id: 5, title: "CLEAN CLAIMS" },
   { id: 6, title: "ERASE THE CHASE", class: "brand-highlight" },
   { id: 7, title: "FAST PAYMENTS" },
   { id: 8, title: "MAXIMIZE REVENUE", class: "brand-highlight" },
   { id: 9, title: "CLEAN CLAIMS" },
   { id: 10, title: "ERASE THE CHASE", class: "brand-highlight" },
   { id: 11, title: "FAST PAYMENTS" },
   { id: 12, title: "MAXIMIZE REVENUE", class: "brand-highlight" },
];

const setting = {
   loop: true,
   freeMode: true,
   slidesPerView: 'auto' as const,
   spaceBetween: 50,
   centeredSlides: true,
   allowTouchMove: false,
   speed: 15000,
   autoplay: {
      delay: 1,
      disableOnInteraction: true,
   },
};

const Contact = () => {
   const sliderRef = useRef<HTMLDivElement>(null);
   const glowRef = useRef<HTMLDivElement>(null);

   // Interactive Mouse Parallax & Spotlight
   const handleMouseMove = (e: React.MouseEvent) => {
      if (window.innerWidth < 992) return;
      const { clientX, clientY, currentTarget } = e;
      const rect = currentTarget.getBoundingClientRect();
      
      // Calculate mouse position relative to section
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Move the background spotlight
      if (glowRef.current) {
         gsap.to(glowRef.current, {
            x: x - 400, // Offset by half width of the glow div
            y: y - 400,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
         });
      }

      // Suble Parallax for the slider text
      if (sliderRef.current) {
         const moveX = (clientX / window.innerWidth - 0.5) * 40;
         const moveY = (clientY / window.innerHeight - 0.5) * 20;
         gsap.to(sliderRef.current, {
            x: moveX,
            y: moveY,
            duration: 1,
            ease: "power2.out"
         });
      }
   };

   const handleMouseLeave = () => {
      if (glowRef.current) gsap.to(glowRef.current, { opacity: 0, duration: 1 });
      if (sliderRef.current) gsap.to(sliderRef.current, { x: 0, y: 0, duration: 1.5, ease: "power3.out" });
   };

   return (
      <div 
         className="td-contact-area td-contact-2-wrap pt-0 mt-0 fix pb-100 p-relative overflow-hidden" 
         style={{ backgroundColor: '#003941' }}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
      >
         {/* Interactive Spotlight Glow */}
         <div 
            ref={glowRef}
            style={{
               position: 'absolute',
               width: '800px',
               height: '800px',
               background: 'radial-gradient(circle, rgba(9, 178, 171, 0.08) 0%, rgba(0, 57, 65, 0) 70%)',
               borderRadius: '50%',
               pointerEvents: 'none',
               opacity: 0,
               zIndex: 1,
               top: 0,
               left: 0
            }}
         />

         <div className="td-contact-7-text-slider p-relative z-index-2">
            
            <div className="td-contact-7-text-btn text-center pt-50 mb-30">
               <Link to="/">
                  <span className="icon d-inline-flex align-items-center justify-content-center" 
                        style={{ 
                           width: '90px', 
                           height: '90px', 
                           backgroundColor: '#09B2AB', 
                           borderRadius: '50%',
                           boxShadow: '0 0 40px rgba(9, 178, 171, 0.3)',
                           transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                        onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'scale(1.15) rotate(45deg)';
                           e.currentTarget.style.backgroundColor = '#ffffff';
                           const svgPath = e.currentTarget.querySelectorAll('path');
                           svgPath.forEach(path => path.setAttribute('stroke', '#09B2AB'));
                        }}
                        onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                           e.currentTarget.style.backgroundColor = '#09B2AB';
                           const svgPath = e.currentTarget.querySelectorAll('path');
                           svgPath.forEach(path => path.setAttribute('stroke', 'white'));
                        }}
                  >
                     <svg width="35" height="35" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.07031 22.0708L21.2124 7.92867" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.2124 22.0713V7.9292H7.07031" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </span>
               </Link>
            </div>

            <div ref={sliderRef}>
               <Swiper {...setting} modules={[Autoplay]} onSwiper={(swiper) => {
                  swiper.wrapperEl.classList.add("slide-transition");
               }} className="swiper-container td-contact-7-slide-active">
                  {contact_slider.map((item) => (
                     <SwiperSlide key={item.id} className="swiper-slide" style={{ width: 'auto' }}>
                        <h2 
                           className={`td-contact-7-slide-text ${item.class || ""}`}
                           style={{ 
                              fontSize: 'clamp(3.5rem, 10vw, 7rem)', 
                              fontWeight: 900, 
                              textTransform: 'uppercase',
                              letterSpacing: '-2px',
                              WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
                              color: 'transparent',
                              ...(item.class === 'brand-highlight' ? { 
                                 color: '#09B2AB', 
                                 WebkitTextStroke: '0px',
                                 textShadow: '0 0 20px rgba(9, 178, 171, 0.2)'
                              } : {})
                           }}
                        >
                           {item.title}
                        </h2>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>

         <style>{`
            .slide-transition {
               transition-timing-function: linear !important;
            }
         `}</style>
      </div>
   )
}

export default Contact;