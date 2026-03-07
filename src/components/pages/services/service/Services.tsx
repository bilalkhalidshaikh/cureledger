import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { JSX } from "react";

gsap.registerPlugin(ScrollTrigger);

interface DataType {
  id: number;
  btn?: boolean;
  service_details: {
    id: number;
    thumb: string;
    subtitle: string;
    title: JSX.Element;
    list: string[];
    class?: string;
  }[];
}

const service_data: DataType[] = [
  {
    id: 1,
    service_details: [
      {
        id: 1,
        class: "pb-130", // Original spacing
        thumb:
          "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
        subtitle: "Pre-Visit",
        title: (
          <>
            Insurance <br />
            Verification
          </>
        ),
        list: [
          "Updated breakdowns",
          "Uploaded into profile",
          "Accurate estimates",
          "Essential codes verified",
        ],
      },
      {
        id: 2,
        thumb:
          "https://images.pexels.com/photos/6863268/pexels-photo-6863268.jpeg",
        subtitle: "Post-Visit",
        title: (
          <>
            Claim <br />
            Processing
          </>
        ),
        list: [
          "Review denied claims",
          "Troubleshoot missing info",
          "Attach required documents",
          "Daily EOBs posted",
        ],
      },
    ],
    btn: true,
  },
  {
    id: 2,
    service_details: [
      {
        id: 1,
        class: "pb-130 pt-160", // EXACT ORIGINAL MASONRY OFFSET
        thumb:
          "https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg",
        subtitle: "Revenue Collection",
        title: (
          <>
            Patient <br />
            Billing
          </>
        ),
        list: [
          "Patient Ledger Audits",
          "Personalized Letters",
          "Reoccurring Phone Calls",
          "Electronic Statements",
        ],
      },
      {
        id: 2,
        thumb:
          "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg",
        subtitle: "Compliance",
        title: (
          <>
            Dental <br />
            Credentialing
          </>
        ),
        list: [
          "Complete applications",
          "Attach documentation",
          "Monitor progress",
          "In-network pricing",
        ],
      },
    ],
  },
];

const Services = () => {
  const imgRefs = useRef<{ [key: string]: HTMLImageElement | null }>({});

  // 1. Scroll Reveal Animation for the cards
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 991px)", () => {
      gsap.utils.toArray(".animated-card").forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%", // Animates when 85% from the top of the viewport
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    return () => mm.revert();
  }, []);

  // 2. Interactive Mouse Parallax for Images
  const handleMouseMove = (e: React.MouseEvent, id: string) => {
    if (window.innerWidth < 992) return;
    const img = imgRefs.current[id];
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 25;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 25;

    gsap.to(img, {
      x: x * -1,
      y: y * -1,
      scale: 1.08,
      ease: "power2.out",
      duration: 0.8,
    });
  };

  const handleMouseLeave = (id: string) => {
    const img = imgRefs.current[id];
    if (!img) return;
    gsap.to(img, { x: 0, y: 0, scale: 1, ease: "power3.out", duration: 1.5 });
  };

  return (
    <div
      className="td-team-area pt-160 pb-130 td-btn-trigger overflow-hidden"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="container">
        {/* Header Row */}
        <div className="row mb-50 align-items-center">
          <div className="col-lg-5 col-md-5">
            <div
              className="td-testimonial-left mb-40 td-btn-bounce wow fadeInRight"
              data-wow-duration="1s"
            >
              <div
                className="mb-3 d-inline-flex justify-content-center align-items-center"
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "rgba(9, 178, 171, 0.1)",
                  borderRadius: "50%",
                }}
              >
                <i
                  className="fa-solid fa-chart-line"
                  style={{ color: "#09B2AB", fontSize: "24px" }}
                ></i>
              </div>
              <p
                style={{
                  color: "#002C34",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  lineHeight: "1.6",
                }}
              >
                End-to-end RCM solutions
                <br />
                customized for your practice.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7">
            <div
              className="td-service-2-title-wrap mb-40 td-title-anim wow fadeInLeft"
              data-wow-duration="1s"
            >
              <span
                className="td-section-2-subtitle mb-25 d-inline-block px-3 py-1 rounded-pill"
                style={{
                  backgroundColor: "rgba(9, 178, 171, 0.1)",
                  color: "#09B2AB",
                  fontWeight: "bold",
                  fontSize: "13px",
                  letterSpacing: "1px",
                }}
              >
                CORE SERVICES
              </span>
              <h2
                className="td-section-2-title d-inline-block"
                style={{
                  color: "#003941",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 4vw, 4rem)",
                  lineHeight: "1.1",
                }}
              >
                Expert Dental Billing <br />
                <span style={{ color: "#09B2AB" }}>Solutions</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Original Layout / Masonry Grid Structure */}
        <div className="row">
          {service_data.map((items) => (
            <div key={items.id} className="col-lg-6">
              {items.service_details.map((item) => (
                <div
                  key={item.id}
                  className={`td-team-2-wrap animated-card ${item.class || ""} mb-5 mb-lg-0`}
                >
                  <div
                    className="row align-items-center p-3 p-md-0 rounded-4"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    {/* Left side: Image */}
                    <div className="col-lg-7 col-md-6 col-sm-6">
                      {/* Added overflow-hidden to keep the parallax image safely inside its box */}
                      <div
                        className="td-team-2-thumb fix td-rounded-10 mb-30 overflow-hidden shadow-sm"
                        onMouseMove={(e) =>
                          handleMouseMove(e, `${items.id}-${item.id}`)
                        }
                        onMouseLeave={() =>
                          handleMouseLeave(`${items.id}-${item.id}`)
                        }
                      >
                        <img
                          ref={(el) => {
                            imgRefs.current[`${items.id}-${item.id}`] = el;
                          }}
                          className="td-rounded-10 w-100"
                          src={item.thumb}
                          alt={item.subtitle}
                          // FIX: aspectRatio tightly controls the height, preventing layout breakage
                          style={{
                            aspectRatio: "4/5",
                            objectFit: "cover",
                            cursor: "crosshair",
                            transformOrigin: "center center",
                          }}
                        />
                      </div>
                    </div>

                    {/* Right side: Content */}
                    <div className="col-lg-5 col-md-6 col-sm-6">
                      <div className="td-team-2-content ml-md-20 mb-30">
                        <span
                          className="td-team-2-subtitle d-inline-block mb-2"
                          style={{
                            color: "#09B2AB",
                            fontWeight: 800,
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            fontSize: "12px",
                          }}
                        >
                          {item.subtitle}
                        </span>

                        <h3
                          className="td-team-2-title mb-20"
                          style={{
                            color: "#003941",
                            fontWeight: 900,
                            fontSize: "1.6rem",
                            lineHeight: "1.2",
                          }}
                        >
                          {item.title}
                        </h3>

                        <div className="td-team-2-feature-list mb-30">
                          <ul
                            style={{ listStyle: "none", padding: 0, margin: 0 }}
                          >
                            {item.list.map((list, i) => (
                              <li
                                key={i}
                                className="mb-2 d-flex align-items-start"
                                style={{
                                  color: "#002C34",
                                  fontSize: "0.95rem",
                                  fontWeight: 500,
                                  transition:
                                    "transform 0.3s ease, color 0.3s ease",
                                  cursor: "default",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform =
                                    "translateX(8px)";
                                  e.currentTarget.style.color = "#09B2AB";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform =
                                    "translateX(0px)";
                                  e.currentTarget.style.color = "#002C34";
                                }}
                              >
                                <i
                                  className="fa-solid fa-check mt-1 me-2"
                                  style={{ color: "#09B2AB", fontSize: "12px" }}
                                ></i>
                                {list}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Clean "Learn More" Link to replace the social icons */}
                        <div className="td-team-2-social">
                          <Link
                            to="/contact"
                            className="d-inline-flex align-items-center fw-bold text-uppercase"
                            style={{
                              color: "#003941",
                              textDecoration: "none",
                              fontSize: "0.85rem",
                              letterSpacing: "1px",
                              transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "#09B2AB")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "#003941")
                            }
                          >
                            Learn More{" "}
                            <i
                              className="fa-solid fa-arrow-right ms-2"
                              style={{ color: "#09B2AB" }}
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Exact CTA Button block from original code */}
              {items.btn && (
                <div className="td-team-2-btn animated-card">
                  <div className="td-btn-group mt-20 d-flex align-items-center gap-2">
                    <Link
                      className="d-flex align-items-center justify-content-center"
                      to="/contact"
                      style={{
                        border: "1px solid #09B2AB",
                        color: "#09B2AB",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#09B2AB";
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#09B2AB";
                      }}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <Link
                      className="td-btn-2 td-btn-primary rounded-pill px-4 py-3 fw-bold"
                      to="/contact"
                      style={{
                        backgroundColor: "#09B2AB",
                        border: "none",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#003941";
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#09B2AB";
                        e.currentTarget.style.color = "#fff";
                      }}
                    >
                      TALK TO AN EXPERT
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
