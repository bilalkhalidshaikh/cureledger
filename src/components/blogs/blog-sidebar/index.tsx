import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeaderTwo from "../../../layouts/headers/InnerHeaderTwo"
import Blog from "./Blog"
import BlogArea from "./BlogArea"
import BlogComment from "./BlogComment"
import BlogSidebarArea from "./BlogSidebarArea"

const BlogSidebar = () => {
   return (
      <>
         <InnerHeaderTwo />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <BlogArea />
                  <BlogSidebarArea />
                  <Blog />
                  <BlogComment />
               </main>
               <FooterOne />
            </div>
         </div>
      </>
   )
}

export default BlogSidebar
