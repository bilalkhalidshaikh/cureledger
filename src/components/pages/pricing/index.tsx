import PricingArea from "./PricingArea";
// import InnerHeader from "../../../layouts/headers/InnerHeader";
import CureHeader from "../../../layouts/headers/CureHeader";
import BreadcrumbTwo from "../../common/BreadcrumbTwo";
// import FooterOne from "../../../layouts/footers/FooterOne";
import Faq from "../../homes/home-cureledger/Faq";
import FooterTwo from "../../homes/home-cureledger/Footer";
import Header from "../../../layouts/headers/Header";

const Pricing = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main style={{ backgroundColor: "#FAFAFA" }}>
            <BreadcrumbTwo
              sub_title="PLANS & PRICING"
              title={
                <>
                  Select a <span style={{ color: "#09B2AB" }}>Plan</span>
                </>
              }
              desc="Our end-to-end RCM solutions are thoughtfully customized to fit the unique needs of dental practices of all sizes and specialties. With transparent, flexible pricing tiers designed to eliminate revenue leaks and accelerate cash flow, we empower your team to focus entirely on exceptional patient care while our experts handle the numbers."
            />
            <PricingArea />
            <Faq />
          </main>
          <FooterTwo />
        </div>
      </div>
    </>
  );
};

export default Pricing;
