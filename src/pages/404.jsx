import { Title } from '@/components/Title'
import { Layout } from '@/components/ui/Layout'

export default function FourOhFour() {
   return (
      <>
         <Title variant="h1">FourOhFour Photo</Title>
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
