import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Focus = () => {
  // Refs for Parallax Animation
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const floatCardRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  // GSAP Scroll Reveal & Parallax Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for all elements
      gsap.fromTo(
        ".focus-reveal",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );

      // Scroll Parallax for the main image (creates a "window" sliding effect)
      gsap.to(imgRef.current, {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: imgWrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Continuous smooth floating animation for the badge
      gsap.to(floatCardRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Slow rotation for background abstract shape
      gsap.to(shapeRef.current, {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // GSAP Interactive Mouse Parallax (Desktop Only)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 992) return;

    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 30;
    const y = (clientY / window.innerHeight - 0.5) * 30;

    if (imgWrapRef.current)
      gsap.to(imgWrapRef.current, {
        rotationY: x * 0.5,
        rotationX: -y * 0.5,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.5,
      });
    if (floatCardRef.current)
      gsap.to(floatCardRef.current, {
        x: x * 1.5,
        ease: "power2.out",
        duration: 0.5,
      });
    if (shapeRef.current)
      gsap.to(shapeRef.current, {
        x: x * -2,
        y: y * -2,
        ease: "power2.out",
        duration: 1.5,
      });
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 992) return;

    gsap.to([imgWrapRef.current, floatCardRef.current, shapeRef.current], {
      rotationY: 0,
      rotationX: 0,
      x: 0,
      y: 0,
      ease: "power3.out",
      duration: 1.5,
    });
  };

  const proofPoints = [
    {
      icon: "fa-chart-line",
      title: "98% Collection Rate",
      desc: "The industry standard is 92%; our clinical-first approach captures the missing 6%.",
    },
    {
      icon: "fa-lock",
      title: "100% HIPAA Integrity",
      desc: "Security isn't an afterthought; it's our technical foundation.",
    },
    {
      icon: "fa-user-doctor",
      title: "15+ Years Clinical Expertise",
      desc: "Led by a doctor who understands the chairside value of every code.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="td-about-area pt-120 pb-120 p-relative overflow-hidden"
      style={{ backgroundColor: "#FAFAFA" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Abstract Parallax Shape */}
      <div
        ref={shapeRef}
        className="position-absolute"
        style={{
          top: "5%",
          right: "5%",
          width: "450px",
          height: "450px",
          background:
            "radial-gradient(circle, rgba(9, 178, 171, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></div>

      <div className="container p-relative z-index-1">
        <div className="row align-items-center g-5">
          {/* LEFT COLUMN: Parallax Images & Floating Card */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="p-relative z-index-1 focus-reveal">
              {/* Main Large Image Container - Fixed Aspect Ratio & Centering */}
              <div
                ref={imgWrapRef}
                className="rounded-4 overflow-hidden shadow-lg position-relative"
                style={{
                  border: "1px solid rgba(0,57,65,0.05)",
                  aspectRatio: "3/4",
                  backgroundColor: "#e9ecef",
                }}
              >
                <img
                  ref={imgRef}
                  className="w-100 h-100"
                  // src="https://images.pexels.com/photos/6502025/pexels-photo-6502025.jpeg"
                  src="/assets/img/sections/sectionsix.png"
                  alt="Dentist and Team Member"
                  style={{
                    objectFit: "cover",
                    objectPosition: "left", // Ensures faces aren't cut off
                    transform: "scale(1.1)", // Slight scale to allow scroll parallax movement without showing edges
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0, 57, 65, 0.5) 0%, transparent 40%)",
                    pointerEvents: "none",
                  }}
                ></div>
              </div>

              {/* Floating Glassmorphic Stat Card */}
              <div
                ref={floatCardRef}
                className="position-absolute shadow-lg"
                style={{
                  bottom: "-20px",
                  right: "-20px",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(15px)",
                  zIndex: 3,
                  padding: "20px 30px",
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="shadow-sm"
                    style={{
                      width: "55px",
                      height: "55px",
                      backgroundColor: "#09B2AB",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontSize: "24px",
                    }}
                  >
                    <i className="fa-solid fa-stethoscope"></i>
                  </div>
                  <div>
                    <h4
                      className="mb-0 fw-black"
                      style={{ color: "#003941", fontSize: "1.4rem" }}
                    >
                      Doctor-Led
                    </h4>
                    <span
                      style={{
                        color: "#09B2AB",
                        fontSize: "0.85rem",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      RCM Approach
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Founder's Story & Proof Points */}
          <div className="col-lg-7">
            <div className="ps-lg-5 p-relative">
              {/* Section Tag */}
              <span
                className="focus-reveal d-inline-block mb-3 px-4 py-2 rounded-pill fw-bold shadow-sm"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#09B2AB",
                  letterSpacing: "1px",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  border: "1px solid rgba(9, 178, 171, 0.2)",
                }}
              >
                OUR PHILOSOPHY
              </span>

              {/* Heading */}
              <h2
                className="focus-reveal mb-4"
                style={{
                  color: "#003941",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                  lineHeight: "1.15",
                  letterSpacing: "-0.5px",
                  textTransform: 'uppercase'
                }}
              >
                The Clinical Cure for <br />
                <span style={{ color: "#09B2AB" }}>Financial Friction.</span>
              </h2>

              {/* Founder's Quote / Description */}
              <div
                className="focus-reveal p-4 rounded-4 mb-5 shadow-sm position-relative overflow-hidden"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0,57,65,0.05)",
                  borderLeft: "4px solid #09B2AB",
                }}
              >
                <i
                  className="fa-solid fa-quote-right position-absolute"
                  style={{
                    top: "20px",
                    right: "20px",
                    fontSize: "4rem",
                    color: "rgba(9, 178, 171, 0.05)",
                  }}
                ></i>
                <p
                  className="mb-0 position-relative z-index-1"
                  style={{
                    color: "#002C34",
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    fontStyle: "italic",
                    opacity: 0.9,
                  }}
                >
                  "I founded CureLedger on a simple, clinical truth: a dentist’s
                  primary focus should be on healing patients, not chasing
                  insurance carriers. We bridge the gap between complex dental
                  procedures and technical financial recovery. By providing the
                  clinical oversight that generic billing firms lack, we ensure
                  your hard work is rewarded with the revenue it
                  deserves—allowing you to practice with total peace of mind."
                </p>
              </div>

              {/* Interactive Proof Points Grid */}
              <div className="d-flex flex-column gap-3 mb-5">
                {proofPoints.map((point, index) => (
                  <div
                    key={index}
                    className="focus-reveal d-flex align-items-center p-4 rounded-4 shadow-sm transition-all group"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(0,57,65,0.05)",
                      cursor: "crosshair",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(10px)";
                      e.currentTarget.style.borderColor =
                        "rgba(9, 178, 171, 0.4)";
                      e.currentTarget.style.boxShadow =
                        "0 15px 30px rgba(9, 178, 171, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.borderColor = "rgba(0,57,65,0.05)";
                      e.currentTarget.style.boxShadow =
                        "0 5px 15px rgba(0,0,0,0.05)";
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 me-4 transition-all"
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "rgba(9, 178, 171, 0.1)",
                        border: "1px solid rgba(9, 178, 171, 0.2)",
                      }}
                    >
                      <i
                        className={`fa-solid ${point.icon}`}
                        style={{ color: "#09B2AB", fontSize: "22px" }}
                      ></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: "#003941" }}>
                        {point.title}
                      </h5>
                      <p
                        className="mb-0"
                        style={{
                          color: "#002C34",
                          opacity: 0.8,
                          lineHeight: "1.6",
                          fontSize: "1rem",
                        }}
                      >
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="focus-reveal">
                <Link
                  to="/contact"
                  className="td-btn-2 d-inline-flex align-items-center justify-content-center transition-all"
                  style={{
                    backgroundColor: "#09B2AB",
                    color: "#fff",
                    padding: "18px 40px",
                    borderRadius: "50px",
                    fontWeight: "bold",
                    border: "none",
                    boxShadow: "0 10px 30px rgba(9, 178, 171, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#003941";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 35px rgba(0, 57, 65, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#09B2AB";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(9, 178, 171, 0.3)";
                  }}
                >
                  <span className="me-2 letter-spacing-1">
                    SCHEDULE A CONSULT
                  </span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;
