import FooterFive from "../../../layouts/footers/FooterFive"
import HeaderFive from "../../../layouts/headers/HeaderFive"
import About from "./About"
import Awards from "./Awards"
import Brand from "./Brand"
import Hero from "./Hero"
import Portfolio from "./Portfolio"
import Service from "./Service"
import Team from "./Team"
import Testimonial from "./Testimonial"
import VideoArea from "./VideoArea"

const HomeFive = () => {
   return (
      <div style={{ backgroundImage: `url(/assets/img/body/bg.jpg)` }}>
         <HeaderFive />
         <div id="smooth-wrapper" style={{ backgroundImage: `url(/assets/img/body/bg.jpg)` }}>
            <div id="smooth-content">
               <main>
                  <Hero />
                  <About />
                  <Brand />
                  <Service />
                  <Portfolio />
                  <VideoArea />
                  <Awards />
                  <Team />
                  <Testimonial />
                  <FooterFive />
               </main>
            </div>
         </div>
      </div>
   )
}

export default HomeFive
