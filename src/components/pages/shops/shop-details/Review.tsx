import { Link } from "react-router-dom"
import ShopForm from "../../../forms/ShopForm"

const Review = () => {
   return (
      <div className="td-product-details-review-wrapper">
         <h3 className="td-product-details-review-title-2">2 review for Perfecting Facial Oil</h3>
         <div className="row">
            <div className="col-xl-12">
               <div className="td-product-details-review-item-wrapper-2">
                  <div className="td-product-details-review-item-2 mb-35">
                     <div className="row">
                        <div className="col-lg-8">
                           <div className="td-product-details-review-avater-2 d-flex">
                              <div className="td-product-details-review-avater-thumb">
                                 <Link to="#">
                                    <img src="/assets/img/shop/details/review-list-1.jpg" alt="" />
                                 </Link>
                              </div>
                              <div className="td-product-details-review-avater-content">
                                 <div className="td-product-details-review-avater-rating d-flex align-items-center">
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                 </div>
                                 <h3 className="td-product-details-review-avater-title">Eleanor Fant</h3>
                                 <span className="td-product-details-review-avater-meta mb-10">12 january, 2025 </span>
                                 <div className="td-product-details-review-avater-comment">
                                    <p>I'm happy with my purchase of Olay eyes. I just received my second jar. Although I don't notice a difference with "puffiness", it seems my fine.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="td-product-details-review-item-2">
                     <div className="row">
                        <div className="col-lg-8">
                           <div className="td-product-details-review-avater-2 d-flex">
                              <div className="td-product-details-review-avater-thumb">
                                 <Link to="#">
                                    <img src="/assets/img/shop/details/review-list-2.jpg" alt="" />
                                 </Link>
                              </div>
                              <div className="td-product-details-review-avater-content">
                                 <div className="td-product-details-review-avater-rating d-flex align-items-center">
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                 </div>
                                 <h3 className="td-product-details-review-avater-title">Haliey White</h3>
                                 <span className="td-product-details-review-avater-meta mb-10">12 january, 2025 </span>
                                 <div className="td-product-details-review-avater-comment">
                                    <p>I'm happy with my purchase of Olay eyes. I just received my second jar. Although I don't notice a difference with "puffiness", it seems my fine.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-12">
               <div className="td-product-details-review-form pt-55">
                  <h3 className="td-product-details-review-form-title">Add a Review</h3>
                  <p>Your email address will not be published. Required fields are marked *</p>
                  <ShopForm />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Review
