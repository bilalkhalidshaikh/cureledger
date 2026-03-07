import HeaderTen from "../../../layouts/headers/HeaderTen"
import Portfolio from "./Portfolio"

const PortfolioShowcase = () => {
   return (
      <>
         <HeaderTen />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <Portfolio />
               </main>
            </div>
         </div>
      </>
   )
}

export default PortfolioShowcase
