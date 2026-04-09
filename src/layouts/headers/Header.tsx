import NavMenu from "./Menu/NavMenu";
import { Link } from "react-router-dom";
import { useState } from "react";
import Offcanvas from "./Menu/Offcanvas";
import UseSticky from "../../hooks/UseSticky";

const Header = () => {
  const { sticky } = UseSticky();
  const [offCanvas, setOffCanvas] = useState<boolean>(false);

  return (
    <>
      {/* Brand Color & Responsive CSS Overrides */}
      <style>{`
        /* Hover colors for desktop menu */
        .tdmenu__main-menu ul li a:hover {
          color: #09B2AB !important;
        }
        .tdmenu__main-menu ul li.active > a,
        .tdmenu__main-menu ul li:hover > a {
          color: #09B2AB !important;
        }
        
        /* Mobile Responsiveness Fixes */
        @media (max-width: 575px) {
           .td-header-right { gap: 10px !important; }
           .mobile-nav-toggler { margin-left: 0 !important; }
           .logo-1 img, .logo-2 img { max-width: 130px !important; }
        }
      `}</style>

      <header>
        <div
          id="header-sticky"
          className={`td-header__area td-header-sticky-white td-header-spacing td-header-2-wrapper p-relative z-index-1 ${
            sticky ? "header-sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between flex-nowrap">
              
              {/* LOGO: Left aligned */}
              <div className="col-auto">
                <div className="logo">
                  {/* Logo 1: Shows at the top of the page */}
                  <Link className="logo-1" to="/">
                    <img
                      src="/assets/img/logo/cureledger.png"
                      alt="CureLedger Logo"
                      style={{ maxWidth: "150px", width: "100%", height: "auto" }}
                    />
                  </Link>
                  {/* Logo 2: Shows when the sticky header activates on scroll */}
                  <Link className="logo-2 d-none" to="/">
                    <img
                      src="/assets/img/logo/cure-ledger.png"
                      alt="CureLedger Logo"
                      style={{ maxWidth: "150px", width: "100%", height: "auto" }}
                    />
                  </Link>
                </div>
              </div>

              {/* MENU: Centered with iOS Glassmorphism (Desktop Only) */}
              <div className="col-auto d-none d-xl-block">
                <div className="tdmenu__wrap tdmenu-2-wrap d-flex justify-content-center">
                  <nav
                    className="tdmenu__nav"
                    style={
                      !sticky
                        ? {
                            backgroundColor: "rgba(0, 57, 65, 0.6)", 
                            backdropFilter: "blur(12px)", 
                            WebkitBackdropFilter: "blur(12px)", 
                            borderRadius: "50px",
                            padding: "0 30px",
                            border: "1px solid rgba(255, 255, 255, 0.1)", 
                            transition: "all 0.3s ease",
                            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                          }
                        : {
                            transition: "all 0.3s ease",
                          }
                    }
                  >
                    <div className="tdmenu__navbar-wrap tdmenu__main-menu">
                      <NavMenu />
                    </div>
                  </nav>
                </div>
              </div>

              {/* CTA & MOBILE MENU: Right aligned */}
              <div className="col-auto">
                <div className="td-header-right td-header-2-right text-end d-flex align-items-center justify-content-end gap-2 gap-md-3">
                  
                  {/* CTA Button - Hidden on mobile, visible on tablet/desktop */}
                  <div className="d-none d-md-inline-block">
                    <Link
                      to="/"
                      className="td-btn-2 d-inline-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#09B2AB", 
                        color: "#ffffff",
                        padding: "10px 24px",
                        borderRadius: "30px",
                        fontWeight: "bold",
                        textDecoration: "none",
                        whiteSpace: "nowrap", 
                        border: "none",
                      }}
                    >
                      <span className="icon me-2 d-flex align-items-center">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.7767 7.47384C15.9198 7.62604 16 7.8316 16 8.04582C16 8.26004 15.9198 8.4656 15.7767 8.61781L8.92138 15.8429C8.77516 15.9903 8.58094 16.0729 8.37867 16.0737C8.27759 16.0732 8.17746 16.0529 8.08351 16.0134C7.94489 15.9522 7.8266 15.8488 7.74358 15.7167C7.66056 15.5845 7.61651 15.4294 7.61698 15.2709V8.84861H0.761697C0.559684 8.84861 0.365942 8.76404 0.223096 8.61348C0.0802502 8.46292 0 8.25874 0 8.04582C0 7.83291 0.0802502 7.62871 0.223096 7.47817C0.365942 7.32761 0.559684 7.24304 0.761697 7.24304H7.61698V0.820711C7.61651 0.662221 7.66056 0.507129 7.74358 0.374983C7.8266 0.242834 7.94489 0.139545 8.08351 0.0781301C8.2242 0.0202932 8.37756 0.00562 8.52585 0.0358103C8.67412 0.065999 8.81125 0.139818 8.92138 0.248724L15.7767 7.47384Z" fill="currentColor" />
                        </svg>
                      </span>
                      <span>Talk With Us</span>
                    </Link>
                  </div>

                  {/* Mobile Hamburger Menu Toggler */}
                  <div className="d-inline-block">
                    <div className="tdmenu-offcanvas-open-btn mobile-nav-toggler d-flex align-items-center justify-content-center d-xl-none">
                      <span className="text me-2 d-none d-sm-block">menu</span>
                      <div onClick={() => setOffCanvas(true)} className="tdmenu-offcanvas-open-bar" style={{ cursor: "pointer" }}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
      <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
    </>
  );
};

export default Header;