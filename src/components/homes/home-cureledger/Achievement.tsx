import { useRef, useEffect } from "react";
import type { JSX } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DataType {
  id: number;
  icon: JSX.Element;
  title: string;
  subtitle: string;
  edge: string;
  description: JSX.Element;
}

const achievement_data: DataType[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#09B2AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    title: "Know Before You Treat",
    subtitle: "Insurance Verification",
    edge: "The Technical Edge: Non-dentists often miss procedure-specific limitations (like 'downcoding' or frequencies).",
    description: (
      <>Accurate eligibility checks and procedure-specific frequencies verified through a clinical lens. We catch potential 'downgrades' before you prep the tooth, ensuring patients and providers have 100% financial clarity upfront.</>
    ),
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#09B2AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    ),
    title: "Stop the Revenue Leak",
    subtitle: "Clean Claims",
    edge: "The Technical Edge: Generic billers just submit codes; you submit Doctor-Verified Claims.",
    description: (
      <>We close the gap between the industry average of 92% and our <span style={{ color: '#09B2AB', fontWeight: 900, fontSize: '1.1rem' }}>98% collection rate</span>. Our team reviews your clinical notes and X-rays to ensure narratives are bulletproof, stopping denials for 'medical necessity' before they happen.</>
    ),
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#09B2AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    title: "Erase the Chase",
    subtitle: "A/R Recovery",
    edge: "The Technical Edge: When a claim is stuck, a dentist knows how to appeal based on clinical evidence, not just clerical resubmission.",
    description: (
      <>Relentless A/R follow-up powered by clinical authority. When insurance stalls, we provide the doctor-to-doctor appeals and evidence-based rebuttals required to secure payment for your most complex cases.</>
    ),
  },
];

const Achievement = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgOrb1Ref = useRef<HTMLDivElement>(null);
  const bgOrb2Ref = useRef<HTMLDivElement>(null);

  // GSAP Scroll Reveal & Background Parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in text and cards on scroll with stagger
      gsap.fromTo(".achieve-anim", 
        { y: 60, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 60%" } }
      );

      // Scroll Parallax for Background Orbs
      gsap.to(bgOrb1Ref.current, {
        y: 250, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true }
      });
      gsap.to(bgOrb2Ref.current, {
        y: -250, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true }
      });

      // Continuous gentle floating for cards
      cardRefs.current.forEach((card, i) => {
        gsap.to(card, {
          y: -12,
          duration: 2.5 + (i * 0.4),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Interactive 3D Mouse Parallax Effect for Cards
  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (window.innerWidth < 992) return;
    const card = cardRefs.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; 
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

    // Tilt the card and scale up slightly
    gsap.to(card, {
      rotationY: x,
      rotationX: -y,
      scale: 1.02,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.4,
    });

    // Move inner content slightly for deep 3D effect
    const innerContent = card.querySelector('.inner-content');
    if (innerContent) {
        gsap.to(innerContent, { x: x * 1.5, y: y * 1.5, ease: "power2.out", duration: 0.4 });
    }
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    
    gsap.to(card, { rotationY: 0, rotationX: 0, scale: 1, ease: "power3.out", duration: 0.8 });
    
    const innerContent = card.querySelector('.inner-content');
    if (innerContent) {
        gsap.to(innerContent, { x: 0, y: 0, ease: "power3.out", duration: 0.8 });
    }
  };

  return (
    <div
      ref={sectionRef}
      className="pt-120 pb-120 p-relative overflow-hidden"
      style={{ backgroundColor: "#002C34" }}
    >
      {/* Ambient Parallax Background Orbs */}
      <div
        ref={bgOrb1Ref}
        style={{
          position: "absolute",
          top: "-10%",
          right: "5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(9,178,171,0.15) 0%, rgba(0,57,65,0) 70%)",
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(50px)"
        }}
      ></div>
      <div
        ref={bgOrb2Ref}
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(9,178,171,0.08) 0%, rgba(0,57,65,0) 70%)",
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(60px)"
        }}
      ></div>

      {/* Grid Pattern */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container p-relative z-index-1">
        
        {/* Header Area */}
        <div className="row justify-content-center mb-60">
          <div className="col-xl-9 col-lg-10 text-center achieve-anim">
            <span
              className="d-inline-block mb-3 px-4 py-2 rounded-pill fw-bold shadow-sm"
              style={{
                backgroundColor: "rgba(9, 178, 171, 0.1)",
                color: "#09B2AB",
                letterSpacing: "1px",
                fontSize: "13px",
                border: "1px solid rgba(9, 178, 171, 0.2)"
              }}
            >
              WHY CHOOSE CURELEDGER
            </span>

            <h2
              className="mb-4"
              style={{
                color: "#FFFFFF",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 4vw, 3.4rem)",
                lineHeight: "1.15",
                letterSpacing: "-0.5px",
                textTransform: 'uppercase'
              }}
            >
              Clinical Intelligence at Every <br className="d-none d-lg-block"/> Stage of Your <span style={{ color: "#09B2AB" }}>Revenue Cycle.</span>
            </h2>

            <p
              className="mx-auto"
              style={{
                color: "#A3B1B2",
                fontSize: "1.15rem",
                lineHeight: "1.7",
                maxWidth: "850px",
                opacity: 0.9
              }}
            >
              Financial health is the backbone of a thriving practice, but clinical nuances shouldn't be your daily distraction. We optimize your entire revenue cycle—from chairside verification to final payment reconciliation—using doctor-to-doctor insight that generic billers simply don't have.
            </p>
          </div>
        </div>

        {/* 3 Interactive Parallax Cards Grid */}
        <div className="row justify-content-center g-4 mb-5">
          {achievement_data.map((item, index) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 achieve-anim" style={{ perspective: "1000px" }}>
              <div
                ref={(el) => { cardRefs.current[index] = el; }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="h-100 p-4 p-xl-5 rounded-4 shadow-lg position-relative overflow-hidden group"
                style={{
                  backgroundColor: "rgba(0, 57, 65, 0.6)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "box-shadow 0.4s ease, border-color 0.4s ease, background-color 0.4s ease",
                  cursor: "crosshair",
                  transformStyle: "preserve-3d"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 57, 65, 0.8)";
                  e.currentTarget.style.borderColor = "rgba(9, 178, 171, 0.5)";
                  e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(9, 178, 171, 0.15)";
                }}
              >
                {/* Inner Content Wrapper for Deep Parallax */}
                <div className="inner-content" style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}>
                    
                    {/* Top Icon with Pulse Glow */}
                    <div
                      className="mb-4 d-inline-flex align-items-center justify-content-center position-relative"
                      style={{
                          width: "75px",
                          height: "75px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(9, 178, 171, 0.1)",
                          border: "1px solid rgba(9, 178, 171, 0.2)",
                          boxShadow: "0 0 15px rgba(9, 178, 171, 0.2)"
                      }}
                    >
                      {item.icon}
                    </div>

                    <h4 className="mb-2 fw-bold" style={{ color: "#FFFFFF", fontSize: "1.5rem" }}>
                      {item.title}
                    </h4>
                    <p className="mb-4 fw-bold text-uppercase small" style={{ color: '#09B2AB', letterSpacing: '1px' }}>
                      {item.subtitle}
                    </p>

                    {/* The Technical Edge Highlight Box */}
                    <div className="p-3 mb-4 rounded-3 shadow-sm" style={{ backgroundColor: 'rgba(9, 178, 171, 0.08)', borderLeft: '4px solid #09B2AB' }}>
                      <p className="m-0 fw-bold" style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: '1.5' }}>
                          {item.edge}
                      </p>
                    </div>

                    <p
                      style={{
                          color: "#A3B1B2",
                          lineHeight: "1.7",
                          fontSize: "1.05rem",
                          margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual & Technical Trust Additions (HIPAA & Software Integrations) */}
        <div className="row justify-content-center achieve-anim mt-5 pt-3">
          <div className="col-lg-11">
            <div 
                className="p-4 p-md-5 rounded-4 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 shadow-lg position-relative overflow-hidden" 
                style={{ 
                    backgroundColor: 'rgba(0, 57, 65, 0.8)', 
                    border: '1px solid rgba(9, 178, 171, 0.3)',
                    backdropFilter: 'blur(10px)' 
                }}
            >
              {/* Subtle animated background glow inside the banner */}
              <div style={{ position: 'absolute', top: 0, left: '20%', width: '300px', height: '100%', background: 'radial-gradient(circle, rgba(9,178,171,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

              {/* Left Side: Lock Icon & Text */}
              <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-4 z-index-1">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle" 
                  style={{ width: "70px", height: "70px", backgroundColor: "rgba(9, 178, 171, 0.1)", border: "1px solid rgba(9, 178, 171, 0.3)", flexShrink: 0 }}
                >
                  <i className="fa-solid fa-lock fs-2" style={{ color: '#09B2AB' }}></i>
                </div>
                <div>
                  <h4 className="m-0 text-white fw-bold mb-2">Fully Integrated & Secure</h4>
                  <p className="m-0" style={{ color: '#A3B1B2', fontSize: '1.05rem', maxWidth: '400px' }}>We operate directly within your existing practice management software via secure, HIPAA-compliant remote access.</p>
                </div>
              </div>

              {/* Right Side: Interactive Software Tags */}
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-3 z-index-1 mt-3 mt-lg-0">
                {['Dentrix', 'Eaglesoft', 'Open Dental'].map((software, i) => (
                  <div 
                    key={i}
                    className="d-flex align-items-center gap-2 badge px-4 py-3 rounded-pill shadow-sm transition-all" 
                    style={{ 
                      backgroundColor: '#002C34', 
                      border: '1px solid rgba(9,178,171,0.3)', 
                      color: '#fff', 
                      fontSize: '14px', 
                      letterSpacing: '0.5px',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#09B2AB';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(9, 178, 171, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#002C34';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                      <i className="fa-solid fa-server text-white"></i> {software}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Achievement;