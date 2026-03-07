import { useEffect, useRef } from "react";
import gsap from "gsap";

const Breadcrumb = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   const textWrapRef = useRef<HTMLDivElement>(null);
   const orb1Ref = useRef<HTMLDivElement>(null);
   const orb2Ref = useRef<HTMLDivElement>(null);

   // Initial Page Load Animations & Floating Orbs
   useEffect(() => {
      const ctx = gsap.context(() => {
         gsap.fromTo(".hero-text-anim", 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
         );
         gsap.to(orb1Ref.current, { y: -30, x: 20, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
         gsap.to(orb2Ref.current, { y: 40, x: -30, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      }, containerRef);
      return () => ctx.revert();
   }, []);

   // High-End 3D Mouse Parallax
   const handleMouseMove = (e: React.MouseEvent) => {
      if (window.innerWidth < 992) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5);
      const y = (clientY / window.innerHeight - 0.5);

      gsap.to(textWrapRef.current, { 
         rotationY: x * 10, 
         rotationX: -y * 10, 
         x: -x * 30, 
         y: -y * 30, 
         ease: "power2.out", 
         duration: 1 
      });
      gsap.to(orb1Ref.current, { x: x * 60, y: y * 60, ease: "power2.out", duration: 1.5 });
      gsap.to(orb2Ref.current, { x: x * 80, y: y * 80, ease: "power2.out", duration: 2 });
   };

   const handleMouseLeave = () => {
      if (window.innerWidth < 992) return;
      gsap.to([textWrapRef.current, orb1Ref.current, orb2Ref.current], { rotationY: 0, rotationX: 0, x: 0, y: 0, ease: "power3.out", duration: 1.5 });
   };

   return (
      <div 
         ref={containerRef}
         className="p-relative overflow-hidden d-flex align-items-center justify-content-center"
         style={{ backgroundColor: '#002C34', minHeight: '60vh', paddingTop: '140px', paddingBottom: '100px', perspective: '1000px' }}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
      >
         {/* Glowing Orbs */}
         <div ref={orb1Ref} style={{ position: 'absolute', top: '10%', left: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(9, 178, 171, 0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(40px)' }}></div>
         <div ref={orb2Ref} style={{ position: 'absolute', bottom: '-10%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(9, 178, 171, 0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(60px)' }}></div>

         {/* Grid Pattern */}
         <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

         <div className="container p-relative z-index-2">
            <div className="row justify-content-center text-center">
               <div className="col-lg-9">
                  <div ref={textWrapRef} style={{ transformStyle: 'preserve-3d' }}>
                     <span className="hero-text-anim d-inline-block mb-3 px-4 py-2 rounded-pill fw-bold" style={{ backgroundColor: 'rgba(9, 178, 171, 0.1)', color: '#09B2AB', letterSpacing: '2px', fontSize: '13px', border: '1px solid rgba(9, 178, 171, 0.2)' }}>
                        LET'S CONNECT
                     </span>
                     <h1 className="hero-text-anim mb-4" style={{ color: '#ffffff', fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: '1.2' }}>
                        Ready to optimize your practice? <span style={{ color: '#09B2AB' }}>We are here to help.</span>
                     </h1>
                     <p className="hero-text-anim mx-auto" style={{ color: '#A3B1B2', fontSize: '1.15rem', maxWidth: '700px', lineHeight: '1.7' }}>
                        Whether you have questions about our RCM services, need a custom pricing quote, or want a free revenue audit, our experts are ready to assist you.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Breadcrumb;