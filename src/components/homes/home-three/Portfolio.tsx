import { Link } from "react-router-dom"
import SplitTextWrapper from "../../common/SplitTextWrapper"
import project_data from "../../../data/ProjectData"
import { useMemo } from "react";

const Portfolio = () => {

   const filteredData = useMemo(() => {
      return project_data.filter((items) => items.page === "home_3");
   }, []);

   return (
      <div className="td-portfolio-area td-portfolio-3-bg pt-150 pb-160">
         <div className="container">
            <div className="row align-items-end pb-80">
               <div className="col-lg-7">
                  <div className="td-portfolio-3-title-wrap mb-30">
                     <h2 className="td-section-3-title td-section-3-title-white td-split-text td-split-in-right">
                        <SplitTextWrapper direction="right">
                           Take a look at our digital studio <span className="italic-style">showcases</span>
                        </SplitTextWrapper>
                     </h2>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="td-portfolio-3-title-para mb-30 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                     <p>We are excited for our work and how it positively
                        impacts clients. With  over of experience
                        we have been constantly</p>
                  </div>
               </div>
            </div>
            <div className="row gx-80">
               {filteredData.map((item_details) => (
                  <div key={item_details.id} className="col-lg-6">
                     {item_details.project_details.map((item) => (
                        <div key={item.id} className={`td-portfolio-3-wrap ${item.class} mb-90 wow fadeInLeft`} data-wow-delay=".4s" data-wow-duration="1s">
                           <div className="td-portfolio-3-thumb mb-20">
                              <img className="w-100" src={item.thumb} alt="" />
                           </div>
                           <div className="td-portfolio-3-content d-flex justify-content-between align-items-end">
                              <div className="td-portfolio-3-title">
                                 <span className="tag">{item.tag}</span>
                                 <h6 className="title mb-0"><Link to="/portfolio-details" className="underline-white">{item.title}</Link></h6>
                              </div>
                              <Link className="icon" to="/portfolio-details">
                                 <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.75293 7.49988H17.7416" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M11.0513 0C11.0513 4.14553 14.6064 7.5 18.9998 7.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M18.9998 7.49988C14.6064 7.49988 11.0513 10.8543 11.0513 14.9999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                 </svg>
                              </Link>
                           </div>
                        </div>
                     ))}
                  </div>
               ))}
               <div className="col-12">
                  <div className="td-portfolio-3-btn">
                     <Link to="/service" className="td-header-2-btn ml-10">
                        <span className="icon">
                           <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.7767 7.47384C15.9198 7.62604 16 7.8316 16 8.04582C16 8.26004 15.9198 8.4656 15.7767 8.61781L8.92138 15.8429C8.77516 15.9903 8.58094 16.0729 8.37867 16.0737C8.27759 16.0732 8.17746 16.0529 8.08351 16.0134C7.94489 15.9522 7.8266 15.8488 7.74358 15.7167C7.66056 15.5845 7.61651 15.4294 7.61698 15.2709V8.84861H0.761697C0.559684 8.84861 0.365942 8.76404 0.223096 8.61348C0.0802502 8.46292 0 8.25874 0 8.04582C0 7.83291 0.0802502 7.62871 0.223096 7.47817C0.365942 7.32761 0.559684 7.24304 0.761697 7.24304H7.61698V0.820711C7.61651 0.662221 7.66056 0.507129 7.74358 0.374983C7.8266 0.242834 7.94489 0.139545 8.08351 0.0781301C8.2242 0.0202932 8.37756 0.00562 8.52585 0.0358103C8.67412 0.065999 8.81125 0.139818 8.92138 0.248724L15.7767 7.47384Z" fill="currentColor" />
                           </svg>
                        </span>
                        <span>View all project</span>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Portfolio
