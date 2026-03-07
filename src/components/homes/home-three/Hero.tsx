import SplitTextWrapper from "../../common/SplitTextWrapper"

const Hero = () => {
   return (
      <div className="td-hero-area td-hero-3-spacing fix include-bg" style={{ backgroundImage: `url(/assets/img/hero/hero-3/bg.png)` }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="td-hero-3-title-wrap">
                     <h2 className="td-hero-3-title text-center td-split-text td-split-in-right">
                        <SplitTextWrapper direction="right">
                           Reliable digital <br />studio
                           <span className="italic-style"> experience</span>
                        </SplitTextWrapper>
                     </h2>
                     <div className="td-hero-3-content pt-100 p-relative wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                        <img className="td-hero-3-shape" src="/assets/img/hero/hero-3/icon.png" alt="" />
                        <div className="row align-items-center">
                           <div className="col-xxl-2 col-xl-2 col-lg-3">
                              <div className="p-relative mb-30 d-inline-block">
                                 <img className="likes" src="/assets/img/hero/hero-3/like.png" alt="" />
                                 <img className="round-text td-live-anim-spin" src="/assets/img/hero/hero-3/text.png" alt="" />
                              </div>
                           </div>
                           <div className="col-xxl-6 col-xl-5 col-lg-4">
                              <div className="td-hero-3-border mb-30 d-block"></div>
                           </div>
                           <div className="col-xxl-4 col-xl-5 col-lg-5">
                              <div className="td-hero-3-content-para mb-30">
                                 <p>We are excited for our work and how it positively
                                    impacts clients. With  over 12 years of experience
                                    we have been constantly providing solutions.
                                    We are committed to delive</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
