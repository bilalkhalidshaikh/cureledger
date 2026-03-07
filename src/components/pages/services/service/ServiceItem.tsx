import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { JSX } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface DataType {
   id: number;
   thumb: string;
   sub_title: string;
   title: string;
   desc: JSX.Element;
   list: string[];
}

const service_data: DataType[] = [
   {
      id: 1,
      thumb: "https://plus.unsplash.com/premium_photo-1722945619859-60acefccee2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHRlYW0lMjB3b3JrfGVufDB8MnwwfHx8MA%3D%3D",
      sub_title: "Design Studio",
      title: "Logos and branding",
      desc: (<>We create your graphic designs according to your<br /> budget and your needs. Reveal your brand image<br /> and capture your audience.</>),
      list: ["Logo Design", "Graphic identity", "Business communication", "Web design"],
   },
   {
      id: 2,
      thumb: "https://images.unsplash.com/photo-1670400979635-652c63e0e212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjB3b3JrfGVufDB8MnwwfHx8MA%3D%3D",
      sub_title: "Product designing",
      title: "Product designing",
      desc: (<>We create your graphic designs according to your<br /> budget and your needs. Reveal your brand image<br /> and capture your audience.</>),
      list: ["Logo Design", "Graphic identity", "Business communication", "Web design"],
   },
   {
      id: 3,
      thumb: "https://plus.unsplash.com/premium_photo-1664392097093-972371173e7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJsb25kZSUyMHdvbWFufGVufDB8MnwwfHx8MA%3D%3D",
      sub_title: "Design Studio",
      title: "Apps development",
      desc: (<>We create your graphic designs according to your<br /> budget and your needs. Reveal your brand image<br /> and capture your audience.</>),
      list: ["Logo Design", "Graphic identity", "Business communication", "Web design"],
   },
   {
      id: 4,
      thumb: "https://images.unsplash.com/photo-1598472493870-d58012f7565b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsb25kZSUyMHdvbWFufGVufDB8MnwwfHx8MA%3D%3D",
      sub_title: "Design Studio",
      title: "Digital marketing",
      desc: (<>We create your graphic designs according to your<br /> budget and your needs. Reveal your brand image<br /> and capture your audience.</>),
      list: ["Logo Design", "Graphic identity", "Business communication", "Web design"],
   },
];

const ServiceItem = () => {

   useEffect(() => {
      if (typeof window !== "undefined") {
         const mm = gsap.matchMedia();

         mm.add("(min-width: 991px)", () => {
            const panels = document.querySelectorAll(".td-service-pin-item-panel");

            panels.forEach((panel) => {
               gsap.to(panel, {
                  scrollTrigger: {
                     trigger: panel,
                     start: "top top",
                     end: "bottom 100%",
                     pin: true,
                     pinSpacing: false,
                     scrub: true,
                     markers: false,
                     endTrigger: ".td-service-pin-items",
                  },
               });
            });
         });

         return () => mm.revert();
      }
   }, []);

   return (
      <div className="td-service-pin-item td-service-pin-items">
         <div className="container-fluid p-0">
            {service_data.map((item) => (
               <div key={item.id} className="black-bg td-service-pin-item-panel">
                  <div className="row align-items-center">
                     <div className="col-lg-6">
                        <div className="td-service-pin-thumb">
                           <img className="w-100" src={item.thumb} alt="" />
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="td-service-pin-content-inner pt-40 pb-40 ml-100">
                           <div className="td-service-pin-subtitle mb-15">
                              <span className="number">01</span>
                              <span>{item.sub_title}</span>
                           </div>
                           <h2 className="td-service-pin-title mb-30">{item.title}</h2>
                           <div className="td-service-pin-content  ml-50">
                              <p className="mb-40">{item.desc}</p>
                              <ul>
                                 {item.list.map((list, i) => (
                                    <li key={i}>{list}</li>
                                 ))}
                              </ul>
                              <div className="td-btn-group td-btn-group-border pt-50">
                                 <Link className="td-btn-circle" to="/service-details">
                                    <i className="fa-solid fa-arrow-right"></i>
                                 </Link>
                                 <Link className="td-btn-2 td-btn-primary" to="/service-details">VIEW DETAILS</Link>
                                 <Link className="td-btn-circle" to="/service-details">
                                    <i className="fa-solid fa-arrow-right"></i>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div >
   )
}

export default ServiceItem
