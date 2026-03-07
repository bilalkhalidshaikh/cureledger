import FooterSix from "../../../layouts/footers/FooterSix"
import HeaderSix from "../../../layouts/headers/HeaderSix"
import About from "./About"
import Choose from "./Choose"
import Counter from "./Counter"
import Hero from "./Hero"
import Portfolio from "./Portfolio"
import Pricing from "./Pricing"
import Service from "./Service"
import Team from "./Team"
import Testimonial from "./Testimonial"
import VideoArea from "./VideoArea"

const HomeSix = () => {
   return (
      <>
         <HeaderSix />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <Hero />
                  <About />
                  <Service />
                  <Portfolio />
                  <VideoArea />
                  <Pricing />
                  <Testimonial />
                  <Choose />
                  <Team />
                  <Counter />
               </main>
               <FooterSix />
            </div>
         </div>
      </>
   )
}

export default HomeSix
