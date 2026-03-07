import { Link } from "react-router-dom"

const Breadcrumb = () => {
   return (
      <div className="td-breadcrumb-2-spacing">
         <div className="td-shop-breadcrumb-area td-shop-breadcrumb-spacing include-bg" style={{ backgroundImage: `url(/assets/img/shop/details/bg.jpg)` }}>
            <div className="container-fluid container-1710">
               <div className="row">
                  <div className="col-12">
                     <div className="td-shop-breadcrumb-wrap text-center">
                        <h2 className="td-shop-breadcrumb-title mb-30">Smart shopping with Cureledger</h2>
                        <div className="td-shop-breadcrumb-dvdr">
                           <span><Link to="/">HOME  - </Link></span>
                           <span>SHOP PAGE</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Breadcrumb
