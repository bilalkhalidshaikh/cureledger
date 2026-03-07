import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const PricingArea = () => {
  const [activeTab, setActiveTab] = useState("value-bundle");
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgOrbRef = useRef<HTMLDivElement>(null);

  // Smooth transition animation when switching tabs
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30, scale: 0.99 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" },
      );
    }
  }, [activeTab]);

  // Background Orb Parallax (Slow float)
  useEffect(() => {
    if (bgOrbRef.current) {
      gsap.to(bgOrbRef.current, {
        y: -50,
        x: 30,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  // Interactive 3D Card Parallax Tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 992) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    gsap.to(card, {
      rotationY: x,
      rotationX: -y,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.4,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotationY: 0,
      rotationX: 0,
      ease: "power3.out",
      duration: 0.8,
    });
  };

  const tabs = [
    { id: "value-bundle", label: "VALUE BUNDLE" },
    { id: "billing-ar", label: "INSURANCE BILLING & AR" },
    { id: "eligibility", label: "ELIGIBILITY & VERIFICATION" },
    { id: "credentialing", label: "DENTAL CREDENTIALING" },
    { id: "accounting", label: "ACCOUNTING & BOOKKEEPING" },
  ];

  return (
    <div
      ref={containerRef}
      className="td-pricing-area pt-80 pb-130 position-relative overflow-hidden"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      {/* Decorative Parallax Orb */}
      <div
        ref={bgOrbRef}
        className="position-absolute"
        style={{
          top: "5%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(9, 178, 171, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      ></div>

      <div className="container position-relative z-index-1">
        {/* --- INTERACTIVE TAB NAVIGATION --- */}
        <div className="row justify-content-center mb-60">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-4 py-3 fw-bold shadow-sm border-0 rounded-3 transition-all"
                  style={{
                    fontSize: "14px", // Fixed: Much larger, readable font
                    letterSpacing: "1px",
                    backgroundColor:
                      activeTab === tab.id ? "#09B2AB" : "#ffffff", // Active is Sea Green, Inactive is White
                    color: activeTab === tab.id ? "#ffffff" : "#003941", // Text contrast
                    transform:
                      activeTab === tab.id
                        ? "translateY(-5px)"
                        : "translateY(0)",
                    boxShadow:
                      activeTab === tab.id
                        ? "0 15px 30px rgba(9, 178, 171, 0.2)"
                        : "0 5px 15px rgba(0,0,0,0.05)",
                    flex: "1 1 200px",
                    maxWidth: "260px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- DYNAMIC CONTENT AREA --- */}
        <div ref={contentRef}>
          {/* 1. VALUE BUNDLE SECTION */}
          {activeTab === "value-bundle" && (
            <div className="row g-4 justify-content-center">
              {[
                {
                  title: "Start-up Practices",
                  old: "1,700",
                  price: "1,350",
                  save: "350",
                  ver: "150",
                  coll: "< $30,000",
                },
                {
                  title: "Mid-Sized Practices",
                  old: "2,300",
                  price: "1,800",
                  save: "500",
                  ver: "250",
                  coll: "< $50,000",
                  featured: true,
                },
                {
                  title: "Regular Sized Practices",
                  old: "3,250",
                  price: "2,500",
                  save: "750",
                  ver: "400",
                  coll: "< $75,000",
                },
                {
                  title: "Larger Sized Practices",
                  old: "6,000",
                  price: "4,750",
                  save: "1,250",
                  ver: "750",
                  coll: "< $100,000",
                },
              ].map((item, i) => (
                <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                  <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 p-xl-5 rounded-4 h-100 shadow-sm bg-white position-relative"
                    style={{
                      border: item.featured
                        ? "2px solid #09B2AB"
                        : "1px solid rgba(0,57,65,0.08)",
                      transformStyle: "preserve-3d",
                      boxShadow: item.featured
                        ? "0 20px 40px rgba(9, 178, 171, 0.15)"
                        : "none",
                    }}
                  >
                    <span
                      className="badge mb-4"
                      style={{
                        backgroundColor: "rgba(9, 178, 171, 0.1)",
                        color: "#09B2AB",
                        padding: "8px 15px",
                        letterSpacing: "1px",
                      }}
                    >
                      Promotional Offer
                    </span>
                    <h4
                      className="fw-bold mb-4"
                      style={{
                        color: "#003941",
                        fontSize: "1.3rem",
                        lineHeight: "1.4",
                      }}
                    >
                      Value Bundle – Best for {item.title}
                    </h4>
                    <ul
                      className="list-unstyled mb-4"
                      style={{
                        color: "#002C34",
                        opacity: 0.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      <li className="mb-2">
                        • Up to {item.ver} Verifications/month
                      </li>
                      <li>• Insurance Collections {item.coll}</li>
                    </ul>
                    <span className="text-muted text-decoration-line-through d-block mb-1">
                      ${item.old}/month
                    </span>
                    <h2
                      className="fw-black mb-1"
                      style={{ color: "#003941", fontSize: "2.8rem" }}
                    >
                      ${item.price}
                      <span className="fs-6 fw-normal text-muted">/month</span>
                    </h2>
                    <p
                      className="mb-4 fw-bold"
                      style={{ color: "#09B2AB", fontSize: "0.9rem" }}
                    >
                      You save ${item.save}/mo (more than 20% discount)
                    </p>
                    <Link
                      to="/contact"
                      className="d-block w-100 rounded-pill py-3 fw-bold text-white text-center mb-4 transition-all"
                      style={{
                        backgroundColor: "#09B2AB",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#003941")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#09B2AB")
                      }
                    >
                      Choose Plan
                    </Link>
                    <ul
                      className="list-unstyled small"
                      style={{ color: "#002C34" }}
                    >
                      {[
                        "Verification of Benefits",
                        "Pre-Authorization & Determinations",
                        "Insurance Billing & Claims",
                        "Payment Posting (Checks/EFTs)",
                        "Denial Management & Appeals",
                        "Follow up on Pending AR",
                      ].map((li, j) => (
                        <li key={j} className="mb-3 d-flex align-items-start">
                          <i
                            className="fa-solid fa-check mt-1 me-3"
                            style={{ color: "#09B2AB" }}
                          ></i>{" "}
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2. INSURANCE BILLING & AR */}
          {activeTab === "billing-ar" && (
            <div className="rounded-4 shadow-lg bg-white overflow-hidden border-0">
              <div
                className="text-center p-5"
                style={{ backgroundColor: "#003941", color: "#fff" }}
              >
                <h2 className="fw-bold mb-3" style={{ color: "#09B2AB" }}>
                  Insurance Billing & AR
                </h2>
                <p
                  className="mx-auto fs-5 opacity-75"
                  style={{ maxWidth: "800px", lineHeight: "1.6" }}
                >
                  Get paid faster and accurately. Our strong Denial Management
                  follow-ups ensure proper collections and on-time payments for
                  you.
                </p>
              </div>
              <div className="p-4 p-lg-5">
                <h4
                  className="text-center fw-bold mb-5"
                  style={{ color: "#003941" }}
                >
                  Practice Monthly Collections
                </h4>
                <div className="row text-center g-4 pb-5 border-bottom">
                  {[
                    {
                      l: "Small",
                      p: "$1,199",
                      d: "Less than $40,000 per month",
                    },
                    { l: "Medium", p: "3%", d: "Between $40,000 – $100,000" },
                    { l: "Large", p: "2.5%", d: "Between $100,000 – $150,000" },
                    {
                      l: "Enterprise",
                      p: "2%",
                      d: "Between $150,000 – $200,000",
                    },
                  ].map((v, idx) => (
                    <div key={idx} className="col-md-3 border-end px-4">
                      <h5
                        className="fw-bold text-uppercase mb-3"
                        style={{
                          color: "#002C34",
                          opacity: 0.6,
                          letterSpacing: "1px",
                        }}
                      >
                        {v.l}
                      </h5>
                      <h2
                        style={{
                          color: "#09B2AB",
                          fontSize: "3rem",
                          fontWeight: 900,
                        }}
                        className="mb-2"
                      >
                        {v.p}
                        <span className="fs-6 fw-normal text-muted">/mo</span>
                      </h2>
                      <p className="text-muted mb-4">{v.d}</p>
                      <Link
                        to="/contact"
                        className="d-inline-block rounded-pill py-2 px-4 fw-bold"
                        style={{
                          border: "2px solid #09B2AB",
                          color: "#09B2AB",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#09B2AB";
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "#09B2AB";
                        }}
                      >
                        Get Started
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="mt-5 text-center px-lg-5">
                  <h4 className="fw-bold mb-4" style={{ color: "#003941" }}>
                    Included Features
                  </h4>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {[
                      "EOBs Posted Daily",
                      "Denial Management",
                      "Verify Unbilled Procedures",
                      "Claims Submitted Daily",
                      "Electronic Attachments",
                      "Missing Information Research",
                      "Aging Report Focus",
                      "Detailed AR Work Log",
                      "Productivity Reports",
                    ].map((f, i) => (
                      <span
                        key={i}
                        className="px-4 py-3 rounded-pill fw-bold shadow-sm"
                        style={{
                          backgroundColor: "#F8FAFA",
                          color: "#003941",
                          border: "1px solid rgba(0,57,65,0.05)",
                          fontSize: "0.95rem",
                        }}
                      >
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#09B2AB" }}
                        ></i>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. ELIGIBILITY & VERIFICATION */}
          {activeTab === "eligibility" && (
            <div className="rounded-4 shadow-lg bg-white overflow-hidden border-0">
              <div
                className="text-center p-5"
                style={{ backgroundColor: "#003941", color: "#fff" }}
              >
                <h2 className="fw-bold mb-3" style={{ color: "#09B2AB" }}>
                  Eligibility & Verification of Benefits
                </h2>
                <p
                  className="mx-auto fs-5 opacity-75"
                  style={{ maxWidth: "800px", lineHeight: "1.6" }}
                >
                  Prior verification allows you to be proactive, save time, and
                  have confidence while delivering patient treatment plans.
                </p>
              </div>
              <div className="p-4 p-lg-5 text-center">
                <div className="row g-4 justify-content-center mb-5 border-bottom pb-5">
                  {[
                    {
                      l: "Startup",
                      p: "350",
                      d: "Up to 100 Verifications / mo",
                    },
                    { l: "Small", p: "500", d: "Up to 150 Verifications / mo" },
                    {
                      l: "Medium",
                      p: "650",
                      d: "Up to 200 Verifications / mo",
                    },
                    { l: "Large", p: "800", d: "Up to 300 Verifications / mo" },
                    {
                      l: "Enterprise",
                      p: "1000",
                      d: "Up to 500 Verifications / mo",
                    },
                  ].map((v, idx) => (
                    <div key={idx} className="col border-end px-3">
                      <h5
                        className="fw-bold mb-3 text-uppercase"
                        style={{
                          color: "#002C34",
                          opacity: 0.6,
                          letterSpacing: "1px",
                        }}
                      >
                        {v.l}
                      </h5>
                      <h2
                        style={{ color: "#09B2AB", fontWeight: 900 }}
                        className="mb-2"
                      >
                        ${v.p}
                        <span className="fs-6 fw-normal text-muted">/mo</span>
                      </h2>
                      <p
                        className="text-muted mb-4 small"
                        style={{ minHeight: "40px" }}
                      >
                        {v.d}
                      </p>
                      <Link
                        to="/contact"
                        className="d-inline-block rounded-pill py-2 px-4 fw-bold"
                        style={{
                          border: "2px solid #09B2AB",
                          color: "#09B2AB",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#09B2AB";
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "#09B2AB";
                        }}
                      >
                        Select
                      </Link>
                    </div>
                  ))}
                  <div className="col px-3">
                    <h5
                      className="fw-bold mb-3 text-uppercase"
                      style={{
                        color: "#002C34",
                        opacity: 0.6,
                        letterSpacing: "1px",
                      }}
                    >
                      Custom
                    </h5>
                    <h2
                      style={{ color: "#09B2AB", fontWeight: 900 }}
                      className="mb-2"
                    >
                      Talk to Us
                    </h2>
                    <p
                      className="text-muted mb-4 small"
                      style={{ minHeight: "40px" }}
                    >
                      More than 500 Verifications / mo
                    </p>
                    <Link
                      to="/contact"
                      className="d-inline-block rounded-pill py-2 px-4 fw-bold text-white shadow-sm"
                      style={{
                        backgroundColor: "#09B2AB",
                        border: "2px solid #09B2AB",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#003941";
                        e.currentTarget.style.borderColor = "#003941";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#09B2AB";
                        e.currentTarget.style.borderColor = "#09B2AB";
                      }}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
                <br />
                <br />
                <div
                  className="p-5 rounded-4 text-start shadow-sm"
                  style={{
                    backgroundColor: "#F8FAFA",
                    border: "1px solid rgba(0,57,65,0.05)",
                  }}
                >
                  <h4 className="fw-bold mb-4" style={{ color: "#003941" }}>
                    Service Benefits:
                  </h4>
                  <ul className="row list-unstyled g-4">
                    <li className="col-md-6 fs-6 d-flex align-items-start">
                      <i
                        className="fa-solid fa-check mt-1 me-3"
                        style={{ color: "#09B2AB" }}
                      ></i>{" "}
                      <span style={{ color: "#002C34" }}>
                        Up to date insurance benefits for your patients
                      </span>
                    </li>
                    <li className="col-md-6 fs-6 d-flex align-items-start">
                      <i
                        className="fa-solid fa-check mt-1 me-3"
                        style={{ color: "#09B2AB" }}
                      ></i>{" "}
                      <span style={{ color: "#002C34" }}>
                        Accurately estimate insurance and patient payment
                        portions
                      </span>
                    </li>
                    <li className="col-md-6 fs-6 d-flex align-items-start">
                      <i
                        className="fa-solid fa-check mt-1 me-3"
                        style={{ color: "#09B2AB" }}
                      ></i>{" "}
                      <span style={{ color: "#002C34" }}>
                        Peace of mind at the treatment planning stage
                      </span>
                    </li>
                    <li className="col-md-6 fs-6 d-flex align-items-start">
                      <i
                        className="fa-solid fa-check mt-1 me-3"
                        style={{ color: "#09B2AB" }}
                      ></i>{" "}
                      <span style={{ color: "#002C34" }}>
                        Standard verification: plan frequencies, history, and
                        maximums
                      </span>
                    </li>
                    <li className="col-md-12 fs-6 d-flex align-items-start">
                      <i
                        className="fa-solid fa-check mt-1 me-3"
                        style={{ color: "#09B2AB" }}
                      ></i>{" "}
                      <span style={{ color: "#002C34" }}>
                        Extensive forms gather plan specific coverage details,
                        including code specific coverage
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 4. DENTAL CREDENTIALING */}
          {activeTab === "credentialing" && (
            <div className="rounded-4 shadow-lg bg-white overflow-hidden border-0">
              <div
                className="text-center p-5"
                style={{ backgroundColor: "#003941", color: "#fff" }}
              >
                <h2 className="fw-bold mb-0" style={{ color: "#09B2AB" }}>
                  Dental Credentialing Pricing
                </h2>
              </div>
              <div className="p-4 p-lg-5">
                <div className="row justify-content-center g-5">
                  <div className="col-lg-5">
                    <div
                      className="p-5 border rounded-4 shadow-sm h-100 text-center"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{ transition: "box-shadow 0.3s" }}
                    >
                      <h1
                        style={{
                          color: "#09B2AB",
                          fontSize: "4.5rem",
                          fontWeight: 900,
                        }}
                      >
                        $199
                      </h1>
                      <p className="fs-5 text-muted mb-4">/ Provider</p>
                      <h4 className="fw-bold mt-4" style={{ color: "#003941" }}>
                        Per PPO Commercial
                      </h4>
                      <Link
                        to="/contact"
                        className="d-block w-100 rounded-pill py-3 mt-5 text-white fw-bold shadow-sm transition-all"
                        style={{
                          backgroundColor: "#09B2AB",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "#003941")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = "#09B2AB")
                        }
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div
                      className="p-5 border rounded-4 shadow-sm h-100 text-center"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{ transition: "box-shadow 0.3s" }}
                    >
                      <h1
                        style={{
                          color: "#09B2AB",
                          fontSize: "4.5rem",
                          fontWeight: 900,
                        }}
                      >
                        $299
                      </h1>
                      <p className="fs-5 text-muted mb-4">/ Provider</p>
                      <h4 className="fw-bold mt-4" style={{ color: "#003941" }}>
                        Per Insurance Provider
                      </h4>
                      <Link
                        to="/contact"
                        className="d-block w-100 rounded-pill py-3 mt-5 text-white fw-bold shadow-sm transition-all"
                        style={{
                          backgroundColor: "#09B2AB",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "#003941")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = "#09B2AB")
                        }
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. ACCOUNTING & BOOKKEEPING */}
          {activeTab === "accounting" && (
            <div className="rounded-4 shadow-lg bg-white overflow-hidden border-0">
              <div
                className="text-center p-5"
                style={{ backgroundColor: "#003941", color: "#fff" }}
              >
                <h2 className="fw-bold mb-3" style={{ color: "#09B2AB" }}>
                  Bookkeeping & Reconciliation Plans
                </h2>
                <p className="fs-5 opacity-75 mb-0">
                  Choose office size:{" "}
                  <span className="fw-bold text-white">
                    Corp Office (150K–200K/month)
                  </span>
                </p>
              </div>
              <div className="p-4 p-lg-5">
                <div className="row g-4">
                  {[
                    {
                      l: "Essential",
                      p: "329",
                      f: [
                        "EFT Reconciliation with Bank",
                        "EFT Reconciliation with PMS",
                        "Reporting",
                      ],
                    },
                    {
                      l: "Advanced",
                      p: "579",
                      f: [
                        "EFT Reconciliation with Bank",
                        "EFT Reconciliation with PMS",
                        "Deposit Reconciliation with Bank",
                        "Deposit Reconciliation with PMS",
                        "Reporting",
                      ],
                      r: true,
                    },
                    {
                      l: "Pro",
                      p: "1,149",
                      f: [
                        "Bank Reconciliation",
                        "Bookkeeping: Recording and classifying income & expense",
                        "AP - Payments",
                        "Preparing monthly financial reports: P&L, Balance Sheet, Cash Flow",
                      ],
                    },
                  ].map((b, idx) => (
                    <div key={idx} className="col-lg-4">
                      <div
                        className="p-5 border rounded-4 h-100 position-relative shadow-sm bg-white"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          borderColor: b.r ? "#09B2AB" : "rgba(0,57,65,0.1)",
                        }}
                      >
                        {b.r && (
                          <span
                            className="position-absolute top-0 start-50 translate-middle badge rounded-pill px-4 py-2 shadow-sm"
                            style={{
                              backgroundColor: "#09B2AB",
                              letterSpacing: "1px",
                            }}
                          >
                            RECOMMENDED
                          </span>
                        )}
                        <h5
                          className="fw-bold text-muted text-center uppercase mb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          {b.l}
                        </h5>
                        <h1
                          className="mb-2 text-center"
                          style={{
                            color: "#003941",
                            fontSize: "3.5rem",
                            fontWeight: 900,
                          }}
                        >
                          ${b.p}
                        </h1>
                        <p className="text-muted text-center mb-4">/ month</p>
                        <Link
                          to="/contact"
                          className="d-block w-100 rounded-pill py-3 text-center fw-bold text-white shadow-sm mb-5 transition-all"
                          style={{
                            backgroundColor: b.r ? "#09B2AB" : "#003941",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = b.r
                              ? "#003941"
                              : "#09B2AB";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = b.r
                              ? "#09B2AB"
                              : "#003941";
                          }}
                        >
                          Choose Plan
                        </Link>
                        <div className="border-top pt-4">
                          <h6
                            className="fw-bold mb-4"
                            style={{ color: "#003941" }}
                          >
                            Plan Features:
                          </h6>
                          {b.f.map((feat, i) => (
                            <p
                              key={i}
                              className="mb-3 d-flex align-items-start"
                              style={{ color: "#002C34", fontSize: "0.95rem" }}
                            >
                              <i
                                className="fa-solid fa-check me-3 mt-1"
                                style={{ color: "#09B2AB" }}
                              ></i>
                              {feat}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-5 p-4 rounded-4 text-center shadow-sm"
                  style={{
                    backgroundColor: "#F8FAFA",
                    border: "2px dashed rgba(9, 178, 171, 0.5)",
                  }}
                >
                  <p
                    className="mb-0 fw-bold"
                    style={{ color: "#003941", fontSize: "1.2rem" }}
                  >
                    <span
                      style={{
                        color: "#09B2AB",
                        fontSize: "1.5rem",
                        marginRight: "10px",
                      }}
                    >
                      $250
                    </span>{" "}
                    One-Time Fee: QuickBooks Review/Analysis Accounting Mapping
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* --- FOOTER CTA --- */}
        <div
          className="text-center mt-80 p-5 rounded-4 shadow-sm"
          style={{
            backgroundColor: "#003941",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <h3 className="mb-4 fw-black text-white">
            For Higher Volume Contact Us For Custom Pricing
          </h3>
          <Link
            to="/contact"
            className="px-5 py-3 rounded-pill fw-bold text-white shadow-lg d-inline-block transition-all"
            style={{ backgroundColor: "#09B2AB", textDecoration: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#003941";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#09B2AB";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            Contact Us Today <i className="fa-solid fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingArea;
