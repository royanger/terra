import { Title } from '../../components/Title'
import { Layout } from '../../components/ui/Layout'
import { Loader } from '../../components/ui/Loader'

export default function FourOhFour() {
   return (
      <>
         <Title variant="h1" className="mb-14">
            FourOhFour Photo
         </Title>
         <div className="flex items-center justify-center">
            <Loader ratio={200} />
         </div>
      </>
   )
}

FourOhFour.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>{page}</Layout>
      </>
   )
}
