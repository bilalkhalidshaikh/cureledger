import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
   const sectionRef = useRef<HTMLDivElement>(null);
   const imgRef = useRef<HTMLDivElement>(null);
   const bgCircleRef = useRef<HTMLDivElement>(null);

   // Scroll Reveal & Parallax Animations
   useEffect(() => {
      const ctx = gsap.context(() => {
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: sectionRef.current,
               start: "top 80%",
            }
         });

         // Entrance Animations
         tl.fromTo(".center-img-anim",
            { scale: 0.8, opacity: 0, y: 30 },
            { scale: 1, opacity: 1, y: 0, duration: 1, ease: "power3.out" }
         )
         .fromTo(".feat-left",
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
            "-=0.6"
         )
         .fromTo(".feat-right",
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
            "-=0.8"
         );

         // Scroll Parallax (Depth of Field)
         gsap.fromTo(imgRef.current, 
            { y: 30 }, 
            { y: -30, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 } }
         );
         
         gsap.fromTo(bgCircleRef.current, 
            { y: -40 }, 
            { y: 40, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 } }
         );

      }, sectionRef);
      return () => ctx.revert();
   }, []);

   // Interactive Mouse Parallax (Fixed clipping bug by using 2D translation)
   const handleMouseMove = (e: React.MouseEvent) => {
      if (window.innerWidth < 992) return;
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = (e.clientX - rect.left - rect.width / 2) * 0.05;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.05;

      // Foreground image moves towards the mouse
      if (imgRef.current) {
         gsap.to(imgRef.current, { x: x, y: y, ease: "power2.out", duration: 0.5 });
      }
      // Background circle moves opposite to create depth
      if (bgCircleRef.current) {
         gsap.to(bgCircleRef.current, { x: -x * 1.5, y: -y * 1.5, ease: "power2.out", duration: 0.8 });
      }
   };

   const handleMouseLeave = () => {
      if (window.innerWidth < 992) return;
      if (imgRef.current) gsap.to(imgRef.current, { x: 0, y: 0, ease: "power3.out", duration: 1 });
      if (bgCircleRef.current) gsap.to(bgCircleRef.current, { x: 0, y: 0, ease: "power3.out", duration: 1 });
   };

   const featuresLeft = [
      {
         icon: "fa-clipboard-check", 
         title: "Know Before You Treat",
         desc: "Accurate eligibility checks, deductibles, and remaining benefits—verified upfront before the patient sits in the chair."
      },
      {
         icon: "fa-wallet", 
         title: "Stop the Revenue Leak",
         desc: "We close the gap between the industry average of 92% and our 98% collection rate. We ensure you get every dollar you've earned."
      }
   ];

   const featuresRight = [
      {
         icon: "fa-chart-line", 
         title: "Erase the Chase",
         desc: "We manage daily claim submissions and relentless A/R follow-up, taking the burden of insurance communication off your plate."
      },
      {
         icon: "fa-user-shield", 
         title: "Audit-Proof Claims",
         desc: "Every claim is heavily scrubbed and reviewed by our clinical billing experts to ensure compliance and maximum first-pass approval."
      }
   ];

   // Reusable Card Component to keep code DRY and consistent
   const FeatureCard = ({ item, className }: { item: any, className: string }) => (
      <div className={className}>
         <div 
            className="p-4 p-xl-5 rounded-4 bg-white shadow-sm h-100 d-flex flex-column text-start position-relative transition-all"
            style={{ border: '1px solid rgba(0,57,65,0.05)', cursor: "default" }}
            onMouseEnter={(e) => {
               e.currentTarget.style.transform = 'translateY(-5px)';
               e.currentTarget.style.boxShadow = '0 15px 30px rgba(9, 178, 171, 0.1)';
               e.currentTarget.style.borderColor = 'rgba(9, 178, 171, 0.3)';
               const iconWrap = e.currentTarget.querySelector('.feat-icon-wrap');
               if (iconWrap) gsap.to(iconWrap, { scale: 1.1, backgroundColor: "#003941", color: "#ffffff", duration: 0.3 });
            }}
            onMouseLeave={(e) => {
               e.currentTarget.style.transform = 'translateY(0)';
               e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
               e.currentTarget.style.borderColor = 'rgba(0,57,65,0.05)';
               const iconWrap = e.currentTarget.querySelector('.feat-icon-wrap');
               if (iconWrap) gsap.to(iconWrap, { scale: 1, backgroundColor: "rgba(9, 178, 171, 0.1)", color: "#09B2AB", duration: 0.3 });
            }}
         >
            <div className="feat-icon-wrap d-inline-flex align-items-center justify-content-center rounded-circle mb-4" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(9, 178, 171, 0.1)', color: '#09B2AB', transition: 'all 0.3s ease' }}>
               <i className={`fa-solid ${item.icon} fs-4`}></i>
            </div>
            <h4 className="fw-bold mb-3" style={{ color: '#003941', fontSize: '1.25rem' }}>{item.title}</h4>
            <p className="mb-4" style={{ color: '#002C34', opacity: 0.8, lineHeight: '1.6', fontSize: '0.95rem' }}>{item.desc}</p>
            
            {/* CTA Button */}
            <div className="mt-auto">
               <Link 
                  to="/services" 
                  className="d-inline-flex align-items-center fw-bold text-uppercase"
                  style={{ color: '#09B2AB', fontSize: '12px', letterSpacing: '1px', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#003941'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#09B2AB'}
               >
                  Learn More <i className="fa-solid fa-arrow-right ms-2"></i>
               </Link>
            </div>
         </div>
      </div>
   );

   return (
      <div 
         ref={sectionRef} 
         className="pt-120 pb-120 overflow-hidden" 
         style={{ backgroundColor: '#FAFAFA' }}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
      >
         <div className="container">
            
            {/* Section Header */}
            <div className="text-center mb-80">
               <span className="d-inline-block mb-3 px-4 py-2 rounded-pill fw-bold shadow-sm" style={{ backgroundColor: '#ffffff', color: '#09B2AB', letterSpacing: '1px', fontSize: '13px', textTransform: 'uppercase', border: '1px solid rgba(9, 178, 171, 0.2)' }}>
                  Why Choose Us
               </span>
               <h2 style={{ color: '#003941', fontWeight: 900, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                  Clinical Intelligence for <br className="d-none d-md-block" />
                  <span style={{ color: '#09B2AB' }}>Your Revenue Cycle</span>
               </h2>
            </div>

            <div className="row align-items-center justify-content-center g-4 g-lg-5">
               
               {/* Left Column Features */}
               <div className="col-lg-4 order-2 order-lg-1">
                  <div className="d-flex flex-column gap-4">
                     {featuresLeft.map((item, i) => (
                        <FeatureCard key={i} item={item} className="feat-left" />
                     ))}
                  </div>
               </div>

               {/* Center Image Parallax */}
               <div className="col-lg-4 col-md-8 order-1 order-lg-2 my-5 my-lg-0">
                  <div className="position-relative d-flex justify-content-center align-items-center center-img-anim">
                     
                     {/* Offset Background Circle */}
                     <div 
                        ref={bgCircleRef}
                        className="position-absolute rounded-circle shadow-lg"
                        style={{ 
                           width: '320px', 
                           height: '320px', 
                           backgroundColor: '#003941',
                           right: '-5%',
                           bottom: '-5%',
                           zIndex: 1
                        }}
                     ></div>

                     {/* Main Foreground Image */}
                     <div 
                        ref={imgRef}
                        className="rounded-circle overflow-hidden shadow-lg border border-4 border-white position-relative"
                        style={{ 
                           width: '350px', 
                           height: '350px', 
                           zIndex: 2
                        }}
                     >
                        <img 
                           src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg" 
                           alt="Why Choose CureLedger" 
                           className="w-100 h-100" 
                           style={{ objectFit: 'cover' }}
                        />
                        {/* Soft overlay gradient */}
                        <div className="position-absolute w-100 h-100 top-0 start-0" style={{ background: 'linear-gradient(to top, rgba(9, 178, 171, 0.3) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
                     </div>
                  </div>
               </div>

               {/* Right Column Features */}
               <div className="col-lg-4 order-3 order-lg-3">
                  <div className="d-flex flex-column gap-4">
                     {featuresRight.map((item, i) => (
                        <FeatureCard key={i} item={item} className="feat-right" />
                     ))}
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
}

export default Feature;