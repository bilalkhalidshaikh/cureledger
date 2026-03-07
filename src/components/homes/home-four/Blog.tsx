import { Link } from "react-router-dom"
import blog_data from "../../../data/BlogData"
import { useMemo } from "react";

const Blog = () => {

   const filteredData = useMemo(() => {
      return blog_data.filter((items) => items.page === "home_4");
   }, []);

   return (
      <div className="td-blog-area pb-130">
         <div className="container">
            <div className="row align-items-end mb-35">
               <div className="col-lg-8">
                  <div className="td-service-title-wrap mb-20 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                     <span className="td-section-4-subtitle mb-20">//  OUR BLOG POST</span>
                     <h2 className="td-section-4-title fw-600">OUR LATEST POST <br />FROM <span className="green-text"> INSIDE</span></h2>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="text-lg-end mb-40 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                     <Link to="/blog" className="td-btn td-btn-4 td-btn-4-lg d-inline-block td-btn-switch-animation">
                        <span className="d-flex align-items-center justify-content-center">
                           <span className="btn-text"> VIEW ALL POST </span>
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
                  </div>
               </div>
            </div>
            <div className="row">
               {filteredData.map((item) => (
                  <div key={item.id} className="col-lg-6 col-md-6 mb-30">
                     <div className="td-blog-4-wrap p-relative wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                        <div className="td-blog-4-thumb">
                           <img src={item.thumb} alt="" />
                        </div>
                        <div className="td-blog-4-content">
                           <span className="td-blog-4-date mb-20 d-inline-block">{item.tag} - {item.date}</span>
                           <h4 className="td-blog-4-title mb-40"><Link to="/blog-details">{item.title}</Link></h4>
                           <Link to="/blog-details" className="td-btn td-btn-4 d-inline-block td-btn-4-lg td-btn-switch-animation">
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
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Blog
