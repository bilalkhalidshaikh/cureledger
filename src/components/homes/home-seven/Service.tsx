import { Link } from "react-router-dom";
import type { JSX } from "react";
import SplitTextWrapper from "../../common/SplitTextWrapper";

interface DataType {
   id: number;
   title: JSX.Element;
   list: string[];
}

const service_data: DataType[] = [
   {
      id: 1,
      title: (<>Interaction<br /> Design</>),
      list: ["UI/UX Design", "Research", "Mobile & WebApp"],
   },
   {
      id: 2,
      title: (<>USER<br /> EXPEREINCE</>),
      list: ["UI/UX Design", "Research", "Mobile & WebApp"],
   },
   {
      id: 3,
      title: (<>BRANDING <br /> STAND OUT</>),
      list: ["UI/UX Design", "Research", "Mobile & WebApp"],
   },
   {
      id: 4,
      title: (<>DIGITAL <br /> MARKETING</>),
      list: ["UI/UX Design", "Research", "Mobile & WebApp"],
   },
];

const Service = () => {
   return (
      <div className="td-service-area  td-service-7-spacing td-service-7-bg pb-160">
         <div className="container">
            <div className="row">
               <div className="col-lg-7">
                  <div className="td-service-7-title-wrap">
                     <h2 className="td-section-7-title td-section-7-title-white mb-75 td-split-text td-split-in-right">
                        <SplitTextWrapper direction="right">
                           Explore a Universe Where Ideas Shape Tomorrow
                        </SplitTextWrapper>
                     </h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-5">
                  <div className="td-service-7-btn pb-30 wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1s">
                     <Link className="td-btn-7" to="/service">Explore Services <img className="ml-5" src="/assets/img/service/service-7/icon.png" alt="" /></Link>
                     <div className="d-none d-lg-block pt-20 ml-40">
                        <img src="/assets/img/service/service-7/angle.png" alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-7 wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1s">
                  {service_data.map((item) => (
                     <div key={item.id} className="td-service-7-list-wrap">
                        <div className="row">
                           <div className="col-lg-8 col-md-7 col-sm-7">
                              <div className="td-service-7-list-title mb-20">
                                 <span>01</span>
                                 <h5><Link to="/service-details">{item.title}</Link></h5>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-5 col-sm-5">
                              <div className="td-service-7-list mb-20">
                                 <ul>
                                    {item.list.map((list, i) => (
                                       <li key={i}>+ {list}</li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Service
