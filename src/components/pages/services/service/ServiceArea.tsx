import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ServiceArea = () => {
   // Refs for Mouse Parallax (Image Section)
   const containerRef = useRef<HTMLDivElement>(null);
   const bgRef = useRef<HTMLImageElement>(null);
   const overlayRef = useRef<HTMLDivElement>(null);

   // Refs for Scroll Parallax (Bottom Section)
   const statsRef = useRef<HTMLDivElement>(null);
   const card1Ref = useRef<HTMLDivElement>(null);
   const card2Ref = useRef<HTMLDivElement>(null);
   const card3Ref = useRef<HTMLDivElement>(null);

   // 1. Mouse Parallax for Image Section
   const handleMouseMove = (e: React.MouseEvent) => {
      if (window.innerWidth < 992 || !containerRef.current || !bgRef.current || !overlayRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5); 
      const y = ((e.clientY - rect.top) / rect.height - 0.5);

      gsap.to(containerRef.current, { 
         rotationY: x * 15, 
         rotationX: -y * 15, 
         transformPerspective: 1000,
         ease: "power2.out", 
         duration: 0.5 
      });

      gsap.to(bgRef.current, { x: -x * 40, y: -y * 40, ease: "power2.out", duration: 0.5 });
      gsap.to(overlayRef.current, { x: x * 50, y: y * 50, ease: "power2.out", duration: 0.5 });
   };

   const handleMouseLeave = () => {
      if (window.innerWidth < 992) return;
      gsap.to([containerRef.current, bgRef.current, overlayRef.current], { 
         rotationY: 0, rotationX: 0, x: 0, y: 0, ease: "power3.out", duration: 1 
      });
   };

   // 2. Scroll Parallax for Bottom Section
   useEffect(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 992px)", () => {
         if (statsRef.current) {
            gsap.fromTo(statsRef.current, 
               { y: 30 }, 
               { y: -30, ease: "none", scrollTrigger: { trigger: statsRef.current, start: "top bottom", end: "bottom top", scrub: 1 } }
            );
         }
         if (card1Ref.current) {
            gsap.fromTo(card1Ref.current, 
               { y: 60 }, 
               { y: -20, ease: "none", scrollTrigger: { trigger: card1Ref.current, start: "top bottom", end: "bottom top", scrub: 1 } }
            );
         }
         if (card2Ref.current) {
            gsap.fromTo(card2Ref.current, 
               { y: 120 }, 
               { y: -50, ease: "none", scrollTrigger: { trigger: card2Ref.current, start: "top bottom", end: "bottom top", scrub: 1 } }
            );
         }
         if (card3Ref.current) {
            gsap.fromTo(card3Ref.current, 
               { y: 40 }, 
               { y: -10, ease: "none", scrollTrigger: { trigger: card3Ref.current, start: "top bottom", end: "bottom top", scrub: 1 } }
            );
         }
      });

      return () => mm.revert();
   }, []);

   return (
      <div className="td-service-main-area pt-120 position-relative overflow-hidden">
         {/* Subtle Background Glow for Top Section */}
         <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(9, 178, 171, 0.05) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }}></div>

         {/* --- TOP SECTION: Interactive Image --- */}
         <div className="container position-relative z-index-1 mb-120">
            <div className="row justify-content-center">
               <div className="col-12" style={{ perspective: '1000px' }}>
                  <div 
                     ref={containerRef}
                     onMouseMove={handleMouseMove} 
                     onMouseLeave={handleMouseLeave}
                     className="td-service-main-bigthumb fix td-rounded-10 shadow-lg position-relative overflow-hidden"
                     style={{ height: '450px', transformStyle: 'preserve-3d' }}
                  >
                     <img 
                        ref={bgRef}
                        src="https://images.pexels.com/photos/6502029/pexels-photo-6502029.jpeg" 
                        alt="Dental Billing Professional" 
                        style={{ objectFit: 'cover', width: '110%', height: '110%', position: 'absolute', top: '-5%', left: '-5%', zIndex: 1 }} 
                     />
                     <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0, 57, 65, 0.95) 0%, rgba(0, 57, 65, 0.2) 100%)', zIndex: 2 }}></div>
                     
                     <div 
                        ref={overlayRef}
                        className="position-absolute d-flex flex-column justify-content-center h-100 p-4 p-md-5" 
                        style={{ zIndex: 3, top: 0, left: 0, width: '100%', pointerEvents: 'none' }}
                     >
                        <span className="mb-2 d-inline-block text-uppercase" style={{ color: '#09B2AB', fontWeight: 'bold', letterSpacing: '2px', fontSize: '14px' }}>
                           Dentist Led RCM
                        </span>
                        <h3 className="mb-4" style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, maxWidth: '600px', lineHeight: '1.2' }}>
                           Empowering practices to focus on <span style={{ color: '#09B2AB' }}>patient care.</span>
                        </h3>
                        <div style={{ pointerEvents: 'auto', width: 'fit-content' }}>
                           <Link 
                              to="/contact" 
                              className="td-btn-2 d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-bold shadow-lg"
                              style={{ backgroundColor: '#09B2AB', color: '#ffffff', border: 'none', transition: 'all 0.3s ease', textDecoration: 'none' }}
                              onMouseEnter={(e) => {
                                 e.currentTarget.style.backgroundColor = '#ffffff';
                                 e.currentTarget.style.color = '#003941';
                                 e.currentTarget.style.transform = 'translateY(-3px)';
                              }}
                              onMouseLeave={(e) => {
                                 e.currentTarget.style.backgroundColor = '#09B2AB';
                                 e.currentTarget.style.color = '#ffffff';
                                 e.currentTarget.style.transform = 'translateY(0px)';
                              }}
                           >
                              Learn More <i className="fa-solid fa-arrow-right ms-2"></i>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* --- BOTTOM SECTION: Full Width Dark Background --- */}
         <div className="position-relative py-120" style={{ backgroundColor: '#002C34' }}>
            
            {/* Subtle Tech Pattern Overlay */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container position-relative z-index-2">
               <div className="row align-items-center">
                  
                  {/* Left Column: Fixed Context & Title */}
                  <div className="col-lg-5 mb-5 mb-lg-0">
                     <div className="pe-lg-4 wow fadeInLeft" data-wow-duration="1s">
                        <span className="mb-3 d-inline-block px-4 py-2 rounded-pill" style={{ backgroundColor: 'rgba(9, 178, 171, 0.1)', color: '#09B2AB', fontWeight: 'bold', fontSize: '13px', letterSpacing: '1px' }}>
                           THE CURELEDGER ADVANTAGE
                        </span>
                        <h2 className="mb-4" style={{ color: '#ffffff', fontWeight: 900, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: '1.2' }}>
                           Focus on Patients, <br/><span style={{ color: '#09B2AB' }}>Not Billing</span>
                        </h2>
                        <p className="mb-5" style={{ color: '#D1D5D5', fontSize: '1.15rem', lineHeight: '1.7', opacity: 0.85 }}>
                           Financial health is the backbone of a thriving practice, but it shouldn't be your daily distraction. We optimize your entire revenue cycle—from credentialing to final payment—so you can prioritize patient outcomes while we <span style={{ color: '#09B2AB', fontWeight: 'bold' }}>protect the financial integrity</span> of your hard work.
                        </p>
                        <Link to="/contact" className="d-inline-flex align-items-center fw-bold" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#09B2AB'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}>
                           Get a Free Revenue Audit <i className="fa-solid fa-arrow-right ms-2" style={{ color: '#09B2AB' }}></i>
                        </Link>
                     </div>
                  </div>

                  {/* Right Column: Floating Masonry Parallax Cards */}
                  <div className="col-lg-7">
                     <div className="row g-4">
                        
                        {/* Masonry Left Side (Card 1 & 3) */}
                        <div className="col-md-6 d-flex flex-column gap-4">
                           {/* Card 1: Experience Stats */}
                           <div ref={card1Ref}>
                              <div 
                                 className="p-4 p-xl-5 rounded-4 text-center position-relative overflow-hidden" 
                                 style={{ backgroundColor: '#003941', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                              >
                                 <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', backgroundColor: '#09B2AB', borderRadius: '50%', opacity: 0.1 }}></div>
                                 <i className="fa-solid fa-award mb-3" style={{ fontSize: '30px', color: '#09B2AB' }}></i>
                                 <h2 className="mb-2" style={{ color: '#ffffff', fontSize: '4.5rem', fontWeight: 900, lineHeight: 1 }}>15<span style={{ fontSize: '2.5rem', color: '#09B2AB' }}>+</span></h2>
                                 <span className="fw-bold" style={{ color: '#A3B1B2', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Years Experience</span>
                              </div>
                           </div>

                           {/* Card 3: Prioritize Care */}
                           <div ref={card3Ref}>
                              <div 
                                 className="p-4 p-xl-5 rounded-4" 
                                 style={{ backgroundColor: '#003941', border: '1px solid rgba(255,255,255,0.05)', borderBottom: '3px solid transparent', transition: 'all 0.3s ease' }}
                                 onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
                                    e.currentTarget.style.borderBottom = '3px solid #09B2AB';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                 }}
                                 onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderBottom = '3px solid transparent';
                                    e.currentTarget.style.transform = 'translateY(0px)';
                                 }}
                              >
                                 <div className="mb-4 d-inline-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(9, 178, 171, 0.1)', borderRadius: '50%' }}>
                                    <i className="fa-solid fa-heart-pulse" style={{ color: '#09B2AB', fontSize: '1.5rem' }}></i>
                                 </div>
                                 <h3 className="mb-3" style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 800 }}>Prioritize Care</h3>
                                 <p className="mb-0" style={{ color: '#A3B1B2', opacity: 0.9, lineHeight: '1.6' }}>While billing is essential, prioritizing patient care contributes to long-term practice success.</p>
                              </div>
                           </div>
                        </div>

                        {/* Masonry Right Side (Card 2) - Pushed down for offset layout */}
                        <div className="col-md-6 pt-md-5 mt-md-4">
                           <div ref={card2Ref}>
                              <div 
                                 className="p-4 p-xl-5 rounded-4" 
                                 style={{ backgroundColor: '#003941', border: '1px solid rgba(255,255,255,0.05)', borderBottom: '3px solid transparent', transition: 'all 0.3s ease' }}
                                 onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
                                    e.currentTarget.style.borderBottom = '3px solid #09B2AB';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                 }}
                                 onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderBottom = '3px solid transparent';
                                    e.currentTarget.style.transform = 'translateY(0px)';
                                 }}
                              >
                                 <div className="mb-4 d-inline-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(9, 178, 171, 0.1)', borderRadius: '50%' }}>
                                    <i className="fa-solid fa-users" style={{ color: '#09B2AB', fontSize: '1.5rem' }}></i>
                                 </div>
                                 <h3 className="mb-3" style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 800 }}>100% Satisfied Clients</h3>
                                 <p className="mb-0" style={{ color: '#A3B1B2', opacity: 0.9, lineHeight: '1.6' }}>Satisfied patients are more likely to return for future treatments and recommend the practice to others.</p>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default ServiceArea;