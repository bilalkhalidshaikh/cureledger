import { Link } from "react-router-dom"

const Awards = () => {
   return (
      <div className="td-awards-area pt-145">
         <div className="container">
            <div className="row align-items-end mb-40">
               <div className="col-lg-6">
                  <div className="td-awards-5-title-wrap mb-30">
                     <h2 className="td-section-5-title mb-25 td-title-anim">Honorable <span>awa</span>rds</h2>
                     <Link className="td-awards-5-btn" to="/contact">Direct from the heart</Link>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="td-awards-5-text mb-30 mr-80 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                     <p className="mb-0">We are excited for our work and how it positively impacts clients.
                        With over 12 years of experience we have been constantly
                        providing solutions. We are committed</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-6">
                  <div className="td-awards-5-thumb text-center pt-70 mb-30 wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1s">
                     <img src="/assets/img/awards/awards-5/award.png" alt="" />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="td-awards-5-list mb-30 wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1s">
                     <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                           <span className="mr-60">9x</span>
                           <span>Sony world photography award</span>
                        </div>
                        <span>2021</span>
                     </div>
                     <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                           <span className="mr-60">2x</span>
                           <span>CSS Design award world</span>
                        </div>
                        <span>2021</span>
                     </div>
                     <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                           <span className="mr-60">3x</span>
                           <span>Featured design of the week</span>
                        </div>
                        <span>2021</span>
                     </div>
                     <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                           <span className="mr-60">6x</span>
                           <span>Creative agency of the day</span>
                        </div>
                        <span>2021</span>
                     </div>
                     <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                           <span className="mr-60">9x</span>
                           <span>Envato agency of the year</span>
                        </div>
                        <span>2021</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Awards
