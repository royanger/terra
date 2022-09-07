import { Title } from '../components/Title'
import { Layout } from '../components/layout/Layout'
import { Header } from '../components/layout/Header'
import { BackBreadcrumb } from '../components/ui/BackBreadcrumb'
import Image from 'next/image'
import fourOhFourIMG from '../../public/images/illustrations/404.svg'
import { Button } from '../components/ui/Button'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function FourOhFour() {
   const { status } = useSession()
   const href = status === 'authenticated' ? '/dashboard' : '/'
   return (
      <>
         <BackBreadcrumb href={href} />
         <div className="flex justify-center mt-[54px]">
            <Image src={fourOhFourIMG} alt="404 Error" />
         </div>
         <Title variant="h1" className="text-center text-error mt-6">
            Oops!
         </Title>
         <p className="text-center mt-3">
            We can't seem to find the page you're looking for.
         </p>
         <Link href={href}>
            <a>
               <Button variant="primary" css="mt-4 mb-20">
                  Back to Homepage
               </Button>
            </a>
         </Link>
      </>
   )
}

FourOhFour.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>
            <Header />
            {page}
         </Layout>
      </>
   )
}
