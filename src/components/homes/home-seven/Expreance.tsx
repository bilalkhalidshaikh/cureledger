import SplitTextWrapper from "../../common/SplitTextWrapper";

interface DataType {
   id: number;
   icon: string;
   title: number;
   skill: string;
}

const skill_data: DataType[] = [
   {
      id: 1,
      icon: "/assets/img/expreance/wordpress.png",
      title: 85,
      skill: "WORDPRESS",
   },
   {
      id: 2,
      icon: "/assets/img/expreance/figma.png",
      title: 95,
      skill: "FIGMA",
   },
   {
      id: 3,
      icon: "/assets/img/expreance/webflow.png",
      title: 75,
      skill: "WEBFLOW",
   },
   {
      id: 4,
      icon: "/assets/img/expreance/wordpress.png",
      title: 65,
      skill: "ANGULAR",
   },
];

const Expreance = () => {
   return (
      <div className="td-expreance-area pb-130">
         <div className="container">
            <div className="row align-items-end">
               <div className="col-lg-7 mb-30">
                  <div className="td-expreance-7-icon-wrap">
                     <span className="td-section-6-subtitle td-section-7-subtitle mb-20 d-inline-block">SKILL AND EXPERIENCE</span>
                     <h2 className="td-section-7-title mb-20 td-split-text td-split-in-right">
                        <SplitTextWrapper direction="right">
                           Have excellent experience
                        </SplitTextWrapper>
                     </h2>
                     <div className="td-expreance-7-icon pt-190  wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1s">
                        {skill_data.map((item) => (
                           <div key={item.id} className="td-expreance-7-icon-inner mb-20 h-100 text-center">
                              <img className="mb-25" src={item.icon} alt="" />
                              <h5 className="title mb-0">{item.title}%</h5>
                              <span className="skill">{item.skill}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="td-expreance-right-wrap mb-30  wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1s">
                     <div className="td-expreance-7-item d-flex justify-content-between align-items-end">
                        <div className="td-expreance-7-content mr-30">
                           <h5 className="title">Android studio</h5>
                           <span className="positions">Junior product designer</span>
                        </div>
                        <div className="td-expreance-7-year text-end">
                           <span>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M14.4248 0.792132C14.644 0.760549 14.8411 0.816981 14.9732 0.949084C15.1053 1.08119 15.1618 1.27829 15.1302 1.49758L13.5769 11.9618C13.5396 12.1809 13.4203 12.402 13.2435 12.5799C13.1546 12.6681 13.0544 12.7434 12.9477 12.8014C12.7884 12.8851 12.621 12.9251 12.4667 12.9163C12.3124 12.9076 12.1782 12.8506 12.0809 12.7525L8.12043 8.79201L2.11165 14.8008C1.93459 14.9779 1.71262 15.0955 1.49456 15.1279C1.27651 15.1602 1.08026 15.1047 0.948955 14.9734C0.817663 14.8421 0.76208 14.6458 0.794451 14.4278C0.826812 14.2097 0.944479 13.9877 1.12155 13.8107L7.13032 7.8019L3.16988 3.84146C3.07173 3.74414 3.0147 3.60988 3.00598 3.45562C2.99726 3.30136 3.03725 3.13398 3.12088 2.9746C3.20853 2.81562 3.3339 2.67215 3.48249 2.56079C3.63107 2.44945 3.7968 2.37477 3.96048 2.3454L14.4248 0.792132Z" fill="#756C63" />
                              </svg>
                           </span>
                           <span className="year d-block">2014-2015</span>
                        </div>
                     </div>
                     <div className="td-expreance-7-item d-flex justify-content-between align-items-end">
                        <div className="td-expreance-7-content mr-30">
                           <h5 className="title">Slick Ui/Ux agency</h5>
                           <span className="positions">Product development</span>
                        </div>
                        <div className="td-expreance-7-year text-end">
                           <span>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M14.4248 0.792132C14.644 0.760549 14.8411 0.816981 14.9732 0.949084C15.1053 1.08119 15.1618 1.27829 15.1302 1.49758L13.5769 11.9618C13.5396 12.1809 13.4203 12.402 13.2435 12.5799C13.1546 12.6681 13.0544 12.7434 12.9477 12.8014C12.7884 12.8851 12.621 12.9251 12.4667 12.9163C12.3124 12.9076 12.1782 12.8506 12.0809 12.7525L8.12043 8.79201L2.11165 14.8008C1.93459 14.9779 1.71262 15.0955 1.49456 15.1279C1.27651 15.1602 1.08026 15.1047 0.948955 14.9734C0.817663 14.8421 0.76208 14.6458 0.794451 14.4278C0.826812 14.2097 0.944479 13.9877 1.12155 13.8107L7.13032 7.8019L3.16988 3.84146C3.07173 3.74414 3.0147 3.60988 3.00598 3.45562C2.99726 3.30136 3.03725 3.13398 3.12088 2.9746C3.20853 2.81562 3.3339 2.67215 3.48249 2.56079C3.63107 2.44945 3.7968 2.37477 3.96048 2.3454L14.4248 0.792132Z" fill="#756C63" />
                              </svg>
                           </span>
                           <span className="year d-block">2015-2020</span>
                        </div>
                     </div>
                     <div className="td-expreance-7-item d-flex justify-content-between align-items-end">
                        <div className="td-expreance-7-content mr-30">
                           <h5 className="title">Apple studio</h5>
                           <span className="positions">Designer</span>
                        </div>
                        <div className="td-expreance-7-year text-end">
                           <span>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M14.4248 0.792132C14.644 0.760549 14.8411 0.816981 14.9732 0.949084C15.1053 1.08119 15.1618 1.27829 15.1302 1.49758L13.5769 11.9618C13.5396 12.1809 13.4203 12.402 13.2435 12.5799C13.1546 12.6681 13.0544 12.7434 12.9477 12.8014C12.7884 12.8851 12.621 12.9251 12.4667 12.9163C12.3124 12.9076 12.1782 12.8506 12.0809 12.7525L8.12043 8.79201L2.11165 14.8008C1.93459 14.9779 1.71262 15.0955 1.49456 15.1279C1.27651 15.1602 1.08026 15.1047 0.948955 14.9734C0.817663 14.8421 0.76208 14.6458 0.794451 14.4278C0.826812 14.2097 0.944479 13.9877 1.12155 13.8107L7.13032 7.8019L3.16988 3.84146C3.07173 3.74414 3.0147 3.60988 3.00598 3.45562C2.99726 3.30136 3.03725 3.13398 3.12088 2.9746C3.20853 2.81562 3.3339 2.67215 3.48249 2.56079C3.63107 2.44945 3.7968 2.37477 3.96048 2.3454L14.4248 0.792132Z" fill="#756C63" />
                              </svg>
                           </span>
                           <span className="year d-block">2020-2024</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Expreance
