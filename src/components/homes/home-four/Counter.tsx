import type { JSX } from "react";
import Count from "../../common/Count";

interface DataType {
   id: number;
   count: number;
   count_text: string;
   title: JSX.Element;
}

const counter_data: DataType[] = [
   {
      id: 1,
      count: 970,
      count_text: "+",
      title: (<>Projects<br /> completed</>),
   },
   {
      id: 2,
      count: 18,
      count_text: "k",
      title: (<>Years of <br /> experience</>),
   },
   {
      id: 3,
      count: 120,
      count_text: "+",
      title: (<>Happy <br /> customers</>),
   },
   {
      id: 4,
      count: 25,
      count_text: "+",
      title: (<>Award <br /> winning</>),
   },
];

const formatSerial = (num: number): string => {
   return `${num < 10 ? `0${num}` : num}`;
};

const Counter = () => {
   return (
      <div className="td-counter-area pt-10 pb-180">
         <div className="container">
            <div className="row gx-0">
               {counter_data.map((item, i) => (
                  <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                     <div className="td-counter-4-item p-relative">
                        <h2 className="title mb-135"><span className="odometer" data-count="970"><Count number={item.count} /></span>{item.count_text}</h2>
                        <div className="d-flex align-items-center justify-content-between">
                           <h5 className="position">{formatSerial(i + 1)}</h5>
                           <span className="para">{item.title}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Counter
