// import FooterOne from "../../../../layouts/footers/FooterOne"
import FooterTwo from "../../../homes/home-cureledger/Footer"
// import InnerHeader from "../../../../layouts/headers/InnerHeader"
import CureHeader from "../../../../layouts/headers/CureHeader"
import BreadcrumbTwo from "../../../common/BreadcrumbTwo"
import Brand from "../../../homes/home-seven/Brand"
import ServiceArea from "./ServiceArea"
import ServiceItem from "./ServiceItem"
import Services from "./Services"
import ServiceContact from "./ServiceContact"


const Service = () => {
   return (
      <>
         <CureHeader/>
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main style={{ backgroundColor: '#FAFAFA' }}>
                  <BreadcrumbTwo sub_title="OUR EXPERTISE"
                     title={<>Comprehensive  <br /> <span style={{ color: '#09B2AB' }}>Dental RCM </span></>}
                     desc="Our end-to-end revenue cycle management solutions are customized for practices of all sizes and specialties — so you can focus on dentistry while we handle the numbers."
                  />
                  <ServiceArea />
                  <Services/>
                  {/* <ServiceItem /> */}
                  {/* <Brand style={true} /> */}
                  <ServiceContact/>
               </main>
               <FooterTwo/>
            </div>
         </div>
      </>
   )
}

export default Service