import PortfolioOne from "../components/portfolios/portfolio-one"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const PortfolioOneMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Portfolio One'} />
         <PortfolioOne />
      </Wrapper>
   )
}

export default PortfolioOneMain
