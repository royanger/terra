import { Title } from '../components/Title'
import { Layout } from '../components/layout/Layout'
import { Header } from '../components/layout/Header'
import { authOptions } from './api/auth/[...nextauth]'
import { unstable_getServerSession as getServerSession } from 'next-auth'
import { useHydratedSession } from '../utils/customHooks'
import { BackBreadcrumb } from '../components/ui/BackBreadcrumb'
import Image from 'next/image'
import userAvatar from '../../public/images/avatars/avatar-1.svg'
import pointsCoinIMG from '../../public/images/illustrations/home-acc-community-coin.svg'
import fruitProduceIMG from '../../public/images/illustrations/create-acc-produce.svg'
import { Button } from '../components/ui/Button'

export default function MyAccount() {
   const session = useHydratedSession()
   return (
      <>
         <BackBreadcrumb href="/dashboard" />
         <div className="flex justify-left mt-[24px]">
            <Image src={userAvatar} alt="User Avatar" />
         </div>
         <Title
            variant="h1"
            className="flex justify-center bottom-[88px] ml-20 relative"
         >
            {session?.user?.name}
         </Title>
         <div className="flex left-[88px] w-[18px] h-[18px] bottom-20 relative">
            <Image src={pointsCoinIMG} alt="Points Coin" />
         </div>
         <p className="flex justify-center left-10 bottom-[102px] relative">
            0 points accumulated
         </p>
         <p className=" flex justify-center left-4 bottom-24 relative">
            Terrarian since 08/2022
         </p>
         <Title variant="h2">My Harvest</Title>
         <p className="mt-1">Peculiar produce you've discovered and bought.</p>
         <p className="flex justify-center mt-1">You have no harvest yet.</p>
         <div className="flex justify-center mt-8 mb-8 ml-10 mr-10">
            <Image src={fruitProduceIMG} alt="Fruit Produce" />
         </div>
         <Button variant="primary" css="mt-8 mb-16">
            Upload produce
         </Button>
      </>
   )
}

MyAccount.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>
            <Header />
            {page}
         </Layout>
      </>
   )
}

export async function getServerSideProps(context) {
   const session = await getServerSession(context.req, context.res, authOptions)

   if (!session) {
      return {
         redirect: {
            permanent: false,
            destination: `/auth/login`,
         },
      }
   }

   return {
      props: {
         session: session,
      },
   }
}
