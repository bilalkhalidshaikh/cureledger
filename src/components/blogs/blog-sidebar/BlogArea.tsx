const BlogArea = () => {
   return (
      <div className="td-blog-hero-area td-blog-hero-spacing include-bg" style={{ backgroundImage: `url(/assets/img/blog/sidebar/thumb.jpg)` }}>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="td-blog-hero-content">
                     <p className="td-blog-hero-subtitle mb-5  wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1s"><span>Creative </span> 15 NOV, 2024</p>
                     <h2 className="td-blog-hero-title mb-45  wow fadeInLeft" data-wow-delay=".7s" data-wow-duration="1s">Focuses on technology<br /> driven <span>solutions</span></h2>
                     <div className="td-blog-hero-author  wow fadeInLeft" data-wow-delay=".9s" data-wow-duration="1s">
                        <img src="/assets/img/blog/sidebar/avatar.png" alt="" />
                        <span>Rosalina Dmaria</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogArea
