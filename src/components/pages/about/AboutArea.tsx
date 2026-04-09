import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutArea = () => {
   const sectionRef = useRef<HTMLDivElement>(null);
   
   // Wrappers for Slide-In Animations
   const missionWrapRef = useRef<HTMLDivElement>(null);
   const visionWrapRef = useRef<HTMLDivElement>(null);

   // Images for Hover Zoom and Scroll Parallax
   const missionImgRef = useRef<HTMLImageElement>(null);
   const visionImgRef = useRef<HTMLImageElement>(null);
   
   // Secondary Overlapping Images
   const missionSecImgRef = useRef<HTMLDivElement>(null);
   const visionSecImgRef = useRef<HTMLDivElement>(null);

   // Badges for Elastic Pop and Breathing
   const missionBadgeRef = useRef<HTMLDivElement>(null);
   const visionBadgeRef = useRef<HTMLDivElement>(null);

   // Dots for Opposite Parallax
   const missionDotsRef = useRef<HTMLDivElement>(null);
   const visionDotsRef = useRef<HTMLDivElement>(null);

   // Scroll & Continuous Animations
   useEffect(() => {
      const ctx = gsap.context(() => {
         
         // ==========================================
         // 1. ENTRANCE ANIMATIONS (Slide in Left/Right)
         // ==========================================
         
         // Mission Section (Image slides from Left, Text from Bottom)
         const missionTl = gsap.timeline({
            scrollTrigger: { trigger: ".mission-row", start: "top 75%" }
         });
         
         missionTl.fromTo(missionWrapRef.current, 
            { x: -100, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
         )
         .fromTo(".mission-anim", 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.8"
         )
         .fromTo([missionBadgeRef.current, missionSecImgRef.current], 
            { scale: 0.8, opacity: 0, y: 20 }, 
            { scale: 1, opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "elastic.out(1, 0.5)" }, "-=0.6"
         );

         // Vision Section (Image slides from Right, Text from Bottom)
         const visionTl = gsap.timeline({
            scrollTrigger: { trigger: ".vision-row", start: "top 75%" }
         });

         visionTl.fromTo(visionWrapRef.current, 
            { x: 100, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
         )
         .fromTo(".vision-anim", 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.8"
         )
         .fromTo([visionBadgeRef.current, visionSecImgRef.current], 
            { scale: 0.8, opacity: 0, y: 20 }, 
            { scale: 1, opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "elastic.out(1, 0.5)" }, "-=0.6"
         );

         // ==========================================
         // 2. SCROLL PARALLAX (Depth of Field)
         // ==========================================
         
         // Inner Image Parallax (Image starts slightly scaled up to allow movement room)
         gsap.fromTo(missionImgRef.current, 
            { yPercent: -10, scale: 1.1 }, 
            { yPercent: 10, ease: "none", scrollTrigger: { trigger: ".mission-row", start: "top bottom", end: "bottom top", scrub: 1 } }
         );
         gsap.fromTo(visionImgRef.current, 
            { yPercent: -10, scale: 1.1 }, 
            { yPercent: 10, ease: "none", scrollTrigger: { trigger: ".vision-row", start: "top bottom", end: "bottom top", scrub: 1 } }
         );

         // Secondary Image Parallax (Moves slightly faster for 3D depth)
         gsap.to(missionSecImgRef.current, {
            y: 40, ease: "none",
            scrollTrigger: { trigger: ".mission-row", start: "top bottom", end: "bottom top", scrub: 1 }
         });
         gsap.to(visionSecImgRef.current, {
            y: -40, ease: "none",
            scrollTrigger: { trigger: ".vision-row", start: "top bottom", end: "bottom top", scrub: 1 }
         });

         // Background Dots Parallax (Moves opposite to the scroll)
         gsap.to(missionDotsRef.current, {
            y: 70, ease: "none",
            scrollTrigger: { trigger: ".mission-row", start: "top bottom", end: "bottom top", scrub: 1 }
         });
         gsap.to(visionDotsRef.current, {
            y: -70, ease: "none",
            scrollTrigger: { trigger: ".vision-row", start: "top bottom", end: "bottom top", scrub: 1 }
         });

         // ==========================================
         // 3. CONTINUOUS BREATHING ANIMATION
         // ==========================================
         gsap.to([missionBadgeRef.current, visionBadgeRef.current], {
            y: -10,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.5 // Wait for the elastic entrance pop to finish
         });

      }, sectionRef);

      return () => ctx.revert();
   }, []);


   // ==========================================
   // 4. INTERACTIVE HOVER ZOOM EFFECT
   // ==========================================
   // Passing the HTMLElement directly fixes the TypeScript RefObject issue
   const handleImageHover = (element: HTMLElement | null, isHovering: boolean) => {
      if (!element) return;
      // Normal scale is 1.1 (due to parallax room), zoom pushes it to 1.15
      gsap.to(element, {
         scale: isHovering ? 1.15 : 1.1,
         duration: 0.6,
         ease: "power2.out"
      });
   };

   return (
      <div ref={sectionRef} className="pt-120 pb-120 overflow-hidden" style={{ backgroundColor: '#FAFAFA' }}>
         <div className="container">
            
            {/* ================================= */}
            {/* OUR MISSION ROW (Image Left, Text Right) */}
            {/* ================================= */}
            <div className="row align-items-center g-5 mission-row mb-120">
               
               {/* Left: Cinematic Parallax Image */}
               <div className="col-lg-6">
                  <div className="position-relative" ref={missionWrapRef} style={{ zIndex: 1 }}>
                     
                     {/* Main Image Container */}
                     <div 
                        className="rounded-4 shadow-lg position-relative" 
                        onMouseEnter={() => handleImageHover(missionImgRef.current, true)}
                        onMouseLeave={() => handleImageHover(missionImgRef.current, false)}
                        style={{ zIndex: 2 }}
                     >
                        <div className="rounded-4 overflow-hidden position-relative" style={{ aspectRatio: '1/1' }}>
                           <img 
                              ref={missionImgRef}
                              className="w-100 h-100" 
                              style={{ objectFit: 'cover', transformOrigin: 'center' }} 
                              src="https://images.pexels.com/photos/6502029/pexels-photo-6502029.jpeg" 
                              alt="Our Mission" 
                           />
                           <div className="position-absolute w-100 h-100 top-0 start-0" style={{ background: 'linear-gradient(to top, rgba(0, 57, 65, 0.3) 0%, transparent 40%)', pointerEvents: 'none' }}></div>
                        </div>
                     </div>
                     
                   
                     <div 
                        ref={missionBadgeRef}
                        className="position-absolute shadow-lg rounded-pill p-3 d-flex align-items-center bg-white"
                        style={{ 
                           top: '40px', 
                           right: '-30px', 
                           border: '1px solid rgba(9, 178, 171, 0.2)',
                           zIndex: 4,
                           backgroundColor:"rgba(255, 255, 255, 0.88)"
                        }}
                     >
                        <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px', backgroundColor: 'rgba(9, 178, 171, 0.1)', color: '#09B2AB' }}>
                           <i className="fa-solid fa-bullseye fs-5"></i>
                        </div>
                        <div className="pe-2">
                           <h6 className="m-0 fw-black" style={{ color: '#003941', fontSize: '15px' }}>Dentist-Led</h6>
                           <p className="m-0 fw-bold text-uppercase" style={{ color: '#09B2AB', fontSize: '10px', letterSpacing: '0.5px' }}>Excellence</p>
                        </div>
                     </div>

                     {/* Parallax Background Dots */}
                     <div 
                        ref={missionDotsRef}
                        className="position-absolute d-none d-md-block" 
                        style={{ top: '-40px', right: '-40px', zIndex: 0, opacity: 0.4 }}
                     >
                        <svg width="150" height="150" viewBox="0 0 100 100" fill="none">
                           <pattern id="dots1" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                              <circle cx="2" cy="2" r="2" fill="#09B2AB" />
                           </pattern>
                           <rect width="100" height="100" fill="url(#dots1)" />
                        </svg>
                     </div>
                  </div>
               </div>

               {/* Right: Content */}
               <div className="col-lg-6 ps-lg-5 mt-5 mt-lg-0">
                  <span className="mission-anim d-inline-block mb-3 px-3 py-2 rounded-pill fw-bold" style={{ backgroundColor: 'rgba(9, 178, 171, 0.1)', color: '#09B2AB', letterSpacing: '1px', fontSize: '12px' }}>
                     OUR MISSION
                  </span>
                  <h2 className="mission-anim mb-4" style={{ color: '#003941', fontWeight: 900, fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', lineHeight: '1.1' }}>
                     Empowering Practices <br className="d-none d-md-block"/> <span style={{ color: '#09B2AB' }}>To Thrive</span>
                  </h2>
                  <p className="mission-anim mb-4 fs-6" style={{ color: '#002C34', opacity: 0.85, lineHeight: '1.7' }}>
                     To provide exceptional dental revenue cycle management that exceeds practice expectations through clinical precision, financial expertise, and an unwavering commitment to sustainability. We aim to create systems that inspire and empower dentists.
                  </p>
                  <p className="mission-anim mb-5 fs-6" style={{ color: '#002C34', opacity: 0.85, lineHeight: '1.7' }}>
                     Through our doctor-to-doctor approach, we strive to exceed expectations in every claim. Our dedication to integrity and accuracy drives us to build lasting relationships and eliminate revenue leaks entirely.
                  </p>

                  <ul className="list-unstyled mb-0 row g-3">
                     {[
                        "Fostering Sustainable Growth",
                        "Innovating for Financial Clarity",
                        "Dentist-Centric Claims",
                        "Stronger Patient Relations"
                     ].map((item, index) => (
                        <li key={index} className="mission-anim col-md-6 d-flex align-items-center" style={{ color: '#003941', fontWeight: 700, fontSize: '1rem' }}>
                           <div className="me-3 rounded-circle d-flex align-items-center justify-content-center shadow-sm flex-shrink-0" style={{ width: '28px', height: '28px', backgroundColor: '#09B2AB', color: '#fff' }}>
                              <i className="fa-solid fa-check" style={{ fontSize: '12px' }}></i>
                           </div>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>


            {/* ================================= */}
            {/* OUR VISION ROW (Text Left, Image Right) */}
            {/* ================================= */}
            <div className="row align-items-center g-5 vision-row flex-column-reverse flex-lg-row">
               
               {/* Left: Content */}
               <div className="col-lg-6 pe-lg-5 mt-5 mt-lg-0">
                 <span className="mission-anim d-inline-block mb-3 px-3 py-2 rounded-pill fw-bold" style={{ backgroundColor: 'rgba(9, 178, 171, 0.1)', color: '#09B2AB', letterSpacing: '1px', fontSize: '12px' }}>
                     OUR VISION
                  </span>
                  <h2 className="vision-anim mb-4" style={{ color: '#003941', fontWeight: 900, fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', lineHeight: '1.1' }}>
                     A Frictionless <br className="d-none d-md-block"/> <span style={{ color: '#09B2AB' }}>Financial Future</span>
                  </h2>
                  <p className="vision-anim mb-4 fs-6" style={{ color: '#002C34', opacity: 0.85, lineHeight: '1.7' }}>
                     At CureLedger, our vision is to redefine the future of dental billing through innovation, accuracy, and excellence. We envision a world where clinical professionals never have to worry about the complexities of financial administration.
                  </p>
                  <p className="vision-anim mb-5 fs-6" style={{ color: '#002C34', opacity: 0.85, lineHeight: '1.7' }}>
                     By embracing cutting-edge technology and dentist-led auditing, we strive to lead the industry toward a smarter, friction-free future. Together, we empower practices to transform lives without financial hesitation.
                  </p>

                  <ul className="list-unstyled mb-5">
                     {[
                        "Inspiring Modern RCM Architecture",
                        "Pioneering Sustainable Billing Solutions"
                     ].map((item, index) => (
                        <li key={index} className="vision-anim d-flex align-items-center mb-3" style={{ color: '#003941', fontWeight: 700, fontSize: '1.05rem' }}>
                           <div className="me-3 rounded-circle d-flex align-items-center justify-content-center shadow-sm flex-shrink-0" style={{ width: '28px', height: '28px', backgroundColor: '#003941', color: '#fff' }}>
                              <i className="fa-solid fa-arrow-right" style={{ fontSize: '12px' }}></i>
                           </div>
                           {item}
                        </li>
                     ))}
                  </ul>

                  <div className="vision-anim mt-2">
                     <Link to="/contact" className="d-inline-flex align-items-center justify-content-center px-5 py-3 rounded-pill fw-bold text-white shadow-sm transition-all" style={{ backgroundColor: '#09B2AB', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#003941'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#09B2AB'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                        Partner With Us <i className="fa-solid fa-arrow-right ms-2"></i>
                     </Link>
                  </div>
               </div>

               {/* Right: Cinematic Parallax Image */}
               <div className="col-lg-6">
                  <div className="position-relative" ref={visionWrapRef} style={{ zIndex: 1 }}>
                     
                     {/* Main Image Container */}
                     <div 
                        className="rounded-4 shadow-lg position-relative" 
                        onMouseEnter={() => handleImageHover(visionImgRef.current, true)}
                        onMouseLeave={() => handleImageHover(visionImgRef.current, false)}
                        style={{ zIndex: 2 }}
                     >
                        <div className="rounded-4 overflow-hidden position-relative" style={{ aspectRatio: '1/1' }}>
                           <img 
                              ref={visionImgRef}
                              className="w-100 h-100" 
                              style={{ objectFit: 'cover', transformOrigin: 'center' }} 
                              src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg" 
                              alt="Our Vision" 
                           />
                           <div className="position-absolute w-100 h-100 top-0 start-0" style={{ background: 'linear-gradient(to top, rgba(0, 57, 65, 0.3) 0%, transparent 40%)', pointerEvents: 'none' }}></div>
                        </div>
                     </div>

                     {/* Floating Interactive Badge */}
                     <div 
                        ref={visionBadgeRef}
                        className="position-absolute shadow-lg rounded-pill p-3 d-flex align-items-center bg-white"
                        style={{ 
                           bottom: '50px', 
                           left: '-30px', 
                           border: '1px solid rgba(0, 57, 65, 0.1)',
                           zIndex: 4,
                            backgroundColor:"rgba(255, 255, 255, 0.88)"
                        }}
                     >
                        <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px', backgroundColor: 'rgba(0, 57, 65, 0.1)', color: '#003941' }}>
                           <i className="fa-solid fa-eye fs-5"></i>
                        </div>
                        <div className="pe-2">
                           <h6 className="m-0 fw-black" style={{ color: '#003941', fontSize: '15px' }}>Future-Proof</h6>
                           <p className="m-0 fw-bold text-uppercase" style={{ color: '#09B2AB', fontSize: '10px', letterSpacing: '0.5px' }}>Architecture</p>
                        </div>
                     </div>

                     {/* Parallax Background Dots */}
                     <div 
                        ref={visionDotsRef}
                        className="position-absolute d-none d-md-block" 
                        style={{ bottom: '-40px', left: '-40px', zIndex: 0, opacity: 0.4 }}
                     >
                        <svg width="150" height="150" viewBox="0 0 100 100" fill="none">
                           <pattern id="dots2" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                              <circle cx="2" cy="2" r="2" fill="#003941" />
                           </pattern>
                           <rect width="100" height="100" fill="url(#dots2)" />
                        </svg>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default AboutArea;