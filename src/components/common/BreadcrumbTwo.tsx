import { useEffect, useRef } from "react";
import type { JSX } from "react";
import gsap from "gsap";

interface DataType {
   sub_title: string;
   title: JSX.Element;
   desc: string;
}

const BreadcrumbTwo = ({ sub_title, title, desc }: DataType) => {
   const containerRef = useRef<HTMLDivElement>(null);
   const textWrapRef = useRef<HTMLDivElement>(null);
   const shape1Ref = useRef<HTMLDivElement>(null);
   const shape2Ref = useRef<HTMLDivElement>(null);
   const shape3Ref = useRef<HTMLDivElement>(null);
   const gridRef = useRef<HTMLDivElement>(null);

   // Initial Page Load Animations & Floating Elements
   useEffect(() => {
      const ctx = gsap.context(() => {
         // Animate Text Elements sliding up
         gsap.fromTo(".hero-text-anim", 
            { y: 60, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.1 }
         );

         // Continuous floating animations for background abstract shapes
         gsap.to(shape1Ref.current, { y: -40, rotation: 15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
         gsap.to(shape2Ref.current, { y: 30, rotation: -10, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
         gsap.to(shape3Ref.current, { x: 30, y: -20, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
         
         // Slow panning for background grid
         gsap.to(gridRef.current, { y: -50, x: -50, duration: 20, repeat: -1, yoyo: true, ease: "none" });
      }, containerRef);

      return () => ctx.revert();
   }, []);

   // High-End 3D Mouse Parallax
   const handleMouseMove = (e: React.MouseEvent) => {
      if (window.innerWidth < 992) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5);
      const y = (clientY / window.innerHeight - 0.5);

      // 3D Tilt for the main text
      gsap.to(textWrapRef.current, { 
         rotationY: x * 10, 
         rotationX: -y * 10, 
         x: -x * 20, 
         y: -y * 20, 
         ease: "power2.out", 
         duration: 1 
      });
      
      // Move shapes at different speeds to create deep parallax
      gsap.to(shape1Ref.current, { x: x * 80, y: y * 80, ease: "power2.out", duration: 1.5 });
      gsap.to(shape2Ref.current, { x: -x * 100, y: -y * 100, ease: "power2.out", duration: 2 });
      gsap.to(shape3Ref.current, { x: x * 120, y: -y * 120, ease: "power2.out", duration: 2.5 });
   };

   const handleMouseLeave = () => {
      if (window.innerWidth < 992) return;
      gsap.to([textWrapRef.current, shape1Ref.current, shape2Ref.current, shape3Ref.current], { 
         rotationY: 0, rotationX: 0, x: 0, y: 0, ease: "power3.out", duration: 1.5 
      });
   };

   return (
      <div 
         ref={containerRef}
         className="td-breadcrumb-area p-relative overflow-hidden d-flex align-items-center justify-content-center"
         style={{ 
            backgroundColor: '#F8FAFA', // Light, clean, modern medical background
            minHeight: '75vh', 
            paddingTop: '140px', 
            paddingBottom: '100px',
            borderBottom: '1px solid rgba(0, 57, 65, 0.05)',
            perspective: '1000px'
         }}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
      >
         {/* --- DYNAMIC BACKGROUND ELEMENTS --- */}
         
         {/* Animated Tech/Graph Grid Pattern */}
         <div 
            ref={gridRef}
            style={{ 
               position: 'absolute', inset: -150, opacity: 0.4, pointerEvents: 'none',
               backgroundImage: 'linear-gradient(rgba(9, 178, 171, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 178, 171, 0.15) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
            }}
         ></div>

         {/* Abstract Shape 1: Teal Circle Blur */}
         <div 
            ref={shape1Ref}
            style={{ position: 'absolute', top: '15%', left: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(9, 178, 171, 0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(30px)' }}
         ></div>

         {/* Abstract Shape 2: Deep Teal Circle Blur */}
         <div 
            ref={shape2Ref}
            style={{ position: 'absolute', bottom: '5%', right: '5%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(0, 57, 65, 0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(50px)' }}
         ></div>

         {/* Abstract Shape 3: Floating Plus Icon (Subtle Medical Theme) */}
         <div 
            ref={shape3Ref}
            className="d-none d-lg-block"
            style={{ position: 'absolute', top: '25%', right: '20%', opacity: 0.1, pointerEvents: 'none' }}
         >
            <i className="fa-solid fa-plus" style={{ fontSize: '100px', color: '#09B2AB' }}></i>
         </div>

         {/* --- FOREGROUND CONTENT --- */}
         <div className="container p-relative z-index-2">
            <div className="row justify-content-center text-center">
               <div className="col-lg-9">
                  <div ref={textWrapRef} style={{ transformStyle: 'preserve-3d' }}>
                     
                     <span 
                        className="hero-text-anim d-inline-block mb-4 px-4 py-2 rounded-pill fw-bold shadow-sm" 
                        style={{ 
                           backgroundColor: '#ffffff', 
                           color: '#09B2AB', 
                           letterSpacing: '2px', 
                           fontSize: '13px',
                           border: '1px solid rgba(9, 178, 171, 0.2)',
                           textTransform: 'uppercase'
                        }}
                     >
                        {sub_title}
                     </span>
                     
                     <h1 
                        className="hero-text-anim mb-4" 
                        style={{ 
                           color: '#003941', // Deep brand color for high contrast
                           fontSize: 'clamp(3rem, 6vw, 5rem)', 
                           fontWeight: 900, 
                           lineHeight: '1.15',
                           letterSpacing: '-1px'
                        }}
                     >  
                        {title}
                     </h1>
                     
                     <p 
                        className="hero-text-anim mx-auto" 
                        style={{ 
                           color: '#002C34', 
                           fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
                           maxWidth: '750px', 
                           lineHeight: '1.8',
                           opacity: 0.85
                        }}
                     >
                        {desc}
                     </p>

                  </div>
               </div>
            </div>
         </div>

         {/* Animated Scroll Down Indicator */}
         <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 hero-text-anim" style={{ zIndex: 5 }}>
            <div className="d-flex flex-column align-items-center opacity-75">
               <span style={{ color: '#003941', fontSize: '11px', letterSpacing: '2px', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 700 }}>Scroll</span>
               <div style={{ width: '2px', height: '40px', backgroundColor: 'rgba(0,57,65,0.1)', position: 'relative', overflow: 'hidden', borderRadius: '2px' }}>
                  <div 
                     style={{ width: '100%', height: '15px', backgroundColor: '#09B2AB', position: 'absolute', top: 0, left: 0, borderRadius: '2px' }}
                     ref={(el) => {
                        if (el) {
                           gsap.to(el, { y: 40, duration: 1.5, repeat: -1, ease: "power2.inOut" });
                        }
                     }}
                  ></div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default BreadcrumbTwo;