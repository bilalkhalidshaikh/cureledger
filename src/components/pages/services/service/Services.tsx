import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerTextRef = useRef<HTMLDivElement>(null);
  const rightGridRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardImgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const bgOrb1Ref = useRef<HTMLDivElement>(null);
  const bgOrb2Ref = useRef<HTMLDivElement>(null);

  // Scroll Reveal & Background Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top Header Staggered Reveal
      gsap.fromTo(
        ".section-header-anim",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      // Grid Cards popping up with a stagger
      gsap.fromTo(
        ".service-card-wrap",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1, // Faster stagger for 8 items
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-grid-container",
            start: "top 85%",
          },
        },
      );

      // Floating Background Orbs Parallax
      gsap.to(bgOrb1Ref.current, {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(bgOrb2Ref.current, {
        y: -150,
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

  // Global 3D Parallax for Header
  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 992) return;

    const { clientX, clientY } = e;
    const x = clientX / window.innerWidth - 0.5;
    const y = clientY / window.innerHeight - 0.5;

    if (headerTextRef.current) {
      gsap.to(headerTextRef.current, {
        rotationY: x * 15,
        rotationX: -y * 15,
        x: -x * 30,
        y: -y * 30,
        ease: "power2.out",
        duration: 0.8,
      });
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 992) return;
    if (headerTextRef.current)
      gsap.to(headerTextRef.current, {
        rotationY: 0,
        rotationX: 0,
        x: 0,
        y: 0,
        ease: "power3.out",
        duration: 1.5,
      });
  };

  // Internal Parallax for Grid Card Background Images
  const handleCardMove = (e: React.MouseEvent, index: number) => {
    if (window.innerWidth < 992) return;

    if (rightGridRefs.current[index]) {
      gsap.to(rightGridRefs.current[index], {
        y: -10,
        boxShadow: "0 25px 50px rgba(0, 44, 52, 0.15)",
        borderColor: "rgba(9, 178, 171, 0.3)",
        duration: 0.4,
        ease: "power2.out",
      });
    }

    const img = cardImgRefs.current[index];
    const card = rightGridRefs.current[index];
    if (!img || !card) return;

    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;

    gsap.to(img, {
      x: -x,
      y: -y,
      scale: 1.15, // Slightly larger zoom for dramatic effect
      ease: "power2.out",
      duration: 0.5,
    });
  };

  const handleCardLeave = (index: number) => {
    if (window.innerWidth < 992) return;

    if (rightGridRefs.current[index]) {
      gsap.to(rightGridRefs.current[index], {
        y: 0,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
        borderColor: "rgba(0, 0, 0, 0.05)",
        duration: 0.6,
        ease: "power3.out",
      });
    }

    const img = cardImgRefs.current[index];
    if (img) {
      gsap.to(img, {
        x: 0,
        y: 0,
        scale: 1.05,
        ease: "power3.out",
        duration: 0.8,
      });
    }
  };

  // Magnetic Button Effect for CTAs
  const handleMagneticMove = (
    e: React.MouseEvent,
    ref: React.RefObject<HTMLAnchorElement | null>,
  ) => {
    if (window.innerWidth < 992 || !ref.current) return;
    const btn = ref.current;
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;

    gsap.to(btn, { x, y, duration: 0.3, ease: "power2.out" });
  };

  const handleMagneticLeave = (
    ref: React.RefObject<HTMLAnchorElement | null>,
  ) => {
    if (window.innerWidth < 992 || !ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const servicesData = [
    {
      id: 1,
      category: "01. Pre-Visit",
      title: "Insurance Verification",
      desc: "Ensure 100% financial clarity before the patient sits in the chair. We catch potential downgrades and frequency limitations instantly to prevent unexpected out-of-pocket costs.",
      thumb:
        "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
      list: [
        "Updated breakdowns uploaded",
        "Accurate patient estimates",
        "Essential codes verified",
        "Real-time eligibility checks",
      ],
    },
    {
      id: 2,
      category: "02. Operations",
      title: "Appointment Scheduling",
      desc: "Keep your chairs full and your production high without the front-desk overwhelm. We manage your calendar with precision to ensure a steady flow of patients.",
      thumb:
        "https://images.pexels.com/photos/7659562/pexels-photo-7659562.jpeg", // Calendar/Desk
      list: [
        "Inbound call handling",
        "Outbound recall",
        "Schedule optimization",
        "New patient intake",
      ],
    },
    {
      id: 3,
      category: "03. Pre-Approval",
      title: "Prior Authorizations",
      desc: "Eliminate the risk of performing major procedures that won’t be covered. We handle the clinical back-and-forth and documentation submission to secure approvals.",
      thumb:
        "https://images.pexels.com/photos/8460159/pexels-photo-8460159.jpeg", // Doctor reviewing documents
      list: [
        "Clinical Narrative review",
        "Attachment Management",
        "Relentless Payer Follow-up",
        "Status Updates",
      ],
    },
    {
      id: 4,
      category: "04. Post-Visit",
      title: "Claim Processing",
      desc: "Doctor-led claim submission designed for maximum first-pass approval and zero revenue leaks. We treat every claim with clinical precision.",
      thumb:
        "https://images.pexels.com/photos/6863268/pexels-photo-6863268.jpeg", // Clinical analysis
      list: [
        "Review denied claims",
        "Troubleshoot missing info",
        "Attach required documents",
        "Daily EOBs posted",
      ],
    },
    {
      id: 5,
      category: "05. Collections",
      title: "Patient Billing",
      desc: "Consistent, professional follow-ups that protect your patient relationships while maximizing your practice’s cash flow through accurate accounting.",
      thumb:
        "https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg", // Financial review
      list: [
        "Patient Ledger Audits",
        "Personalized Letters",
        "Outbound Phone Calls",
        "Electronic Statements",
      ],
    },
    {
      id: 6,
      category: "06. Revenue Recovery",
      title: "A/R Recovery",
      desc: "Targeting outstanding insurance balances aged 30, 60, or 90+ days to turn 'stuck' claims into liquid revenue. We systematically clean up your aging report.",
      thumb:
        "https://images.pexels.com/photos/6694200/pexels-photo-6694200.jpeg", // Analyzing charts/growth
      list: [
        "Aged Balance research",
        "Aggressive Appeals",
        "Insurance Follow-up",
        "Monthly Reporting",
      ],
    },
    {
      id: 7,
      category: "07. Compliance (Coming Soon)",
      title: "Dental Credentialing",
      desc: "Keep your providers in-network and your practice fully compliant without the administrative headache. We manage the entire enrollment lifecycle.",
      thumb:
        "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg", // Professional handshake/signing
      list: [
        "Complete applications",
        "Attach documentation",
        "Monitor progress",
        "In-network pricing",
      ],
    },
    {
      id: 8,
      category: "08. Security (Coming Soon)",
      title: "Security & Compliance",
      desc: "Aligning your practice with the Compliance & Operations Binder standards. We ensure your back-office operations meet all federal and state requirements.",
      thumb:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg", // Cyber security / Lock
      list: [
        "SRA Support via Health IT",
        "MSA & BAA templates",
        "Subcontractor tracking",
        "Audit Readiness logging",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="pt-120 pb-120 position-relative overflow-hidden"
      style={{ backgroundColor: "#FAFAFA", perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Parallax Orbs */}
      <div
        ref={bgOrb1Ref}
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(9,178,171,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      ></div>
      <div
        ref={bgOrb2Ref}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(0,44,52,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(50px)",
        }}
      ></div>

      <div className="container-fluid px-4 px-xl-5 position-relative z-index-1">
        {/* Top Header Section */}
        <div className="row justify-content-center text-center mb-80">
          <div className="col-lg-8 col-xl-6">
            <div ref={headerTextRef} style={{ transformStyle: "preserve-3d" }}>
              <div
                style={{ transform: "translateZ(40px)", pointerEvents: "none" }}
              >
                <span
                  className="section-header-anim d-inline-block mb-3 px-4 py-2 rounded-pill fw-bold shadow-sm"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#09B2AB",
                    letterSpacing: "1px",
                    fontSize: "13px",
                    textTransform: "uppercase",
                    border: "1px solid rgba(9, 178, 171, 0.2)",
                  }}
                >
                  <i className="fa-solid fa-tooth me-2"></i> Comprehensive RCM
                </span>
                <h2
                  className="section-header-anim fw-black mb-4"
                  style={{
                    color: "#003941",
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    lineHeight: "1.1",
                    letterSpacing: "-1px",
                  }}
                >
                  Expert Dental Billing <br className="d-none d-md-block" />
                  <span style={{ color: "#09B2AB" }}>Solutions</span>
                </h2>
                <p
                  className="section-header-anim mx-auto"
                  style={{
                    color: "#002C34",
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    opacity: 0.85,
                  }}
                >
                  Financial health is the backbone of a thriving practice, but
                  clinical nuances shouldn't be your daily distraction. We
                  optimize your entire revenue cycle using doctor-to-doctor
                  insight.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic 8-Card Grid Layout (4 columns on XL, 2 on MD, 1 on Mobile) */}
        <div className="row g-4 g-xl-5 service-grid-container justify-content-center">
          {servicesData.map((item, index) => {
            const ctaRef = useRef<HTMLAnchorElement>(null);

            return (
              <div
                key={item.id}
                className="col-xl-3 col-lg-4 col-md-6 d-flex flex-column service-card-wrap"
              >
                {/* The Interactive Parallax Card */}
                <div
                  ref={(el) => {
                    rightGridRefs.current[index] = el;
                  }}
                  className="w-100 rounded-4 overflow-hidden position-relative shadow-sm d-flex flex-column"
                  style={{
                    minHeight: "420px", // Slightly taller to accommodate the expanded list
                    border: "1px solid rgba(0,0,0,0.05)",
                    cursor: "crosshair",
                    backgroundColor: "#002C34",
                  }}
                  onMouseMove={(e) => handleCardMove(e, index)}
                  onMouseLeave={() => handleCardLeave(index)}
                >
                  {/* Background Image */}
                  <img
                    ref={(el) => {
                      cardImgRefs.current[index] = el;
                    }}
                    src={item.thumb}
                    alt={item.title}
                    className="position-absolute w-100 h-100"
                    style={{
                      objectFit: "cover",
                      transform: "scale(1.05)",
                      transformOrigin: "center",
                      zIndex: 0,
                    }}
                  />

                  {/* Dark Gradient Overlay */}
                  <div
                    className="position-absolute w-100 h-100 top-0 start-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0, 44, 52, 0.95) 0%, rgba(0, 44, 52, 0.8) 50%, rgba(0, 44, 52, 0.4) 100%)",
                      pointerEvents: "none",
                      zIndex: 1,
                    }}
                  ></div>

                  {/* Card Foreground Content */}
                  <div
                    className="position-relative z-index-2 p-4 d-flex flex-column h-100"
                    style={{ zIndex: 2 }}
                  >
                    {/* Top Badge */}
                    <div className="mb-auto">
                      <span
                        className="badge px-3 py-2 rounded-pill shadow-sm"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.15)",
                          color: "#ffffff",
                          backdropFilter: "blur(5px)",
                          border: "1px solid rgba(255,255,255,0.3)",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {item.category}
                      </span>
                    </div>

                    {/* Bottom Content: Title, Desc, Bullets */}
                    <div className="mt-auto pt-4">
                      <h4
                        className="fw-bold mb-3"
                        style={{
                          color: "#ffffff",
                          fontSize: "1.3rem",
                          textShadow: "0 5px 15px rgba(0,0,0,0.5)",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="mb-3"
                        style={{
                          color: "#E5EAEB",
                          fontSize: "0.9rem",
                          lineHeight: "1.5",
                          opacity: 0.95,
                        }}
                      >
                        {item.desc}
                      </p>

                      {/* Clean Bullet List */}
                      <ul
                        className="list-unstyled mb-0 border-top pt-3"
                        style={{ borderColor: "rgba(255,255,255,0.15)" }}
                      >
                        {item.list.map((listItem, i) => (
                          <li
                            key={i}
                            className="d-flex align-items-start mb-2"
                            style={{
                              color: "#ffffff",
                              fontSize: "0.85rem",
                              fontWeight: 500,
                            }}
                          >
                            <div
                              className="mt-1 me-2 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                              style={{
                                width: "16px",
                                height: "16px",
                                backgroundColor: "rgba(9, 178, 171, 0.2)",
                              }}
                            >
                              <i
                                className="fa-solid fa-check"
                                style={{ color: "#09B2AB", fontSize: "8px" }}
                              ></i>
                            </div>
                            <span style={{ opacity: 0.9 }}>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Dark Background Magnetic CTA Button Below the Card */}
                <div className="mt-4 ms-2 d-flex">
                  <Link
                    ref={ctaRef}
                    to="/contact"
                    className="d-inline-flex align-items-center text-uppercase fw-bold shadow-sm rounded-pill px-4 py-2"
                    style={{
                      backgroundColor: "#002C34",
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: "12px",
                      letterSpacing: "1px",
                      display: "inline-block",
                      border: "1px solid rgba(9, 178, 171, 0.2)",
                      transition: "background-color 0.3s, color 0.3s",
                    }}
                    onMouseMove={(e) => handleMagneticMove(e, ctaRef)}
                    onMouseLeave={() => {
                      handleMagneticLeave(ctaRef);
                      if (ctaRef.current) {
                        ctaRef.current.style.backgroundColor = "#002C34";
                        ctaRef.current.style.color = "#ffffff";
                      }
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#09B2AB";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    Learn More
                    <div
                      className="ms-2 d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "22px",
                        height: "22px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{ color: "#ffffff", fontSize: "10px" }}
                      ></i>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
