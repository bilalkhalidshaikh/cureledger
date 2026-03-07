import { Link } from "react-router-dom";

const interactive_data: string[] = ["SQUARDO", "LOUP", "KROUPS", "FIRSTWIRE", "COSMETICS", "OKIOS", "TOURISM", "SKILVISON",];

const formatSerial = (num: number): string => {
   return `${num < 10 ? `0${num}` : num}`;
};

const Interactive = () => {
   return (
      <div className="td-interactive-links-spacing">
         <div className="container-fluid container-1550">
            <div className="row">
               <div className="col-lg-12">
                  <div className="td-interactive-links-wrap">
                     {interactive_data.map((title, i) => (
                        <div key={i} className="td-interactive-links-item p-relative d-inline-block td-thumb-hover-item active mr-80">
                           <h2 className="title"><Link to="/portfolio-details"><span>{formatSerial(i + 1)}</span>{title}</Link></h2>
                           <div className="td-interactive-links-thumb" style={{ backgroundImage: `url(/assets/img/intarective-links/thumb.png)` }}></div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Interactive
