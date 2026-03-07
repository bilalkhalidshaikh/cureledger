import Breadcrumb from "./Breadcrumb"
import BlogDetailsArea from "./BlogDetailsArea"
import Blog from "../blog-sidebar/Blog"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import FooterOne from "../../../layouts/footers/FooterOne"

const BlogDetails = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <Breadcrumb />
                  <BlogDetailsArea />
                  <Blog style={true} />
               </main>
               <FooterOne style={false} />
            </div>
         </div>
      </>
   )
}

export default BlogDetails
