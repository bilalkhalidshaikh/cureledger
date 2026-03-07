import { Link } from "react-router-dom"
import blog_data from "../../../data/BlogData"
import { useMemo } from "react";

const Blog = () => {

   const filteredData = useMemo(() => {
      return blog_data.filter((items) => items.page === "home_7");
   }, []);

   return (
      <div className="td-blog-area pt-155 td-blog-7-bg pb-160">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="td-blog-7-title-wrap text-center mb-60">
                     <span className="td-section-6-subtitle td-section-7-subtitle mb-20 d-inline-block">BLOG & ARTICLES</span>
                     <h2 className="td-section-7-title mb-20 td-split-text td-split-in-right">READ LATEST NEWS</h2>
                  </div>
               </div>
               <div className="col-12">
                  {filteredData.map((item) => (
                     <div key={item.id} className="td-blog-7-wrap wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                        <div className="row">
                           <div className="col-lg-3 col-md-5">
                              <div className="td-blog-7-title mb-30">
                                 <h5 className="titles mb-5">{item.name}</h5>
                                 <span className="dates mb-30">{item.date}</span>
                                 <Link to="#" className="tag">{item.tag}</Link>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-7">
                              <div className="mb-30">
                                 <h2 className="td-blog-7-bigtitle"><Link to="/blog-details">{item.title}</Link></h2>
                              </div>
                           </div>
                           <div className="col-lg-5">
                              <div className="text-lg-end">
                                 <div className="td-blog-7-thumb mb-30">
                                    <img src={item.thumb} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Blog
