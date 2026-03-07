import PortfolioShowcase from "../components/homes/portfolio-showcase"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const PortfolioShowcaseMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Portfolio Showcase'} />
         <PortfolioShowcase />
      </Wrapper>
   )
}

export default PortfolioShowcaseMain
