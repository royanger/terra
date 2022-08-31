import { Title } from '@/components/Title'
import { Layout } from '@/components/layout/Layout'

export default function Upload() {
   return (
      <>
         <Title variant="h1">Upload Photo</Title>
         <p>Upload image/take photo, and subsequent screens</p>
      </>
   )
}

Upload.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>{page}</Layout>
      </>
   )
}
