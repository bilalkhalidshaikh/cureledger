import ContactMap from "./ContactMap"
import ContactArea from "./ContactArea"
import ContactBranch from "./ContactBranch"
import CureHeader from "../../layouts/headers/CureHeader"
import FooterTwo from "../homes/home-cureledger/Footer"
import BreadcrumbTwo from "../common/BreadcrumbTwo"
import Header from "../../layouts/headers/Header"

const Contact = () => {
   return (
      <>
      <Header/>
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main style={{ backgroundColor: '#FAFAFA' }}>
                  
                  {/* Reusable Parallax Breadcrumb populated with Contact data */}
                  <BreadcrumbTwo 
                     sub_title="LET'S CONNECT"
                     title={<>Ready to optimize your practice? <br/><span style={{ color: '#09B2AB' }}>We are here to help.</span></>}
                     desc="Whether you have questions about our RCM services, need a custom pricing quote, or want a free revenue audit, our billing experts are ready to assist you."
                  />

                  <ContactArea />
                  <ContactBranch />
                  <ContactMap />
                  
               </main>
               <FooterTwo/>
            </div>
         </div>
      </>
   )
}

export default Contact;