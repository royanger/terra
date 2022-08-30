import React, { useEffect, useState } from 'react'
import { FunFacts } from '@/components/FunFacts'
import { Title } from '@/components/Title'
import { Layout } from '@/components/ui/Layout'
import Link from 'next/link'

export default function Dashboard() {
   const [funFactDialogOpen, setFunFactDialogOpen] = useState(false)
   const [funFactObj, setFunFactObj] = useState({})

   useEffect(() => {
      randomizeFact()
   }, [])

   const randomizeFact = () => {
      setFunFactObj(funFactsDB[Math.floor(Math.random() * funFactsDB.length)])
   }
   const { funFactMessage, funFactRef } = funFactObj

   const funFactToggle = () => {
      setFunFactDialogOpen(!funFactDialogOpen)
   }

   return (
      <>
         <Title variant="h1">Welcome back, Jenny!</Title>
         <Title variant="h2">Some food for thought:</Title>
         <FunFacts
            funFactToggle={funFactToggle}
            funFactMessage={funFactMessage}
            funFactRef={funFactRef}
         />
         <div className="flex items-center justify-center w-full">
            <p onClick={randomizeFact}>Click on the fact to learn more</p>
         </div>

         <Title variant="h2">See any peculiar produce today?</Title>
         {/* refactor this */}

         <div className="grid grid-cols-2">
            <div>
               <img src="/images/mrterra/mr.t-pointing.svg" alt="globe" />
            </div>
            <div>
               Reveal Mr. Terra from the pile of food waste by taking a photo or
               uploading a peculiar produce from your album
            </div>
         </div>
         <div>
            <ul>
               <li>
                  <Title variant="h2">Menu</Title>
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
         <Layout>{page}</Layout>
      </>
   )
}

const funFactsDB = [
   {
      funFactMessage:
         'Wasting food contributes to 10% of the world’s greenhouse gas emissions.*',
      funFactRef: '* WWF',
      funFactModalMessage:
         'Food waste’s high emissions are largely due to food production using a huge amount of land, water and energy. An area the size of the Indian subcontinent (4.4m km2 ) and water volume equivalent to 304 million Olympic swimming pools are needed to produce food that never leaves the farm.',
      funFactLink: 'https://www.nrdc.org/food-waste',
   },
   {
      funFactMessage:
         'Uneaten food equates to Americans throwing out as much as $218 billion each year.*',
      funFactRef: '* NRDC',
      funFactModalMessage:
         "Between 2011-2012, some experts discovered that the US lost 15.4 billion dollars of retail food annually. Fruit losses, most of it perfectly good food, were around 12.3%-that's enough to feed 5.3 million people. They also found that US households were the most significant food wasters.",
      funFactLink:
         'https://www.nrdc.org/sites/default/files/food-waste-city-level-report.pdf',
   },
   {
      funFactMessage:
         'An average of 68% of all food discarded (as tracked in kitchen diaries) was potentially edible.*',
      funFactRef: '* NRDC',
      funFactModalMessage:
         "A lot of the food we throw away is edible. Meanwhile, approximately 4-10% of food from kitchens in restaurants ends up as pre-consumer waste. For instance, McDonald's says its employees must dump all fries in the trash can after 7 minutes, while they must discard burgers after 20 mins.",
      funFactLink:
         'https://www.nrdc.org/sites/default/files/food-waste-city-level-report.pdf/updates.panda.org/driven-to-waste-report',
   },
   {
      funFactMessage:
         '14% of food produced is lost from the post-harvest stage up to, but excluding, the retail stage.*',
      funFactRef: '* FAO',
      funFactModalMessage:
         "Fruits and vegetables usually suffer massive hits from food waste when compared to cereals and pulses on farms. Harvesting, poor handling, and inadequate storage contribute to on-farm storage losses. It's imperative to identify critical loss points to resolve these issues.",
      funFactLink: ' https://www.fao.org/family-farming/detail/en/c/1245425/',
   },
   {
      funFactMessage:
         '44% of fruit and veggies end up as waste in South Africa, most wasted before reaching the supermarket.*',
      funFactRef: '* WWF',
      funFactModalMessage:
         'Yearly, South Africa loses one-third of the 31 million tonnes of food produced locally. Fruit and vegetable wastage contribute a significant portion to the loss. Supermarket chains, restaurants, and the busy lifestyle of most South Africans play a considerable role in this trend.',
      funFactLink:
         'https://www.oneplanetnetwork.org/sites/default/files/wwf_food_waste_and_loss_final.pdf',
   },
]
