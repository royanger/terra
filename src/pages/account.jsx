import { Title } from '../components/Title'
import { Layout } from '../components/ui/Layout'

export default function MyAccount() {
   return (
      <>
         <Title variant="h1">My Account</Title>
         <p>
            Display the My Account page, and include the Harvest Board component
         </p>
      </>
   )
}

MyAccount.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>{page}</Layout>
      </>
   )
}
