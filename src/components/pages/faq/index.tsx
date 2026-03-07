import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadcrumbTwo from "../../common/BreadcrumbTwo"
import FaqArea from "./FaqArea"

const Faq = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <BreadcrumbTwo sub_title="OUR FAQ"
                     title={<>Frequently asked <br /> <span>question</span></>}
                     desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  varius enim in eros elementum Duis cursus, mi quis viverra  ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                  />
                  <FaqArea />
               </main>
               <FooterOne style={false} />
            </div>
         </div>
      </>
   )
}

export default Faq
