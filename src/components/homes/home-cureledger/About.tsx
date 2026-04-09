import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
   // Refs for parallax, scroll animations, and interactive 3D effects
   const sectionRef = useRef<HTMLDivElement>(null);
   const bgImgRef = useRef<HTMLImageElement>(null);
   const cardRef = useRef<HTMLDivElement>(null);
   const badgeRef = useRef<HTMLDivElement>(null);

   const servicesList = [
      "Clinical Insurance Verification",
      "Doctor-Led Claim Processing",
      "Narrative & Attachment Optimization",
      "EFT & ERA Reconciliation",
      "Relentless A/R Follow-Up",
      "Provider Credentialing",
      "Patient Billing & Statements"
   ];

   // Scroll Reveal Animation
   useEffect(() => {
      const ctx = gsap.context(() => {
         gsap.fromTo(".about-reveal", 
            { y: 40, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
         );
      }, sectionRef);
      return () => ctx.revert();
   }, []);

   // Interactive Mouse Parallax Effect for the background image
   const handleMouseMove = (e: React.MouseEvent) => {
      if (window.innerWidth < 992) return; // Disable on mobile to save performance

      const { clientX, clientY, currentTarget } = e;
      const rect = currentTarget.getBoundingClientRect();
      
      const x = ((clientX - rect.left) / rect.width - 0.5) * 30; 
      const y = ((clientY - rect.top) / rect.height - 0.5) * 30;

      if (bgImgRef.current) {
         gsap.to(bgImgRef.current, { x: x * -1, y: y * -1, ease: "power2.out", duration: 1 });
      }
   };

   const handleMouseLeave = () => {
      if (window.innerWidth < 992) return;
      if (bgImgRef.current) {
         gsap.to(bgImgRef.current, { x: 0, y: 0, ease: "power3.out", duration: 1.5 });
      }
   };

   // Advanced 3D Tilt Effect for the left card
   const handleCardMove = (e: React.MouseEvent) => {
      if (window.innerWidth < 992 || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Tilt the card
      gsap.to(cardRef.current, {
         rotationY: x * 0.04,
         rotationX: -y * 0.04,
         transformPerspective: 1000,
         ease: "power2.out",
         duration: 0.5
      });

      // Move the inner badge faster for a layered 3D effect
      if (badgeRef.current) {
         gsap.to(badgeRef.current, {
            x: x * 0.1,
            y: y * 0.1,
            ease: "power2.out",
            duration: 0.5
         });
      }
   };

   const handleCardLeave = () => {
      if (window.innerWidth < 992 || !cardRef.current) return;
      gsap.to(cardRef.current, { rotationY: 0, rotationX: 0, ease: "power3.out", duration: 1 });
      if (badgeRef.current) gsap.to(badgeRef.current, { x: 0, y: 0, ease: "power3.out", duration: 1 });
   };

   return (
      <div 
         ref={sectionRef}
         className="td-about-main-area pt-120 pb-120 overflow-hidden" 
         style={{ backgroundColor: '#ffffff' }}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
      >
         <div className="container">
            
            {/* Header Section */}
            <div className="row justify-content-center mb-60">
               <div className="col-lg-10 col-xl-9">
                  <div className="text-center about-reveal">
                     <span className="d-inline-block mb-3 px-4 py-2 rounded-pill fw-bold shadow-sm" 
                           style={{ backgroundColor: 'rgba(9, 178, 171, 0.1)', color: '#09B2AB', letterSpacing: '1px', fontSize: '13px', textTransform: 'uppercase', border: '1px solid rgba(9, 178, 171, 0.2)' }}>
                        OUR CORE SERVICES
                     </span>
                     <h2 className="mb-0" style={{ color: '#003941', fontWeight: 900, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: '1.2',textTransform: 'uppercase' }}>
                        Protecting Your Revenue. <br className="d-none d-md-block" /><span style={{ color: '#09B2AB' }}>Powering Your Growth.</span>
                     </h2>
                  </div>
               </div>
            </div>

            <div className="row align-items-center g-5">
               
               {/* LEFT COLUMN: The Interactive 3D Parallax Block */}
               <div className="col-lg-5 about-reveal" style={{ perspective: '1000px' }}>
                  <div 
                     ref={cardRef}
                     onMouseMove={handleCardMove}
                     onMouseLeave={handleCardLeave}
                     className="p-relative rounded-4 shadow-lg overflow-hidden d-flex align-items-center justify-content-center" 
                     style={{ minHeight: '500px', border: '1px solid rgba(9, 178, 171, 0.2)', transformStyle: 'preserve-3d', cursor: 'crosshair' }}
                  >
                     
                     {/* Parallax Background Image: Dental professional doing billing/records */}
                     <img 
                        ref={bgImgRef}
                        src="/assets/img/sections/sectionthree.png" 
                        alt="Dental Billing Professional" 
                        style={{ 
                           position: 'absolute', 
                           top: '-10%', left: '0%', 
                           width: '120%', height: '120%', 
                           objectFit: 'cover', 
                           zIndex: 0 
                        }} 
                     />
                     
                     {/* Deep Teal Brand Overlay */}
                     <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 57, 65, 0.85)', zIndex: 1 }}></div>

                     {/* Interactive Floating Badge */}
                     <div 
                        ref={badgeRef}
                        style={{ 
                           position: 'absolute', 
                           top: '30px', 
                           left: '30px', 
                           backgroundColor: '#09B2AB', 
                           color: '#fff', 
                           padding: '8px 16px', 
                           borderRadius: '30px', 
                           fontWeight: 'bold', 
                           fontSize: '0.85rem',
                           zIndex: 3,
                           boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                           display: 'flex',
                           alignItems: 'center',
                           gap: '8px'
                        }}
                     >
                        <i className="fa-solid fa-shield-check"></i> Clinical Precision
                     </div>

                     {/* Glassmorphic Content */}
                     <div className="p-relative z-index-2 text-center w-100 h-100 d-flex flex-column justify-content-center align-items-center" 
                          style={{ backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)', transform: 'translateZ(40px)' }}>
                        <h2 className="mb-0" style={{ fontSize: 'clamp(4.5rem, 8vw, 7rem)', fontWeight: 900, color: '#ffffff', lineHeight: '1', textShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                           98<span style={{ color: '#09B2AB', fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>%</span>
                        </h2>
                        <span className="fw-bold mt-2 px-3 py-1 rounded-pill" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.2)' }}>
                           Average Collection Rate
                        </span>
                     </div>

                  </div>
               </div>

               {/* RIGHT COLUMN: The Strategy Text & Service List */}
               <div className="col-lg-7">
                  <div className="ms-lg-4">
                     
                     <p className="about-reveal mb-4" style={{ color: '#002C34', fontSize: '1.15rem', lineHeight: '1.7', opacity: 0.85 }}>
                        CureLedger provides the clinical intelligence required to eliminate the 'medical necessity' denials that stall your cash flow. By auditing every claim against your clinical notes and X-rays before submission, we ensure your revenue is protected by doctor-level accuracy and your practice is powered by a <strong style={{ color: '#09B2AB' }}>98% average collection rate</strong>.
                     </p>
                     
                     <p className="about-reveal mb-5 pb-3 border-bottom" style={{ color: '#003941', fontSize: '1.25rem', fontWeight: 700, lineHeight: '1.5' }}>
                        We don't just process codes; we secure the full financial value of your dentistry.
                     </p>

                     {/* Services Grid */}
                     <div className="row g-3">
                        {servicesList.map((service, index) => (
                           <div key={index} className="col-md-6 about-reveal">
                              <div 
                                 className="d-flex align-items-center p-3 rounded-3 shadow-sm transition-all" 
                                 style={{ 
                                    backgroundColor: '#FAFAFA', 
                                    border: '1px solid rgba(0,57,65,0.05)',
                                    cursor: 'default'
                                 }}
                                 onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ffffff';
                                    e.currentTarget.style.borderColor = '#09B2AB';
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(9, 178, 171, 0.1)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                 }}
                                 onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#FAFAFA';
                                    e.currentTarget.style.borderColor = 'rgba(0,57,65,0.05)';
                                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                 }}
                              >
                                 <div className="rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '35px', height: '35px', backgroundColor: 'rgba(9, 178, 171, 0.1)' }}>
                                    <i className="fa-solid fa-check" style={{ color: '#09B2AB', fontSize: '1rem' }}></i>
                                 </div>
                                 <span className="fw-bold" style={{ color: '#003941', fontSize: '0.95rem' }}>{service}</span>
                              </div>
                           </div>
                        ))}
                     </div>

                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default About;