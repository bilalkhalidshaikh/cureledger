import { useRef } from "react";
import type { JSX } from "react";
import Count from "../../common/Count";
import gsap from "gsap";

interface DataType {
   id: number;
   count: number;
   prefix?: string;
   suffix?: string;
   title: JSX.Element;
}

const counter_data: DataType[] = [
   {
      id: 1,
      count: 35,
      suffix: "%",
      title: (<>Collection <br /> increase</>),
   },
   {
      id: 2,
      count: 98,
      suffix: "%",
      title: (<>Clean claim <br /> rate</>),
   },
   {
      id: 3,
      count: 30,
      prefix: "<",
      title: (<>Days in <br /> your A/R</>),
   },
   {
      id: 4,
      count: 24,
      title: (<>Hour <br /> turnaround</>),
   },
];

const Counter = () => {
   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
   const glareRefs = useRef<(HTMLDivElement | null)[]>([]);

   const handleMouseMove = (e: React.MouseEvent, index: number) => {
      if (window.innerWidth < 992) return; 

      const card = cardRefs.current[index];
      const glare = glareRefs.current[index];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top;  
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10; 
      const rotateY = ((x - centerX) / centerX) * 10;

      // 3D Tilt
      gsap.to(card, { 
         rotateX, 
         rotateY, 
         transformPerspective: 1000,
         ease: "power3.out", 
         duration: 0.5 
      });

      // Move Spotlight
      if (glare) {
         gsap.to(glare, {
            x: x - rect.width, 
            y: y - rect.height,
            opacity: 1,
            ease: "power3.out",
            duration: 0.5
         });
      }

      // Parallax Content Depth
      const innerContent = card.querySelector('.parallax-content');
      if (innerContent) {
         gsap.to(innerContent, { 
            x: rotateY * 1.2, 
            y: -rotateX * 1.2, 
            z: 40,
            ease: "power3.out", 
            duration: 0.5 
         });
      }
   };

   const handleMouseLeave = (index: number) => {
      if (window.innerWidth < 992) return;
      
      const card = cardRefs.current[index];
      const glare = glareRefs.current[index];

      if (card) {
         gsap.to(card, { rotateX: 0, rotateY: 0, ease: "power3.out", duration: 1 });
         const innerContent = card.querySelector('.parallax-content');
         if (innerContent) {
            gsap.to(innerContent, { x: 0, y: 0, z: 0, ease: "power3.out", duration: 1 });
         }
      }
      
      if (glare) {
         gsap.to(glare, { opacity: 0, ease: "power3.out", duration: 1 });
      }
   };

   return (
      <div className="td-counter-area pt-0 mt-0 pb-0" style={{ backgroundColor: '#FAFAFA' }}>
         <div className="container">
            <div className="row gx-0 shadow-sm mb-0" style={{ border: '1px solid rgba(0, 57, 65, 0.08)', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
               {counter_data.map((item, index) => (
                  <div key={item.id} className="col-xl-3 col-lg-6 col-md-6" style={{ 
                     borderRight: '1px solid rgba(0, 57, 65, 0.08)', 
                     borderBottom: '1px solid rgba(0, 57, 65, 0.08)',
                     perspective: '1000px'
                  }}>
                     
                     <div 
                        ref={(el) => { cardRefs.current[index] = el; }}
                        className="td-counter-4-item p-relative"
                        style={{ 
                           padding: '40px 30px',
                           cursor: 'default',
                           position: 'relative',
                           overflow: 'hidden',
                           backgroundColor: '#ffffff', // Explicitly locked to white
                           transformStyle: 'preserve-3d'
                        }}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                     >
                        <div 
                           ref={(el) => { glareRefs.current[index] = el; }}
                           style={{
                              position: 'absolute',
                              top: 0, left: 0,
                              width: '200%', height: '200%',
                              background: 'radial-gradient(circle, rgba(9, 178, 171, 0.1) 0%, transparent 50%)',
                              opacity: 0,
                              pointerEvents: 'none',
                              zIndex: 0
                           }}
                        />
                        
                        <div className="parallax-content" style={{ position: 'relative', zIndex: 2, transformStyle: 'preserve-3d' }}>
                           <h2 className="mb-135" style={{ 
                              color: '#003941', 
                              fontSize: '3.5rem', 
                              fontWeight: 900, 
                              display: 'flex', 
                              alignItems: 'center'
                           }}>
                              {item.prefix && <span style={{ marginRight: '5px' }}>{item.prefix}</span>}
                              <span className="odometer">
                                 <Count number={item.count} /> 
                              </span>
                              {item.suffix && <span>{item.suffix}</span>}
                           </h2>
                           
                           <div className="d-flex align-items-center justify-content-between">
                              <h5 className="position mb-0" style={{ 
                                    color: 'rgba(0, 57, 65, 0.08)', 
                                    fontSize: '2.5rem', 
                                    fontWeight: 800
                                 }}>
                                 0{item.id}
                              </h5>
                              <span className="para text-end" style={{ 
                                    color: '#003941', 
                                    fontWeight: 700, 
                                    textTransform: 'uppercase', 
                                    letterSpacing: '1px', 
                                    lineHeight: '1.4'
                                 }}>
                                 {item.title}
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Counter