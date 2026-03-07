import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumbOne from "../../common/BreadCrumbOne"
import PortfolioArea from "./PortfolioArea"

const PortfolioOne = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <BreadCrumbOne sub_title="LATEST PORTFOLIO"
                     title={<>Classic <span>grid</span></>}
                  />
                  <PortfolioArea />
               </main>
               <FooterOne />
            </div>
         </div>
      </>
   )
}

export default PortfolioOne
