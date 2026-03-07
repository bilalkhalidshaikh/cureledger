import PortfolioFour from "../components/portfolios/portfolio-four"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const PortfolioFourMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Portfolio Four'} />
         <PortfolioFour />
      </Wrapper>
   )
}

export default PortfolioFourMain
