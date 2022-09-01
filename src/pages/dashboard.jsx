import * as React from 'react'
import { authOptions } from './api/auth/[...nextauth]'
import { unstable_getServerSession as getServerSession } from 'next-auth'
import { useHydratedSession } from '../utils/customHooks'
import Link from 'next/link'
import Image from 'next/image'
import apiClient from '../utils/axios'

import { FunFacts } from '../components/FunFacts'
import { Header } from '../components/layout/Header'
import { Title } from '../components/Title'
import { FullWidthLayout } from '../components/layout/FullWidthLayout'
import { Button } from '../components/ui/Button'

import bgGreenIMG from '../../public/images/backgrounds/home-green-bg.svg'
import bgYellowIMG from '../../public/images/backgrounds/home-yellow-bg.svg'
import mrTerraInWasteIMG from '../../public/images/mrterra/mr.t-in-waste.svg'
import peculiarPeach from '../../public/images/images/onboarding-home-peculiar-peach.svg'
import perfectPeach from '../../public/images/images/onboarding-home-perfect-peach.svg'
import lemonIMG from '../../public/images/illustrations/home-lemon-rotated.svg'
import coinIMG from '../../public/images/illustrations/home-acc-community-coin.svg'

export default function Dashboard({ facts }) {
   const session = useHydratedSession()
   const [showModal, setShowModal] = React.useState(false)

   return (
      <>
         <Title variant="h1" className=" mt-5 px-8 text-blue-dark">
            Welcome, {session?.user?.name}
         </Title>
         <Title variant="h2" className="mt-4 px-8">
            Some food for thought:
         </Title>
         <div className="px-8">
            <FunFacts data={facts} setShowModal={setShowModal} />
         </div>

         <div
            className="h-32 bg-contain bg-no-repeat bg-bottom"
            style={{ backgroundImage: `url(${bgGreenIMG.src})` }}
         ></div>

         <div className="bg-primary text-white px-8 relative">
            <Title variant="h2">See any peculiar produce today?</Title>
            <p className="mt-3">
               Save Mister Terra from the pile of waste by uploading a photo of
               peculiar produce and earn a point!
            </p>
            <Link href="/upload">
               <a>
                  <Button variant="primary" css="mt-3">
                     Upload Picture
                  </Button>
               </a>
            </Link>
            <div className="relative bottom-[-18px]">
               <div className="flex justify-center">
                  <Image
                     alt="Mr. Terra stuck in waste"
                     src={mrTerraInWasteIMG}
                     height={177}
                     width={269}
                  />
               </div>
            </div>
         </div>

         <div
            className="h-12 bg-contain bg-no-repeat bg-bottom bg-primary"
            style={{ backgroundImage: `url(${bgYellowIMG.src})` }}
         ></div>

         <div className="px-8 bg-tan">
            <Title variant="h2" className="pt-5">
               You may ask... what makes produce “peculiar”?
            </Title>
            <p className="mt-6">
               At Terra, we define “peculiar produce” as fruits and vegetable
               that have obvious cosmetic quirks (odd shapes, blemishes,
               scarring) and no clear signs of spoilage.
            </p>
            <div className="grid grid-cols-2 mt-6 pb-12">
               <div className="flex flex-col items-center">
                  <Image
                     alt='"Perfect Peach"'
                     src={perfectPeach}
                     height={114}
                     width={114}
                  />
                  <p>"Perfect" Peach</p>
               </div>
               <div className="flex flex-col items-center">
                  <Image
                     alt="Peculiar Peach"
                     src={peculiarPeach}
                     height={105}
                     width={107}
                  />
                  <p>Peculiar Peach</p>
               </div>
            </div>
         </div>
         <div className="bg-tertiary text-white px-8 relative pb-8">
            <Title variant="h2" className="pt-7">
               Terra's Reward System{' '}
            </Title>
            <ul className="p-2">
               <li className="grid grid-cols-8 items-center">
                  <div className="mr-3 col-span-1 flex items-center justify-center">
                     <Image alt="bullet" src={coinIMG} height={32} width={32} />
                  </div>
                  <p className="col-span-7">
                     Upload photos of peculiar produce you bought.
                  </p>
               </li>

               <li className="grid grid-cols-8 items-center">
                  <div className="mr-3  col-span-1">
                     <Image alt="bullet" src={coinIMG} height={32} width={32} />
                  </div>
                  <p className="col-span-7">
                     Read external food waste articles.
                  </p>
               </li>
               <li className="grid grid-cols-8 items-center">
                  <div className="mr-3  col-span-1">
                     <Image alt="bullet" src={coinIMG} height={32} width={32} />
                  </div>
                  <p className="col-span-7">
                     Explore food rescue organizations.
                  </p>
               </li>
            </ul>
            <div className="absolute top-[-75px] right-0">
               <Image alt="A peculiar lemon" src={lemonIMG} />
            </div>
         </div>

         <div>
            <ul className="mt-5">
               <li>
                  <Title variant="h2">Menu asdf</Title>
               </li>
               <li>
                  <Link href="/account">My Account</Link>
               </li>
               <li>
                  <Link href="/donate">Donate</Link>
               </li>
               <li>
                  <Link href="community">Community</Link>
               </li>
               <li>
                  <Link href="harvest-board">Harvest Board</Link>
               </li>
               <li>
                  <Link href="about-us">About Us</Link>
               </li>
            </ul>
         </div>
      </>
   )
}

Dashboard.getLayout = function getLayout(page) {
   return (
      <>
         <FullWidthLayout>
            <Header />
            {page}
         </FullWidthLayout>
      </>
   )
}

export async function getServerSideProps(context) {
   const { data } = await apiClient.get(`/api/funfacts`)

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
         facts: data.facts,
      },
   }
}
