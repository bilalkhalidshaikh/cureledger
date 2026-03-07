import FullScreenSlicer from "../components/homes/full-screen-slicer"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const FullScreenSlicerMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Full Screen Slicer'} />
         <FullScreenSlicer />
      </Wrapper>
   )
}

export default FullScreenSlicerMain
