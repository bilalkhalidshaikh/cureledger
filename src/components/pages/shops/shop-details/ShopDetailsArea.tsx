import { useState } from "react";
import { Link } from "react-router-dom";

const navb_data: string[] = [
   "/assets/img/shop/details/thumb.jpg",
   "/assets/img/shop/details/thumb-2.jpg",
   "/assets/img/shop/details/thumb-3.jpg",
];

const navs_data: string[] = [
   "/assets/img/shop/details/thumb.jpg",
   "/assets/img/shop/details/thumb-2.jpg",
   "/assets/img/shop/details/thumb-3.jpg",
];

const ShopDetailsArea = () => {

   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   return (
      <div className="td-product-details-area pt-160 pb-70">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="td-product-details-thumb-wrapper mb-50 mr-55">
                     <div className="tab-content m-img" id="productDetailsNavContent">
                        {navb_data.map((img, index) => (
                           <div key={index} className={`tab-pane fade ${index === currentImageIndex ? 'show active' : ''}`} id={`item${index}`}>
                              <div className="td-product-details-main-thumb">
                                 <img className="w-100" src={img} alt="img" />
                              </div>
                           </div>
                        ))}
                     </div>
                     <nav>
                        <div className="nav td-product-details-nav-tabs nav-tabs" id="productDetailsNavThumb" role="tablist">
                           {navs_data.map((img, index) => (
                              <button key={index} onClick={() => setCurrentImageIndex(index)}
                                 className={`td-product-details-nav-link nav-link ${index === currentImageIndex ? 'active' : ''}`}>
                                 <img src={img} alt="img" />
                              </button>
                           ))}
                        </div>
                     </nav>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="td-product-details-wrap mb-50 mr-55 ml-80">
                     <span className="td-product-details-subtitle mb-5">Beauty & Cosmetics</span>
                     <h4 className="td-product-details-title mb-20">Sulwhasoo Essential Cream</h4>
                     <div className="td-product-details-ratings-wrap d-flex justify-content-between mb-15">
                        <span className="td-product-details-price">$1,260.00</span>
                        <div className="td-product-details-ratings">
                           <span className="ratings">
                              <i className="fa-solid fa-star-sharp"></i>
                              <i className="fa-solid fa-star-sharp"></i>
                              <i className="fa-solid fa-star-sharp"></i>
                              <i className="fa-solid fa-star-sharp"></i>
                              <i className="fa-solid fa-star-sharp"></i>
                           </span>
                           <span className="total">(6 Reviews)</span>
                        </div>
                     </div>
                     <p className="td-product-details-content">The Mineral UV Filter formulas avoid the use of any nanoparticles. Instead, a refined dispersion... <span>See more</span></p>
                     <span className="td-product-details-view mb-10 d-flex align-items-center">
                        <svg className="mr-10" width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8.5 13.6852C11.2057 13.6852 13.7274 12.091 15.4826 9.33163C16.1725 8.25089 16.1725 6.43434 15.4826 5.3536C13.7274 2.59428 11.2057 1 8.5 1C5.79433 1 3.27261 2.59428 1.51737 5.3536C0.827542 6.43434 0.827542 8.25089 1.51737 9.33163C3.27261 12.091 5.79433 13.6852 8.5 13.6852Z" stroke="#6F7071" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M11.1755 7.494C11.1755 9.01162 9.94912 10.238 8.4315 10.238C6.91387 10.238 5.6875 9.01162 5.6875 7.494C5.6875 5.97637 6.91387 4.75 8.4315 4.75C9.94912 4.75 11.1755 5.97637 11.1755 7.494Z" stroke="#1C1D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>16</span> people are viewing this right now
                     </span>
                     <div className="td-product-details-color mb-40 d-flex align-items-center">
                        <div className="td-product-details-color-title mr-10">
                           <span>Color:</span>
                        </div>
                        <div className="td-product-details-color-filter d-flex flex-wrap">
                           <input className="td-checkbox" type="checkbox" />
                           <input className="td-checkbox td-checkbox-2" type="checkbox" />
                           <input className="td-checkbox td-checkbox-3" type="checkbox" />
                           <input className="td-checkbox td-checkbox-4" type="checkbox" />
                        </div>
                     </div>
                     <div className="td-product-details-action-wrapper mb-10">
                        <h5 className="td-product-details-action-title mb-15">Quantity :</h5>
                        <div className="td-product-details-action-item-wrapper d-flex flex-wrap align-items-center">
                           <div className="td-product-details-quantity mb-10 mr-10">
                              <div className="td-schedule-details-quantity d-inline-block">
                                 <span className="increment">
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1.21924 7H13.3836" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                       <path d="M7.30176 13V1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </span>
                                 <input className="td-quantity-input" type="text" defaultValue="1" />
                                 <span className="decrement">
                                    <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1 1H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </span>
                              </div>
                           </div>
                           <div className="td-product-details-cart-btn-wrap">
                              <button className="td-product-details-cart-btn mb-10 mr-15"><i className="flaticon-shopping-cart"></i> Add To Cart</button>
                              <button className="td-product-details-wishlist-btn mb-10"><i className="fa-light fa-heart"></i></button>
                           </div>
                        </div>
                     </div>
                     <div className="td-product-details-compare-wrap mb-35">
                        <ul>
                           <li>
                              <h5>SKU:</h5>
                              <span>NTB7SDVX44</span>
                           </li>
                           <li>
                              <h5>Category:</h5>
                              <span className="black">Beauty & Cosmetics</span>
                           </li>
                           <li>
                              <h5>Tag:</h5>
                              <span>Cream</span>
                           </li>
                        </ul>
                     </div>
                     <div className="td-product-details-social td-footer-social">
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
                     <div className="td-product-details-payment-way mt-25">
                        <div className="td-product-details-payment-text mb-15">
                           <span>Guaranteed</span>
                           <span className="grey">Safe & Secure Checkout</span>
                        </div>
                        <div className="td-product-details-payment-bank mb-15">
                           <Link to="#"><img src="/assets/img/shop/details/paypal.png" alt="" /></Link>
                           <Link to="#"><img src="/assets/img/shop/details/visa-2.png" alt="" /></Link>
                           <Link to="#"><img src="/assets/img/shop/details/visa.png" alt="" /></Link>
                           <Link to="#"><img src="/assets/img/shop/details/stripe.png" alt="" /></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ShopDetailsArea
