import { Link } from "react-router-dom"
import React from "react"

const tags: string[] = ["Creative", "DESIGN", "Popular", "DIGITAL AGENCY", "Lifestyle",];

interface DataType {
   id: number;
   title: string;
   count: string;
}

interface RcData {
   id: number;
   img: string;
   title: string;
   boder?: boolean;
}

const cat_data: DataType[] = [
   {
      id: 1,
      title: "Branding",
      count: "(05)",
   },
   {
      id: 2,
      title: "UI/UX Design",
      count: "(04)",
   },
   {
      id: 3,
      title: "Productive",
      count: "(09)",
   },
   {
      id: 4,
      title: "Creative agency",
      count: "(08)",
   },
   {
      id: 5,
      title: "Digital marketing",
      count: "(07)",
   },
];

const rc_data: RcData[] = [
   {
      id: 1,
      img: "/assets/img/blog/sidebar/right/thumb.jpg",
      title: "Neque or senectus sole licitudin",
      boder: true,
   },
   {
      id: 2,
      img: "/assets/img/blog/sidebar/right/thumb-2.jpg",
      title: "Sociosqu eros Duis Euismod cura",
      boder: true,
   },
   {
      id: 3,
      img: "/assets/img/blog/sidebar/right/thumb-4.jpg",
      title: "Ultrices dos habite best nulla.",
   },
];

const Sidebar = () => {
   return (
      <div className="td-blog-postbox-right-sidebar">
         <div className="td-blog-postbox-right-form td-faq-main-form mb-60">
            <form onClick={(e) => e.preventDefault()} className="p-relative">
               <input className="inputs" type="text" placeholder="Search product" />
               <button className="td-faq-main-btn" type="submit">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M9.8889 15.2222C5.96154 15.2222 2.7778 12.0385 2.7778 8.1111C2.7778 4.18375 5.96154 1 9.8889 1C13.8163 1 17 4.18375 17 8.1111C17 12.0385 13.8163 15.2222 9.8889 15.2222Z" stroke="#1C1D1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M1.00053 17.0001L4.86719 13.1334" stroke="#1C1D1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </button>
            </form>
         </div>
         <div className="td-blog-postbox-user-profile text-center mb-60">
            <div className="td-blog-postbox-user-thumb mb-20">
               <img src="/assets/img/blog/sidebar/right/avatar.png" alt="" />
            </div>
            <h6 className="title mb-10">David Brown</h6>
            <p className="para mb-30">Lorem ipsum dolor consectetur
               adipiscing elit. </p>
            <div className="td-footer-social">
               <Link to="#">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z" fill="currentColor" />
                  </svg>
               </Link>
               <Link to="#">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z" fill="currentColor" />
                  </svg>
               </Link>
               <Link to="#">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M11.8477 4.15039H11.8577" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </Link>
               <Link to="#">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z" fill="currentColor" />
                     <path d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z" fill="currentColor" />
                     <path d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z" fill="currentColor" />
                  </svg>
               </Link>
            </div>
         </div>
         <div className="td-blog-postbox-cetagory-list mb-60">
            <h5 className="td-blog-postbox-cetagory-title mb-25">Category</h5>
            <ul>
               {cat_data.map((cat, i) => (
                  <li key={i}>
                     <Link to="#">
                        <span>{cat.title}</span>
                        <span className="total">({cat.count})</span>
                     </Link>
                  </li>
               ))}
            </ul>
         </div>

         <div className="td-blog-postbox-post td-blog-postbox-cetagory-list mb-60">
            <h5 className="td-blog-postbox-cetagory-title mb-25">Recent Post</h5>
            {rc_data.map((item) => (
               <React.Fragment key={item.id}>
                  <div className="td-blog-postbox-post-thumb d-flex align-items-center">
                     <img src={item.img} alt="" />
                     <div className="td-blog-postbox-post-content">
                        <span className="td-blog-postbox-post-date">04 Jan, 2024</span>
                        <h5 className="td-blog-postbox-post-title"><Link to="/blog-details">{item.title}</Link></h5>
                     </div>
                  </div>
                  {item.boder && <div className="td-blog-postbox-post-border mt-20 mb-20"></div>}
               </React.Fragment>
            ))}
         </div>

         <div className="td-blog-postbox-post-banner mb-60">
            <img src="/assets/img/blog/sidebar/right/banner.png" alt="" />
         </div>
         <div className="td-blog-postbox-post-tag td-blog-postbox-cetagory-list mb-60">
            <h5 className="td-blog-postbox-cetagory-title mb-25">Our Tag</h5>
            {tags.map((tag, i) => (
               <Link key={i} to="#">{tag}</Link>
            ))}
         </div>
      </div>
   )
}

export default Sidebar
