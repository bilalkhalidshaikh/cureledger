import { useRef } from "react";
import gsap from "gsap";

const About = () => {
   // Refs for the parallax and interactive 3D effects
   const bgImgRef = useRef<HTMLImageElement>(null);
   const cardRef = useRef<HTMLDivElement>(null);
   const badgeRef = useRef<HTMLDivElement>(null);

   // Interactive Mouse Parallax Effect for the background image
   const handleMouseMove = (e: React.MouseEvent) => {
      if (window.innerWidth < 992) return; // Disable on mobile to save performance

      const { clientX, clientY, currentTarget } = e;
      const rect = currentTarget.getBoundingClientRect();
      
      const x = ((clientX - rect.left) / rect.width - 0.5) * 40; 
      const y = ((clientY - rect.top) / rect.height - 0.5) * 40;

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
         className="td-about-main-area pt-120 pb-120 overflow-hidden" 
         style={{ backgroundColor: '#ffffff' }}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
      >
         <div className="container">
            
            {/* Header Section */}
            <div className="row justify-content-center mb-60">
               <div className="col-lg-10 col-xl-9">
                  <div className="text-center wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
                     <span className="d-inline-block mb-20 px-4 py-2 rounded-pill fw-bold" 
                           style={{ backgroundColor: 'rgba(9, 178, 171, 0.1)', color: '#09B2AB', letterSpacing: '1px', fontSize: '14px', textTransform: 'uppercase' }}>
                        Our Focus
                     </span>
                     <h2 className="mb-0" style={{ color: '#003941', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.2' }}>
                        We optimize your revenue cycle to help your practice grow, protecting <span style={{ color: '#09B2AB' }}>your income with precision.</span>
                     </h2>
                  </div>
               </div>
            </div>

            <div className="row align-items-center">
               
               {/* LEFT COLUMN: The Interactive 3D Parallax Block */}
               <div className="col-lg-5 mb-5 mb-lg-0" style={{ perspective: '1000px' }}>
                  <div 
                     ref={cardRef}
                     onMouseMove={handleCardMove}
                     onMouseLeave={handleCardLeave}
                     className="p-relative rounded-4 shadow-lg overflow-hidden d-flex align-items-center justify-content-center wow fadeInLeft" 
                     data-wow-delay=".3s" 
                     data-wow-duration="1s"
                     style={{ minHeight: '450px', border: '1px solid rgba(9, 178, 171, 0.2)', transformStyle: 'preserve-3d', cursor: 'default' }}
                  >
                     
                     {/* Parallax Background Image: Dental professional doing billing/records */}
                     <img 
                        ref={bgImgRef}
                        src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg" 
                        alt="Dental Billing Professional" 
                        style={{ 
                           position: 'absolute', 
                           top: '-10%', left: '-10%', 
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
                           boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                           display: 'flex',
                           alignItems: 'center',
                           gap: '8px'
                        }}
                     >
                        <i className="fa-solid fa-check-circle"></i> Verified Accuracy
                     </div>

                     {/* Glassmorphic Content with Decreased Size */}
                     <div className="p-relative z-index-2 text-center p-5 w-100 h-100 d-flex flex-column justify-content-center align-items-center" 
                          style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', transform: 'translateZ(30px)' }}>
                        <h2 className="mb-0" style={{ fontSize: 'clamp(4.5rem, 8vw, 6.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: '1' }}>
                           98<span style={{ color: '#09B2AB', fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>%</span>
                        </h2>
                        <span className="fw-bold mt-2" style={{ color: '#A3B1B2', letterSpacing: '2px', fontSize: '1rem', textTransform: 'uppercase' }}>
                           Average Collection Rate
                        </span>
                     </div>

                  </div>
               </div>

               {/* RIGHT COLUMN: The Strategy Text Cards */}
               <div className="col-lg-7">
                  <div className="ms-lg-5">
                     <div className="row g-4">
                        
                        {/* Strategy Card 1 */}
                        <div className="col-md-6">
                           <div className="h-100 p-4 rounded-4 wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s"
                                style={{ backgroundColor: '#FAFAFA', border: '1px solid #E5E7E7', transition: 'all 0.3s ease' }}
                                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = '#09B2AB'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FAFAFA'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E5E7E7'; }}>
                              <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(9, 178, 171, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                 <i className="fa-solid fa-bullseye" style={{ color: '#09B2AB', fontSize: '20px' }}></i>
                              </div>
                              <h3 className="mb-3 fw-bold" style={{ color: '#003941', fontSize: '1.5rem' }}>Claim Accuracy</h3>
                              <p className="mb-0" style={{ color: '#002C34', lineHeight: '1.6' }}>
                                 Our clinical billing experts maximize your practice's ability to produce by ensuring every claim is coded correctly the first time.
                              </p>
                           </div>
                        </div>

                        {/* Strategy Card 2 */}
                        <div className="col-md-6">
                           <div className="h-100 p-4 rounded-4 wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s"
                                style={{ backgroundColor: '#FAFAFA', border: '1px solid #E5E7E7', transition: 'all 0.3s ease' }}
                                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = '#09B2AB'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FAFAFA'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E5E7E7'; }}>
                              <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(9, 178, 171, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                 <i className="fa-solid fa-shield-halved" style={{ color: '#09B2AB', fontSize: '20px' }}></i>
                              </div>
                              <h3 className="mb-3 fw-bold" style={{ color: '#003941', fontSize: '1.5rem' }}>Stop Revenue Leaks</h3>
                              <p className="mb-0" style={{ color: '#002C34', lineHeight: '1.6' }}>
                                 We aggressively pursue unpaid claims, fix denials instantly, and ensure you get paid every dollar you have earned.
                              </p>
                           </div>
                        </div>

                        {/* Bottom Full-Width Paragraph Card */}
                        <div className="col-12">
                           <div className="p-4 p-md-5 rounded-4 mt-2 wow fadeInUp" data-wow-delay=".8s" data-wow-duration="1s"
                                style={{ backgroundColor: '#003941', position: 'relative', overflow: 'hidden' }}>
                              
                              {/* Abstract shape for premium feel */}
                              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', backgroundColor: '#09B2AB', borderRadius: '50%', opacity: 0.1 }}></div>
                              
                              <p className="mb-0 p-relative z-index-2" style={{ color: '#FFFFFF', fontSize: '1.15rem', lineHeight: '1.7' }}>
                                 Financial health is the backbone of a thriving practice, but it shouldn't be your daily distraction. We take the burden of insurance communication off your plate to ensure a seamless flow of payments and <span style={{ color: '#09B2AB', fontWeight: 'bold' }}>maximize your bottom line.</span>
                              </p>
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

export default About