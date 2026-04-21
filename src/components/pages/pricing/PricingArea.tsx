import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const PricingArea = () => {
  const [activeTab, setActiveTab] = useState("value-bundle");
  const [isPayAsYouGo, setIsPayAsYouGo] = useState(false); // For Eligibility Toggle

  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgOrbRef = useRef<HTMLDivElement>(null);
  const tabContainerRef = useRef<HTMLDivElement>(null);

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

  // Interactive 3D Card Parallax Tilt for Pricing Cards
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
    { id: "value-bundle", label: "Value Bundles" },
    { id: "billing-ar", label: "Insurance Billing & AR" },
    { id: "eligibility", label: "Eligibility & Verification" },
    { id: "ar-recovery", label: "AR Audit & Recovery" },
    { id: "credentialing", label: "Dental Credentialing" },
    { id: "accounting", label: "Accounting" },
  ];

  const valueBundleFeatures = [
    "Insurance Verifications",
    "Comprehensive Benefit Breakdowns",
    "Pre-Authorization & Determinations",
    "Doctor-Led Claim Submission",
    "Daily Payment & EOB Posting",
    "Denial Management & Clinical Appeals",
    "Aged A/R Follow-up & Resolution",
    "Secure Workspace Compliance Setup",
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
        {/* --- INTERACTIVE PILL TAB NAVIGATION --- */}
        {/* <div className="row justify-content-center mb-70">
          <div className="col-12 col-xl-10 text-center">
            <div
              className="d-inline-flex flex-wrap justify-content-center p-2 rounded-pill shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0, 44, 52, 0.08)",
                gap: "5px",
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-4 py-2 fw-bold border-0 position-relative transition-all"
                  style={{
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    borderRadius: "50px", // Perfect pill shape for tabs
                    backgroundColor: activeTab === tab.id ? "#003941" : "transparent",
                    color: activeTab === tab.id ? "#ffffff" : "#003941",
                    boxShadow: activeTab === tab.id ? "0 5px 15px rgba(0, 57, 65, 0.2)" : "none",
                    cursor: "pointer",
                    transform: activeTab === tab.id ? "scale(1)" : "scale(0.98)",
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.backgroundColor = "rgba(9, 178, 171, 0.08)";
                      e.currentTarget.style.color = "#09B2AB";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#003941";
                    }
                  }}
                  onMouseDown={(e) => {
                     e.currentTarget.style.transform = "scale(0.95)";
                  }}
                  onMouseUp={(e) => {
                     e.currentTarget.style.transform = activeTab === tab.id ? "scale(1)" : "scale(0.98)";
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div> */}
        {/* --- INTERACTIVE PILL TAB NAVIGATION --- */}
        <div className="row justify-content-center mb-70">
          <div className="col-12 col-xl-10 text-center">
            <div
              className="d-inline-flex flex-wrap justify-content-center p-2 rounded-pill shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0, 44, 52, 0.08)",
                gap: "8px", // Slightly increased gap to show off the borders
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  // REMOVED "border-0" from className so our custom border shows
                  className="px-4 py-2 fw-bold position-relative transition-all"
                  style={{
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    borderRadius: "50px",

                    // ADDED: Distinct backgrounds, colors, and borders for Active vs Inactive
                    backgroundColor:
                      activeTab === tab.id ? "#003941" : "#F8FAFA",
                    color: activeTab === tab.id ? "#ffffff" : "#003941",
                    border:
                      activeTab === tab.id
                        ? "1px solid #003941"
                        : "1px solid rgba(0, 57, 65, 0.15)",
                    boxShadow:
                      activeTab === tab.id
                        ? "0 5px 15px rgba(0, 57, 65, 0.2)"
                        : "0 2px 4px rgba(0,0,0,0.02)",

                    cursor: "pointer",
                    transform:
                      activeTab === tab.id ? "scale(1)" : "scale(0.98)",
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.backgroundColor =
                        "rgba(9, 178, 171, 0.08)";
                      e.currentTarget.style.color = "#09B2AB";
                      e.currentTarget.style.borderColor =
                        "rgba(9, 178, 171, 0.3)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.backgroundColor = "#F8FAFA";
                      e.currentTarget.style.color = "#003941";
                      e.currentTarget.style.borderColor =
                        "rgba(0, 57, 65, 0.15)";
                    }
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = "scale(0.95)";
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform =
                      activeTab === tab.id ? "scale(1)" : "scale(0.98)";
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
          {/* ======================================= */}
          {/* 1. VALUE BUNDLES SECTION                */}
          {/* ======================================= */}
          {activeTab === "value-bundle" && (
            <>
              <div className="row g-4 justify-content-center">
                {[
                  {
                    title: "The Core Plan",
                    old: "1,500",
                    price: "1,250",
                    save: "250",
                    coll: "0 - 35k",
                  },
                  {
                    title: "The Expansion Plan",
                    old: "2,000",
                    price: "1,600",
                    save: "400",
                    coll: "35k - 70k",
                    featured: true,
                  },
                  {
                    title: "The High Volume Plan",
                    old: "3,000",
                    price: "2,400",
                    save: "600",
                    coll: "70k - 100k",
                  },
                  {
                    title: "The Enterprise Plan",
                    old: "5,800",
                    price: "4,650",
                    save: "1,150",
                    coll: "100k - 130k",
                  },
                ].map((item, i) => (
                  <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                    <div
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      className="p-4 p-xl-4 rounded-4 h-100 shadow-sm bg-white position-relative d-flex flex-column"
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
                      {item.featured && (
                        <div
                          className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger shadow-sm px-3 py-2"
                          style={{ letterSpacing: "1px" }}
                        >
                          BEST VALUE
                        </div>
                      )}
                      <span
                        className="badge mb-3 d-inline-block align-self-start"
                        style={{
                          backgroundColor: "rgba(9, 178, 171, 0.1)",
                          color: "#09B2AB",
                          padding: "6px 12px",
                          letterSpacing: "1px",
                        }}
                      >
                        Promotional Offer
                      </span>
                      <h4
                        className="fw-bold mb-3"
                        style={{
                          color: "#003941",
                          fontSize: "1.2rem",
                          lineHeight: "1.3",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="mb-3 fw-bold"
                        style={{
                          color: "#002C34",
                          opacity: 0.8,
                          fontSize: "0.95rem",
                        }}
                      >
                        Collections: ${item.coll}
                      </p>

                      <span className="text-muted text-decoration-line-through d-block mb-1">
                        ${item.old}/month
                      </span>
                      <h2
                        className="fw-black mb-1"
                        style={{ color: "#003941", fontSize: "2.5rem" }}
                      >
                        ${item.price}{" "}
                        <span className="fs-6 fw-normal text-muted">/mo</span>
                      </h2>
                      <p
                        className="mb-4 fw-bold"
                        style={{ color: "#09B2AB", fontSize: "0.85rem" }}
                      >
                        You save ${item.save}/mo (20% off)
                      </p>

                      <Link
                        to="/contact"
                        className="d-block w-100 rounded-pill py-2 fw-bold text-white text-center mb-4 transition-all"
                        style={{
                          backgroundColor: item.featured
                            ? "#003941"
                            : "#09B2AB",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = item.featured
                            ? "#09B2AB"
                            : "#003941")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = item.featured
                            ? "#003941"
                            : "#09B2AB")
                        }
                      >
                        Choose Plan
                      </Link>

                      <ul
                        className="list-unstyled small mt-auto"
                        style={{ color: "#002C34" }}
                      >
                        {valueBundleFeatures.map((li, j) => (
                          <li
                            key={j}
                            className="mb-2 d-flex align-items-start"
                            style={{ fontSize: "0.85rem" }}
                          >
                            <i
                              className="fa-solid fa-check mt-1 me-2"
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

              {/* Growth-Friendly Scaling Info Box */}
              <br />
              <div className="row justify-content-center mt-5">
                <div className="col-lg-10">
                  <div
                    className="p-4 rounded-4 shadow-sm d-flex align-items-center gap-3"
                    style={{
                      backgroundColor: "#EAF6F6",
                      border: "1px solid rgba(9, 178, 171, 0.3)",
                    }}
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#09B2AB",
                        color: "#fff",
                      }}
                    >
                      <i className="fa-solid fa-info fs-5"></i>
                    </div>
                    <p
                      className="mb-0"
                      style={{
                        color: "#002C34",
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                      }}
                    >
                      <strong style={{ color: "#003941" }}>
                        Growth-Friendly Scaling:
                      </strong>{" "}
                      We provide a 20% grace margin on verifications and a 10%
                      margin on collections. 'Permanent Outgrowth' occurs only
                      if you exceed these expanded limits for two consecutive
                      months. If this happens, we’ll transition you to the next
                      tier to ensure your clinical team has the dedicated
                      resources to support your success.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ======================================= */}
          {/* 2. INSURANCE BILLING & AR SECTION       */}
          {/* ======================================= */}
          {activeTab === "billing-ar" && (
            <div className="rounded-4 shadow-lg bg-white overflow-hidden border-0">
              <div
                className="text-center p-5"
                style={{ backgroundColor: "#003941", color: "#fff" }}
              >
                <h2
                  className="fw-bold mb-3"
                  style={{ color: "#09B2AB", textTransform: "uppercase" }}
                >
                  Insurance Billing & AR
                </h2>
                <h4 className="fw-bold text-white mb-3">
                  Maximized Collections through Clinical Precision
                </h4>
                <p
                  className="mx-auto fs-5 opacity-75"
                  style={{ maxWidth: "800px", lineHeight: "1.6" }}
                >
                  {/* Our doctor-led denial management and aggressive A/R recovery ensure your practice captures every dollar earned. */}
                  Our team makes it hassle-free for you by managing and tracking
                  outstanding claims and payments. Get paid faster and
                  accurately. Our strong Denial Management follow ups ensure
                  proper collections and on time payments for you.
                </p>
              </div>

              <div className="p-4 p-lg-5">
                <div className="row text-center g-4 pb-5 border-bottom justify-content-center">
                  {[
                    {
                      l: "The Foundation Plan",
                      p: "$1,250 (upto 50k)",
                      d: "Fixed Monthly",
                    },
                    { l: "The Growth Plan", p: "3% (50k - 125k)", d: "Collections" },
                    { l: "The Accelerate Plan", p: "2.5% (125k - 200k)", d: "Collections" },
                    { l: "The Enterprise Plan", p: "2% (over 200k)", d: "Collections" },
                  ].map((v, idx) => (
                    <div key={idx} className="col-md-3 border-end px-4">
                      <h5
                        className="fw-bold text-uppercase mb-3"
                        style={{
                          color: "#002C34",
                          opacity: 0.6,
                          letterSpacing: "1px",
                          fontSize: "0.9rem",
                        }}
                      >
                        {v.l}
                      </h5>
                      <h2
                        style={{
                          color: "#09B2AB",
                          fontSize: "2.5rem",
                          fontWeight: 900,
                        }}
                        className="mb-2"
                      >
                        {v.p}
                      </h2>
                      <p className="text-muted mb-4 fw-bold">{v.d}</p>
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

                {/* Feature Pills */}
                <div className="mt-5 text-center px-lg-5">
                  <br />
                  <h4 className="fw-bold mb-4" style={{ color: "#003941" }}>
                    Included Features
                  </h4>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {[
                      "Daily EOB & EFT Reconciliation",
                      "Aggressive Denial Appeals",
                      "Unbilled Revenue Audits",
                      "Same-Day Claim Submission",
                      "Strategic Narrative Attachments",
                      "Clinical Data Integrity Checks",
                      "Primary & Secondary Aging Focus",
                      "Transparent AR Performance Logs",
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
                        ></i>{" "}
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ======================================= */}
          {/* 3. ELIGIBILITY & VERIFICATION SECTION   */}
          {/* ======================================= */}
          {/* ======================================= */}
          {/* 3. ELIGIBILITY & VERIFICATION SECTION   */}
          {/* ======================================= */}
          {activeTab === "eligibility" && (
            <div className="rounded-4 shadow-lg bg-white overflow-hidden border-0">
              <div
                className="text-center p-5"
                style={{ backgroundColor: "#003941", color: "#fff" }}
              >
                <h2
                  className="fw-bold mb-3"
                  style={{ color: "#09B2AB", textTransform: "uppercase" }}
                >
                  Eligibility & Verifications of Benefits
                </h2>

                {/* Custom Toggle Switch */}
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-4 bg-white bg-opacity-10 p-3 rounded-pill d-inline-flex mx-auto">
                  <span
                    className={
                      !isPayAsYouGo
                        ? "fw-bold text-white"
                        : "text-white opacity-50"
                    }
                    style={{ transition: "all 0.3s" }}
                  >
                    Monthly Value Bundles (Save 20-25%)
                  </span>

                  <div
                    className="position-relative rounded-pill shadow-sm"
                    style={{
                      width: "60px",
                      height: "30px",
                      backgroundColor: isPayAsYouGo ? "#09B2AB" : "#002C34",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                    onClick={() => setIsPayAsYouGo(!isPayAsYouGo)}
                  >
                    <div
                      className="rounded-circle bg-white position-absolute shadow-sm"
                      style={{
                        width: "24px",
                        height: "24px",
                        top: "3px",
                        left: isPayAsYouGo ? "33px" : "3px",
                        transition:
                          "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                      }}
                    ></div>
                  </div>

                  <span
                    className={
                      isPayAsYouGo
                        ? "fw-bold text-white"
                        : "text-white opacity-50"
                    }
                    style={{ transition: "all 0.3s" }}
                  >
                    On-Demand / Pay-As-You-Go ($4.50/VOB average)
                  </span>
                </div>

                {/* PDF Link Below Toggle */}
                <div className="mt-4">
                  <a
                    href="/assets/docs/SampleVOB.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fw-bold d-inline-flex align-items-center text-white transition-all"
                    style={{
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                      opacity: 0.9,
                      fontSize: "0.95rem",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#09B2AB")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#ffffff")
                    }
                  >
                    See how we bridge the gap btw eligibility and clinical
                    reality <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>

              <div className="p-4 p-lg-5 text-center">
                <div className="row g-4 justify-content-center mb-5 border-bottom pb-5">
                  {[
                    {
                      l: "The Core Plan",
                      mo: "400",
                      payg: "5",
                      d: "Up to 100 Verifications",
                    },
                    {
                      l: "The Expansion Plan",
                      mo: "565",
                      payg: "4.75",
                      d: "Up to 150 Verifications",
                    },
                    {
                      l: "The Momentum Plan",
                      mo: "700",
                      payg: "4.50",
                      d: "Up to 200 Verifications",
                    },
                    {
                      l: "The Elite Plan",
                      mo: "975",
                      payg: "4.25",
                      d: "Up to 300 Verifications",
                    },
                    {
                      l: "The Enterprise Plan",
                      mo: "1,500",
                      payg: "4.00",
                      d: "Up to 500 Verifications",
                    },
                  ].map((v, idx) => (
                    <div key={idx} className="col border-end px-3">
                      <h5
                        className="fw-bold mb-3 text-uppercase"
                        style={{
                          color: "#002C34",
                          opacity: 0.6,
                          letterSpacing: "1px",
                          fontSize: "0.85rem",
                        }}
                      >
                        {v.l}
                      </h5>
                      <h2
                        style={{
                          color: "#09B2AB",
                          fontWeight: 900,
                          fontSize: "2.2rem",
                        }}
                        className="mb-2"
                      >
                        ${isPayAsYouGo ? v.payg : v.mo}
                        <span className="fs-6 fw-normal text-muted">
                          /{isPayAsYouGo ? "vob" : "mo"}
                        </span>
                      </h2>
                      <p
                        className="text-muted mb-4 small fw-bold"
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
                          fontSize: "14px",
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
                        fontSize: "0.85rem",
                      }}
                    >
                      Custom
                    </h5>
                    <h2
                      style={{
                        color: "#09B2AB",
                        fontWeight: 900,
                        fontSize: "1.8rem",
                      }}
                      className="mb-2 mt-3"
                    >
                      Talk to Us
                    </h2>
                    <p
                      className="text-muted mb-4 small fw-bold"
                      style={{ minHeight: "40px" }}
                    >
                      More than 500 Verifications
                    </p>
                    <Link
                      to="/contact"
                      className="d-inline-block rounded-pill py-2 px-4 fw-bold text-white shadow-sm"
                      style={{
                        backgroundColor: "#09B2AB",
                        border: "2px solid #09B2AB",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                    >
                      Contact
                    </Link>
                  </div>
                </div>

                {/* Service Benefits List */}
                <div
                  className="p-5 rounded-4 text-start shadow-sm"
                  style={{
                    backgroundColor: "#F8FAFA",
                    border: "1px solid rgba(0,57,65,0.05)",
                  }}
                >
                  <div className="mb-4">
                    <h4 className="fw-bold m-0" style={{ color: "#003941" }}>
                      Service Benefits:
                    </h4>
                  </div>
                  <ul className="row list-unstyled g-4">
                    {[
                      "Real-time insurance data for up-to-the-minute patient coverage.",
                      "Precision estimates for insurance and patient payment portions.",
                      "Absolute clinical confidence during the treatment planning stage.",
                      "Full verification of plan frequencies, history, and maximums.",
                      "Detailed breakdowns capturing code-specific coverage limitations.",
                    ].map((ben, i) => (
                      <li
                        key={i}
                        className="col-md-6 fs-6 d-flex align-items-start"
                      >
                        <i
                          className="fa-solid fa-check mt-1 me-3"
                          style={{ color: "#09B2AB" }}
                        ></i>
                        <span style={{ color: "#002C34", fontWeight: 500 }}>
                          {ben}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ======================================= */}
          {/* 4. A/R AUDIT & RECOVERY (NEW TAB)       */}
          {/* ======================================= */}
          {activeTab === "ar-recovery" && (
            <div className="rounded-4 shadow-lg bg-white overflow-hidden border-0">
              <div
                className="text-center p-5"
                style={{ backgroundColor: "#003941", color: "#fff" }}
              >
                <h2
                  className="fw-bold mb-3"
                  style={{ color: "#09B2AB", textTransform: "uppercase" }}
                >
                  AR Audit & Recovery
                </h2>
                <p
                  className="mx-auto fs-5 opacity-75"
                  style={{ maxWidth: "800px", lineHeight: "1.6" }}
                >
                  Specialized plans to clean up your aging report, recover stuck
                  claims, and give you a clean slate.
                </p>
              </div>

              <div className="p-4 p-lg-5">
                <div className="row g-4 justify-content-center">
                  {/* Plan 1 */}
                  <div className="col-lg-6">
                    <div
                      className="p-5 border rounded-4 h-100 position-relative shadow-sm"
                      style={{
                        backgroundColor: "#F8FAFA",
                        borderColor: "rgba(0,57,65,0.05)",
                      }}
                    >
                      <span
                        className="badge rounded-pill px-3 py-2 mb-3"
                        style={{
                          backgroundColor: "rgba(9, 178, 171, 0.1)",
                          color: "#09B2AB",
                          letterSpacing: "1px",
                        }}
                      >
                        Plan 1: Performance-Based Recovery
                      </span>
                      <h3 className="fw-bold mb-3" style={{ color: "#003941" }}>
                        The High-Impact, Zero-Risk Revenue Solution
                      </h3>
                      <p
                        className="text-muted fw-bold mb-4"
                        style={{ fontSize: "0.95rem" }}
                      >
                        Ideal for: Practices seeking an aggressive, long-term
                        partner to liquidate aged insurance balances with no
                        upfront risk.
                      </p>

                      <h1
                        style={{
                          color: "#09B2AB",
                          fontSize: "3.5rem",
                          fontWeight: 900,
                        }}
                        className="mb-2"
                      >
                        10%
                      </h1>
                      <p className="fw-bold mb-4" style={{ color: "#002C34" }}>
                        of Total Revenue Recovered
                      </p>
                      <p className="text-muted mb-4 small">
                        <i className="fa-solid fa-plug me-2 text-primary"></i>{" "}
                        Clinical Integration: $500 (One-Time Setup)
                      </p>

                      <hr className="my-4" style={{ opacity: 0.1 }} />
                      <h6 className="fw-bold mb-3" style={{ color: "#003941" }}>
                        Core Deliverables:
                      </h6>
                      <ul className="list-unstyled mb-5">
                        {[
                          "Unlimited Aging Liquidation: Focused, daily strikes on all 60, 90, and 120+ day insurance buckets.",
                          "Clinical Narrative Reconstruction: Doctor-led review and rewrite of denied claims.",
                          "Payer Dispute Management: Direct negotiation to overturn uncollectible denials.",
                          "Real-Time Transparency: Daily executive recovery logs.",
                        ].map((li, idx) => (
                          <li
                            key={idx}
                            className="mb-3 d-flex align-items-start"
                            style={{
                              color: "#002C34",
                              fontSize: "0.9rem",
                              lineHeight: "1.5",
                            }}
                          >
                            <i
                              className="fa-solid fa-check me-3 mt-1"
                              style={{ color: "#09B2AB" }}
                            ></i>{" "}
                            {li}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className="d-block w-100 rounded-pill py-3 text-center fw-bold text-white shadow-sm mt-auto transition-all"
                        style={{
                          backgroundColor: "#09B2AB",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#003941";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#09B2AB";
                        }}
                      >
                        Get Started with Plan 1
                      </Link>
                    </div>
                  </div>

                  {/* Plan 2 */}
                  <div className="col-lg-6">
                    <div
                      className="p-5 border rounded-4 h-100 position-relative shadow-sm bg-white"
                      style={{ borderColor: "#09B2AB", border: "2px solid" }}
                    >
                      <span
                        className="position-absolute top-0 start-50 translate-middle badge rounded-pill px-4 py-2 shadow-sm"
                        style={{
                          backgroundColor: "#09B2AB",
                          letterSpacing: "1px",
                        }}
                      >
                        RECOMMENDED
                      </span>

                      <span
                        className="badge rounded-pill px-3 py-2 mb-3 mt-2"
                        style={{
                          backgroundColor: "rgba(0, 57, 65, 0.1)",
                          color: "#003941",
                          letterSpacing: "1px",
                        }}
                      >
                        Plan 2: The "Clean Slate" Audit
                      </span>
                      <h3 className="fw-bold mb-3" style={{ color: "#003941" }}>
                        A 30-Day Intensive Financial Reset
                      </h3>
                      <p
                        className="text-muted fw-bold mb-4"
                        style={{ fontSize: "0.95rem" }}
                      >
                        Ideal for: Practices with a significant backlog ($50k+)
                        needing a total "deep clean" to fix errors and
                        reconcile.
                      </p>

                      <h1
                        style={{
                          color: "#003941",
                          fontSize: "3.5rem",
                          fontWeight: 900,
                        }}
                        className="mb-2"
                      >
                        $2,500
                      </h1>
                      <p className="fw-bold mb-4" style={{ color: "#002C34" }}>
                        Flat Project Fee (Covers up to $50,000 in A/R)
                      </p>
                      <p className="text-muted mb-4 small">
                        <i className="fa-solid fa-arrow-trend-up me-2 text-success"></i>{" "}
                        High-Volume Scale: 10% for every $1,000 recovered above
                        $50k threshold.
                      </p>

                      <hr className="my-4" style={{ opacity: 0.1 }} />
                      <h6 className="fw-bold mb-3" style={{ color: "#003941" }}>
                        Core Deliverables:
                      </h6>
                      <ul className="list-unstyled mb-5">
                        {[
                          "30-Day Intensive Strike: A high-priority sprint to clear every outstanding claim.",
                          "Full Ledger Reconciliation: Correcting credit balances and misapplied payments.",
                          "Revenue Leakage Diagnostic: A comprehensive final report identifying errors.",
                          "PPO Fee Schedule Audit: Verification of software calculation accuracy.",
                        ].map((li, idx) => (
                          <li
                            key={idx}
                            className="mb-3 d-flex align-items-start"
                            style={{
                              color: "#002C34",
                              fontSize: "0.9rem",
                              lineHeight: "1.5",
                            }}
                          >
                            <i
                              className="fa-solid fa-check me-3 mt-1"
                              style={{ color: "#09B2AB" }}
                            ></i>{" "}
                            {li}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className="d-block w-100 rounded-pill py-3 text-center fw-bold text-white shadow-sm mt-auto transition-all"
                        style={{
                          backgroundColor: "#003941",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#09B2AB";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#003941";
                        }}
                      >
                        Start the Clean Slate
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Shared Feature Pills */}
                <div className="mt-5 text-center">
                  <br />
                  <h5 className="fw-bold mb-4" style={{ color: "#003941" }}>
                    All A/R Recovery Includes
                  </h5>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {[
                      "90+ Day Aging Liquidation",
                      "Clinical Denial Deep-Dive",
                      "Payer Performance Analytics",
                      "Contractual Write-Off Audit",
                      "Ledger Reconciliation & Cleanup",
                      "Secondary & COB Recovery",
                      "PPO Fee Schedule Verification",
                      "Daily Executive Recovery Logs",
                    ].map((f, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 rounded-pill fw-bold shadow-sm"
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#003941",
                          border: "1px solid rgba(0,57,65,0.1)",
                          fontSize: "0.85rem",
                        }}
                      >
                        <i
                          className="fa-solid fa-shield-check me-2"
                          style={{ color: "#09B2AB" }}
                        ></i>{" "}
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ======================================= */}
          {/* 5. DENTAL CREDENTIALING (COMING SOON)   */}
          {/* ======================================= */}
          {activeTab === "credentialing" && (
            <div
              className="rounded-4 shadow-sm bg-white overflow-hidden border text-center p-5 d-flex flex-column align-items-center justify-content-center"
              style={{ minHeight: "400px", borderColor: "rgba(0,57,65,0.05)" }}
            >
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "rgba(9, 178, 171, 0.1)",
                  color: "#09B2AB",
                }}
              >
                <i className="fa-solid fa-file-signature fs-1"></i>
              </div>
              <h2 className="fw-black mb-3" style={{ color: "#003941" }}>
                Dental Credentialing
              </h2>
              <h4 className="fw-bold" style={{ color: "#09B2AB" }}>
                Coming Soon
              </h4>
              <p
                className="text-muted mt-3 mx-auto"
                style={{ maxWidth: "500px" }}
              >
                We are currently building out a robust, seamless credentialing
                platform to keep your providers in-network effortlessly. Stay
                tuned!
              </p>
            </div>
          )}

          {/* ======================================= */}
          {/* 6. ACCOUNTING & BOOKKEEPING (COMING SOON) */}
          {/* ======================================= */}
          {activeTab === "accounting" && (
            <div
              className="rounded-4 shadow-sm bg-white overflow-hidden border text-center p-5 d-flex flex-column align-items-center justify-content-center"
              style={{ minHeight: "400px", borderColor: "rgba(0,57,65,0.05)" }}
            >
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "rgba(0, 57, 65, 0.1)",
                  color: "#003941",
                }}
              >
                <i className="fa-solid fa-calculator fs-1"></i>
              </div>
              <h2 className="fw-black mb-3" style={{ color: "#003941" }}>
                Accounting & Bookkeeping
              </h2>
              <h4 className="fw-bold" style={{ color: "#09B2AB" }}>
                Coming Soon
              </h4>
              <p
                className="text-muted mt-3 mx-auto"
                style={{ maxWidth: "500px" }}
              >
                Our specialized dental accounting division is launching soon to
                handle everything from reconciliations to cash flow analysis.
              </p>
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
