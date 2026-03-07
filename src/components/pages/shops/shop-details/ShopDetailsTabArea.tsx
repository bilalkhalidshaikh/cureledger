import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import Review from "./Review";

const tab_title: string[] = ["Description", "Additional info", "Add reviews"]

const ShopDetailsTabArea = () => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <div className="td-product-details-bottom pb-140">
         <div className="container">
            <div className="row">
               <div className="col-xl-12">
                  <div className="td-product-details-tab-nav">
                     <nav>
                        <div className="nav nav-tabs p-relative td-product-tab justify-content-sm-start justify-content-center" id="nav-tab" role="tablist">
                           {tab_title.map((tab, index) => (
                              <button key={index} onClick={() => handleTabClick(index)} className={`nav-link ${activeTab === index ? "active" : ""}`}>{tab}</button>
                           ))}
                           <span id="productTabMarker" className="td-product-details-tab-line"></span>
                        </div>
                     </nav>
                     <div className="tab-content pt-40" id="nav-tabContent">
                        <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="nav-description">
                           <div className="td-product-details-desc-wrapper">
                              <p className="mb-40">Ultrices lacus rutrum duie eston venenatis ante bibendum lacus hack dapibus feugiat aliquet hymenaeos hymenaeos nunc nis sociosqu tristique neque suspendisse ege tellus ante lectus sem fames accumsan same nisle ligula suspendisse primis fringilla eleifend conubia at porta urna ugue praesent ligula aliquet aptent molestie. Ligula none tes facilisis venenatis nibh sodales tortor tempor a placerat mauris pellentesque primis primis fringilla eleifend conubia do every body the calory diseas.</p>
                              <h5 className="td-product-details-desc-title mb-25">Product feature</h5>
                              <p className="mb-30">Dapibus feugiat aliquet hymenaeos hymenaeos nunc nis sociosqu tristique neque suspendisse ege tellus ante lectus a fames accumsan same nisle ligula suspendisse primis fringilla eleifend conubia atorney porta urna ugue praesent ligula aliquet aptent molestie. Ligula none tes facilisis venenatis nibh sodales tortor tempor a placerat mauris pellentesque primis</p>
                              <ul>
                                 <li>
                                    <i className="fa-solid fa-check"></i>
                                    Nam habitant dictum dise facilisi, natoque cursus phasellus rhoncus.
                                 </li>
                                 <li>
                                    <i className="fa-solid fa-check"></i>
                                    Euismod metus luctus fringilla nunc cras vulputate volutpat.
                                 </li>
                                 <li>
                                    <i className="fa-solid fa-check"></i>
                                    Quisque tellus rhoncus fames leo potenti pharetra mollis be gravida.
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="nav-addInfo" role="tabpanel" aria-labelledby="nav-addInfo-tab">
                           <AdditionalInfo />
                        </div>
                        <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`} id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
                           <Review />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ShopDetailsTabArea
