import { Title } from '../components/Title'
import { Layout } from '../components/layout/Layout'
import Link from 'next/link'

export default function AboutUs() {
   return (
      <>
         <Title variant="h1">About Us Photo</Title>
         <p>About Us, link to FAQ</p>
         <Link href="/about-us/faq">FAQ link</Link>
      </>
   )
}

AboutUs.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>{page}</Layout>
      </>
   )
}
