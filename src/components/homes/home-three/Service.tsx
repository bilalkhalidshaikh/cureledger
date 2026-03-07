import { Link } from "react-router-dom"
import type { JSX } from "react";

const formatSerial = (num: number): string => {
   return `S/${num < 10 ? `0${num}` : num}`;
};

const service_data: JSX.Element[] = [
   (<>Product<br /> design</>), (<>Web <br /> application</>), (<>Store<br /> ecommerce</>),
   (<>Digital <br /> marketing</>), (<>Digital <br /> consulting</>), (<>Web <br /> development</>),
]

const Service = () => {
   return (
      <div className="td-service-3-area pt-150 pb-130 grey-bg-3">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8">
                  <div className="td-service-3-title-wrap ml-60 mb-80 p-relative wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                     <img className="td-service-3-ok" src="/assets/img/service/ok.png" alt="" />
                     <h2 className="td-section-3-title">Cureledger is an award <br /> winning creative digital
                        studio with <span className="italic-style">visual designers</span></h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {service_data.map((item, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                     <div className="td-service-3-wrap mb-30  wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                        <div className="td-service-3-shape">
                           <svg width="88" height="12" viewBox="0 0 88 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.5 0H10.5L3 11.5H0L7.5 0Z" fill="currentColor" />
                              <path d="M14.5 0H17.5L10 11.5H7L14.5 0Z" fill="currentColor" />
                              <path d="M21.5 0H24.5L17 11.5H14L21.5 0Z" fill="currentColor" />
                              <path d="M28.5 0H31.5L24 11.5H21L28.5 0Z" fill="currentColor" />
                              <path d="M35.5 0H38.5L31 11.5H28L35.5 0Z" fill="currentColor" />
                              <path d="M42.5 0H45.5L38 11.5H35L42.5 0Z" fill="currentColor" />
                              <path d="M49.5 0H52.5L45 11.5H42L49.5 0Z" fill="currentColor" />
                              <path d="M56.5 0H59.5L52 11.5H49L56.5 0Z" fill="currentColor" />
                              <path d="M63.5 0H66.5L59 11.5H56L63.5 0Z" fill="currentColor" />
                              <path d="M70.5 0H73.5L66 11.5H63L70.5 0Z" fill="currentColor" />
                              <path d="M77.5 0H80.5L73 11.5H70L77.5 0Z" fill="currentColor" />
                              <path d="M84.5 0H87.5L80 11.5H77L84.5 0Z" fill="currentColor" />
                           </svg>
                        </div>
                        <div className="td-service-3-content d-flex justify-content-between align-items-center">
                           <h3><Link to="/service-details">{item}</Link></h3>
                           <span>{formatSerial(i + 1)}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Service
