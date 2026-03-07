import { Link } from "react-router-dom"
import team_data from "../../../data/TeamData"
import { useMemo } from "react";

const Team = () => {

   const filteredData = useMemo(() => {
      return team_data.filter((items) => items.page === "home_5");
   }, []);

   return (
      <div className="td-team-area pt-125">
         <div className="container">
            <div className="row justify-content-center mb-30">
               <div className="col-lg-6">
                  <div className="td-team-5-title-wrap mb-30">
                     <h2 className="td-section-5-title mb-25 td-title-anim">introducing <br /> with <span>Cureledger</span> team</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {filteredData.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className={`td-team-5-wrap mb-30 ${item.class} wow fadeInUp`} data-wow-delay=".3s" data-wow-duration="1s">
                        <div className="td-team-5-thumb mb-20">
                           <img className="w-100" src={item.thumb} alt="" />
                        </div>
                        <div className="td-team-5-content">
                           <h5 className="td-team-5-title"><Link to="/team-details">{item.name}</Link></h5>
                           <span>{item.designation}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Team
