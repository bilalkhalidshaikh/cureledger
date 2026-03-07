import HomeTwo from "../components/homes/home-two"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const HomeTwoMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Home Two'} />
         <HomeTwo />
      </Wrapper>
   )
}

export default HomeTwoMain
