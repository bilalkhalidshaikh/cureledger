import HomeCureLedgerMain from "../components/homes/home-cureledger"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const HomeCureLedger = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'CureLedger - Dental Billing'} />
         <HomeCureLedgerMain />
      </Wrapper>
   )
}

export default HomeCureLedger
