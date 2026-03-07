import { useSelector } from "react-redux";
import { useState, type ChangeEvent } from "react";
import { selectProducts, type Product } from "../../../../redux/features/productSlice";

interface ProductTopProps {
   startOffset: number;
   endOffset: number;
   totalItems: number;
   setProducts: (products: Product[]) => void;
}

const ShopTop = ({ startOffset, endOffset, totalItems, setProducts }: ProductTopProps) => {
   const allProducts = useSelector(selectProducts);
   const [selected, setSelected] = useState('');

   const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      setSelected(value);

      let sortedProducts = [...allProducts];

      switch (value) {
         case 'popular':
            sortedProducts = sortedProducts
               .filter(item => item.offer)
               .sort((a, b) => {
                  const aPopular = parseFloat(a.offer || "0");
                  const bPopular = parseFloat(b.offer || "0");
                  return bPopular - aPopular;
               });
            break;
         case 'price':
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
            break;
         default:
            // do nothing – already using original list
            break;
      }

      setProducts(sortedProducts);
   };

   return (
      <div className="td-shop-top mb-45">
         <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5 col-md-5">
               <div className="td-shop-top-left">
                  <div className="td-shop-top-result mb-10">
                     <p>Showing {startOffset}-{endOffset} of {totalItems} Results</p>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-7">
               <div className="td-shop-top-right d-flex justify-content-start align-items-center justify-content-md-end">
                  <div className="td-shop-top-select">
                     <select onChange={selectHandler} value={selected} className="select">
                        <option value="">Default Sorting</option>
                        <option value="popular">Sort by Best Offers</option>
                        <option value="price">Sort by Price</option>
                     </select>
                  </div>
                  <button className="td-shop-top-btn ml-15">
                     {/* Filter Icon */}
                     <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0008 3.44995H10.8008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.8 3.44995H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.59844 5.9C7.95153 5.9 9.04844 4.8031 9.04844 3.45C9.04844 2.0969 7.95153 1 6.59844 1C5.24534 1 4.14844 2.0969 4.14844 3.45C4.14844 4.8031 5.24534 5.9 6.59844 5.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.9992 11.15H12.1992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.2 11.15H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.39922 13.6C10.7523 13.6 11.8492 12.503 11.8492 11.15C11.8492 9.79685 10.7523 8.69995 9.39922 8.69995C8.04612 8.69995 6.94922 9.79685 6.94922 11.15C6.94922 12.503 8.04612 13.6 9.39922 13.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     Filter
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShopTop;
