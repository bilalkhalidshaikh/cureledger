import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SecurityArea = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgOrb1Ref = useRef<HTMLDivElement>(null);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for text and timeline cards
      gsap.fromTo(
        ".sec-reveal",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );

      // Continuous floating animation for the main image
      if (imgWrapRef.current) {
        gsap.to(imgWrapRef.current, {
          y: -15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Parallax for the background orb
      gsap.to(bgOrb1Ref.current, {
        y: 250,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // 3D Mouse Parallax for Image and Cards
  const handleMouseMove = (
    e: React.MouseEvent,
    type: "image" | "card",
    index?: number,
  ) => {
    if (window.innerWidth < 992) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

    if (type === "image" && imgWrapRef.current) {
      gsap.to(imgWrapRef.current, {
        rotationY: x,
        rotationX: -y,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.5,
      });
      if (badgeRef.current) {
        gsap.to(badgeRef.current, {
          x: x * 2,
          y: y * 2,
          ease: "power2.out",
          duration: 0.5,
        });
      }
    } else if (
      type === "card" &&
      index !== undefined &&
      cardRefs.current[index]
    ) {
      gsap.to(cardRefs.current[index], {
        scale: 1.03,
        x: -5,
        ease: "power2.out",
        duration: 0.3,
      });
    }
  };

  const handleMouseLeave = (type: "image" | "card", index?: number) => {
    if (window.innerWidth < 992) return;

    if (type === "image" && imgWrapRef.current) {
      gsap.to(imgWrapRef.current, {
        rotationY: 0,
        rotationX: 0,
        ease: "power3.out",
        duration: 1,
      });
      if (badgeRef.current)
        gsap.to(badgeRef.current, {
          x: 0,
          y: 0,
          ease: "power3.out",
          duration: 1,
        });
    } else if (
      type === "card" &&
      index !== undefined &&
      cardRefs.current[index]
    ) {
      gsap.to(cardRefs.current[index], {
        scale: 1,
        x: 0,
        ease: "power3.out",
        duration: 0.5,
      });
    }
  };

  const securitySteps = [
    {
      step: "01",
      icon: "fa-shield-alt", // Fixed: Universally supported solid icon
      title: "Security Risk Analysis (SRA)",
      desc: "We conduct a comprehensive SRA using official Health IT tools to identify and bridge any gaps in your current digital workflow. This ensures your practice meets the highest standards of data integrity.",
    },
    {
      step: "02",
      icon: "fa-server",
      title: "Secure Workspace Integration",
      desc: "Our team operates via a 'Secure Workspace' using encrypted, unique credentials to remote into your server. Your data stays on your hardware—we never export or store Protected Health Information (PHI).",
    },
    {
      step: "03",
      icon: "fa-file-contract",
      title: "Compliance & Operations Binder",
      desc: "Every partnership is documented for total liability protection. We provide a master compliance file including a signed MSA, a customized Business Associate Agreement (BAA), and verified Subcontractor BAAs.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="pt-120 pb-120 position-relative overflow-hidden"
      style={{ backgroundColor: "#002C34" }} // Dark Theme Background
    >
      {/* Background Tech Grid & Orb */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div
        ref={bgOrb1Ref}
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(9,178,171,0.15) 0%, rgba(0,57,65,0) 70%)",
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      ></div>

      <div className="container position-relative z-index-1">
        <div className="row align-items-center g-5 mb-80">
          {/* LEFT COLUMN: Typography & Relatable Image */}
          <div className="col-lg-5 sec-reveal">
            <span
              className="d-inline-block mb-3 px-4 py-2 rounded-pill fw-bold shadow-sm"
              style={{
                backgroundColor: "rgba(9, 178, 171, 0.1)",
                color: "#09B2AB",
                letterSpacing: "1px",
                fontSize: "13px",
                textTransform: "uppercase",
                border: "1px solid rgba(9, 178, 171, 0.2)",
              }}
            >
              <i className="fa-solid fa-lock me-2"></i> Data Protection
            </span>
            <h2
              className="mb-4"
              style={{
                color: "#FFFFFF",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                lineHeight: "1.15",
                textTransform: 'uppercase'
              }}
            >
              Enterprise-Grade <br />
              <span style={{ color: "#09B2AB" }}>Security.</span>
            </h2>
            <p
              className="mb-5"
              style={{
                color: "#A3B1B2",
                fontSize: "1.15rem",
                lineHeight: "1.7",
                maxWidth: "90%",
              }}
            >
              Your data never leaves your office. We utilize a rigorous 3-step
              security protocol to ensure your practice remains HIPAA-compliant
              and your financial data stays protected.
            </p>

            {/* Interactive Dental Billing Image */}
            <div
              className="position-relative w-100 mt-4 d-none d-md-block"
              style={{ perspective: "1000px", cursor: "crosshair" }}
              onMouseMove={(e) => handleMouseMove(e, "image")}
              onMouseLeave={() => handleMouseLeave("image")}
            >
              <div
                ref={imgWrapRef}
                className="rounded-4  overflow-hidden shadow-lg position-relative"
                style={{
                  border: "1px solid rgba(9,178,171,0.3)",
                  aspectRatio: "4/3",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  // src="https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg"
                  src="/assets/img/sections/sectionfive.png"
                  alt="Dental Professional reviewing billing records securely"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(45deg, rgba(0,57,65,0.7) 0%, transparent 100%)",
                  }}
                ></div>

                {/* Floating Glassmorphic Badge inside image */}
                <div
                  ref={badgeRef}
                  className="position-absolute shadow-lg"
                  style={{
                    bottom: "20px",
                    left: "20px",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    padding: "12px 20px",
                    borderRadius: "12px",
                    transform: "translateZ(30px)",
                  }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="spinner-grow spinner-grow-sm text-success"
                      role="status"
                    ></div>
                    <span className="fw-bold text-white letter-spacing-1">
                      100% Encrypted Connection
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Security Timeline */}
          <div className="col-lg-7 position-relative">
            {/* The Vertical Connecting Line */}
            <div
              className="position-absolute d-none d-md-block sec-reveal"
              style={{
                width: "2px",
                backgroundColor: "rgba(9,178,171,0.2)",
                top: "30px",
                bottom: "30px",
                left: "49px",
                zIndex: 0,
              }}
            ></div>

            <div className="d-flex flex-column gap-4">
              {securitySteps.map((item, index) => (
                <div
                  key={index}
                  className="d-flex position-relative z-index-1 sec-reveal"
                  onMouseMove={(e) => handleMouseMove(e, "card", index)}
                  onMouseLeave={() => handleMouseLeave("card", index)}
                >
                  {/* Timeline Node/Icon */}
                  <div
                    className="d-none d-md-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      backgroundColor: "#002C34",
                      border: "3px solid #09B2AB",
                      zIndex: 2,
                    }}
                  >
                    <i
                      className={`fa-solid ${item.icon} fs-4`}
                      style={{ color: "#09B2AB" }}
                    ></i>
                  </div>

                  {/* Content Card */}
                  <div
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="ms-md-4 p-4 p-lg-5 w-100 rounded-4 shadow-lg position-relative overflow-hidden group"
                    style={{
                      backgroundColor: "rgba(0, 57, 65, 0.6)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      transition:
                        "box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(0, 57, 65, 0.9)";
                      e.currentTarget.style.borderColor =
                        "rgba(9, 178, 171, 0.5)";
                      e.currentTarget.style.boxShadow =
                        "0 20px 40px rgba(0, 0, 0, 0.5)";
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h4 className="m-0 fw-bold" style={{ color: "#FFFFFF" }}>
                        {item.title}
                      </h4>
                      <span
                        className="fw-black"
                        style={{
                          fontSize: "2rem",
                          color: "rgba(9,178,171,0.2)",
                          lineHeight: 1,
                        }}
                      >
                        {item.step}
                      </span>
                    </div>
                    <p
                      className="m-0"
                      style={{
                        color: "#A3B1B2",
                        lineHeight: "1.7",
                        fontSize: "1.05rem",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compatibility & Trust Badges Banner */}
        <div className="row justify-content-center sec-reveal">
          <div className="col-lg-12">
            <div
              className="p-4 p-md-5 rounded-4 d-flex flex-column flex-xl-row align-items-center justify-content-between gap-4 shadow-lg position-relative overflow-hidden"
              style={{
                backgroundColor: "rgba(0, 57, 65, 0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(9, 178, 171, 0.3)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: "10%",
                  width: "300px",
                  height: "100%",
                  background:
                    "radial-gradient(circle, rgba(9,178,171,0.1) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              ></div>

              {/* Left Side: Trust Badges (Lock Icon & SSL) */}
              <div className="d-flex flex-column flex-md-row align-items-center gap-4 z-index-1">
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "rgba(9, 178, 171, 0.1)",
                      border: "1px solid rgba(9, 178, 171, 0.3)",
                    }}
                  >
                    <i
                      className="fa-solid fa-lock fs-4"
                      style={{ color: "#09B2AB" }}
                    ></i>
                  </div>
                  <div className="text-center text-md-start">
                    <h6 className="m-0 fw-bold text-white">HIPAA Verified</h6>
                    <p className="m-0 small" style={{ color: "#A3B1B2" }}>
                      100% Compliant
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    width: "1px",
                    height: "40px",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  className="d-none d-md-block"
                ></div>
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "rgba(9, 178, 171, 0.1)",
                      border: "1px solid rgba(9, 178, 171, 0.3)",
                    }}
                  >
                    <i
                      className="fa-solid fa-shield-check fs-4"
                      style={{ color: "#09B2AB" }}
                    ></i>
                  </div>
                  <div className="text-center text-md-start">
                    <h6 className="m-0 fw-bold text-white">SSL Secure</h6>
                    <p className="m-0 small" style={{ color: "#A3B1B2" }}>
                      256-bit Encryption
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Software Integration Icons */}
              <div className="d-flex flex-column align-items-center align-items-xl-end z-index-1 mt-3 mt-xl-0">
                <p
                  className="fw-bold mb-3 small text-uppercase"
                  style={{ color: "#A3B1B2", letterSpacing: "1px" }}
                >
                  Seamlessly Integrates With:
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {["Dentrix", "Eaglesoft", "Open Dental"].map(
                    (software, i) => (
                      <div
                        key={i}
                        className="d-flex align-items-center gap-2 badge px-4 py-3 rounded-pill shadow-sm transition-all"
                        style={{
                          backgroundColor: "#002C34",
                          border: "1px solid rgba(9, 178, 171, 0.3)",
                          color: "#ffffff",
                          fontSize: "14px",
                          letterSpacing: "0.5px",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#09B2AB";
                          e.currentTarget.style.transform = "translateY(-3px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#002C34";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <i className="fa-solid fa-cloud text-white"></i>{" "}
                        {software}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityArea;
