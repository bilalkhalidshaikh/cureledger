import { useEffect, useRef } from "react";
import type { JSX } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DataType {
   sub_title: string;
   title: JSX.Element;
   desc: string;
}

const BreadcrumbTwo = ({ sub_title, title, desc }: DataType) => {
   const containerRef = useRef<HTMLDivElement>(null);
   const textWrapRef = useRef<HTMLDivElement>(null);
   const gridRef = useRef<HTMLDivElement>(null);
   
   // Background Orbs
   const orb1Ref = useRef<HTMLDivElement>(null);
   const orb2Ref = useRef<HTMLDivElement>(null);
   const orb3Ref = useRef<HTMLDivElement>(null);

   // Floating Dental Billing Icons
   const icon1Ref = useRef<HTMLDivElement>(null); // Tooth
   const icon2Ref = useRef<HTMLDivElement>(null); // Invoice
   const icon3Ref = useRef<HTMLDivElement>(null); // Chart
   const icon4Ref = useRef<HTMLDivElement>(null); // Shield

   // Initial Page Load Animations & Floating Elements
   useEffect(() => {
      const ctx = gsap.context(() => {
         // Cinematic Entrance for Text Elements
         gsap.fromTo(".hero-text-anim", 
            { y: 80, opacity: 0, scale: 0.95 }, 
            { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.1 }
         );

         // Continuous floating animations for background glowing orbs
         gsap.to(orb1Ref.current, { y: -60, x: 40, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
         gsap.to(orb2Ref.current, { y: 50, x: -50, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
         gsap.to(orb3Ref.current, { y: -30, x: -30, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
         
         // Slow continuous panning for background tech grid
         gsap.to(gridRef.current, { backgroundPosition: "100px 100px", duration: 15, repeat: -1, ease: "none" });

         // Scroll Parallax for the grid (moves down slightly and blurs more as you scroll)
         gsap.to(gridRef.current, {
             y: 100,
             filter: "blur(4px)",
             ease: "none",
             scrollTrigger: {
                 trigger: containerRef.current,
                 start: "top top",
                 end: "bottom top",
                 scrub: true
             }
         });

         // Floating for dental billing icons with subtle rotation
         gsap.to(icon1Ref.current, { y: -30, rotation: 10, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
         gsap.to(icon2Ref.current, { y: 40, rotation: -15, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });
         gsap.to(icon3Ref.current, { y: -20, rotation: -10, duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
         gsap.to(icon4Ref.current, { y: 25, rotation: 20, duration: 5.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.2 });
      }, containerRef);

      return () => ctx.revert();
   }, []);

   // High-End 3D Holographic Mouse Parallax
   const handleMouseMove = (e: React.MouseEvent) => {
      if (window.innerWidth < 992) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5);
      const y = (clientY / window.innerHeight - 0.5);

      // Deep 3D Tilt & Shift for the main text container
      gsap.to(textWrapRef.current, { 
         rotationY: x * 20, 
         rotationX: -y * 20, 
         x: x * 40, 
         y: y * 40, 
         ease: "power2.out", 
         duration: 0.8 
      });
      
      // Multi-layer parallax for background elements (moving at different speeds & directions for deep depth)
      gsap.to(orb1Ref.current, { x: -x * 80, y: -y * 80, ease: "power2.out", duration: 1.5 });
      gsap.to(orb2Ref.current, { x: x * 100, y: y * 100, ease: "power2.out", duration: 2 });
      
      // Foreground floating icons moving drastically to simulate popping out of the screen
      gsap.to(icon1Ref.current, { x: -x * 150, y: -y * 150, ease: "power2.out", duration: 1.2 });
      gsap.to(icon2Ref.current, { x: x * 180, y: y * 180, ease: "power2.out", duration: 1.5 });
      gsap.to(icon3Ref.current, { x: x * 120, y: -y * 120, ease: "power2.out", duration: 1.3 });
      gsap.to(icon4Ref.current, { x: -x * 100, y: y * 100, ease: "power2.out", duration: 1.6 });
   };

   const handleMouseLeave = () => {
      if (window.innerWidth < 992) return;
      gsap.to(
         [textWrapRef.current, orb1Ref.current, orb2Ref.current, icon1Ref.current, icon2Ref.current, icon3Ref.current, icon4Ref.current], 
         { rotationY: 0, rotationX: 0, x: 0, y: 0, ease: "power3.out", duration: 1.5 }
      );
   };

   return (
      <div 
         ref={containerRef}
         className="td-breadcrumb-area p-relative overflow-hidden d-flex align-items-center justify-content-center"
         style={{ 
            backgroundColor: '#002C34', // Deep Premium Dark Background
            minHeight: '100vh', // Full window height
            paddingTop: '120px', // Adjusted padding for center alignment
            paddingBottom: '120px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            perspective: '1200px'
         }}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
      >
         {/* --- DYNAMIC BACKGROUND ELEMENTS --- */}
         
         {/* Animated Tech/Graph Grid Pattern - Lighter Opacity & Initial Blur */}
         <div 
            ref={gridRef}
            style={{ 
               position: 'absolute', inset: -50, // Slight overflow to prevent edges showing during parallax
               opacity: 0.05, // Significantly lighter
               pointerEvents: 'none',
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
               backgroundSize: '60px 60px',
               filter: 'blur(1px)' // Subtle initial blur
            }}
         ></div>

         {/* Abstract Shape 1: Sea Green Circle Glow */}
         <div 
            ref={orb1Ref}
            style={{ position: 'absolute', top: '10%', left: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(9, 178, 171, 0.2) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(50px)' }}
         ></div>

         {/* Abstract Shape 2: Deep Blue/Teal Glow */}
         <div 
            ref={orb2Ref}
            style={{ position: 'absolute', bottom: '5%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 57, 65, 0.9) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(60px)' }}
         ></div>

         {/* Abstract Shape 3: Soft Center Glow */}
         <div 
            ref={orb3Ref}
            style={{ position: 'absolute', top: '40%', left: '40%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(40px)' }}
         ></div>

         {/* --- INTERACTIVE FLOATING DENTAL BILLING ICONS --- */}
         
         {/* Top Left: Clinical Tooth */}
         <div ref={icon1Ref} className="d-none d-lg-flex align-items-center justify-content-center position-absolute rounded-circle shadow-lg" style={{ top: '20%', left: '12%', width: '80px', height: '80px', backgroundColor: 'rgba(9, 178, 171, 0.1)', border: '1px solid rgba(9, 178, 171, 0.3)', pointerEvents: 'none', backdropFilter: 'blur(10px)', zIndex: 3 }}>
            <i className="fa-solid fa-tooth" style={{ fontSize: '35px', color: '#09B2AB' }}></i>
         </div>

         {/* Bottom Right: Revenue/Invoice */}
         <div ref={icon2Ref} className="d-none d-lg-flex align-items-center justify-content-center position-absolute rounded-circle shadow-lg" style={{ bottom: '15%', right: '12%', width: '100px', height: '100px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', pointerEvents: 'none', backdropFilter: 'blur(10px)', zIndex: 3 }}>
            <i className="fa-solid fa-file-invoice-dollar" style={{ fontSize: '45px', color: '#ffffff', opacity: 0.8 }}></i>
         </div>

         {/* Top Right: Growth/Chart */}
         <div ref={icon3Ref} className="d-none d-lg-flex align-items-center justify-content-center position-absolute rounded-circle shadow-lg" style={{ top: '25%', right: '18%', width: '65px', height: '65px', backgroundColor: 'rgba(9, 178, 171, 0.15)', border: '1px solid rgba(9, 178, 171, 0.4)', pointerEvents: 'none', backdropFilter: 'blur(10px)', zIndex: 3 }}>
            <i className="fa-solid fa-chart-line" style={{ fontSize: '28px', color: '#09B2AB' }}></i>
         </div>

         {/* Bottom Left: Security/Shield */}
         <div ref={icon4Ref} className="d-none d-lg-flex align-items-center justify-content-center position-absolute rounded-circle shadow-lg" style={{ bottom: '25%', left: '20%', width: '75px', height: '75px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', pointerEvents: 'none', backdropFilter: 'blur(10px)', zIndex: 3 }}>
            <i className="fa-solid fa-shield-check" style={{ fontSize: '32px', color: '#ffffff', opacity: 0.6 }}></i>
         </div>

         {/* --- FOREGROUND CONTENT --- */}
         <div className="container p-relative z-index-4">
            <div className="row justify-content-center text-center">
               <div className="col-lg-10 col-xl-9">
                  {/* 3D Wrapper */}
                  <div ref={textWrapRef} style={{ transformStyle: 'preserve-3d', cursor: 'crosshair' }}>
                     
                     {/* Inner content pushed forward on the Z-axis for true 3D popup */}
                     <div style={{ transform: 'translateZ(80px)', pointerEvents: 'none' }}>
                        
                        <span 
                           className="hero-text-anim d-inline-block mb-4 px-4 py-2 rounded-pill fw-bold shadow-lg" 
                           style={{ 
                              backgroundColor: 'rgba(9, 178, 171, 0.1)', 
                              color: '#09B2AB', 
                              letterSpacing: '2px', 
                              fontSize: '14px',
                              border: '1px solid rgba(9, 178, 171, 0.3)',
                              textTransform: 'uppercase',
                              backdropFilter: 'blur(10px)'
                           }}
                        >
                           {sub_title}
                        </span>
                        
                        <h1 
                           className="hero-text-anim mb-4" 
                           style={{ 
                              color: '#FFFFFF', // Bright white for dark theme
                              fontSize: 'clamp(3rem, 6vw, 5.5rem)', 
                              fontWeight: 900, 
                              lineHeight: '1.15',
                              letterSpacing: '-1px',
                              textShadow: '0 25px 50px rgba(0,0,0,0.5)'
                           }}
                        >  
                           {title}
                        </h1>
                        
                        <p 
                           className="hero-text-anim mx-auto" 
                           style={{ 
                              color: '#A3B1B2', // Premium light grey/teal
                              fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', 
                              maxWidth: '800px', 
                              lineHeight: '1.8',
                              opacity: 0.9,
                              textShadow: '0 10px 20px rgba(0,0,0,0.3)'
                           }}
                        >
                           {desc}
                        </p>

                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default BreadcrumbTwo;