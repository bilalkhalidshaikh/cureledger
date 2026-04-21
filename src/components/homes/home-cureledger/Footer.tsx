import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer>
      {/* Added pt-120 for professional spacing and set background to off-white/light */}
      <div
        className="td-footer-area pt-120 pb-60"
        style={{ backgroundColor: "#FAFAFA", borderTop: "1px solid #E5E5E5" }}
      >
        <div className="container">
          <div className="row">
            {/* Branding Column */}
            <div className="col-lg-6 mb-30">
              <div className="td-footer-3-widget">
                {/* Integrated official CureLedger Logo */}
                <Link to="/" className="d-inline-block mb-30">
                  <img
                    src="/assets/img/logo/cure-ledger.png"
                    alt="CureLedger Logo"
                    style={{ maxHeight: "60px" }}
                  />
                </Link>
                <h2
                  className="td-footer-2-bigtitle"
                  style={{ color: "#003941", fontWeight: 800 }}
                >
                  Optimize billing
                  <br /> for your practice
                </h2>
                <p
                  className="mt-20"
                  style={{ color: "#002C34", opacity: 0.8, maxWidth: "400px" }}
                >
                  We protect what you've earned so your practice can grow with
                  confidence.
                </p>
              </div>
            </div>

            {/* Office Column */}
            <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
              <div className="td-footer-3-widget">
                <h4
                  className="td-footer-3-title mb-25"
                  style={{
                    color: "#003941",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                  }}
                >
                  Austin Office
                </h4>
                <p style={{ color: "#002C34", lineHeight: "1.8" }}>
                  {/* Texas —<br />
                  2025 Guadalupe St, Suite 260
                  <br />
                  Austin, TX 78705 */}
                  2106 MALLORCA DR. LAREDO TX 78046
                </p>
                <div className="td-footer-3-social mt-30 d-flex gap-3">
                  <Link to="https://www.facebook.com/share/1CqX2CGBnH/?mibextid=wwXIfr" style={{ color: "#09B2AB" }}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  {/* <Link to="#" style={{ color: "#09B2AB" }}>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link> */}
                  <Link to="https://www.linkedin.com/company/cureledger-dental-revenue-solutions/" style={{ color: "#09B2AB" }}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link to="https://www.instagram.com/cureledger.inc?igsh=MXRueTk3bTJ5ZThidQ%3D%3D&utm_source=qr" style={{ color: "#09B2AB" }}>
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Column */}
            <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
              <div className="td-footer-3-widget">
                <h4
                  className="td-footer-3-title mb-25"
                  style={{
                    color: "#003941",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                  }}
                >
                  Contact Us
                </h4>
                <Link
                  className="d-block mb-10 fw-bold"
                  to="mailto:contact@cureledger.com"
                  style={{ color: "#09B2AB", fontSize: "1.1rem" }}
                >
                  contact@cureledger.org
                </Link>
                <Link
                  className="fw-bold"
                  to="tel:+1(607) 695-19441"
                  style={{ color: "#003941", fontSize: "1.1rem" }}
                >
                  +1-(607)-695-1944
                </Link>
                <p
                  className="mt-20"
                  style={{ color: "#002C34", fontSize: "0.9rem", opacity: 0.6 }}
                >
                  Available Mon — Fri
                  <br /> 9:00 AM — 5:00 PM CST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container">
          <div
            className="td-footer-2-border mt-60 pt-30"
            style={{ borderTop: "1px solid #E5E5E5" }}
          >
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="td-footer-3-menu mb-10">
                  <ul className="d-flex flex-wrap gap-4 list-unstyled">
                    <li>
                      <Link
                        to="/service"
                        style={{ color: "#002C34", fontWeight: 600 }}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/pricing"
                        style={{ color: "#002C34", fontWeight: 600 }}
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        style={{ color: "#002C34", fontWeight: 600 }}
                      >
                        About Us
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/"
                        style={{ color: "#002C34", fontWeight: 600 }}
                      >
                        FAQ
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        to="/contact"
                        style={{ color: "#002C34", fontWeight: 600 }}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 text-lg-end">
                <div className="td-footer-3-copyright mb-10">
                  <p style={{ color: "#002C34", opacity: 0.7, margin: 0 }}>
                    © {new Date().getFullYear()}{" "}
                    <Link to="/" style={{ color: "#002C34", fontWeight: 600 }}>
                      <span style={{ color: "#09B2AB", fontWeight: 700 }}>
                        CureLedger.
                      </span>{" "}
                    </Link>
                    All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
