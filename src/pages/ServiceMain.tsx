import Service from "../components/pages/services/service"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const ServiceMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Services'} />
         <Service />
      </Wrapper>
   )
}

export default ServiceMain
