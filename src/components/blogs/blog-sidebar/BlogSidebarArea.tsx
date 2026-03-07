import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"

const BlogSidebarArea = () => {
   return (
      <div className="td-blog-sidebar-area mb-100 pt-135">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="td-blog-sidebar-left-content mr-70 mb-40">
                     <h6 className="td-blog-sidebar-left-text mb-45">The metaverse can be viewed as an evolution of today’s internet, which in turn evolved from passive media that simply consumed.
                        the age of radio and television, the consumer’s only job was
                        to listen and decide</h6>
                     <h3 className="td-blog-sidebar-title mb-20">What is Lorem Ipsum?</h3>
                     <p className="td-blog-sidebar-para mb-50"><span>Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                     <img className="w-100 td-rounded-10 mb-50" src="/assets/img/blog/sidebar/thumb-4.jpg" alt="" />
                     <p className="td-blog-sidebar-para mb-30">We can help you with all aspects of your IT needs, from strategy and planning to implementation and support. We work closely with you to understand your business goals and objectives, and then we develop customized IT solutions that help you achieve them.</p>
                     <p className="td-blog-sidebar-para mb-30">Praesent sed est ut justo maximus molestie et quis leo?</p>
                     <p className="td-blog-sidebar-para mb-65">Fusce non malesuada velit. Sed tristique risus ut mauris luctus rhoncus. Nam lobortis porttitor libero, placerat lobortis dui dapibus non. Nullam a laoreet urna, molestie consectetur nisi.In the dynamic world of startups, a launch strategy acts as the orchestrated blueprint to navigate the complexities</p>
                     <blockquote className="td-blog-sidebar-blockquote p-relative mb-60 d-flex">
                        <img className="td-blog-sidebar-blockquote-shape d-none d-lg-block" src="/assets/img/blog/sidebar/shape.png" alt="" />
                        <span className="d-inline-block mt-10 mr-30">
                           <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M44 1.05264L39.9691 0L25.2477 37.0175L28.0518 40L41.1959 36.8421L44 1.05264Z" fill="#1C1D1F" />
                              <path d="M18.7523 1.05264L14.7214 0L0 37.0175L2.80408 40L15.9482 36.8421L18.7523 1.05264Z" fill="#1C1D1F" />
                           </svg>
                        </span>
                        <div className="td-blog-sidebar-blockquote-text">
                           <h4 className="mb-20">We're committed to changing the way of mobile UX. We believe that mobile UX has the power to make a real difference in people's lives.</h4>
                           <p><span>Ralph Edwards</span> New York</p>
                        </div>
                     </blockquote>
                     <div className="row mb-30">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                           <div className="td-blog-sidebar-thumb mb-30">
                              <img src="/assets/img/blog/sidebar/thumb-2.jpg" alt="" />
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                           <div className="td-blog-sidebar-thumb mb-30">
                              <img src="/assets/img/blog/sidebar/thumb-3.jpg" alt="" />
                           </div>
                        </div>
                     </div>
                     <h3 className="td-blog-sidebar-title mb-20">Price & Cost Management</h3>
                     <p className="td-blog-sidebar-para mb-70">To conclude, we can't fail to mention one of the most defining elements when hiring digital product designers - pricing. Sure, it is a well-known fact that agencies are the more expensive option. For some companies, working with freelance product designers could be way more appealing due to their budget-friendly costs.</p>
                     <div className="td-blog-sidebar-tag d-flex justify-content-between">
                        <div className="td-blog-sidebar-tag-list mb-10">
                           <Link to="#">design</Link>
                           <Link to="#">development</Link>
                           <Link to="#">Research</Link>
                           <Link to="#">Life</Link>
                        </div>
                        <div className="td-blog-sidebar-social mb-20">
                           <Link className="twitter" to="#">
                              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z" fill="currentColor" />
                              </svg>
                           </Link>
                           <Link className="facebook" to="#">
                              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z" fill="currentColor" />
                              </svg>
                           </Link>
                           <Link className="instsgram" to="#">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M11.8477 4.15039H11.8577" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                           </Link>
                           <Link to="#">
                              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <rect width="34" height="34" rx="4" fill="#F5F5F5" />
                                 <path d="M15.7969 17.604C16.0563 17.9508 16.3872 18.2377 16.7673 18.4454C17.1473 18.653 17.5675 18.7765 17.9995 18.8074C18.4315 18.8383 18.865 18.776 19.2708 18.6247C19.6765 18.4733 20.045 18.2364 20.3511 17.9302L22.1632 16.1181C22.7133 15.5485 23.0177 14.7857 23.0108 13.9938C23.0039 13.202 22.6863 12.4445 22.1264 11.8846C21.5664 11.3246 20.809 11.007 20.0171 11.0001C19.2253 10.9932 18.4624 11.2976 17.8928 11.8478L16.8539 12.8806" stroke="#6F7071" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M18.2141 16.396C17.9547 16.0492 17.6237 15.7623 17.2437 15.5546C16.8636 15.347 16.4434 15.2235 16.0114 15.1926C15.5795 15.1617 15.1459 15.224 14.7402 15.3753C14.3344 15.5267 13.966 15.7635 13.6598 16.0698L11.8478 17.8819C11.2976 18.4514 10.9932 19.2143 11.0001 20.0062C11.007 20.798 11.3246 21.5555 11.8846 22.1154C12.4445 22.6754 13.202 22.993 13.9938 22.9999C14.7857 23.0068 15.5485 22.7024 16.1181 22.1522L17.151 21.1194" stroke="#6F7071" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                           </Link>
                        </div>
                     </div>

                     <div className="td-blog-details-author-bottom mt-40">
                        <div className="row">
                           <div className="col-lg-4 col-md-4">
                              <div className="td-blog-details-author-bottom-thumb h-100">
                                 <img src="/assets/img/blog/blog-details/thumb.jpg" alt="" />
                              </div>
                           </div>
                           <div className="col-lg-8 col-md-8">
                              <div className="td-blog-details-author-bottom-content">
                                 <h5 className="mb-15 mt-20">Donal Braun</h5>
                                 <p>Lorem ipsum dolor sit amet, consetetur sadipscing
                                    diam nonumy eirmod tempor.!</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="td-blog-details-pagenation td-portfolio-identity-navigation d-flex justify-content-between pt-45 align-items-center">
                        <span className="td-blog-details-prev">
                           <i className="fa-solid fa-arrow-left mr-10"></i>
                           Prev
                        </span>
                        <div className="td-portfolio-identity-border"></div>
                        <span className="td-blog-details-next">
                           Next
                           <i className="fa-solid fa-arrow-right ml-10"></i>
                        </span>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <Sidebar />
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogSidebarArea
