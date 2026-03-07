import { useEffect } from "react";

type SEOProps = {
   pageTitle: string;
};

const SEO = ({ pageTitle }: SEOProps) => {
   useEffect(() => {
      document.title = `${pageTitle} - Cureledger - Dental Billing `;
   }, [pageTitle]);

   return null;
};

export default SEO;