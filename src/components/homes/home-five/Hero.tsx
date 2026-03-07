import { Link } from "react-router-dom"

const Hero = () => {
   return (
      <div className="td-hero-area td-hero-spacing td-btn-trigger">
         <div className="container">
            <div className="td-hero-5-top pb-85">
               <div className="row align-items-end">
                  <div className="col-xl-10">
                     <div className="td-hero-5-title-wrap p-relative z-index-1  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                        <img className="td-hero-5-shape d-none d-xl-block" src="/assets/img/hero/hero-5/shape.png" alt="" />
                        <h2 className="td-hero-5-title ">Transforming ideas
                           into <img className="d-none d-lg-inline-block" src="/assets/img/hero/hero-5/eye-shape.png" alt="" /> <span>stunning
                              digital </span> realities</h2>
                     </div>
                  </div>
                  <div className="col-xl-2">
                     <div className="td-hero-5-btn mb-30 text-xl-end td-btn-bounce">
                        <Link to="/contact" className="td-btn-5">
                           Learn <br /> Cureledger<br />
                           <span>
                              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M15.7767 7.74985C15.9198 7.90198 16 8.10745 16 8.32158C16 8.5357 15.9198 8.74117 15.7767 8.89332L8.92138 16.1152C8.77516 16.2625 8.58094 16.3451 8.37867 16.3459C8.27759 16.3454 8.17746 16.3251 8.08351 16.2857C7.94489 16.2244 7.8266 16.1211 7.74358 15.989C7.66056 15.8569 7.61651 15.7019 7.61698 15.5435V9.12402H0.761697C0.559684 9.12402 0.365942 9.03948 0.223096 8.88899C0.0802502 8.73849 0 8.5344 0 8.32158C0 8.10876 0.0802502 7.90465 0.223096 7.75418C0.365942 7.60368 0.559684 7.51915 0.761697 7.51915H7.61698V1.09965C7.61651 0.941235 7.66056 0.786211 7.74358 0.654123C7.8266 0.522033 7.94489 0.418789 8.08351 0.357402C8.2242 0.29959 8.37756 0.284923 8.52585 0.3151C8.67412 0.345276 8.81125 0.419062 8.92138 0.52792L15.7767 7.74985Z" fill="#2D2D2D" />
                              </svg>
                           </span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="td-hero-5-bottom-thumb fix">
            <img data-speed="0.6" className="w-100 round-2" src="/assets/img/hero/hero-5/thumb.png" alt="" />
         </div>
      </div>
   )
}

export default Hero
