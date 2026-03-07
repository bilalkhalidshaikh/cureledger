import type { JSX } from "react";
import SplitTextWrapper from "../../common/SplitTextWrapper";
import Count from "../../common/Count";

interface DataType {
   id: number;
   shape: string;
   count: number;
   count_text: string;
   title: JSX.Element;
}

const counter_data: DataType[] = [
   {
      id: 1,
      shape: "/assets/img/counter/shape.png",
      count: 11,
      count_text: "+",
      title: (<>Years of<br /> experience</>),
   },
   {
      id: 2,
      shape: "/assets/img/counter/shape.png",
      count: 25,
      count_text: "k",
      title: (<>Paid<br /> customers</>),
   },
   {
      id: 3,
      shape: "/assets/img/counter/shape-2.png",
      count: 99,
      count_text: "%",
      title: (<>Satisfaction <br /> rate</>),
   },
];

const Counter = () => {
   return (
      <div className="td-counter-3-area grey-bg-3 pt-155 pb-130">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-7 col-lg-10">
                  <div className="td-counter-3-title-wrap text-center mb-70">
                     <span className="td-section-3-subtitle d-inline-block mb-15">OUR STATE</span>
                     <h2 className="td-section-3-title td-split-text td-split-in-right">
                        <SplitTextWrapper direction="right">
                           Bundle with our digital studio <span className="italic-style">experience</span>
                        </SplitTextWrapper>
                     </h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {counter_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                     <div className="td-counter-3-item p-relative mb-30 wow fadeInRight" data-wow-delay=".7s" data-wow-duration="1s">
                        <span className="td-counter-3-shape">
                           <img src={item.shape} alt="" />
                        </span>
                        <h2 className="title"><span className="odometer" data-count="11"> <Count number={item.count} /> </span>{item.count_text}</h2>
                        <span className="para">{item.title}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Counter
