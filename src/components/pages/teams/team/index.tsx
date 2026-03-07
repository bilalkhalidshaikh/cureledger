import TeamArea from "./TeamArea"
import Brand from "./Brand"
import InnerHeader from "../../../../layouts/headers/InnerHeader"
import BreadcrumbTwo from "../../../common/BreadcrumbTwo"
import Cta from "../../../common/Cta"
import FooterOne from "../../../../layouts/footers/FooterOne"

const Team = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <BreadcrumbTwo sub_title="OUR TEAM MEMBERS"
                     title={<>Our Talented <br /> <span>Team Members</span></>}
                     desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  varius enim in eros elementum Duis cursus, mi quis viverra  ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                  />
                  <TeamArea />
                  <Brand />
                  <Cta />
               </main>
               <FooterOne />
            </div>
         </div>
      </>
   )
}

export default Team
