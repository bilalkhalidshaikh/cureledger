import { Link } from "react-router-dom";

interface DataType {
   id: number;
   class: string;
   class_2: string;
   thumb: string;
   tag: string;
   title: string;
   btn?: boolean;
}

const project_data: DataType[] = [
   {
      id: 1,
      class: "col-lg-5",
      class_2: "mr-50",
      thumb: "/assets/img/portfolio/5/thumb.jpg",
      tag: "Creative",
      title: "GENSIS"
   },
   {
      id: 2,
      class: "col-lg-7",
      class_2: "ml-50 pt-150",
      thumb: "/assets/img/portfolio/5/thumb-4.jpg",
      tag: "Branding",
      title: "entherum app"
   },
   {
      id: 3,
      class: "col-lg-12",
      class_2: "",
      thumb: "/assets/img/portfolio/5/thumb-3.jpg",
      tag: "Marketing",
      title: "SANCTUARITY"
   },
   {
      id: 4,
      class: "col-lg-7",
      class_2: "mr-50 pt-160",
      thumb: "/assets/img/portfolio/5/thumb-5.jpg",
      tag: "Photography",
      title: "designblash"
   },
   {
      id: 5,
      class: "col-lg-5",
      class_2: "ml-50",
      thumb: "/assets/img/portfolio/5/thumb-2.jpg",
      tag: "Identity",
      title: "exodus",
      btn: true,
   },
];

const Portfolio = () => {
   return (
      <div className="td-portfolio-area pt-110">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="td-portfolio-5-title-wrap mb-95 p-relative">
                     <img className="td-portfolio-5-shape d-none d-md-block" src="/assets/img/portfolio/5/shape.png" alt="" />
                     <h2 className="td-section-5-bigtitle td-title-anim">  Cureledger <span>SHOWCASE</span></h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {project_data.map((item) => (
                  <div key={item.id} className={item.class}>
                     <div className={`td-portfolio-5-wrap mb-115 ${item.class_2}`}>
                        <div className="td-portfolio-5-thumb fix td-rounded-10 p-relative mb-25">
                           <img data-speed=".9" className="w-100" src={item.thumb} alt="" />
                           <Link className="td-portfolio-5-btn" to="/portfolio-details">View<br /> Project</Link>
                        </div>
                        <h4 className="td-portfolio-5-title"><Link to="portfolio-details">{item.title} </Link>  <span> /  {item.tag}</span></h4>
                        {item.btn && <div className="td-portfolio-5-btn-wrap pt-115">
                           <Link to="/portfolio-three-columns" className="td-btn-5 td-btn-5-border">
                              Explore all <br /> Projects<br />
                              <span>
                                 <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.7767 7.74985C15.9198 7.90198 16 8.10745 16 8.32158C16 8.5357 15.9198 8.74117 15.7767 8.89332L8.92138 16.1152C8.77516 16.2625 8.58094 16.3451 8.37867 16.3459C8.27759 16.3454 8.17746 16.3251 8.08351 16.2857C7.94489 16.2244 7.8266 16.1211 7.74358 15.989C7.66056 15.8569 7.61651 15.7019 7.61698 15.5435V9.12402H0.761697C0.559684 9.12402 0.365942 9.03948 0.223096 8.88899C0.0802502 8.73849 0 8.5344 0 8.32158C0 8.10876 0.0802502 7.90465 0.223096 7.75418C0.365942 7.60368 0.559684 7.51915 0.761697 7.51915H7.61698V1.09965C7.61651 0.941235 7.66056 0.786211 7.74358 0.654123C7.8266 0.522033 7.94489 0.418789 8.08351 0.357402C8.2242 0.29959 8.37756 0.284923 8.52585 0.3151C8.67412 0.345276 8.81125 0.419062 8.92138 0.52792L15.7767 7.74985Z" fill="#2D2D2D" />
                                 </svg>
                              </span>
                           </Link>
                        </div>}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Portfolio
