import { useState, useRef, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import ReactPlayer from "react-player";
import { toast, ToastContainer } from "react-toastify";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Required CSS for interactivity
import "react-responsive-modal/styles.css";
import "react-toastify/dist/ReactToastify.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Refs for GSAP Animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const textWrapRef = useRef<HTMLDivElement>(null); // For left column parallax
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const bgOrbRef = useRef<HTMLDivElement>(null);
  
  // Refs for the 3 Interactive Badges
  const badge1Ref = useRef<HTMLDivElement>(null); // Top Left
  const badge2Ref = useRef<HTMLDivElement>(null); // Middle Right
  const badge3Ref = useRef<HTMLDivElement>(null); // Bottom Left

  const handleAuditClick = () => {
    toast.success("Priority access granted. Redirecting to calendar...", {
      position: "bottom-right",
      autoClose: 3000,
      theme: "light",
    });
  };

  // Scroll & Continuous Floating Parallax Effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll Parallax for main image
      gsap.to(".hero-parallax-img", {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Continuous breathing/floating effect for main image
      if (imgWrapRef.current) {
        gsap.to(imgWrapRef.current, {
          y: -15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Continuous floating for badges (different speeds & directions to create depth)
      gsap.to(badge1Ref.current, { y: -10, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0 });
      gsap.to(badge2Ref.current, { y: 12, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.4 });
      gsap.to(badge3Ref.current, { y: -8, duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.8 });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Interactive Multi-Layer Mouse Parallax Effect for the WHOLE component
  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 992) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Left text column moves slightly opposite to mouse
    if (textWrapRef.current) gsap.to(textWrapRef.current, { x: x * -20, y: y * -20, ease: "power2.out", duration: 1 });

    // Main image gets a 3D tilt and moves towards mouse
    if (imgWrapRef.current) gsap.to(imgWrapRef.current, { 
        x: x * 30, 
        y: y * 30, 
        rotationY: x * 10, 
        rotationX: -y * 10, 
        transformPerspective: 1000, 
        ease: "power2.out", 
        duration: 1 
    });
    
    // Background orb moves opposite to mouse
    if (bgOrbRef.current) gsap.to(bgOrbRef.current, { x: x * -60, y: y * -60, ease: "power2.out", duration: 1.5 });

    // Badges move at different depths and directions (3D Hologram effect)
    if (badge1Ref.current) gsap.to(badge1Ref.current, { x: x * 70, y: y * 70, ease: "power2.out", duration: 1.2 });
    if (badge2Ref.current) gsap.to(badge2Ref.current, { x: -x * 80, y: -y * 80, ease: "power2.out", duration: 1.4 });
    if (badge3Ref.current) gsap.to(badge3Ref.current, { x: x * 100, y: y * 100, ease: "power2.out", duration: 1.1 });
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 992) return;
    gsap.to([textWrapRef.current, imgWrapRef.current, bgOrbRef.current, badge1Ref.current, badge2Ref.current, badge3Ref.current], {
      x: 0,
      y: 0,
      rotationY: 0,
      rotationX: 0,
      ease: "power3.out",
      duration: 1.5,
    });
  };

  return (
    <>
      <div
        ref={sectionRef}
        className="td-hero-area td-btn-trigger p-relative fix z-index-1 mt-4"
        style={{
          backgroundColor: "#FAFAFA",
          paddingTop: "140px", 
          paddingBottom: "100px",
          overflowX: "hidden",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container">
          <div className="row align-items-center">
            
            {/* LEFT COLUMN: Typography & CTAs */}
            <div className="col-lg-6 col-xl-6 mb-5 mb-lg-0 pe-lg-4 p-relative" style={{ zIndex: 2 }}>
              <div ref={textWrapRef} className="td-hero-2-title-wrap text-center text-lg-start">
                <span
                  className="d-inline-block mb-3 px-4 py-2 rounded-pill fw-bold td-btn-bounce"
                  style={{
                    backgroundColor: "rgba(9, 178, 171, 0.1)",
                    color: "#09B2AB",
                    letterSpacing: "1px",
                    fontSize: "13px",
                  }}
                >
                  DENTAL BILLING EXCELLENCE
                </span>

                <h2
                  className="td-hero-2-title mb-4 text-uppercase"
                  style={{
                    color: "#003941",
                    fontWeight: 900,
                    fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
                    lineHeight: "1.15",
                    letterSpacing: "-0.5px",
                  }}
                >
                  <span className="d-flex align-items-center justify-content-center justify-content-lg-start td-split-text td-split-in-right">
                    CLINICAL PRECISION
                    {/* <img
                      src="/assets/img/hero/fav.png"
                      alt="CureLedger Icon"
                      className="ms-3 d-none d-sm-inline-block"
                      style={{
                        width: "55px",
                        height: "55px",
                        objectFit: "contain",
                      }}
                    /> */}
                  </span>
                  <span className="d-block td-split-text td-split-in-right mt-2">
                    FISCAL EXCELLENCE
                  </span>
                  <span
                    className="d-block td-split-text td-split-in-right mt-2"
                    style={{ color: "#09B2AB" }}
                  >
                    DENTIST-LED RCM
                  </span>
                </h2>

                <p
                  className="mb-5 wow fadeInUp mx-auto mx-lg-0"
                  data-wow-delay=".3s"
                  data-wow-duration="1s"
                  style={{
                    color: "#002C34",
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    opacity: 0.85,
                    maxWidth: "90%",
                  }}
                >
                  Stop revenue leaks with the only RCM partner that speaks your
                  clinical language. We combine doctor-level procedure knowledge
                  with aggressive financial follow-up to ensure your ledger is
                  always balanced and your claims are technically perfect,
                  audit-proof, and paid in full.
                </p>
                  
                <br/>
                
                {/* Interactive CTAs */}
                <div
                  className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start gap-4 wow fadeInUp"
                  data-wow-delay=".5s"
                  data-wow-duration="1s"
                >
                  <div
                    onClick={handleAuditClick}
                    style={{
                      cursor: "pointer",
                      width: "100%",
                      maxWidth: "340px",
                    }}
                  >
                    <span
                      className="d-inline-block w-100 text-center transition-all"
                      style={{
                        backgroundColor: "#09B2AB",
                        color: "#fff",
                        padding: "20px 40px", 
                        borderRadius: "50px",
                        fontWeight: "bold",
                        boxShadow: "0 10px 25px rgba(9, 178, 171, 0.3)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#003941";
                        e.currentTarget.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#09B2AB";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      Schedule my free Revenue Audit
                    </span>
                  </div>

                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="d-flex align-items-center bg-transparent border-0 transition-all"
                    style={{ cursor: "pointer", gap: "15px" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <span
                      style={{
                        width: "55px",
                        height: "55px",
                        background: "#003941",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        boxShadow: "0 10px 20px rgba(0, 57, 65, 0.15)",
                        flexShrink: 0,
                      }}
                    >
                      <i className="fa-solid fa-play ms-1"></i>
                    </span>
                    <span
                      className="fw-bold"
                      style={{
                        fontSize: "16px",
                        letterSpacing: "0.5px",
                        color: "#003941",
                        whiteSpace: "nowrap",
                      }}
                    >
                      See How It Works
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Full Transparent Image with Layered Parallax & 3 Badges */}
            <div className="col-lg-6 mt-5 mt-lg-0 d-none d-lg-block" style={{ zIndex: 1 }}>
              <div className="w-100 h-100 d-flex justify-content-center align-items-center position-relative">
                
                {/* Parallax Background Glow Orb */}
                <div
                  ref={bgOrbRef}
                  className="position-absolute"
                  style={{
                    width: "450px",
                    height: "450px",
                    background: "radial-gradient(circle, rgba(9, 178, 171, 0.12) 0%, transparent 70%)",
                    borderRadius: "50%",
                    zIndex: 0,
                    filter: "blur(30px)",
                  }}
                ></div>

                {/* Main Transparent PNG */}
                <div
                  ref={imgWrapRef}
                  className="hero-parallax-img position-relative"
                  style={{ width: "95%", maxWidth: "600px", zIndex: 2 }}
                >
                  <img
                    src="/assets/img/hero/hero.png"
                    alt="Dental Professional"
                    className="img-fluid w-100"
                    style={{
                      objectFit: "contain",
                      filter: "drop-shadow(0px 25px 35px rgba(0, 57, 65, 0.15))",
                    }}
                  />

                  {/* --- BADGE 1: Up to 35% Increase (Top Left) --- */}
                  <div
                    ref={badge1Ref}
                    className="position-absolute d-flex align-items-center gap-2 shadow-lg rounded-pill"
                    style={{
                      top: "10%",
                      left: "-5%",
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(12px)",
                      padding: "10px 20px", // Smaller padding
                      border: "1px solid rgba(255, 255, 255, 0.8)",
                      zIndex: 3,
                      cursor: "default"
                    }}
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: "35px", height: "35px", backgroundColor: "rgba(9, 178, 171, 0.1)", color: "#09B2AB" }}
                    >
                      <i className="fa-solid fa-arrow-trend-up fs-6"></i>
                    </div>
                    <div>
                      <h6 className="m-0 fw-black" style={{ color: "#003941", fontSize: "0.95rem" }}>Up to 35%</h6>
                      <p className="m-0 fw-bold text-uppercase" style={{ color: "#09B2AB", fontSize: "9px", letterSpacing: "0.5px" }}>Increase in Collections</p>
                    </div>
                  </div>

                  {/* --- BADGE 2: 98% Clean Claim Rate (Middle Right) --- */}
                  <div
                    ref={badge2Ref}
                    className="position-absolute d-flex align-items-center gap-2 shadow-lg rounded-pill"
                    style={{
                      top: "40%",
                      right: "-10%",
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(12px)",
                      padding: "10px 20px",
                      border: "1px solid rgba(255, 255, 255, 0.8)",
                      zIndex: 3,
                      cursor: "default"
                    }}
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: "35px", height: "35px", backgroundColor: "#003941", color: "#ffffff" }}
                    >
                      {/* Using clipboard-check to guarantee icon loads perfectly */}
                      <i className="fa-solid fa-clipboard-check fs-6"></i>
                    </div>
                    <div>
                      <h6 className="m-0 fw-black" style={{ color: "#09B2AB", fontSize: "1rem" }}>98%</h6>
                      <p className="m-0 fw-bold text-uppercase" style={{ color: "#003941", fontSize: "9px", letterSpacing: "0.5px" }}>Clean Claim Rate</p>
                    </div>
                  </div>

                  {/* --- BADGE 3: < 30 Days in AR (Bottom Left) --- */}
                  <div
                    ref={badge3Ref}
                    className="position-absolute d-flex align-items-center gap-2 shadow-lg rounded-pill"
                    style={{
                      bottom: "15%",
                      left: "5%",
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(12px)",
                      padding: "10px 20px",
                      border: "1px solid rgba(255, 255, 255, 0.8)",
                      zIndex: 3,
                      cursor: "default"
                    }}
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: "35px", height: "35px", backgroundColor: "#09B2AB", color: "#ffffff" }}
                    >
                      <i className="fa-solid fa-clock fs-6"></i>
                    </div>
                    <div>
                      <h6 className="m-0 fw-black" style={{ color: "#003941", fontSize: "1rem" }}>&lt; 30 Days</h6>
                      <p className="m-0 fw-bold text-uppercase" style={{ color: "#09B2AB", fontSize: "9px", letterSpacing: "0.5px" }}>Days in AR</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* MOBILE ONLY FALLBACK IMAGE */}
            <div className="col-12 mt-5 d-block d-lg-none text-center">
              <img
                src="/assets/img/hero/hero.png"
                alt="Dental Professional"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0px 15px 25px rgba(0, 57, 65, 0.1))",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic React Player Modal */}
      <Modal
        open={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        center
        styles={{
          modal: {
            maxWidth: "1000px",
            width: "95%",
            padding: "0",
            background: "transparent",
            boxShadow: "none",
          },
          closeIcon: { fill: "#ffffff" },
        }}
      >
        <div
          style={{
            aspectRatio: "16/9",
            width: "100%",
            background: "#000",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <ReactPlayer
            src="https://www.youtube.com/watch?v=your-demo-video-id"
            width="100%"
            height="100%"
            playing={isVideoOpen}
            controls
          />
        </div>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default Hero;