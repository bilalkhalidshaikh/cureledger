import Hero from "./Hero"
import About from "./About"
import Service from "./Service"
import Portfolio from "./Portfolio"
import Testimonial from "./Testimonial"
import TextSlider from "./TextSlider"
import Counter from "./Counter"
import Feature from "./Feature"
import Brand from "./Brand"
import Faq from "./Faq"
import Process from "./Process"
import Team from "./Team"
import Achievement from "./Achievement"
import Blog from "./Blog"
import Contact from "./Contact"
import HeaderTwo from "../../../layouts/headers/HeaderTwo"
import FooterTwo from "../../../layouts/footers/FooterTwo"

const HomeTwo = () => {
   return (
      <>
         <HeaderTwo />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <Hero />
                  <About />
                  <Service />
                  <Portfolio />
                  <Testimonial />
                  <TextSlider />
                  <Counter />
                  <Feature />
                  <Brand />
                  <Faq />
                  <Process />
                  <Team />
                  <Achievement />
                  <Blog />
                  <Contact />
               </main>
               <FooterTwo />
            </div>
         </div>
      </>
   )
}

export default HomeTwo
