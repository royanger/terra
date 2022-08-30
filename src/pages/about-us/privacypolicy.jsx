import { Layout } from '@/components/ui/Layout'
import { Title } from '@/components/Title'

export default function PrivacyPolicy() {
   return (
      <>
         <Title variant="h1">Privacy Policy </Title>
      </>
   )
}

PrivacyPolicy.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>{page}</Layout>
      </>
   )
}
