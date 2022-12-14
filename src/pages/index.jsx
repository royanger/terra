import Head from 'next/head'
import Image from 'next/image'
import { LoginComponent } from '../components/ui/login-btn'
import { Title } from '../components/Title'
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
import { Header2 } from '../components/layout/Header2'
import { Layout } from '../components/ui/Layout'
import Link from 'next/link'

export default function Home() {
   return (
      <div className="">
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main>
            <Header2 />
            <Title variant="h1" className="text-primary">
               Replenish the earth, one grocery trip at a time.
            </Title>

            <Title variant="h2">
               From farm to table, we want all produce to be loved and used.
            </Title>

            <div className="flex flex-row">
               <img
                  src="https://i.imgur.com/d2AchLm.png"
                  alt="Man on the phone"
                  className="w-16"
               />

               <p>Capture your peculiar produce.</p>
            </div>
            <div className="flex flex-row-reverse">
               <img
                  src="https://i.imgur.com/pt89UKR.png"
                  alt="Coin in hand"
                  className="w-16"
               />
               <p>Buy your peculiar produce and get rewarded.</p>
            </div>
            <div className="flex flex-row">
               <img
                  src="https://i.imgur.com/eYZ2JPj.png"
                  alt="Girl pointing"
                  className="w-16"
               />
               <p>Compete with other Terrarians and be featured.</p>
            </div>
            <Link href="/auth/register">
               <button>Join Now</button>
            </Link>
            <p>Have an account?</p>
            <LoginComponent />
         </main>
      </div>
   )
}

Home.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>{page}</Layout>
      </>
   )
}
