import { Link } from "react-router-dom"

const About = () => {

   return (
      <div className="td-about-area pt-10 pb-130">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="td-about-5-title-wrap text-center mb-60">
                     <h2 className="td-section-5-title td-title-anim">Have a brilliant idea<br />
                        boost the <span>growth</span> development
                        agency your <span>branding</span></h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-5">
                  <div className="td-about-5-text mb-30">
                     <p className="pb-105">We are excited for our work and how it positively impacts clients.
                        With  over 12 years of experience we have been constantly
                        providing solutions. We are committed to deliver unique digital
                        media solutions from web  design</p>
                     <div className="fix">
                        <div className="td_image_animetion">
                           <div className="td-about-5-thumb mr-50 td_image_animetion">
                              <img className="w-100" src="/assets/img/about/about-5/thumb-2.jpg" alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3">
                  <div className="td-about-5-btn mb-30 text-center pt-160">
                     <Link to="/about" className="td-btn-5 td-btn-5-border">
                        Explore us <br /> More<br />
                        <span>
                           <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.7767 7.74985C15.9198 7.90198 16 8.10745 16 8.32158C16 8.5357 15.9198 8.74117 15.7767 8.89332L8.92138 16.1152C8.77516 16.2625 8.58094 16.3451 8.37867 16.3459C8.27759 16.3454 8.17746 16.3251 8.08351 16.2857C7.94489 16.2244 7.8266 16.1211 7.74358 15.989C7.66056 15.8569 7.61651 15.7019 7.61698 15.5435V9.12402H0.761697C0.559684 9.12402 0.365942 9.03948 0.223096 8.88899C0.0802502 8.73849 0 8.5344 0 8.32158C0 8.10876 0.0802502 7.90465 0.223096 7.75418C0.365942 7.60368 0.559684 7.51915 0.761697 7.51915H7.61698V1.09965C7.61651 0.941235 7.66056 0.786211 7.74358 0.654123C7.8266 0.522033 7.94489 0.418789 8.08351 0.357402C8.2242 0.29959 8.37756 0.284923 8.52585 0.3151C8.67412 0.345276 8.81125 0.419062 8.92138 0.52792L15.7767 7.74985Z" fill="#2D2D2D" />
                           </svg>
                        </span>
                     </Link>
                  </div>
               </div>
               <div className="col-lg-4 text-lg-end">
                  <div className="td-about-5-user mb-30">
                     <div className="d-inline-block text-start">
                        <h2 className="td-about-5-count">3.5k</h2>
                        <p>Happy clients we have</p>
                        <img src="/assets/img/about/about-5/user.png" alt="" />
                     </div>
                     <div className="fix">
                        <div className="td-about-5-thumb-2 td_image_animetion">
                           <div className="td_image_animetion">
                              <img className="w-100" src="/assets/img/about/about-5/thumb.jpg" alt="" />
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

export default About
