import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

interface DataType {
   id: number;
   title: string;
   desc: string;
   price: string;
   savings: string;
   list: string[];
   isPopular?: boolean;
}

const pricing_data: DataType[] = [
   {
      id: 1,
      title: "Start-up Practices",
      desc: "Up to 150 Verifications/month",
      price: "1,350",
      savings: "Save $350/mo",
      list: [
         "Verification of Benefits",
         "Pre-Authorization Management",
         "Insurance Billing & Claims",
         "Payment Posting (Checks/EFTs)",
         "Denial Management & Appeals",
         "Follow up on Pending AR"
      ],
   },
   {
      id: 2,
      title: "Mid-Sized Practices",
      desc: "Up to 250 Verifications/month",
      price: "1,800",
      savings: "Save $500/mo",
      isPopular: true,
      list: [
         "Everything in Start-up plus:",
         "Insurance Collections < $50,000",
         "Enhanced AR Reporting",
         "Dedicated Account Specialist",
         "Quarterly Performance Reviews"
      ],
   },
   {
      id: 3,
      title: "Regular Sized Practices",
      desc: "Up to 400 Verifications/month",
      price: "2,500",
      savings: "Save $750/mo",
      list: [
         "Everything in Mid-Sized plus:",
         "Insurance Collections < $75,000",
         "Custom Workflow Integration",
         "Priority Claim Processing",
         "Full Revenue Audit Inclusion"
      ],
   },
];

const Pricing = () => {
   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

   const handleMouseMove = (e: React.MouseEvent) => {
      if (window.innerWidth < 992) return;
      const { clientX, clientY } = e;

      cardRefs.current.forEach((card, index) => {
         if (card) {
            const rect = card.getBoundingClientRect();
            const x = (clientX - (rect.left + rect.width / 2)) / 35;
            const y = (clientY - (rect.top + rect.height / 2)) / 35;

            // Shift focus: The hovered card gets more intense movement (depth)
            // while non-hovered cards move subtly in the background
            const isHovered = hoveredIndex === index;
            const depth = isHovered ? 1.2 : 0.4;

            gsap.to(card, {
               x: x * depth,
               y: y * depth,
               scale: isHovered ? 1.02 : 1,
               boxShadow: isHovered 
                  ? '0 30px 60px rgba(0, 57, 65, 0.12)' 
                  : '0 15px 45px rgba(0, 57, 65, 0.04)',
               ease: "power2.out",
               duration: 0.6,
            });
         }
      });
   };

   const handleMouseLeave = () => {
      setHoveredIndex(null);
      cardRefs.current.forEach((card) => {
         if (card) {
            gsap.to(card, {
               x: 0,
               y: 0,
               scale: 1,
               boxShadow: '0 15px 45px rgba(0, 57, 65, 0.04)',
               ease: "power3.out",
               duration: 1,
            });
         }
      });
   };

   return (
      <div className="td-pricing-area pt-120 pb-0" style={{ backgroundColor: '#F8FAFA', overflow: 'hidden' }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xxl-8 col-xl-9 col-lg-10">
                  <div className="td-pricing-6-title-wrap text-center mb-65">
                     <span className="d-inline-block mb-15 px-4 py-2 rounded-pill fw-bold" 
                           style={{ backgroundColor: 'rgba(9, 178, 171, 0.1)', color: '#09B2AB', fontSize: '14px', letterSpacing: '1px' }}>
                        VALUE BUNDLES
                     </span>
                     <h2 className="fw-black" style={{ color: '#003941', fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: '1.1' }}>
                        Transparent Pricing for <br />
                        <span style={{ color: '#09B2AB' }}>Every Practice Size</span>
                     </h2>
                  </div>
               </div>
            </div>

            <div className="row g-4 pb-120"> 
               {pricing_data.map((item, index) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 * index}s`} onMouseEnter={() => setHoveredIndex(index)}>
                     <div 
                        ref={(el) => { cardRefs.current[index] = el; }}
                        className={`td-pricing-6-wrap mb-30 h-100 p-relative`}
                        style={{
                           backgroundColor: '#ffffff',
                           borderRadius: '24px',
                           padding: '45px 35px',
                           // Popular card keeps its active border regardless of hover to maintain brand hierarchy
                           border: item.isPopular ? '2.5px solid #09B2AB' : '1px solid rgba(0, 57, 65, 0.08)',
                           boxShadow: '0 15px 45px rgba(0, 57, 65, 0.04)',
                           transition: 'border 0.3s ease'
                        }}
                     >
                        {item.isPopular && (
                           <span className="position-absolute" style={{ top: '-15px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#09B2AB', color: '#fff', padding: '6px 18px', borderRadius: '20px', fontSize: '11px', fontWeight: '800', letterSpacing: '0.5px', zIndex: 5 }}>
                              MOST POPULAR
                           </span>
                        )}

                        <div className="td-pricing-6-top mb-35">
                           <span className="package mb-15 d-inline-block fw-bold" style={{ color: '#09B2AB', fontSize: '1.1rem', textTransform: 'uppercase' }}>{item.title}</span>
                           <p className="para mb-20" style={{ color: '#002C34', opacity: 0.7, fontSize: '0.95rem' }}>{item.desc}</p>
                           <div className="d-flex align-items-baseline mb-5">
                              <h6 className="price" style={{ color: '#003941', fontSize: '3.2rem', fontWeight: 900 }}>${item.price}</h6>
                              <span className="ms-2" style={{ color: '#003941', opacity: 0.5, fontWeight: '600' }}>/mo</span>
                           </div>
                           <span className="d-block mb-35 fw-bold" style={{ color: '#09B2AB', fontSize: '0.9rem' }}>{item.savings}</span>
                           
                           <Link 
                              className="price-btn w-100 text-center d-block py-3 rounded-pill fw-bold" 
                              style={{ 
                                 backgroundColor: item.isPopular ? '#09B2AB' : '#003941', 
                                 color: '#ffffff',
                                 transition: 'all 0.3s ease',
                                 textDecoration: 'none',
                                 fontSize: '0.95rem',
                                 border: 'none'
                              }} 
                              to="/"
                           >
                              Select Bundle
                           </Link>
                        </div>

                        <div className="td-pricing-6-list">
                           <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {item.list.map((list, i) => (
                                 <li key={i} className="mb-3 d-flex align-items-start" style={{ color: '#002C34', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                    <i className="fa-solid fa-check-circle mt-1 me-3" style={{ color: '#09B2AB', fontSize: '14px' }}></i>
                                    {list}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Pricing;