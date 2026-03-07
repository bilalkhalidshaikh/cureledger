import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceContact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const floatingShapeRef = useRef<HTMLDivElement>(null);

  // Scroll Reveal & Floating Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slide up the text
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      // Float up the form card with a slight delay
      gsap.fromTo(
        formCardRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      // Continuous abstract shape floating
      gsap.to(floatingShapeRef.current, {
        y: -30,
        rotation: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Interactive 3D Parallax for the Form Card
  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 992 || !formCardRef.current) return;
    const rect = formCardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

    gsap.to(formCardRef.current, {
      rotationY: x,
      rotationX: -y,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 992 || !formCardRef.current) return;
    gsap.to(formCardRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: "power3.out",
      duration: 1,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="pt-120 pb-120 position-relative overflow-hidden"
      style={{ backgroundColor: "#002C34" }} // Slightly darker teal for depth
    >
      {/* Background Parallax Elements */}
      <div
        ref={floatingShapeRef}
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(9, 178, 171, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(9, 178, 171, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(50px)",
        }}
      ></div>

      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container position-relative z-index-2">
        <div className="row align-items-center">
          {/* Left Column: Text & Image */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div ref={textRef} className="pe-lg-4">
              <span
                className="mb-3 d-inline-block px-4 py-2 rounded-pill shadow-sm"
                style={{
                  backgroundColor: "rgba(9, 178, 171, 0.1)",
                  color: "#09B2AB",
                  fontWeight: "bold",
                  fontSize: "13px",
                  letterSpacing: "1px",
                  border: "1px solid rgba(9,178,171,0.2)",
                }}
              >
                LET'S CONNECT
              </span>
              <h2
                className="mb-4"
                style={{
                  color: "#ffffff",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  lineHeight: "1.2",
                }}
              >
                Meet Our Dental{" "}
                <span style={{ color: "#09B2AB" }}>RCM Experts</span> Now
              </h2>
              <p
                className="mb-5"
                style={{
                  color: "#A3B1B2",
                  fontSize: "1.15rem",
                  lineHeight: "1.7",
                }}
              >
                Ready to stop revenue leaks and optimize your practice? Fill out
                the form to schedule a free, no-obligation consultation with our
                billing specialists.
              </p>

              {/* Decorative Image */}
              <div
                className="position-relative overflow-hidden rounded-4 shadow-lg"
                style={{ maxWidth: "400px", aspectRatio: "16/9" }}
              >
                <img
                  src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg"
                  alt="Dental Billing Expert"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(0deg, #002C34 0%, transparent 60%)",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="col-lg-7">
            <div
              ref={formCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="p-4 p-md-5 rounded-4"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                borderTop: "4px solid #09B2AB",
              }}
            >
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row g-4">
                  {/* Service Dropdown */}
                  <div className="col-md-6">
                    <label
                      className="form-label fw-bold"
                      style={{ color: "#003941", fontSize: "0.9rem" }}
                    >
                      Choose Service *
                    </label>
                    <select
                      className="form-select shadow-none p-3"
                      style={{
                        backgroundColor: "#F8FAFA",
                        border: "1px solid #E5EAEB",
                        color: "#002C34",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                      required
                    >
                      <option value="" disabled selected>
                        Select a service...
                      </option>
                      <option value="verification">
                        Verification of Benefits
                      </option>
                      <option value="billing">Dental Billing</option>
                      <option value="scheduling">
                        Comprehensive Scheduling
                      </option>
                      <option value="recalls">Fill the Chair / Recalls</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="ar">Insurance Billing & A/R</option>
                      <option value="accounting">
                        Accounting & Bookkeeping
                      </option>
                    </select>
                  </div>

                  {/* Practice Name */}
                  <div className="col-md-6">
                    <label
                      className="form-label fw-bold"
                      style={{ color: "#003941", fontSize: "0.9rem" }}
                    >
                      Dental Practice Name *
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-none p-3"
                      placeholder="e.g. Smile Dental"
                      style={{
                        backgroundColor: "#F8FAFA",
                        border: "1px solid #E5EAEB",
                        color: "#002C34",
                        borderRadius: "8px",
                      }}
                      required
                    />
                  </div>

                  {/* Full Name */}
                  <div className="col-md-6">
                    <label
                      className="form-label fw-bold"
                      style={{ color: "#003941", fontSize: "0.9rem" }}
                    >
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-none p-3"
                      placeholder="John Doe"
                      style={{
                        backgroundColor: "#F8FAFA",
                        border: "1px solid #E5EAEB",
                        color: "#002C34",
                        borderRadius: "8px",
                      }}
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="col-md-6">
                    <label
                      className="form-label fw-bold"
                      style={{ color: "#003941", fontSize: "0.9rem" }}
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="form-control shadow-none p-3"
                      placeholder="(555) 123-4567"
                      style={{
                        backgroundColor: "#F8FAFA",
                        border: "1px solid #E5EAEB",
                        color: "#002C34",
                        borderRadius: "8px",
                      }}
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div className="col-12">
                    <label
                      className="form-label fw-bold"
                      style={{ color: "#003941", fontSize: "0.9rem" }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-control shadow-none p-3"
                      placeholder="john@smiledental.com"
                      style={{
                        backgroundColor: "#F8FAFA",
                        border: "1px solid #E5EAEB",
                        color: "#002C34",
                        borderRadius: "8px",
                      }}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-4 pt-2 text-end">
                    <button
                      type="submit"
                      className="px-5 py-3 rounded-pill fw-bold border-0 shadow-sm d-inline-flex align-items-center gap-2"
                      style={{
                        backgroundColor: "#09B2AB",
                        color: "#ffffff",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#003941";
                        e.currentTarget.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#09B2AB";
                        e.currentTarget.style.transform = "translateY(0px)";
                      }}
                    >
                      SCHEDULE A CONSULT NOW{" "}
                      <i className="fa-solid fa-paper-plane ms-1"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContact;
