import { Link } from "react-router-dom";
import type { JSX } from "react";

interface DataType {
   id: number;
   btn?: boolean;
   team_details: {
      id: number;
      thumb: string;
      designation: string;
      name: JSX.Element;
      list: string[];
      class?: string;
   }[];
}

const team_data: DataType[] = [
   {
      id: 1,
      team_details: [
         {
            id: 1,
            class: "pb-130",
            thumb: "/assets/img/team/team-2/thumb.jpg",
            designation: "Product designer",
            name: (<>Nela Vaduri</>),
            list: ["Team collaboration", "Brand identity", "Data analysis"]
         },
         {
            id: 2,
            thumb: "/assets/img/team/team-2/thumb-2.jpg",
            designation: "Designer",
            name: (<>Jion Marcel</>),
            list: ["Team collaboration", "Brand identity", "Data analysis"]
         },
      ],
      btn: true,
   },
   {
      id: 2,
      team_details: [
         {
            id: 1,
            class: "pb-130 pt-160",
            thumb: "/assets/img/team/team-2/thumb-3.jpg",
            designation: "Manager",
            name: (<>Asha Voshle</>),
            list: ["Team collaboration", "Brand identity", "Data analysis"]
         },
         {
            id: 2,
            thumb: "/assets/img/team/team-2/thumb-4.jpg",
            designation: "Developer",
            name: (<>Peal Steals</>),
            list: ["Team collaboration", "Brand identity", "Data analysis"]
         },
      ],
   },
];

const Team = () => {
   return (
      <div className="td-team-area pt-160 pb-130 td-btn-trigger">
         <div className="container">
            <div className="row mb-20">
               <div className="col-lg-5 col-md-5">
                  <div className="td-testimonial-left mb-40 td-btn-bounce">
                     <img className="mb-20" src="/assets/img/testimonial/user.png" alt="" />
                     <p>More than 25k clients all<br />
                        over the world</p>
                  </div>
               </div>
               <div className="col-lg-7 col-md-7">
                  <div className="td-service-2-title-wrap mb-40 td-title-anim">
                     <span className="td-section-2-subtitle mb-25 d-block">//  Our team members</span>
                     <h2 className="td-section-2-title d-inline-block">Cureledger have creative team <span>members</span></h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {team_data.map((items) => (
                  <div key={items.id} className="col-lg-6">
                     {items.team_details.map((item) => (
                        <div key={item.id} className={`td-team-2-wrap ${item.class} wow fadeInLeft`} data-wow-delay=".5s" data-wow-duration="1s">
                           <div className="row align-items-center">
                              <div className="col-lg-7 col-md-6 col-sm-6">
                                 <div className="td-team-2-thumb fix td-rounded-10 mb-30">
                                    <img className="td-rounded-10 w-100" src={item.thumb} alt="" />
                                 </div>
                              </div>
                              <div className="col-lg-5 col-md-6 col-sm-6">
                                 <div className="td-team-2-content ml-35 mb-30">
                                    <span className="td-team-2-subtitle d-inline-block mb-5">{item.designation}</span>
                                    <h3 className="td-team-2-title mb-15"><Link to="/team-details">{item.name}</Link></h3>
                                    <div className="td-team-2-feature-list mb-20">
                                       <ul>
                                          {item.list.map((list, i) => (
                                             <li key={i}>{list}</li>
                                          ))}
                                       </ul>
                                    </div>
                                    <div className="td-team-2-social">
                                       <Link to="#">
                                          <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M7.7 0.246582H5.6C4.67174 0.246582 3.7815 0.615494 3.12513 1.27216C2.46875 1.92883 2.1 2.81946 2.1 3.74813V5.84905H0V8.65029H2.1V14.2528H4.9V8.65029H7L7.7 5.84905H4.9V3.74813C4.9 3.56239 4.97375 3.38427 5.10503 3.25293C5.2363 3.1216 5.41435 3.04782 5.6 3.04782H7.7V0.246582Z" fill="currentColor" />
                                          </svg>
                                       </Link>
                                       <Link to="#">
                                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fillRule="evenodd" clipRule="evenodd" d="M5.28727 0.246582H0.400391L6.19454 7.86329L0.771044 14.2528H3.27686L7.37883 9.42021L11.0212 14.2084H15.9081L9.94559 6.37031L9.95615 6.38383L15.0899 0.335559H12.5841L8.77167 4.82709L5.28727 0.246582ZM3.09786 1.58051H4.61921L13.2106 12.8743H11.6893L3.09786 1.58051Z" fill="currentColor" />
                                          </svg>
                                       </Link>
                                       <Link to="#">
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <ellipse cx="8.40004" cy="8.24932" rx="6.99965" ry="7.00274" stroke="currentColor" strokeWidth="1.5" />
                                             <path d="M15.3987 9.13485C14.7499 9.01314 14.0827 8.94971 13.4018 8.94971C9.65534 8.94971 6.32316 10.8702 4.19922 13.8516" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                             <path d="M13.2998 3.34692C11.1093 5.91513 7.8176 7.54857 4.13699 7.54857C3.19536 7.54857 2.27918 7.44166 1.40039 7.23953" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                             <path d="M10.2324 15.2527C10.4078 14.4026 10.5 13.5222 10.5 12.6202C10.5 8.19722 8.28413 4.29094 4.90027 1.94751" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                          </svg>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                     {items.btn && <div className="td-team-2-btn">
                        <div className="td-btn-group mt-70  td-btn-group-black">
                           <Link className="td-btn-circle" to="/team">
                              <i className="fa-solid fa-arrow-right"></i>
                           </Link>
                           <Link className="td-btn-2 td-btn-primary" to="/team">Explore our team</Link>
                           <Link className="td-btn-circle" to="/team">
                              <i className="fa-solid fa-arrow-right"></i>
                           </Link>
                        </div>
                     </div>}
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Team
