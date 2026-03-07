import FooterOne from "../../../../layouts/footers/FooterOne"
import InnerHeader from "../../../../layouts/headers/InnerHeader"
import Cta from "../../../common/Cta"
import Faq from "./Faq"
import ServiceDetailsArea from "./ServiceDetailsArea"
import ServiceProcess from "./ServiceProcess"
import ServiceReplace from "./ServiceReplace"

const ServiceDetails = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <ServiceDetailsArea />
                  <ServiceProcess />
                  <Faq style={false} />
                  <ServiceReplace />
                  <Cta />
               </main>
               <FooterOne style={true} />
            </div>
         </div>
      </>
   )
}

export default ServiceDetails
