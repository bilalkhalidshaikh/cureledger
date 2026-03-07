import { useRef } from "react";
import type { JSX } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

interface DataType {
   id: number;
   icon: JSX.Element;
   title: string;
   description: string;
}

const achievement_data: DataType[] = [
   {
      id: 1,
      icon: (
         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#09B2AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
         </svg>
      ),
      title: "Know Before You Treat",
      description: "Accurate eligibility checks, deductibles, frequencies, and remaining benefits—everything verified upfront.",
   },
   {
      id: 2,
      icon: (
         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#09B2AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
         </svg>
      ),
      title: "Stop the Revenue Leak",
      description: "We close the gap between the industry average of 92% and our 98% collection rate. We ensure you get every dollar you've earned.",
   },
   {
      id: 3,
      icon: (
         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#09B2AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
         </svg>
      ),
      title: "Erase the Chase",
      description: "We manage daily claim submissions and relentless A/R follow-up. We take the burden of insurance communication off your plate.",
   },
];

const Achievement = () => {
   // Refs for Parallax Animation
   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
   const bgOrb1Ref = useRef<HTMLDivElement>(null);
   const bgOrb2Ref = useRef<HTMLDivElement>(null);

   // Interactive Mouse Parallax Effect
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

      if (bgOrb1Ref.current) gsap.to(bgOrb1Ref.current, { x: x * -1.5, y: y * -1.5, ease: "power2.out", duration: 1.5 });
      if (bgOrb2Ref.current) gsap.to(bgOrb2Ref.current, { x: x * 1.5, y: y * 1.5, ease: "power2.out", duration: 1.5 });
   };

   const handleMouseLeave = () => {
      if (window.innerWidth < 992) return;
      
      cardRefs.current.forEach((card) => {
         if (card) gsap.to(card, { x: 0, y: 0, ease: "power3.out", duration: 1.5 });
      });
      if (bgOrb1Ref.current) gsap.to(bgOrb1Ref.current, { x: 0, y: 0, ease: "power3.out", duration: 1.5 });
      if (bgOrb2Ref.current) gsap.to(bgOrb2Ref.current, { x: 0, y: 0, ease: "power3.out", duration: 1.5 });
   };

   const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
      cardRefs.current[index] = el;
   };

   return (
      <div 
         className="td-achievement-area pt-120 pb-120 p-relative overflow-hidden" 
         style={{ backgroundColor: '#003941' }}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
      >
         {/* Ambient Parallax Background Orbs */}
         <div ref={bgOrb1Ref} style={{ position: 'absolute', top: '10%', right: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(9,178,171,0.08) 0%, rgba(0,57,65,0) 70%)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }}></div>
         <div ref={bgOrb2Ref} style={{ position: 'absolute', bottom: '10%', left: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(111,110,224,0.05) 0%, rgba(0,57,65,0) 70%)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }}></div>

         <div className="container p-relative z-index-1">
            
            {/* Header Area & Centered CTA Button */}
            <div className="row justify-content-center mb-50">
               <div className="col-xl-8 col-lg-10">
                  <div className="text-center wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
                     
                     <span className="d-inline-block mb-20 px-4 py-2 rounded-pill fw-bold" style={{ backgroundColor: 'rgba(9, 178, 171, 0.15)', color: '#09B2AB', letterSpacing: '1px', fontSize: '14px', textTransform: 'uppercase' }}>
                        Why Choose CureLedger
                     </span>
                     
                     <h2 className="mb-20" style={{ color: '#FFFFFF', fontWeight: 800, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: '1.2' }}>
                        We protect what you've earned so your practice can grow with <span style={{ color: '#09B2AB' }}>confidence.</span>
                     </h2>
                     
                     <p className="mb-40" style={{ color: '#D1D5D5', fontSize: '1.15rem', lineHeight: '1.6' }}>
                        Financial health is the backbone of a thriving practice, but it shouldn't be your daily distraction. We optimize your entire revenue cycle—from verification to final payment.
                     </p>

                     {/* Button strictly centered with tight margin */}
                     <div className="d-flex justify-content-center mb-10">
                        <div className="td-btn-group d-flex align-items-center">
                           <Link className="td-btn-circle d-flex align-items-center justify-content-center" to="/" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>
                              <i className="fa-solid fa-arrow-right"></i>
                           </Link>
                           <Link className="td-btn-2 text-center" to="/" style={{ backgroundColor: '#09B2AB', color: '#fff', border: 'none', padding: '16px 40px', fontWeight: 'bold' }}>
                              SCHEDULE A CONSULT NOW
                           </Link>
                           <Link className="td-btn-circle d-flex align-items-center justify-content-center" to="/" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>
                              <i className="fa-solid fa-arrow-right"></i>
                           </Link>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
            
            {/* 3 Cards Grid with staggered Parallax */}
            <div className="row justify-content-center align-items-start g-4">
               {achievement_data.map((item, index) => (
                  <div 
                     key={item.id} 
                     className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" 
                     data-wow-delay={`${0.4 + (index * 0.2)}s`} 
                     data-wow-duration="1s"
                     // The staggered layout based on index
                     style={{ marginTop: window.innerWidth > 991 && index % 2 !== 0 ? '40px' : '0px' }}
                  >
                     <div 
                        ref={setCardRef(index)}
                        className="h-100 p-5 rounded-4 shadow-sm" 
                        style={{ 
                           backgroundColor: '#002C34', 
                           border: '1px solid rgba(255, 255, 255, 0.05)', 
                           transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                           cursor: 'default',
                           backdropFilter: 'blur(10px)', 
                           WebkitBackdropFilter: 'blur(10px)'
                        }} 
                        onMouseEnter={(e) => { 
                           e.currentTarget.style.backgroundColor = 'rgba(9, 178, 171, 0.08)'; 
                           e.currentTarget.style.borderColor = 'rgba(9, 178, 171, 0.3)'; 
                           e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)'; 
                        }}
                        onMouseLeave={(e) => { 
                           e.currentTarget.style.backgroundColor = '#002C34'; 
                           e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; 
                           e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)'; 
                        }}
                     >
                        
                        <div className="mb-30 d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(9, 178, 171, 0.1)' }}>
                           {item.icon}
                        </div>
                        
                        <h4 className="mb-20 fw-bold" style={{ color: '#FFFFFF', fontSize: '1.5rem' }}>
                           {item.title}
                        </h4>
                        
                        <p style={{ color: '#A3B1B2', lineHeight: '1.7', fontSize: '1.05rem', margin: 0 }}>
                           {item.description}
                        </p>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </div>
   )
}

export default Achievement