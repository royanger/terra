import { Title } from '@/components/Title'
import { Layout } from '@/components/layout/Layout'

export default function HarvestBoard() {
   return (
      <>
         <Title variant="h1">Harvest Board Photo</Title>
         <p>
            Include the Harvest Board as its own reusuable component for here
            and My Account
         </p>
      </>
   )
}

HarvestBoard.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>{page}</Layout>
      </>
   )
}
