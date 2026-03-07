import { useState, useRef } from "react";
// import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import ReactPlayer from "react-player";
import { toast, ToastContainer } from "react-toastify";
import gsap from "gsap";

// Required CSS for interactivity
import "react-responsive-modal/styles.css";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Refs for GSAP Parallax Animation
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);
  const img4Ref = useRef<HTMLImageElement>(null);
  const hippaRef = useRef<HTMLDivElement>(null);

  const handleAuditClick = () => {
    toast.success("Priority access granted. Redirecting to calendar...", {
      position: "bottom-right",
      autoClose: 3000,
      theme: "light",
    });
  };

  // Interactive Mouse Parallax Effect (Only on desktop to save mobile battery)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 992) return;

    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 30;
    const y = (clientY / window.innerHeight - 0.5) * 30;

    if (img1Ref.current)
      gsap.to(img1Ref.current, {
        x: x * 1,
        y: y * 1,
        ease: "power2.out",
        duration: 1,
      });
    if (img2Ref.current)
      gsap.to(img2Ref.current, {
        x: x * -1.5,
        y: y * -1.5,
        ease: "power2.out",
        duration: 1,
      });
    if (img3Ref.current)
      gsap.to(img3Ref.current, {
        x: x * 2,
        y: y * 2,
        ease: "power2.out",
        duration: 1,
      });
    if (img4Ref.current)
      gsap.to(img4Ref.current, {
        x: x * -2.5,
        y: y * -2.5,
        ease: "power2.out",
        duration: 1,
      });
    if (hippaRef.current)
      gsap.to(hippaRef.current, {
        x: x * 1.2,
        y: y * -1.2,
        ease: "power2.out",
        duration: 1,
      });
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 992) return;
    gsap.to(
      [
        img1Ref.current,
        img2Ref.current,
        img3Ref.current,
        img4Ref.current,
        hippaRef.current,
      ],
      {
        x: 0,
        y: 0,
        ease: "power3.out",
        duration: 1.5,
      },
    );
  };

  return (
    <>
      <div
        className="td-hero-area td-btn-trigger p-relative fix z-index-1"
        style={{
          backgroundColor: "#FAFAFA",
          paddingTop: "150px",
          paddingBottom: "80px",
          overflowX: "hidden",
        }} // Prevent horizontal scroll
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT COLUMN: Typography & Interactivity 
                      FIX: Changed grid to col-xl-5 and added pe-lg-5 for spacing, plus zIndex: 2 to prevent overlap 
                  */}
            <div
              className="col-lg-6 col-xl-5 mb-5 mb-lg-0 pe-lg-5 p-relative"
              style={{ zIndex: 2 }}
            >
              <div className="td-hero-2-title-wrap mb-40 text-center text-lg-start">
                <span
                  className="d-inline-block mb-20 px-4 py-2 rounded-pill fw-bold td-btn-bounce"
                  style={{
                    backgroundColor: "rgba(9, 178, 171, 0.1)",
                    color: "#09B2AB",
                    letterSpacing: "1px",
                    fontSize: "14px",
                  }}
                >
                  DENTAL BILLING EXCELLENCE
                </span>

                <h2
                  className="td-hero-2-title mb-30"
                  style={{
                    color: "#003941",
                    fontWeight: 800,
                    fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                    lineHeight: "1.1",
                  }}
                >
                  <span className="d-flex align-items-center justify-content-center justify-content-lg-start td-split-text td-split-in-right">
                    DENTIST LED
                    <img
                      src="/assets/img/hero/fav.png"
                      alt="CureLedger Icon"
                      className="ml-15 d-none d-sm-inline-block"
                      style={{
                        width: "75px",
                        height: "75px",
                        objectFit: "contain",
                      }}
                    />
                  </span>
                  <span className="d-block td-split-text td-split-in-right">
                    REVENUE CYCLE
                  </span>
                  <span
                    className="d-block td-split-text td-split-in-right"
                    style={{ color: "#09B2AB" }}
                  >
                    MANAGEMENT
                  </span>
                </h2>

                <p
                  className="mb-40 wow fadeInUp mx-auto mx-lg-0"
                  data-wow-delay=".3s"
                  data-wow-duration="1s"
                  style={{
                    color: "#002C34",
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    maxWidth: "90%",
                  }}
                >
                  Reduce front desk stress and stop revenue leaks. We manage
                  your billing with clinical precision, ensuring clean claims
                  and rapid payments.
                </p>

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
                      maxWidth: "300px",
                    }}
                    className="text-center text-sm-start"
                  >
                    <span
                      className="td-btn-2 d-inline-block w-100 text-center"
                      style={{
                        backgroundColor: "#09B2AB",
                        color: "#fff",
                        padding: "16px 30px",
                        borderRadius: "50px",
                        fontWeight: "bold",
                        boxShadow: "0 10px 30px rgba(9, 178, 171, 0.3)",
                      }}
                    >
                      Free Revenue Audit
                    </span>
                  </div>

                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="d-flex align-items-center bg-transparent border-0 td-btn-bounce"
                    style={{ cursor: "pointer", gap: "15px" }}
                  >
                    <span
                      style={{
                        width: "50px",
                        height: "50px",
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
                      <i className="fa-solid fa-play ml-1"></i>
                    </span>
                    <span
                      className="fw-bold"
                      style={{
                        fontSize: "15px",
                        letterSpacing: "1px",
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

            {/* RIGHT COLUMN: The 4 Parallax Images & HIPAA Seal 
                      FIX: Added offset-xl-1 to force a large gap between left and right columns on desktops
                  */}
            <div
              className="col-lg-6 col-xl-6 offset-xl-1 mt-5 mt-lg-0 d-none d-lg-block p-relative"
              style={{ zIndex: 1 }}
            >
              <div
                className="td-hero-2-thumb p-relative w-100"
                style={{ minHeight: "550px" }}
              >
                {/* 2. BACKGROUND BLUR */}
                <img
                  ref={img2Ref}
                  src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg"
                  alt="Clinic Background"
                  className="position-absolute img-fluid"
                  style={{
                    width: "45%",
                    height: "auto",
                    objectFit: "cover",
                    aspectRatio: "1/1",
                    right: "25%",
                    top: "-5%",
                    zIndex: 1,
                    borderRadius: "16px",
                    filter: "blur(8px)",
                    opacity: 0.6,
                  }}
                />

                {/* 4. FOREGROUND BLUR */}
                <img
                  ref={img4Ref}
                  src="https://images.pexels.com/photos/8837787/pexels-photo-8837787.jpeg"
                  alt="Abstract Blur"
                  className="position-absolute img-fluid"
                  style={{
                    width: "35%",
                    height: "auto",
                    objectFit: "cover",
                    aspectRatio: "1/1",
                    left: "-5%",
                    bottom: "25%",
                    zIndex: 2,
                    borderRadius: "16px",
                    transform: "rotate(-10deg)",
                    filter: "blur(6px)",
                    opacity: 0.7,
                  }}
                />

                {/* 1. MAIN IMAGE */}
                <img
                  ref={img1Ref}
                  src="https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg"
                  alt="Dental Professional"
                  className="position-absolute wow fadeInRight img-fluid"
                  data-wow-delay=".2s"
                  style={{
                    width: "60%",
                    height: "auto",
                    objectFit: "cover",
                    aspectRatio: "4/5",
                    right: "0%",
                    top: "10%",
                    zIndex: 4,
                    borderRadius: "16px",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                  }}
                />

                {/* 3. FOREGROUND BILLING SHAPE */}
                <img
                  ref={img3Ref}
                  src="https://images.pexels.com/photos/9951387/pexels-photo-9951387.jpeg"
                  alt="Financial Data"
                  className="position-absolute wow fadeInUp img-fluid"
                  data-wow-delay=".5s"
                  style={{
                    width: "45%",
                    height: "auto",
                    objectFit: "cover",
                    aspectRatio: "3/4",
                    left: "10%",
                    bottom: "0%",
                    zIndex: 5,
                    borderRadius: "16px",
                    border: "6px solid #ffffff",
                    boxShadow: "0 20px 40px rgba(9, 178, 171, 0.2)",
                  }}
                />

                {/* HIPAA Verified Seal */}
                <div
                  ref={hippaRef}
                  className="position-absolute wow zoomIn"
                  data-wow-delay=".8s"
                  style={{
                    right: "15%",
                    bottom: "-5%",
                    zIndex: 10,
                    width: "35%",
                    maxWidth: "180px",
                  }}
                >
                  <img
                    src="/assets/img/hero/hipaa.png"
                    alt="HIPAA Compliant"
                    className="img-fluid"
                    style={{
                      filter: "drop-shadow(0px 15px 25px rgba(0,0,0,0.15))",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* MOBILE ONLY FALLBACK IMAGE */}
            <div className="col-12 mt-5 d-block d-lg-none text-center">
              <img
                src="https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg"
                alt="Dental Professional"
                className="img-fluid rounded-4 shadow"
                style={{ maxWidth: "100%", height: "auto" }}
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
