import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumb from "./BreadCrumb"
import PortfolioDetailsArea from "./PortfolioDetailsArea"
import PortfolioThumbArea from "./PortfolioThumbArea"
import PortfolioVisualIdentity from "./PortfolioVisualIdentity"

const PortfolioDetails = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <BreadCrumb />
                  <PortfolioDetailsArea />
                  <PortfolioThumbArea />
                  <PortfolioVisualIdentity />
               </main>
               <FooterOne />
            </div>
         </div>
      </>
   )
}

export default PortfolioDetails
