import { Link } from "react-router-dom";

const team_data = [
   { id: 1, name: "Dr. Emily Chen", designation: "Clinical Director", thumb: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg" },
   { id: 2, name: "Michael Vance", designation: "VP of Revenue Cycle", thumb: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg" },
   { id: 3, name: "Sarah Torres", designation: "Head of Credentialing", thumb: "https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg" },
   { id: 4, name: "David Kim", designation: "A/R Specialist", thumb: "https://images.pexels.com/photos/6863268/pexels-photo-6863268.jpeg" }
];

const Team = () => {
   return (
      <div className="pt-120 pb-120" style={{ backgroundColor: '#ffffff' }}>
         <div className="container">
            <div className="text-center mb-60">
               <h2 style={{ color: '#003941', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Meet Our <span style={{ color: '#09B2AB' }}>Experts</span></h2>
               <p className="fs-5" style={{ color: '#002C34', opacity: 0.8 }}>A team of clinically trained billing experts dedicated to your success.</p>
            </div>
            <div className="row g-4">
               {team_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className="rounded-4 overflow-hidden shadow-sm position-relative group" style={{ border: '1px solid rgba(0,57,65,0.05)', backgroundColor: '#F8FAFA' }}>
                        <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
                           <img className="w-100 h-100 transition-all" style={{ objectFit: 'cover', cursor: 'pointer' }} src={item.thumb} alt={item.name} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                        </div>
                        <div className="p-4 text-center">
                           <h5 className="fw-bold mb-1" style={{ color: '#003941' }}><Link to="#" style={{ color: 'inherit', textDecoration: 'none' }}>{item.name}</Link></h5>
                           <span className="small fw-bold text-uppercase" style={{ color: '#09B2AB', letterSpacing: '1px' }}>{item.designation}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Team;