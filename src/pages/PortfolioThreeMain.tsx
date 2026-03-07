import PortfolioThree from "../components/portfolios/portfolio-three"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const PortfolioThreeMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Portfolio Three'} />
         <PortfolioThree />
      </Wrapper>
   )
}

export default PortfolioThreeMain
