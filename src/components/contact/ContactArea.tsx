import { useEffect, useRef,useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ContactForm from "../forms/ContactForm";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ContactArea = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
// Add this line right at the top of your component
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@cureledger.org", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Contact Message from CureLedger Website!",
          ...data,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-anim-left",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".contact-anim-right",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="pt-120 pb-120 overflow-hidden"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="container">
        <div className="row g-5">
          {/* Left Side: Contact Information */}
          <div className="col-lg-5 contact-anim-left">
            <div className="pe-lg-4">
              <h2
                className="mb-4"
                style={{
                  color: "#003941",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  lineHeight: "1.1",
                }}
              >
                Let’s connect for <br />
                <span style={{ color: "#09B2AB" }}>better results.</span>
              </h2>
              <p
                className="mb-5"
                style={{
                  color: "#002C34",
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  opacity: 0.8,
                }}
              >
                We protect what you've earned so your practice can grow with
                confidence. Reach out to us today.
              </p>

              {/* Contact Details */}
              <div className="row g-4 mt-2">
                <div className="col-sm-6">
                  <h5 className="fw-bold mb-3" style={{ color: "#003941" }}>
                    Laredo Office
                  </h5>
                  <p className="mb-1 fw-bold" style={{ color: "#09B2AB" }}>
                    Texas —
                  </p>
                  <p
                    style={{
                      color: "#002C34",
                      opacity: 0.8,
                      lineHeight: "1.6",
                    }}
                  >
                    2106 Mallorca Dr.
                    <br />
                    Laredo, TX 78046
                  </p>
                </div>
                <div className="col-sm-6">
                  <h5 className="fw-bold mb-3" style={{ color: "#003941" }}>
                    Contact Us
                  </h5>
                  <Link
                    to="mailto:contact@cureledger.org"
                    className="d-block mb-2 fw-bold"
                    style={{ color: "#09B2AB", textDecoration: "none" }}
                  >
                    contact@cureledger.org
                  </Link>
                  <Link
                    to="tel:+16076951944"
                    className="d-block mb-4 fw-bold fs-5"
                    style={{ color: "#003941", textDecoration: "none" }}
                  >
                    +1 (607) 695-1944
                  </Link>
                  <p
                    className="mb-1 small fw-bold"
                    style={{ color: "#003941" }}
                  >
                    Available Mon — Fri
                  </p>
                  <p
                    className="small"
                    style={{ color: "#002C34", opacity: 0.8 }}
                  >
                    9:00 AM — 5:00 PM CST
                  </p>
                </div>
              </div>

              {/* Social Links */}
              {/* <div className="d-flex gap-3 mt-4 pt-3 border-top">
                {["facebook-f",
                 "x-twitter",
                  "linkedin-in", "instagram"].map(
                  (icon, i) => (
                    <Link
                      key={i}
                      to="#"
                      className="d-flex align-items-center justify-content-center rounded-circle transition-all"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "rgba(9,178,171,0.1)",
                        color: "#09B2AB",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#09B2AB";
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(9,178,171,0.1)";
                        e.currentTarget.style.color = "#09B2AB";
                      }}
                    >
                      <i className={`fa-brands fa-${icon}`}></i>
                    </Link>
                  ),
                )}
              </div> */}
              {/* Social Links */}
        <div className="d-flex gap-3 mt-4 pt-3 border-top">
          {[
            { icon: "facebook-f", url: "https://www.facebook.com/share/1CqX2CGBnH/?mibextid=wwXIfr" },
            { icon: "linkedin-in", url: "https://www.linkedin.com/company/cureledger-dental-revenue-solutions/" },
            { icon: "instagram", url: "https://www.instagram.com/cureledger.inc?igsh=MXRueTk3bTJ5ZThidQ%3D%3D&utm_source=qr" }
          ].map((social, i) => (
            <Link
              key={i}
              to={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center justify-content-center rounded-circle transition-all"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "rgba(9,178,171,0.1)",
                color: "#09B2AB",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#09B2AB";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(9,178,171,0.1)";
                e.currentTarget.style.color = "#09B2AB";
              }}
            >
              <i className={`fa-brands fa-${social.icon}`}></i>
            </Link>
          ))}
        </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="col-lg-7 contact-anim-right">
            <div
              className="p-4 p-md-5 rounded-4 shadow-lg bg-white"
              style={{ borderTop: "4px solid #09B2AB" }}
            >
              {/* <h4 className="fw-bold mb-4" style={{ color: "#003941" }}>
                Send us a message
              </h4> */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
