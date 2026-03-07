import About from "./About"
import AwardArea from "./AwardArea"
import Blog from "./Blog"
import Counter from "./Counter"
import Hero from "./Hero"
import Portfolio from "./Portfolio"
import Service from "./Service"
import Team from "./Team"
import VideoArea from "./VideoArea"
import Faq from "./Faq"
import HeaderFour from "../../../layouts/headers/HeaderFour"
import FooterFour from "../../../layouts/footers/FooterFour"

const HomeFour = () => {
   return (
      <div className="theme-bg">
         <HeaderFour />
         <div className="theme-bg" id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <Hero />
                  <Counter />
                  <About />
                  <Portfolio />
                  <Service />
                  <VideoArea />
                  <AwardArea />
                  <Team />
                  <Faq />
                  <Blog />
               </main>
               <FooterFour />
            </div>
         </div>
      </div>
   )
}

export default HomeFour
