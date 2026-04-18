import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitTextWrapper from "../../common/SplitTextWrapper";
import sectionSevenImg from "/assets/img/sections/sectionseven.png"; 
// Adjust the path above if your folder structure is different

gsap.registerPlugin(ScrollTrigger);

const CureInsight = () => {
  // Refs for GSAP Animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  // Scroll Reveal & Parallax Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered Scroll Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        ".insight-anim",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      )
      .fromTo(
        imgWrapRef.current,
        { scale: 0.9, opacity: 0, rotationY: 15 },
        { scale: 1, opacity: 1, rotationY: 0, duration: 1.2, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ".philosophy-item",
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out" },
        "-=0.8"
      );

      // 2. Image Scroll Parallax (Inner image moves inside the frame)
      gsap.to(imgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // 3. Background Ambient Orbs Parallax
      gsap.to(orb1Ref.current, {
        y: 150,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.to(orb2Ref.current, {
        y: -150,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Interactive 3D Mouse Parallax Effect (Fixed Clipping Bug)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 992) return;

    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;

    // Center Image 3D Tilt
    if (imgWrapRef.current) {
      gsap.to(imgWrapRef.current, {
        rotationY: x,
        rotationX: -y,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.6,
      });
    }

    // Stat box subtle float
    if (statRef.current) {
      gsap.to(statRef.current, { x: x * 0.8, y: y * 0.8, ease: "power2.out", duration: 1 });
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 992) return;
    if (imgWrapRef.current) gsap.to(imgWrapRef.current, { rotationY: 0, rotationX: 0, ease: "power3.out", duration: 1.2 });
    if (statRef.current) gsap.to(statRef.current, { x: 0, y: 0, ease: "power3.out", duration: 1.2 });
  };

  return (
    <div
      ref={sectionRef}
      className="td-about-area pb-120 pt-120 p-relative overflow-hidden"
      style={{ backgroundColor: "#003941" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient Parallax Background Orbs */}
      <div
        ref={orb1Ref}
        style={{
          position: "absolute",
          top: "20%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(9,178,171,0.06) 0%, rgba(0,57,65,0) 70%)",
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></div>
      <div
        ref={orb2Ref}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(111,110,224,0.04) 0%, rgba(0,57,65,0) 70%)",
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></div>

      <div className="container p-relative z-index-1">
        <div className="row">
          {/* Main Headline */}
          <div className="col-12">
            {/* FIX: Added pt-40 here to push the title down slightly more for a cleaner look */}
            {/* <div className="td-about-3-title-wrap mb-80 pt-40"> */}
            <div className="td-about-3-title-wrap mb-4 pt-40">
              <h2
                className="td-section-3-title td-split-text td-split-in-right"
                style={{
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 4vw, 4rem)",
                  lineHeight: "1.2",
                  textTransform: 'uppercase'
                }}
              >
                <SplitTextWrapper direction="right">
                  The financial backbone of <br />
                  <span style={{ color: "#09B2AB", fontStyle: "normal" }}>
                    modern dental practices.
                  </span>
                </SplitTextWrapper>
              </h2>
            </div>
          </div>

          {/* Left Column: Mission & Core Stat */}
          <div className="col-lg-5">
            <div
              className="td-about-3-content mr-lg-5 mb-5 mb-lg-0 wow fadeInUp"
              data-wow-delay=".2s"
              data-wow-duration="1s"
            >
              <p
                className="para pb-40"
                style={{
                  color: "#D1D5D5",
                  fontSize: "1.15rem",
                  lineHeight: "1.7",
                }}
              >
                CureLedger was founded on a simple belief: dentists should focus
                on healing patients, not chasing insurance payments. As a
                dentist-led revenue cycle management partner, we combine
                clinical insight with financial precision to eliminate revenue
                leaks, reduce front desk stress, and accelerate cashflow.
              </p>

              {/* Parallax Stat Block */}
              <div
                ref={statRef}
                className="d-flex align-items-center gap-3 p-4 rounded-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h2
                  className="p-relative d-inline-block mb-0"
                  style={{
                    color: "#09B2AB",
                    fontSize: "4.5rem",
                    fontWeight: 900,
                    lineHeight: "1",
                  }}
                >
                  98
                  <span style={{ fontSize: "2.5rem", backgroundColor: "transparent", color: "#09B2AB", padding: 0 }}>
                    %
                  </span>
                </h2>
                <p
                  className="para fw-bold mb-0"
                  style={{
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    lineHeight: "1.4",
                  }}
                >
                  Average Net <br />
                  Collection Rate
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column: Premium Image */}
          <div
            className="col-lg-4 col-md-7 fix mb-5 mb-lg-0 wow fadeInUp"
            data-wow-delay=".4s"
            data-wow-duration="1s"
          >
            <div className="td-about-3-thumb td_image_animetion p-relative h-100">
              <img
                ref={imgRef}
                className="w-100 shadow-lg"
                // src="/assets/img/sections/sectionseven.png"
                src={sectionSevenImg} // Use the imported variable here
                alt="Dental Revenue Experts"
                style={{
                  borderRadius: "24px",
                  objectFit: "cover",
                  height: "100%",
                  minHeight: "400px",
                  position: "relative",
                  zIndex: 2,
                }}
              />
              {/* Decorative Parallax Shape */}
              <div
                ref={shapeRef}
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  width: "120px",
                  height: "120px",
                  backgroundColor: "rgba(9, 178, 171, 0.2)",
                  borderRadius: "50%",
                  zIndex: 1,
                  backdropFilter: "blur(5px)",
                }}
              ></div>
            </div>
          </div>

          {/* Right Column: Services List */}
          <div
            className="col-lg-3 col-md-5 d-flex align-items-center wow fadeInRight"
            data-wow-delay=".6s"
            data-wow-duration="1s"
          >
            <div className="td-about-3-list ml-lg-4 w-100">
              <h4
                className="title mb-30 fw-bold pb-3"
                style={{
                  color: "#FFFFFF",
                  fontSize: "1.5rem",
                  borderBottom: "2px solid rgba(9, 178, 171, 0.2)",
                }}
              >
                Strategic Capabilities
              </h4>
              <ul
                ref={listRef}
                style={{ listStyle: "none", padding: 0, margin: 0 }}
              >
                {[
                  "EFT & Auto-Payment Posting",
                  "PPO Fee Schedule Analysis",
                  "Clinical Narrative Auditing",
                  "Unbilled Procedure Tracking",
                  "Secondary Claims & COB",
                  "Daily Ledger Balancing",
                ].map((service, index) => (
                  <li
                    key={index}
                    className="d-flex align-items-center mb-3 p-2 rounded-3"
                    style={{
                      color: "#A3B1B2",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(10px)";
                      e.currentTarget.style.color = "#FFFFFF";
                      e.currentTarget.style.backgroundColor =
                        "rgba(255,255,255,0.03)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.color = "#A3B1B2";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        backgroundColor: "rgba(9, 178, 171, 0.1)",
                        border: "1px solid rgba(9, 178, 171, 0.3)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "15px",
                        flexShrink: 0,
                      }}
                    >
                      <i
                        className="fa-solid fa-check"
                        style={{ color: "#09B2AB", fontSize: "12px" }}
                      ></i>
                    </div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CureInsight;