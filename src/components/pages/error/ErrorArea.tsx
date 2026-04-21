import { Link } from "react-router-dom";

const ErrorArea = () => {
   return (
      <div className="d-flex align-items-center justify-content-center py-5" style={{ backgroundColor: "#FAFAFA", minHeight: "80vh" }}>
         <div className="container text-center px-4 fade-in">
            
            {/* Custom Icon Graphic */}
            <div
              className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow-sm"
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "rgba(9, 178, 171, 0.1)",
                color: "#09B2AB",
              }}
            >
              <i className="fa-solid fa-triangle-exclamation fs-1"></i>
            </div>

            {/* Huge 404 Header */}
            <h1 className="fw-black mb-2" style={{ fontSize: "clamp(4rem, 10vw, 8rem)", color: "#003941", lineHeight: 1 }}>
               404
            </h1>
            
            <h3 className="fw-bold mb-4" style={{ color: "#09B2AB" }}>
               Page Not Found
            </h3>
            
            <p className="fs-5 mx-auto mb-5" style={{ color: "#002C34", opacity: 0.8, maxWidth: "600px", lineHeight: "1.6" }}>
               The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back to optimizing your revenue cycle.
            </p>

            {/* Branded Return Button */}
            <Link
               to="/"
               className="px-5 py-3 rounded-pill fw-bold border-0 d-inline-flex align-items-center justify-content-center gap-2 shadow-sm"
               style={{
                  backgroundColor: "#09B2AB",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
               }}
               onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#003941";
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 25px rgba(0, 57, 65, 0.2)";
               }}
               onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#09B2AB";
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)";
               }}
            >
               BACK TO HOMEPAGE <i className="fa-solid fa-arrow-right ms-1"></i>
            </Link>

         </div>
      </div>
   );
};

export default ErrorArea;