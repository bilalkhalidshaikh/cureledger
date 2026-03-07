import ErrorArea from "../components/pages/error/ErrorArea"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const ErrorMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'404 ||'} />
         <ErrorArea />
      </Wrapper>
   )
}

export default ErrorMain
