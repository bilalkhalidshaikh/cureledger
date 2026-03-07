import { Link } from "react-router-dom";

interface DataType {
   id: number;
   class?:string;
   thumb: string;
   title: string;
}

const service_data: DataType[] = [
   {
      id: 1,
      class:"pt-80",
      thumb: "/assets/img/service/service-5/service.jpg",
      title: " MOTION GRAPHICS AND ANIMATION"
   },
   {
      id: 2,
      thumb: "/assets/img/service/service-5/service-2.jpg",
      title: "INTERACTIVE AND UI/UX DESIGN"
   },
   {
      id: 3,
      thumb: "/assets/img/service/service-5/service-3.jpg",
      title: " BRANDING AND IDENTITY"
   },
   {
      id: 4,
      thumb: "/assets/img/service/service-5/service-4.jpg",
      title: "WEBSITE DEVELOPEMENT"
   },
];

const formatSerial = (num: number): string => {
   return `${num < 10 ? `0${num}` : num}`;
};

const Service = () => {
   return (
      <div className="td-service-area pt-150">
         <div className="container">
            <div className="row align-items-end">
               <div className="col-lg-8">
                  <div className="td-title-anim">
                     <h2 className="td-section-5-title">DIGITAL EXPERIENCE BY <span>OUR PROFESSIONAL</span> TEAM</h2>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="td-service-5-btn mb-30 text-lg-end">
                     <Link to="/service" className="td-btn-5 td-btn-5-border">
                        Explore us <br /> More<br />
                        <span>
                           <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.7767 7.74985C15.9198 7.90198 16 8.10745 16 8.32158C16 8.5357 15.9198 8.74117 15.7767 8.89332L8.92138 16.1152C8.77516 16.2625 8.58094 16.3451 8.37867 16.3459C8.27759 16.3454 8.17746 16.3251 8.08351 16.2857C7.94489 16.2244 7.8266 16.1211 7.74358 15.989C7.66056 15.8569 7.61651 15.7019 7.61698 15.5435V9.12402H0.761697C0.559684 9.12402 0.365942 9.03948 0.223096 8.88899C0.0802502 8.73849 0 8.5344 0 8.32158C0 8.10876 0.0802502 7.90465 0.223096 7.75418C0.365942 7.60368 0.559684 7.51915 0.761697 7.51915H7.61698V1.09965C7.61651 0.941235 7.66056 0.786211 7.74358 0.654123C7.8266 0.522033 7.94489 0.418789 8.08351 0.357402C8.2242 0.29959 8.37756 0.284923 8.52585 0.3151C8.67412 0.345276 8.81125 0.419062 8.92138 0.52792L15.7767 7.74985Z" fill="#2D2D2D" />
                           </svg>
                        </span>
                     </Link>
                  </div>
               </div>
               {service_data.map((item, i) => (
                  <div key={item.id} className="col-12">
                     <div className={`td-service-5-wrapper border-b ${item.class}`}>
                        <div className="row align-items-center">
                           <div className="col-lg-7">
                              <div className="td-service-5-content">
                                 <h4 className="mb-10"><span>{formatSerial(i + 1)}</span> <Link to="/service-details">{item.title}</Link></h4>
                              </div>
                           </div>
                           <div className="col-lg-5">
                              <div className="td-service-5-thumb text-lg-end mb-15">
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
   )
}

export default Service
