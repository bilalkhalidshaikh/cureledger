
const Hero = () => {
   return (
      <div className="td-hero-area td-btn-trigger td-hero-2-spacing p-relative fix z-index-1 include-bg" style={{ backgroundImage: `url(/assets/img/hero/hero-2/bg.jpg)` }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-7">
                  <div className="td-hero-2-title-wrap">
                     <h2 className="td-hero-2-title mb-100">
                        <span className="d-flex align-items-center td-split-text td-split-in-right">CREATIVE <i className="fa-sharp fa-solid fa-arrow-right"></i></span>
                        <span className="td-split-text td-split-in-right">STRATEGIES TO</span>
                        <span className="td-split-text td-split-in-right">GET GROWING</span>
                     </h2>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="td-hero-2-thumb p-relative z-index-1">
                     <div className="td-btn-bounce">
                        <img className="thumb-3" src="/assets/img/hero/hero-2/shape-1.png" alt="" />
                     </div>
                     <img className="thumb-4 td-btn-bounce" src="/assets/img/hero/hero-2/shape-2.png" alt="" />
                     <img className="thumb-1" src="/assets/img/hero/hero-2/thumb.jpg" alt="" />
                     <img className="thumb-2 d-none d-sm-inline-block" src="/assets/img/hero/hero-2/thumb-2.jpg" alt="" />
                  </div>
               </div>
               <div className="col-12">
                  <div className="td-hero-2-bigtitle">
                     <h2 className="td-split-text td-split-in-right">STARTUP</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
