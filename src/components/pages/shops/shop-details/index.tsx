import FooterOne from "../../../../layouts/footers/FooterOne"
import InnerHeader from "../../../../layouts/headers/InnerHeader"
import Breadcrumb from "./Breadcrumb"
import ShopDetailsArea from "./ShopDetailsArea"
import ShopDetailsTabArea from "./ShopDetailsTabArea"

const ShopDetails = () => {
  return (
    <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <Breadcrumb />
                  <ShopDetailsArea />
                  <ShopDetailsTabArea />
               </main>
               <FooterOne />
            </div>
         </div>
      </>
  )
}

export default ShopDetails
