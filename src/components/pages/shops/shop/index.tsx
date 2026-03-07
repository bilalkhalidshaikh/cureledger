import ShopArea from "./ShopArea"
import Breadcrumb from "./Breadcrumb"
import InnerHeader from "../../../../layouts/headers/InnerHeader"
import FooterOne from "../../../../layouts/footers/FooterOne"

const Shop = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <Breadcrumb />
                  <ShopArea />
               </main>
               <FooterOne />
            </div>
         </div>
      </>
   )
}

export default Shop
