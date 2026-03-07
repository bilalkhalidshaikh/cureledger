import InteractiveLinks from "../components/homes/interactive-links"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const InteractiveLinksMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Interactive Links'} />
         <InteractiveLinks />
      </Wrapper>
   )
}

export default InteractiveLinksMain
