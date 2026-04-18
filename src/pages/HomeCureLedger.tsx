import HomeCureLedgerMain from "../components/homes/home-cureledger"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const HomeCureLedger = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Home'} />
         <HomeCureLedgerMain />
      </Wrapper>
   )
}

export default HomeCureLedger
