import { Link } from "react-router-dom";

interface DataType {
   id: number;
   class: string;
   thumb: string;
   tag: string;
   title: string;
}

const project_data: DataType[] = [
   {
      id: 1,
      class: "mt-90 mr-80",
      thumb: "/assets/img/portfolio/portfolio-6/thumb.jpg",
      tag: "Identity",
      title: "Stellar vibes",
   },
   {
      id: 2,
      class: "spacing ml-80",
      thumb: "/assets/img/portfolio/portfolio-6/thumb-2.jpg",
      tag: "Identity",
      title: "Stellar vibes",
   },
   {
      id: 3,
      class: "item-3",
      thumb: "/assets/img/portfolio/portfolio-6/thumb-3.jpg",
      tag: "Identity",
      title: "Stellar vibes",
   },
   {
      id: 4,
      class: "item-4",
      thumb: "/assets/img/portfolio/portfolio-6/thumb-4.jpg",
      tag: "Identity",
      title: "Stellar vibes",
   },
   {
      id: 5,
      class: "item-5 mr-75",
      thumb: "/assets/img/portfolio/portfolio-6/thumb-5.jpg",
      tag: "Identity",
      title: "Stellar vibes",
   },
];

const formatSerial = (num: number): string => {
   return `${num < 10 ? `0${num}` : num}`;
};

const PortfolioArea = () => {
   return (
      <div className="td-portfolio-area pb-160">
         <div className="container">
            <div className="row">
               {project_data.map((item, i) => (
                  <div key={item.id} className="col-lg-6">
                     <div className={`td-portfolio-6-thumb-wrap mb-40 p-relative z-index-1 ${item.class} wow fadeInLeft`} data-wow-delay=".4s" data-wow-duration="1s">
                        <h2 className="td-portfolio-6-transparent">{formatSerial(i + 1)}</h2>
                        <div className="td-portfolio-6-thumb ml-110">
                           <div className="roun fix mb-25 p-relative">
                              <img className="w-100" src={item.thumb} alt="" />
                              <Link to="/portfolio-details" className="td-portfolio-6-btn">
                                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 13L13 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 1H13V13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </Link>
                           </div>
                           <div className="td-portfolio-6-content">
                              <span className="tag">{item.tag}</span>
                              <h5 className="title"><Link to="/portfolio-details">{item.title}</Link></h5>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
               <div className="col-12 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                  <div className="d-flex justify-content-center mt-30">
                     <div className="td-btn-group">
                        <Link className="td-btn-circle" to="portfolio-four-columns.html">
                           <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link className="td-btn-2 td-btn-primary" to="portfolio-four-columns.html">SEE MORE PROJECT</Link>
                        <Link className="td-btn-circle" to="portfolio-four-columns.html">
                           <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PortfolioArea
