import { Layout } from '../../components/layout/Layout'
import { Title } from '../../components/Title'

export default function TOS() {
   return (
      <>
         <Title variant="h1">TOS </Title>
      </>
   )
}

TOS.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>{page}</Layout>
      </>
   )
}
