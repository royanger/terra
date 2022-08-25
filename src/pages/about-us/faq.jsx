import { Layout } from '../../components/ui/Layout'
import { Title } from '../../components/Title'

export default function FAQ() {
   return (
      <>
         <Title variant="h1">FAQ </Title>
      </>
   )
}

FAQ.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>{page}</Layout>
      </>
   )
}
