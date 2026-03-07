import { Link } from "react-router-dom"
import blog_data from "../../../data/BlogData";
import { useMemo } from "react";

interface DataType {
   style?: boolean;
}

const Blog = ({ style }: DataType) => {

   const filteredData = useMemo(() => {
      return blog_data.filter((items) => items.page === "blog_1");
   }, []);

   return (
      <div className={`td-blog-area pt-120 pb-130 ${style ? "" : "grey-bg-2"}`}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="mb-60">
                     <h2 className="td-testimonial-title">Related <span>articles</span></h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {filteredData.slice(0, 3).map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                     <div className="td-blog-wrap mb-60">
                        <div className="td-blog-thumb fix mb-25">
                           <img className="w-100" src={item.thumb} alt="" />
                        </div>
                        <div className="td-blog-content">
                           <h3 className="td-blog-title mb-30"><Link to="/blog-details">{item.title}</Link></h3>
                           <div className="td-blog-cetagory d-flex align-items-center">
                              <span className="cetagory">{item.tag}</span>
                              <span className="td-border ml-20 mr-15 d-inline-block"></span>
                              <span className="dates">{item.date}</span>
                           </div>
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
