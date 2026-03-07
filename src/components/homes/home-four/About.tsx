import { Link } from "react-router-dom"

const About = () => {
   return (
      <div className="td-about-area">
         <div className="container">
            <div className="row">
               <div className="col-lg-4">
                  <div className="td-about-4-thumb mb-30 wow fadeInLeft fix td-rounded-10" data-wow-delay=".5s" data-wow-duration="1s">
                     <img data-speed=".9" className="w-100" src="/assets/img/about/about-4/thumb.jpg" alt="" />
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className="td-about-4-content mb-30 pl-110 p-relative wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1s">
                     <img className="td-about-4-shape d-none d-sm-block" src="/assets/img/about/about-4/shape.png" alt="" />
                     <h2 className="td-section-4-title mb-15">
                        Have a brilliant idea boost
                        the growth <span className="green-text"> development
                           agency </span> your branding
                     </h2>
                     <p className="td-section-4-text mb-60">We are excited for our work and how it positively impacts clients.
                        With  over 12 years of experience we have been constantly providing solutions.
                        We are committed to deliver unique digital media solutions from web  design
                     </p>
                     <Link to="/about" className="td-btn td-btn-4 td-btn-4-lg d-none d-md-inline-block td-btn-switch-animation">
                        <span className="d-flex align-items-center justify-content-center">
                           <span className="btn-text"> Discover More </span>
                           <span className="btn-icon">
                              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0.24707 6.57617H15.1436" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                 <path d="M9.27734 0C9.27734 3.63501 12.3946 6.57638 16.2471 6.57638" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                 <path d="M16.2471 6.57617C12.3946 6.57617 9.27734 9.51754 9.27734 13.1526" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                              </svg>
                           </span>
                           <span className="btn-icon">
                              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0.24707 6.57617H15.1436" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                 <path d="M9.27734 0C9.27734 3.63501 12.3946 6.57638 16.2471 6.57638" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                 <path d="M16.2471 6.57617C12.3946 6.57617 9.27734 9.51754 9.27734 13.1526" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                              </svg>
                           </span>
                        </span>
                     </Link>
                     <div className="text-end mt-10 fix td-rounded-10">
                        <img data-speed=".9" src="/assets/img/about/about-4/thumb-2.jpg" alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
