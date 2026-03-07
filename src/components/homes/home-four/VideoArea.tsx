import { useVideoPopup } from "../../../hooks/useVideoPopup";
import VideoPopup from "../../../modals/VideoPopup";

const VideoArea = () => {

   const { isVideoOpen, openVideo, closeVideo } = useVideoPopup();

   return (
      <>
         <div className="td-video-area p-relative fix include-bg" style={{ backgroundImage: `url(/assets/img/video/bg.jpg)` }}>
            <div className="container-fluid p-0">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="td-video-4-wrap d-flex align-items-center">
                        <a style={{ cursor: "pointer" }} onClick={openVideo} className="td-video-play popup-video tg-pulse-border mr-40">
                           <span className="p-relative z-index-11">
                              <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M17.3616 8.34455C19.0412 9.31425 19.0412 11.7385 17.3616 12.7082L4.13504 20.3445C2.45548 21.3142 0.356021 20.1021 0.356021 18.1627L0.356022 2.89C0.356022 0.950609 2.45548 -0.261512 4.13504 0.708185L17.3616 8.34455Z" fill="currentColor" />
                              </svg>
                           </span>
                        </a>
                        <h4 className="td-video-4-title mb-0">DATA INFORM<br />
                           EMOTION<br />
                           SIMPLICITY</h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <VideoPopup isOpen={isVideoOpen} onClose={closeVideo} videoId="eEzD-Y97ges" />
      </>
   )
}

export default VideoArea
