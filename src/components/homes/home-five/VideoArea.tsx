
const VideoArea = () => {
   return (
      <div className="td-video-area pt-20">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="td-video-5-title-wrap mb-45 p-relative">
                     <img className="td-video-5-shape d-none d-lg-block" src="/assets/img/video/video-5/shape.png" alt="" />
                     <h2 className="td-section-5-bigtitle td-title-anim">  INNOVATION <span className="ml-200">CULTURE</span></h2>
                  </div>
               </div>
            </div>
         </div>
         <div className="td-video-5-wrap p-relative">
            <video loop muted autoPlay playsInline>
               <source src="https://themedox.com/videos/parody-video.mp4" type="video/mp4" />
            </video>

            <div className="td-video-4-wrap td-video-5-content d-flex align-items-center">
               <img className="mr-40" src="/assets/img/video/video-5/shape-2.png" alt="" />
               <p className="mb-0">Welcome to our world, where every<br />
                  shot is a piece of art, and every<br />
                  client’s story is uniquely</p>
            </div>
         </div>
      </div>
   )
}

export default VideoArea
