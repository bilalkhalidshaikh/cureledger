import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ContactBranch = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 85%" },
      },
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 992 || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    gsap.to(cardRef.current, {
      rotationY: x,
      rotationX: -y,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.4,
    });
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 992 || !cardRef.current) return;
    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: "power3.out",
      duration: 0.8,
    });
  };

  return (
    <div className="pb-120" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="container">
        <div className="row justify-content-center mb-50">
          <div
            className="col-12 text-center wow fadeInUp"
            data-wow-duration="1s"
          >
            <span
              className="mb-3 d-inline-block px-4 py-2 rounded-pill shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                color: "#09B2AB",
                fontWeight: "bold",
                fontSize: "13px",
                letterSpacing: "1px",
                border: "1px solid rgba(9,178,171,0.2)",
              }}
            >
              OUR HEADQUARTERS
            </span>
            <h2
              className="td-section-page-title"
              style={{ color: "#003941", fontWeight: 900 }}
            >
              Global Reach,{" "}
              <span style={{ color: "#09B2AB" }}>Local Service.</span>
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="p-4 p-md-5 rounded-4 shadow-sm bg-white position-relative overflow-hidden"
              style={{
                border: "1px solid rgba(0,57,65,0.05)",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(9, 178, 171, 0.1)")
              }
            >
              <div className="row align-items-center g-4">
                <div className="col-md-5">
                  <div
                    className="rounded-4 overflow-hidden shadow-sm"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <img
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                      src="https://images.pexels.com/photos/10186834/pexels-photo-10186834.jpeg"
                      alt="Laredo Texas Office"
                    />
                  </div>
                </div>

                <div className="col-md-7 ps-md-4">
                  <div className="d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-location-dot fs-3 me-3"
                      style={{ color: "#09B2AB" }}
                    ></i>
                    <h3 className="m-0 fw-bold" style={{ color: "#003941" }}>
                      Laredo, Texas
                    </h3>
                  </div>
                  <p
                    className="fs-5 mb-4"
                    style={{ color: "#002C34", opacity: 0.8 }}
                  >
                    2106 Mallorca Dr.
                    <br />
                    Laredo, TX 78046
                  </p>

                  <div className="d-flex flex-wrap gap-4 mt-4 pt-4 border-top">
                    <div>
                      <p
                        className="small text-uppercase fw-bold mb-1"
                        style={{ color: "#09B2AB", letterSpacing: "1px" }}
                      >
                        Give us a call
                      </p>
                      <Link
                        to="tel:+16076951944"
                        className="fs-5 fw-bold"
                        style={{ color: "#003941", textDecoration: "none" }}
                      >
                        +1 (607) 695-1944
                      </Link>
                    </div>
                    <div>
                      <p
                        className="small text-uppercase fw-bold mb-1"
                        style={{ color: "#09B2AB", letterSpacing: "1px" }}
                      >
                        Send an email
                      </p>
                      <Link
                        to="mailto:contact@cureledger.org"
                        className="fs-5 fw-bold"
                        style={{ color: "#003941", textDecoration: "none" }}
                      >
                        contact@cureledger.org
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBranch;
