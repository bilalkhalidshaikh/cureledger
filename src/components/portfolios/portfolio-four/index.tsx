import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumbOne from "../../common/BreadCrumbOne"
import PortfolioArea from "./PortfolioArea"

const PortfolioFour = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <BreadCrumbOne sub_title="LATEST PORTFOLIO"
                     title={<>Our latest project <br /> <span>we’ve done</span></>}
                  />
                  <PortfolioArea />
               </main>
               <FooterOne style={false} />
            </div>
         </div>
      </>
   )
}

export default PortfolioFour
