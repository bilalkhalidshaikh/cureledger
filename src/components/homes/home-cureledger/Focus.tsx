import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Focus = () => {
   // Refs for Parallax Animation
   const largeImgRef = useRef<HTMLImageElement>(null);
   const smallImgRef = useRef<HTMLImageElement>(null);
   const floatCardRef = useRef<HTMLDivElement>(null);
   const shapeRef = useRef<HTMLDivElement>(null);

   // GSAP Interactive Mouse Parallax
   const handleMouseMove = (e: React.MouseEvent) => {
      if (window.innerWidth < 992) return; // Disable on mobile to save performance

      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40; 
      const y = (clientY / window.innerHeight - 0.5) * 40;

      if (largeImgRef.current) gsap.to(largeImgRef.current, { x: x * -1, y: y * -1, ease: "power2.out", duration: 1 });
      if (smallImgRef.current) gsap.to(smallImgRef.current, { x: x * 1.5, y: y * 1.5, ease: "power2.out", duration: 1 });
      if (floatCardRef.current) gsap.to(floatCardRef.current, { x: x * 2, y: y * 2, ease: "power2.out", duration: 1 });
      if (shapeRef.current) gsap.to(shapeRef.current, { x: x * -2, y: y * -2, ease: "power2.out", duration: 1.5 });
   };

   const handleMouseLeave = () => {
      if (window.innerWidth < 992) return;

      gsap.to([largeImgRef.current, smallImgRef.current, floatCardRef.current, shapeRef.current], {
         x: 0, y: 0, ease: "power3.out", duration: 1.5
      });
   };

   return (
      <div 
         className="td-about-area pt-120 pb-120 p-relative overflow-hidden" 
         style={{ backgroundColor: '#FAFAFA' }}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
      >
         {/* Abstract Parallax Shape */}
         <div 
            ref={shapeRef}
            className="position-absolute" 
            style={{ top: '10%', right: '5%', width: '300px', height: '300px', backgroundColor: 'rgba(9, 178, 171, 0.05)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none' }}
         ></div>

         <div className="container p-relative z-index-1">
            <div className="row align-items-center">
               
               {/* LEFT COLUMN: Parallax Images & Floating Card */}
               <div className="col-lg-5 mb-5 mb-lg-0">
                  <div className="td-about-4-thumb p-relative z-index-1 wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="1s">
                     
                     {/* Main Large Image */}
                     <img 
                        ref={largeImgRef}
                        className="w-100 shadow-lg" 
                        src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg" 
                        alt="Dentist and Patient" 
                        style={{ borderRadius: '24px', objectFit: 'cover', minHeight: '500px' }}
                     />

                     {/* Floating Stat Card (Parallax) */}
                     <div 
                        ref={floatCardRef}
                        className="position-absolute shadow-lg bg-white p-4"
                        style={{ bottom: '-30px', left: '-30px', borderRadius: '16px', border: '1px solid rgba(9, 178, 171, 0.2)', zIndex: 3 }}
                     >
                        <div className="d-flex align-items-center gap-3">
                           <div style={{ width: '50px', height: '50px', backgroundColor: '#09B2AB', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '20px' }}>
                              <i className="fa-solid fa-star"></i>
                           </div>
                           <div>
                              <h4 className="mb-0 fw-bold" style={{ color: '#003941' }}>15+ Years</h4>
                              <span style={{ color: '#002C34', fontSize: '14px', fontWeight: '600' }}>Industry Experience</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* RIGHT COLUMN: Content & Secondary Image */}
               <div className="col-lg-7">
                  <div className="td-about-4-content ps-lg-5 p-relative wow fadeInRight" data-wow-delay=".4s" data-wow-duration="1s">
                     
                     {/* Section Tag */}
                     <span className="d-inline-block mb-20 px-4 py-2 rounded-pill fw-bold" style={{ backgroundColor: 'rgba(9, 178, 171, 0.1)', color: '#09B2AB', letterSpacing: '1px', fontSize: '14px', textTransform: 'uppercase' }}>
                        Our Philosophy
                     </span>
                     
                     {/* Heading */}
                     <h2 className="mb-30" style={{ color: '#003941', fontWeight: 800, fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: '1.1' }}>
                        Focus on <span style={{ color: '#09B2AB' }}>Patients,</span> <br />
                        Not Billing
                     </h2>
                     
                     {/* Description */}
                     <p className="mb-40" style={{ color: '#002C34', fontSize: '1.2rem', lineHeight: '1.7' }}>
                        Financial health is the backbone of a thriving practice, but it shouldn't be your daily distraction. We optimize your entire revenue cycle—from credentialing to final payment—so you can prioritize patient outcomes while we protect the financial integrity of your hard work.
                     </p>

                     {/* Inline Stats */}
                     <div className="d-flex flex-wrap gap-5 mb-50">
                        <div>
                           <h3 className="fw-bold mb-1" style={{ color: '#09B2AB', fontSize: '2.5rem' }}>100%</h3>
                           <span style={{ color: '#003941', fontWeight: '600', fontSize: '1.1rem' }}>Satisfied Clients</span>
                        </div>
                        <div>
                           <h3 className="fw-bold mb-1" style={{ color: '#09B2AB', fontSize: '2.5rem' }}>98%</h3>
                           <span style={{ color: '#003941', fontWeight: '600', fontSize: '1.1rem' }}>Collection Rate</span>
                        </div>
                     </div>
                     
                     <div className="d-flex align-items-end justify-content-between flex-wrap gap-4">
                        {/* CTA Button */}
                        <Link to="/" className="td-btn-2 d-inline-flex align-items-center justify-content-center" 
                              style={{ backgroundColor: '#003941', color: '#fff', padding: '16px 40px', borderRadius: '50px', fontWeight: 'bold', border: 'none', boxShadow: '0 10px 30px rgba(0, 57, 65, 0.2)' }}>
                           <span className="me-2">DISCOVER MORE</span>
                           <i className="fa-solid fa-arrow-right"></i>
                        </Link>

                        {/* Small Parallax Image (Right aligned) */}
                        <div className="d-none d-sm-block p-relative">
                           <img 
                              ref={smallImgRef}
                              src="https://images.pexels.com/photos/6502025/pexels-photo-6502025.jpeg" 
                              alt="Modern Clinic" 
                              className="shadow"
                              style={{ width: '220px', height: '180px', objectFit: 'cover', borderRadius: '16px', border: '6px solid #ffffff' }} 
                           />
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Focus