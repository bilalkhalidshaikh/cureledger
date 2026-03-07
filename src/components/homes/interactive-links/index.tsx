import HeaderNine from "../../../layouts/headers/HeaderNine"
import Interactive from "./Interactive"

const InteractiveLinks = () => {
   return (
      <div style={{ backgroundImage: `url(/assets/img/intarective-links/bg.jpg)` }}>
         <HeaderNine />
         <div id="smooth-wrapper" style={{ backgroundImage: `url(/assets/img/intarective-links/bg.jpg)` }}>
            <div id="smooth-content">
               <main>
                  <Interactive />
               </main>
            </div>
         </div>
      </div>
   )
}

export default InteractiveLinks
