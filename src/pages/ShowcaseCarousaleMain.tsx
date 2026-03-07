import ShowcaseCarousale from "../components/homes/showcase-carousale"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const ShowcaseCarousaleMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Showcase Carousale'} />
         <ShowcaseCarousale />
      </Wrapper>
   )
}

export default ShowcaseCarousaleMain
