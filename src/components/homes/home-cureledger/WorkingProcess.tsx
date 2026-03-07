import React, { type JSX, useRef } from "react";
import useGsapAnimation from "../../../hooks/useGsapAnimation";

interface DataType {
   id: number;
   count: string;
   title: JSX.Element;
   list: string[];
}

const process_list: DataType[] = [
   {
      id: 1,
      count: "01",
      title: (<>Insurance & <br /> <span>Verifying</span></>), // Matched length
      list: ["Patient data validations", "Benefit breakdown", "Deductible check"], // 24, 17, 16 chars
   },
   {
      id: 2,
      count: "02",
      title: (<>Billing & <br /> <span>Submissions</span></>), // Matched length
      list: ["Accurate coding strategy", "Daily claim sends", "Attachment rules"], // 24, 17, 16 chars
   },
   {
      id: 3,
      count: "03",
      title: (<>Appeals & <br /> <span>Denial Management</span></>), // Matched length
      list: ["Relentless A/R follow-up", "Swift claim fixes", "Payment tracking"], // 24, 17, 16 chars
   },
   {
      id: 4,
      count: "04",
      title: (<>Account & <br /> <span>Ledger</span></>), // Matched length
      list: ["Precise cash posting log", "EFT reconcile log", "Patient balances"], // 24, 17, 16 chars
   },
];

const WorkingProcess = () => {
   
   const triggerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
   const pinRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
   useGsapAnimation({
      triggerRef,
      pinRef,
   });

   return (
      <div className="td-process-area pt-130 pb-160">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="td-service-title-wrap pb-10">
                     <h2 className="td-section-title mb-0 td-text-invert">Revenue</h2>
                     <h3 className="td-section-title-capi td-text-invert">Process</h3>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="td-process-border td-fixed-thumb-wrap" ref={triggerRef}>
               <div className="row">
                  <div className="col-lg-3">
                     <div className="td-process-thumb pt-80 pb-80 td-fixed-thumb" ref={pinRef}>
                        {/* You can replace this thumb.jpg with a CureLedger dashboard or medical image */}
                        <img src="https://media.istockphoto.com/id/2248847209/photo/female-doctor-smiling-standing-with-crossed-arms.webp?a=1&b=1&s=612x612&w=0&k=20&c=vvPNoiynu1OvC7xRJVMtMd8T0waSyW0mAm5QwANh5IM=" alt="RCM Process" />
                     </div>
                  </div>
                  <div className="col-lg-9">
                     {process_list.map((item) => (
                        <div key={item.id} className="row">
                           <div className="col-lg-2 col-md-3 col-3">
                              <div className="td-process-count">
                                 <span>{item.count}</span>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-4 col-9">
                              <div className="td-process-title">
                                 <h3 className="mb-0">{item.title}</h3>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-5">
                              <div className="td-process-list">
                                 <ul>
                                    {item.list.map((list, i) => (
                                       <li key={i}>{list}</li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default WorkingProcess