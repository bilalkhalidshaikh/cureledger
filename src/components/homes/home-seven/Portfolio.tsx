import { Link } from "react-router-dom";
import SplitTextWrapper from "../../common/SplitTextWrapper";

interface DataType {
   id: number;
   class: string;
   class2?: string;
   thumb: string;
   tag: string[];
   title: string;
}

const project_data: DataType[] = [
   {
      id: 1,
      class: "col-lg-7",
      thumb: "/assets/img/portfolio/portfolio-7/thumb-2.jp",
      tag: ["DIGITAL", " BRANDING"],
      title: "ILLUSTRATION",
   },
   {
      id: 2,
      class: "col-lg-5",
      class2: "ml-110",
      thumb: "/assets/img/portfolio/portfolio-7/thumb-5.jp",
      tag: ["DIGITAL", " BRANDING"],
      title: "ILLUSTRATION",
   },
   {
      id: 3,
      class: "col-lg-5",
      class2: "mr-110",
      thumb: "/assets/img/portfolio/portfolio-7/thumb-6.jp",
      tag: ["DIGITAL", " BRANDING"],
      title: "SUNRISE SHOP",
   },
   {
      id: 4,
      class: "col-lg-7",
      thumb: "/assets/img/portfolio/portfolio-7/thumb-3.jp",
      tag: ["DIGITAL", " BRANDING"],
      title: "WEBSITE DESIGN",
   },
   {
      id: 5,
      class: "col-lg-7",
      thumb: "/assets/img/portfolio/portfolio-7/thumb-4.jp",
      tag: ["DIGITAL", " BRANDING"],
      title: "WHIMSICAL WOODLAND",
   },
   {
      id: 6,
      class: "col-lg-5",
      class2: "ml-110",
      thumb: "/assets/img/portfolio/portfolio-7/thumb.jp",
      tag: ["DIGITAL", " BRANDING"],
      title: "RADIANT BEAUTY",
   },
];

const Portfolio = () => {
   return (
      <div className="td-portfolio-area pt-155 pb-60">
         <div className="container">
            <div className="row mb-35">
               <div className="col-lg-6">
                  <div className="mb-20">
                     <span className="td-section-6-subtitle td-section-7-subtitle">CREATIVE WORK</span>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div>
                     <h2 className="td-section-7-title mb-20 td-split-text td-split-in-right">
                        <SplitTextWrapper direction="right">
                           TAKE A LOOK FOR<br /> PROJECT WE HAVE DONE
                        </SplitTextWrapper>
                     </h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {project_data.map((item) => (
                  <div key={item.id} className={`${item.class} wow fadeInLeft`} data-wow-delay=".4s" data-wow-duration="1s">
                     <div className={`td-portfolio-7-wrap mb-70 ${item.class2}`}>
                        <div className="td-portfolio-7-thumb mb-25 p-relative">
                           <img className="w-100" src={item.thumb} alt="" />
                           <div className="td-portfolio-7-tag">
                              {item.tag.map((tag, i) => (
                                 <Link key={i} to="#">{tag}</Link>
                              ))}
                           </div>
                        </div>
                        <h3 className="td-portfolio-7-title"><Link to="/portfolio-details">{item.title}</Link></h3>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Portfolio
