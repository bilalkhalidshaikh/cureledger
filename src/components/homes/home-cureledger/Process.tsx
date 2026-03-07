import { useRef } from "react";
import type { JSX } from "react";
import gsap from "gsap";

interface DataType {
   id: number;
   stat: string;
   title: string;
   icon: JSX.Element;
}

const growth_data: DataType[] = [
   {
      id: 1,
      stat: "Up to 35%",
      title: "Increase in Collections",
      icon: (
         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
         </svg>
      )
   },
   {
      id: 2,
      stat: "98%",
      title: "Clean Claim Rate",
      icon: (
         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
         </svg>
      )
   },
   {
      id: 3,
      stat: "< 30 Days",
      title: "Days in AR",
      icon: (
         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
         </svg>
      )
   },
   {
      id: 4,
      stat: "24 Hours",
      title: "Claim Turnaround",
      icon: (
         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
         </svg>
      )
   },
];

const Process = () => {
   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
   const bgOrb1Ref = useRef<HTMLDivElement>(null);
   const bgOrb2Ref = useRef<HTMLDivElement>(null);

   const handleMouseMove = (e: React.MouseEvent) => {
      if (window.innerWidth < 992) return; 

      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30; 
      const y = (clientY / window.innerHeight - 0.5) * 30;

      cardRefs.current.forEach((card, index) => {
         if (card) {
            const depth = (index % 2 === 0 ? 1 : -1) * (0.5 + index * 0.2);
            gsap.to(card, { x: x * depth, y: y * depth, ease: "power2.out", duration: 1 });
         }
      });

      if (bgOrb1Ref.current) gsap.to(bgOrb1Ref.current, { x: x * -2, y: y * -2, ease: "power2.out", duration: 1.5 });
      if (bgOrb2Ref.current) gsap.to(bgOrb2Ref.current, { x: x * 2, y: y * 2, ease: "power2.out", duration: 1.5 });
   };

   const handleMouseLeave = () => {
      if (window.innerWidth < 992) return;
      
      cardRefs.current.forEach((card) => {
         if (card) gsap.to(card, { x: 0, y: 0, ease: "power3.out", duration: 1.5 });
      });
      if (bgOrb1Ref.current) gsap.to(bgOrb1Ref.current, { x: 0, y: 0, ease: "power3.out", duration: 1.5 });
      if (bgOrb2Ref.current) gsap.to(bgOrb2Ref.current, { x: 0, y: 0, ease: "power3.out", duration: 1.5 });
   };

   // Helper to assign refs without throwing TS error
   const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
      cardRefs.current[index] = el;
   };

   return (
      <div 
         className="td-service-process-area pt-120 pb-120 p-relative overflow-hidden" 
         style={{ backgroundColor: '#003941', borderTop: '1px solid rgba(255,255,255,0.05)' }}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
      >
         <div ref={bgOrb1Ref} style={{ position: 'absolute', top: '10%', left: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(9,178,171,0.08) 0%, rgba(0,57,65,0) 70%)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }}></div>
         <div ref={bgOrb2Ref} style={{ position: 'absolute', bottom: '10%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(111,110,224,0.05) 0%, rgba(0,57,65,0) 70%)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }}></div>

         <div className="container p-relative z-index-1">
            
            <div className="row align-items-center mb-70">
               <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="td-service-2-title-wrap td-title-anim text-center text-lg-start">
                     <span className="d-inline-block mb-20 px-4 py-2 rounded-pill fw-bold" style={{ backgroundColor: 'rgba(9, 178, 171, 0.15)', color: '#09B2AB', letterSpacing: '1px', fontSize: '14px', textTransform: 'uppercase' }}>
                        Our Impact
                     </span>
                     <h2 className="td-section-2-title mb-0" style={{ color: '#FFFFFF', fontWeight: 800, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: '1.2' }}>
                        We Grow When Our <br />
                        <span style={{ color: '#09B2AB' }}>Customers Grow.</span>
                     </h2>
                  </div>
               </div>
               
               <div className="col-lg-6">
                  <div className="text-center text-lg-start ms-lg-4 wow fadeInRight" data-wow-delay=".3s" data-wow-duration="1s">
                     <p style={{ color: '#D1D5D5', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '15px' }}>
                        We help dental practices eliminate revenue leaks, reduce stress, and get paid faster. Our team of clinically trained billing experts ensures every claim is clean, accurate, and optimized for predictable cashflow.
                     </p>
                     <p style={{ color: '#A3B1B2', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                        Our end-to-end RCM solutions are customized for practices of all sizes and specialties—so you can focus on dentistry while we handle the numbers.
                     </p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center g-4 align-items-start">
               {growth_data.map((item, index) => (
                  // Added dynamic marginTop to create the staggered up/down baseline layout on desktop
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.2)}s`} data-wow-duration="1s" style={{ marginTop: window.innerWidth > 991 && index % 2 !== 0 ? '50px' : '0px' }}>
                     
                     <div 
                        ref={setCardRef(index)}
                        className="p-4 rounded-4 text-center d-flex flex-column align-items-center justify-content-center" 
                        style={{ 
                           minHeight: '260px',
                           backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                           border: '1px solid rgba(255, 255, 255, 0.05)', 
                           transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                           cursor: 'default',
                           backdropFilter: 'blur(10px)', 
                           WebkitBackdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={(e) => { 
                           e.currentTarget.style.backgroundColor = 'rgba(9, 178, 171, 0.08)'; 
                           e.currentTarget.style.borderColor = 'rgba(9, 178, 171, 0.3)'; 
                           e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
                        }}
                        onMouseLeave={(e) => { 
                           e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)'; 
                           e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; 
                           e.currentTarget.style.boxShadow = 'none';
                        }}
                     >
                        <div className="mb-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '65px', height: '65px', backgroundColor: '#09B2AB', borderRadius: '50%' }}>
                           {item.icon}
                        </div>
                        <h3 className="mb-2 fw-bold" style={{ color: '#09B2AB', fontSize: 'clamp(1.8rem, 3vw, 2.2rem)' }}>
                           {item.stat}
                        </h3>
                        <p className="mb-0 fw-semibold text-uppercase" style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '1px' }}>
                           {item.title}
                        </p>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </div>
   )
}

export default Process