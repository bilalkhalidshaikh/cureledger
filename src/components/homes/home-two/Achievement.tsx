import type { JSX } from "react";
import { Link } from "react-router-dom";

interface DataType {
   id: number;
   icon: string;
   title: JSX.Element;
}

const achievement_data: DataType[] = [
   {
      id: 1,
      icon: "/assets/img/achivment/icon.png",
      title: (<>100% Job Success on <br />Upwork</>),
   },
   {
      id: 2,
      icon: "/assets/img/achivment/icon-2.png",
      title: (<>5 Stars Rating on<br />  GoodFirms</>),
   },
   {
      id: 3,
      icon: "/assets/img/achivment/icon-3.png",
      title: (<>Top 100 Global Companies<br /> on Clutch</>),
   },
   {
      id: 4,
      icon: "/assets/img/achivment/icon-4.png",
      title: (<>#1 Team in the world<br /> on Dribbble</>),
   },
];

const Achievement = () => {
   return (
      <div className="td-achievement-area include-bg pt-155 pb-130" style={{ backgroundImage: `url(/assets/img/achivment/bg.jpg)` }}>
         <div className="container">
            <div className="row justify-content-center mb-60">
               <div className="col-xl-8 col-lg-10">
                  <div className="td-achievement-title-wrap text-center mb-60 td-title-anim">
                     <span className="td-section-2-subtitle mb-30 d-block">//  Cureledger working process</span>
                     <h2 className="td-section-2-title d-inline-block mb-30">Amazing interactive design
                        and user experience for
                        better <span>productivity</span></h2>
                     <div className="td-btn-group justify-content-center  td-btn-group-yellow">
                        <Link className="td-btn-circle" to="/contact">
                           <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link className="td-btn-2 td-btn-primary" to="/contact">LET’S GET CONNECTED</Link>
                        <Link className="td-btn-circle" to="/contact">
                           <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               {achievement_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6 cil-sm-6 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                     <div className="td-achievement-item text-center mb-30">
                        <img className="mb-20" src={item.icon} alt="" />
                        <p>{item.title}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Achievement
