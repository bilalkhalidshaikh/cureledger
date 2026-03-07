import SplitTextWrapper from "../../common/SplitTextWrapper"

const About = () => {

   return (
      <div className="td-about-area pt-90 pb-95">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="td-about-3-title-wrap mb-110">
                     <h2 className="td-section-3-title td-split-text td-split-in-right">
                        <SplitTextWrapper direction="right">
                           A company full of young, open<br />
                           minded <span className="italic-style">wants to bring</span>
                        </SplitTextWrapper>
                     </h2>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="td-about-3-content mr-110 mb-30">
                     <p className="para pb-55">We are excited for our work and how it positively
                        impacts clients. With  over of experience<br />
                        we have been constantly</p>
                     <h2 className="title p-relative d-inline-block mb-0">15 <span>M+</span></h2>
                     <p className="para">We helped to get companies with<br />
                        $15M+ funding</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-7 fix">
                  <div className="td-about-3-thumb mb-30 td_image_animetion">
                     <img className="w-100" src="/assets/img/about/3/thumb.jpg" alt="" />
                  </div>
               </div>
               <div className="col-lg-3 col-md-5">
                  <div className="td-about-3-list ml-50 mb-30">
                     <h4 className="title mb-25">We specialize in</h4>
                     <ul>
                        <li>One Click Installation</li>
                        <li>Video Production</li>
                        <li>Help me Write a Story</li>
                        <li>Art Design</li>
                        <li>System & Guides</li>
                        <li>Development</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default About
