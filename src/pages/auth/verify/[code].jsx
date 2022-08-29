import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { Layout } from '../../../components/ui/Layout'
import { BackBreadcrumb } from '../../../components/ui/BackBreadcrumb'
import { Title } from '../../../components/Title'
import { Button } from '../../../components/ui/Button'
import { Header2 } from '../../../components/layout/Header2'
import { Footer } from '../../../components/layout/Footer'
import successImg from '../../../../public/images/mrterra/mr.t-jumping.svg'
import failImg from '../../../../public/images/mrterra/mr.t-saying-hi.svg'

export default function Verify(props) {
   if (props.type === 'error') {
      return (
         <>
            <BackBreadcrumb href="/auth/login" />
            <div className="w-full flex justify-center mb-2">
               <Image alt="Password Reset" src={successImg} />
            </div>
            <div className="w-full flex flex-col items-center mb-4">
               <Title variant="h1" className="text-error">
                  Whoops
               </Title>
               <p className="mt-2 text-center">
                  We've failed to verify your email. Please contact Terra at{' '}
                  <a href="info@savemrterra.com">info@savemrterra.com</a> to
                  resolve this issue.
               </p>
            </div>
         </>
      )
   }

   return (
      <>
         <>
            <BackBreadcrumb href="/auth/login" />
            <div className="w-full flex justify-center mb-11">
               <Image alt="Password Reset" src={successImg} />
            </div>
            <div
               className="w-full flex flex-col items-center mb-4
            "
            >
               <Title variant="h1" className="text-primary">
                  Woo hoo!
               </Title>
               <p className="mt-2 text-center">
                  Sucessfully created account. Welcome to Terra!
               </p>
               <Link href="/auth/login">
                  <a className="w-full mt-4">
                     <Button variant="primary">Sign In</Button>
                  </a>
               </Link>
            </div>
         </>
      </>
   )
}

export async function getServerSideProps(context) {
   const { data } = await axios.post(`${process.env.APP_URL}/api/auth/verify`, {
      code: context.params.code,
   })

   return {
      props: data,
   }
}

Verify.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>
            <Header2 />
            {page}
            <Footer />
         </Layout>
      </>
   )
}
