import { useEffect, useState } from "react";
import faq_data from "../../../data/FaqData";

interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
}

const Faq = () => {

   const [faqData, setFaqData] = useState<DataType[]>([]);

   useEffect(() => {
      const filtered = faq_data.filter(item => item.page === "home_2");
      const updatedData = filtered.map((item, index) => ({
         ...item,
         showAnswer: index === 1
      }));
      setFaqData(updatedData);
   }, []);

   const toggleAnswer = (faqId: number) => {
      setFaqData((prevFaqData) =>
         prevFaqData.map((faq) => ({
            ...faq,
            showAnswer: faq.id === faqId
         }))
      );
   };

   return (
      <div className="td-faq-2-area pt-160">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="td-faq-2-thumb mb-30 wow fadeInLeft fix td-rounded-10" data-wow-delay=".5s" data-wow-duration="1s">
                     <img data-speed=".9" className="td-rounded-10" src="/assets/img/faq/faq-2/thumb.jpg" alt="" />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="td-faq-4-wrap-right td-faq-2-wrap-right mb-30 wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1s">
                     <div className="td-service-2-title-wrap">
                        <span className="td-section-2-subtitle mb-25 d-block">//  Our faq’s</span>
                        <h2 className="td-section-2-title d-inline-block">Frequently asked <span>questions</span></h2>
                     </div>
                     <div className="td-faq-4-accordion">
                        <div className="accordion" id="accordionExample">
                           {faqData.map((item) => (
                              <div key={item.id} className="accordion-items">
                                 <h2 className="accordion-header" onClick={() => toggleAnswer(item.id)}>
                                    <button className={`accordion-buttons ${item.showAnswer ? "" : "collapsed"} `} type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                       {item.title}
                                       <span className="plus-icon"></span>
                                    </button>
                                 </h2>
                                 <div id="collapseOne" className={`accordion-collapse collapse ${item.showAnswer ? "show" : ""}`}>
                                    <div className="accordion-body">
                                       <p>
                                          {item.desc}
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Faq
