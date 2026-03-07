import HeaderEight from "../../../layouts/headers/HeaderEight"
import Portfolio from "./Portfolio"

const FullScreenSlicer = () => {
   return (
      <>
         <HeaderEight />
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

export default FullScreenSlicer
