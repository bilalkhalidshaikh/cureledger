import type { JSX } from "react";
import Count from "../../common/Count";

interface DataType {
   id: number;
   count: number;
   title: JSX.Element;
}

const counter_data: DataType[] = [
   {
      id: 1,
      count: 970,
      title: (<>Projects<br /> completed</>),
   },
   {
      id: 2,
      count: 18,
      title: (<>Years of <br /> experience</>),
   },
   {
      id: 3,
      count: 120,
      title: (<>Happy <br /> customers</>),
   },
   {
      id: 4,
      count: 25,
      title: (<>Award <br /> winning</>),
   },
];

const Counter = () => {
   return (
      <div className="td-counter-area td-counter-2-wrap pt-10 pb-160">
         <div className="container">
            <div className="row gx-0">
               {counter_data.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                     <div className="td-counter-4-item p-relative">
                        <h2 className="title mb-135"><span className="odometer" data-count="970"><Count number={item.count} /> </span>+</h2>
                        <div className="d-flex align-items-center justify-content-between">
                           <h5 className="position">0{item.id}</h5>
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
