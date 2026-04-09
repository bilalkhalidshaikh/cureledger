import AboutArea from "./AboutArea"
import Feature from "./Feature"
import Team from "./Team"
import Awards from "./Awards" // Now acts as "Our Impact"
import Testimonial from "../../homes/home-five/Testimonial"
import CureHeader from "../../../layouts/headers/CureHeader"
import FooterTwo from "../../homes/home-cureledger/Footer"
import BreadcrumbTwo from "../../common/BreadcrumbTwo"
import Header from "../../../layouts/headers/Header"

const About = () => {
   return (
      <>
         <Header />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main style={{ backgroundColor: '#FAFAFA' }}>
                  
                  <BreadcrumbTwo 
                     sub_title="OUR STORY"
                     title={<>The Financial Backbone of <br/><span style={{ color: '#09B2AB' }}>Modern Practices.</span></>}
                     desc="We don't just manage billing; we protect what you've earned so your practice can grow with confidence."
                  />

                  <AboutArea />
                  <Awards />
                  {/* <Feature /> */}
                  <Testimonial />
                  <Team />
                  
               </main>
               <FooterTwo />
            </div>
         </div>
      </>
   )
}

export default About;