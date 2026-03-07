import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import Cta from "../../common/Cta"
import BlogArea from "./BlogArea"
import BlogThumb from "./BlogThumb"

const BlogOne = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <BlogThumb />
                  <BlogArea />
                  <Cta />
               </main>
               <FooterOne style={true} />
            </div>
         </div>
      </>
   )
}

export default BlogOne
