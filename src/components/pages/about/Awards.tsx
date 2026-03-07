import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Awards = () => {
   const sectionRef = useRef<HTMLDivElement>(null);
   const bgTextRef = useRef<HTMLHeadingElement>(null);
   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

   useEffect(() => {
      const ctx = gsap.context(() => {
         // Massive Background Text Horizontal Scroll Parallax
         gsap.to(bgTextRef.current, {
            xPercent: -30,
            ease: "none",
            scrollTrigger: {
               trigger: sectionRef.current,
               start: "top bottom",
               end: "bottom top",
               scrub: 1,
            }
         });

         // Float cards up with a stagger
         gsap.fromTo(".phil-card", 
            { y: 80, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
         );
      }, sectionRef);
      return () => ctx.revert();
   }, []);

   // High-End 3D Tilt Effect on Cards
   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
      if (window.innerWidth < 992) return;
      const card = cardRefs.current[index];
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
      gsap.to(card, { rotationY: x, rotationX: -y, transformPerspective: 1000, ease: "power2.out", duration: 0.4 });
   };

   const handleMouseLeave = (index: number) => {
      const card = cardRefs.current[index];
      if (!card) return;
      gsap.to(card, { rotationY: 0, rotationX: 0, ease: "power3.out", duration: 0.8 });
   };

   const philosophyData = [
      {
         icon: "fa-tooth",
         title: "Clinical Insight",
         desc: "Founded by industry professionals who truly understand the clinical side of dentistry, not just the spreadsheets and numbers."
      },
      {
         icon: "fa-bullseye",
         title: "Financial Precision",
         desc: "Every claim, every code, and every denial is handled with surgical accuracy to maximize your returns and eliminate leaks."
      },
      {
         icon: "fa-magnifying-glass",
         title: "Complete Transparency",
         desc: "No hidden fees and no black-box processes. You have full visibility and control over your practice's financial health at all times."
      }
   ];

   return (
      <div ref={sectionRef} className="pt-120 pb-120 position-relative overflow-hidden" style={{ backgroundColor: '#002C34' }}>
         
         {/* Massive Scrolling Background Text */}
         <h1 
            ref={bgTextRef} 
            className="position-absolute top-50 start-0 translate-middle-y w-100 text-nowrap pointer-events-none" 
            style={{ 
               fontSize: '20vw', 
               fontWeight: 900, 
               color: 'rgba(255,255,255,0.03)', 
               lineHeight: 1, 
               margin: 0,
               zIndex: 0 
            }}
         >
            OUR PHILOSOPHY OUR PHILOSOPHY
         </h1>

         <div className="container position-relative z-index-1">
            <div className="row mb-60 justify-content-center text-center">
               <div className="col-lg-8">
                  <span className="badge mb-3 px-3 py-2 rounded-pill" style={{ backgroundColor: 'rgba(9, 178, 171, 0.1)', color: '#09B2AB', letterSpacing: '1px' }}>
                     THE CURELEDGER DIFFERENCE
                  </span>
                  <h2 style={{ color: '#ffffff', fontWeight: 900, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                     The Core of <span style={{ color: '#09B2AB' }}>Our Approach</span>
                  </h2>
               </div>
            </div>
            
            <div className="row g-4 justify-content-center">
               {philosophyData.map((item, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6 phil-card">
                     <div 
                        ref={(el) => { cardRefs.current[idx] = el; }}
                        onMouseMove={(e) => handleMouseMove(e, idx)}
                        onMouseLeave={() => handleMouseLeave(idx)}
                        className="p-5 rounded-4 h-100 position-relative" 
                        style={{ 
                           backgroundColor: 'rgba(0, 57, 65, 0.6)', 
                           border: '1px solid rgba(9,178,171,0.2)', 
                           backdropFilter: 'blur(10px)',
                           transformStyle: 'preserve-3d',
                           transition: 'border-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#09B2AB'}
                     >
                        <i className={`fa-solid ${item.icon} mb-4`} style={{ fontSize: '40px', color: '#09B2AB' }}></i>
                        <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>{item.title}</h4>
                        <p className="mb-0" style={{ color: '#A3B1B2', lineHeight: '1.7', fontSize: '1.05rem' }}>{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Awards;