import { Link } from "react-router-dom"
import SplitTextWrapper from "../../common/SplitTextWrapper";

const award_logo: string[] = [
   "/assets/img/awards/logo.png",
   "/assets/img/awards/logo-2.png",
   "/assets/img/awards/logo-3.png",
   "/assets/img/awards/logo-4.png",
];

const AwardArea = () => {
   return (
      <div className="td-awards-area pt-155">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-md-5">
                  <div className="td-awards-title-wrap">
                     <h2 className="td-section-4-title td-split-text td-split-in-right">
                       <SplitTextWrapper direction="right">
                            PROJECTS<br /> <span className="green-text">AWARDS</span>
                        </SplitTextWrapper>
                        </h2>
                  </div>
               </div>
               <div className="col-lg-4 col-md-7">
                  <div className="td-awards-4-para">
                     <p>We are excited for our work and how it
                        positively impacts clients. With over 12
                        years of experience we have been
                        constantly providing solutions.
                     </p>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="td-awards-4-brands">
                     {award_logo.map((logo, i) => (
                        <div key={i}>
                           <Link to="#"><img src={logo} alt="" /></Link>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AwardArea
