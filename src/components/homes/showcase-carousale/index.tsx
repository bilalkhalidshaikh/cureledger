import HeaderNine from "../../../layouts/headers/HeaderNine"
import HeroShowcase from "./HeroShowcase"

const ShowcaseCarousale = () => {
   return (
      <div className="pr-home-bg" style={{ backgroundImage: `url(/assets/img/showcase-carosel/bg.jpg)` }}>
         <HeaderNine />
         <div id="smooth-wrapper">
            <div id="smooth-content dsd">
               <HeroShowcase />
            </div>
         </div>
      </div>
   )
}

export default ShowcaseCarousale
