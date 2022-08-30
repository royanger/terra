import { Title } from '@/components/Title'
import { Layout } from '@/components/ui/Layout'

export default function Community() {
   return (
      <>
         <Title variant="h1">Community Photo</Title>
         <p>List of top Terrarians in the community</p>
      </>
   )
}

Community.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>{page}</Layout>
      </>
   )
}
