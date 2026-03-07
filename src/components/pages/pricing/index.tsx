import PricingArea from "./PricingArea";
// import InnerHeader from "../../../layouts/headers/InnerHeader";
import CureHeader from "../../../layouts/headers/CureHeader";
import BreadcrumbTwo from "../../common/BreadcrumbTwo";
// import FooterOne from "../../../layouts/footers/FooterOne";
import Faq from "../../homes/home-cureledger/Faq";
import FooterTwo from "../../homes/home-cureledger/Footer";


const Pricing = () => {
   return (
      <>
         <CureHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main style={{ backgroundColor: '#FAFAFA' }}>
                  <BreadcrumbTwo 
                     sub_title="PLANS & PRICING"
                     title={<>Select a <span style={{ color: '#09B2AB' }}>Plan</span></>}
                     desc="Our end-to-end RCM solutions are customized for practices of all sizes and specialties — so you can focus on dentistry while we handle the numbers."
                  />
                  <PricingArea />
                  <Faq />
               </main>
               <FooterTwo />
            </div>
         </div>
      </>
   )
}

export default Pricing;