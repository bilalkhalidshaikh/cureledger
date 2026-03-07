import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
   const sectionRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         gsap.fromTo(".feat-card", 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
         );
      }, sectionRef);
      return () => ctx.revert();
   }, []);

   // 100% Supported FontAwesome Free Solid Icons
   const features = [
      {
         icon: "fa-clipboard-check", 
         title: "Know Before You Treat",
         desc: "Accurate eligibility checks, deductibles, frequencies, and remaining benefits—everything verified upfront before the patient sits in the chair."
      },
      {
         icon: "fa-wallet", // Safe, universally supported icon for revenue
         title: "Stop the Revenue Leak",
         desc: "We close the gap between the industry average of 92% and our 98% collection rate. We ensure you get every dollar you've earned."
      },
      {
         icon: "fa-chart-line", 
         title: "Erase the Chase",
         desc: "We manage daily claim submissions and relentless A/R follow-up, taking the burden of insurance communication off your plate."
      }
   ];

   return (
      <div ref={sectionRef} className="pt-120 pb-120" style={{ backgroundColor: '#F8FAFA' }}>
         <div className="container">
            <div className="text-center mb-60">
               <h2 style={{ color: '#003941', fontWeight: 900, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Why Choose <span style={{ color: '#09B2AB' }}>CureLedger</span></h2>
            </div>
            <div className="row g-4 justify-content-center">
               {features.map((item, i) => (
                  <div key={i} className="col-lg-4 col-md-6 feat-card">
                     <div 
                        className="p-5 rounded-4 bg-white h-100 text-center shadow-sm position-relative overflow-hidden group"
                        style={{ border: '1px solid rgba(0,57,65,0.05)', transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)', top: 0 }}
                        onMouseEnter={(e) => {
                           e.currentTarget.style.boxShadow = '0 20px 40px rgba(9, 178, 171, 0.15)';
                           e.currentTarget.style.top = '-10px';
                           e.currentTarget.style.borderColor = 'rgba(9, 178, 171, 0.4)';
                           const icon = e.currentTarget.querySelector('.feature-icon');
                           if(icon) (icon as HTMLElement).style.transform = 'scale(1.15)';
                        }}
                        onMouseLeave={(e) => {
                           e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                           e.currentTarget.style.top = '0px';
                           e.currentTarget.style.borderColor = 'rgba(0,57,65,0.05)';
                           const icon = e.currentTarget.querySelector('.feature-icon');
                           if(icon) (icon as HTMLElement).style.transform = 'scale(1)';
                        }}
                     >
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" style={{ width: '80px', height: '80px', backgroundColor: 'rgba(9, 178, 171, 0.1)' }}>
                           <i className={`fa-solid ${item.icon} feature-icon`} style={{ fontSize: '30px', color: '#09B2AB', transition: 'transform 0.3s ease' }}></i>
                        </div>
                        <h4 className="fw-bold mb-3" style={{ color: '#003941' }}>{item.title}</h4>
                        <p className="mb-0" style={{ color: '#002C34', opacity: 0.8, lineHeight: '1.7', fontSize: '1.05rem' }}>{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Feature;