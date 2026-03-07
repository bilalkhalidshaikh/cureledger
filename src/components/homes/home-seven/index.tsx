import Blog from "./Blog"
import Brand from "./Brand"
import Expreance from "./Expreance"
import Hero from "./Hero"
import Portfolio from "./Portfolio"
import Service from "./Service"
import Contact from "./Contact"
import HeaderSeven from "../../../layouts/headers/HeaderSeven"
import FooterSeven from "../../../layouts/footers/FooterSeven"

const HomeSeven = () => {
   return (
      <>
         <HeaderSeven />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <Hero />
                  <Service />
                  <Portfolio />
                  <Brand />
                  <Expreance />
                  <Blog />
                  <Contact />
               </main>
               <FooterSeven />
            </div>
         </div>
      </>
   )
}

export default HomeSeven
