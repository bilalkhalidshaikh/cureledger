import Hero from "./Hero"
import About from "./About"
import Brand from "./Brand"
import Service from "./Service"
import Portfolio from "./Portfolio"
import Counter from "./Counter"
import ChooseArea from "./ChooseArea"
import Testimonial from "./Testimonial"
import HeaderThree from "../../../layouts/headers/HeaderThree"
import FooterThree from "../../../layouts/footers/FooterThree"

const HomeThree = () => {
   return (
      <>
         <HeaderThree />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <Hero />
                  <About />
                  <Brand />
                  <Service />
                  <Portfolio />
                  <Counter />
                  <ChooseArea />
                  <Testimonial />
               </main>
               <FooterThree />
            </div>
         </div>
      </>
   )
}

export default HomeThree
