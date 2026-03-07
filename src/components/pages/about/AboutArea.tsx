import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutArea = () => {
   const sectionRef = useRef<HTMLDivElement>(null);
   const imgRef = useRef<HTMLImageElement>(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         gsap.fromTo(".about-text-anim", 
            { y: 40, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
         );
      }, sectionRef);
      return () => ctx.revert();
   }, []);

   const handleMouseMove = (e: React.MouseEvent) => {
      if (window.innerWidth < 992 || !imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; 
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      gsap.to(imgRef.current, { rotationY: x, rotationX: -y, transformPerspective: 1000, ease: "power2.out", duration: 0.5 });
   };

   const handleMouseLeave = () => {
      if (window.innerWidth < 992 || !imgRef.current) return;
      gsap.to(imgRef.current, { rotationY: 0, rotationX: 0, ease: "power3.out", duration: 1 });
   };

   return (
      <div ref={sectionRef} className="pt-120 pb-120 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
         <div className="container">
            <div className="row align-items-center g-5">
               
               {/* Left: Interactive 3D Image */}
               <div className="col-lg-6">
                  <div 
                     onMouseMove={handleMouseMove} 
                     onMouseLeave={handleMouseLeave}
                     style={{ perspective: '1000px' }}
                  >
                     <div 
                        ref={imgRef}
                        className="rounded-4 overflow-hidden shadow-lg position-relative" 
                        style={{ aspectRatio: '4/5', border: '1px solid rgba(0,57,65,0.05)' }}
                     >
                        <img className="w-100 h-100" style={{ objectFit: 'cover' }} src="https://images.pexels.com/photos/6502029/pexels-photo-6502029.jpeg" alt="Dental Professionals" />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0, 57, 65, 0.8) 0%, transparent 50%)' }}></div>
                        <div className="position-absolute bottom-0 start-0 p-4">
                           <h3 className="text-white fw-bold m-0">Dentist-Led</h3>
                           <p className="text-white opacity-75 m-0">Revenue Cycle Management</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right: Content */}
               <div className="col-lg-6 ps-lg-5">
                  <span className="about-text-anim badge mb-3 px-3 py-2 rounded-pill" style={{ backgroundColor: 'rgba(9, 178, 171, 0.1)', color: '#09B2AB', letterSpacing: '1px' }}>
                     WHO WE ARE
                  </span>
                  <h2 className="about-text-anim mb-4" style={{ color: '#003941', fontWeight: 900, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: '1.1' }}>
                     Healing patients, <br/><span style={{ color: '#09B2AB' }}>not chasing payments.</span>
                  </h2>
                  <p className="about-text-anim mb-4 fs-5" style={{ color: '#002C34', opacity: 0.85, lineHeight: '1.6' }}>
                     CureLedger was founded on a simple belief: dentists should focus on healing patients, not chasing insurance payments[cite: 33]. 
                  </p>
                  <p className="about-text-anim mb-5" style={{ color: '#002C34', opacity: 0.75, lineHeight: '1.7' }}>
                     As a dentist-led revenue cycle management partner, we combine clinical insight with financial precision to eliminate revenue leaks, reduce front desk stress, and accelerate cashflow. From clean claims and eligibility verification to denial management and A/R follow-up, we ensure your practice gets paid accurately and predictably[cite: 35].
                  </p>
                  
                  <div className="about-text-anim d-flex gap-4 mb-5">
                     <div>
                        <h2 style={{ color: '#09B2AB', fontWeight: 900 }}>15+</h2>
                        <span className="fw-bold text-uppercase small" style={{ color: '#003941', letterSpacing: '1px' }}>Years Experience</span>
                     </div>
                     <div style={{ width: '1px', backgroundColor: 'rgba(0,57,65,0.1)' }}></div>
                     <div>
                        <h2 style={{ color: '#09B2AB', fontWeight: 900 }}>98%</h2>
                        <span className="fw-bold text-uppercase small" style={{ color: '#003941', letterSpacing: '1px' }}>Collection Rate</span>
                     </div>
                  </div>

                  <div className="about-text-anim">
                     <Link to="/contact" className="d-inline-flex align-items-center justify-content-center px-5 py-3 rounded-pill fw-bold text-white shadow-sm transition-all" style={{ backgroundColor: '#09B2AB', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#003941'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#09B2AB'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                        Schedule a Free Audit <i className="fa-solid fa-arrow-right ms-2"></i>
                     </Link>
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default AboutArea;