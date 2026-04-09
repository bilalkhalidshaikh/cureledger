import Hero from "./Hero";
import About from "./About";
// import Service from "./Service";
// import Portfolio from "./Portfolio";
// import Testimonial from "./Testimonial";
import TextSlider from "./TextSlider";
import Counter from "./Counter";
import Feature from "./Feature";
// import Brand from "./Brand";
import Faq from "./Faq";
import Process from "./Process";
// import Team from "./Team";
import Achievement from "./Achievement";
import Contact from "./Contact";
// import HeaderTwo from "../../../layouts/headers/HeaderTwo";
import FooterTwo from "./Footer";
import CureHeader from "../../../layouts/headers/CureHeader";
import Focus from "./Focus";
import CureInsight from "./CureInsight";
import Pricing from "./Pricing";
import SecurityArea from "./SecurityArea";

const HomeTwo = () => {
  return (
    <>
      <CureHeader />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero />

            <Achievement />
            <About />
            {/* <Process /> */}
            <Feature />
            <SecurityArea/>
            <Focus />
            {/* <Brand /> */}
            {/* <Portfolio /> */}
            {/* <Service /> */}
            {/* <Testimonial /> */}
            <TextSlider />
            <CureInsight />
            {/* <Counter /> */}
            {/* <Pricing /> */}
            {/* <Team /> */}
            <Faq />

            <Contact />
            {/* <Blog /> */}
          </main>
          <FooterTwo />
        </div>
      </div>
    </>
  );
};

export default HomeTwo;
