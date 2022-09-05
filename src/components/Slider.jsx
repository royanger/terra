import * as React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { Icon } from '@iconify/react'

import { Title } from './Title'
import coinIMG from '../../public/images/illustrations/home-acc-community-coin.svg'
import mrterraIMG from '../../public/images/mrterra/mr.t-groceries.svg'
import { Button } from './ui/Button'

// slide 1 of 3
const SlideOne = () => {
   return (
      <>
         <div className="flex items-center justify-center">
            <Image
               alt="Hand with reward coin"
               src="/images/desktop-images/landing/card-hand.svg"
               width={212}
               height={150}
            />
         </div>
         <div className="col-span-3 lg:hidden flex items-center ml-4">
            <p>Earn points by uploading peculiar produce you bought.</p>
         </div>
         <div className="hidden lg:block lg:col-span-2 mr-8">
            <Title variant="h3" className="lg:text-[25px] mb-8">
               Get rewarded and earn points.
            </Title>
            <ul className="p-2 pl-0">
               <li className="flex flex-row items-center">
                  <div className="mr-3">
                     <Image alt="bullet" src={coinIMG} height={32} width={32} />
                  </div>
                  <p className="col-span-7">
                     Upload photos of peculiar produce you bought.
                  </p>
               </li>

               <li className="flex flex-row items-center">
                  <div className="mr-3">
                     <Image alt="bullet" src={coinIMG} height={32} width={32} />
                  </div>
                  <p className="col-span-7">
                     Read external food waste articles.
                  </p>
               </li>
               <li className="flex flex-row items-center">
                  <div className="mr-3">
                     <Image alt="bullet" src={coinIMG} height={32} width={32} />
                  </div>
                  <p className="col-span-7">
                     Explore food rescue organizations.
                  </p>
               </li>
            </ul>
         </div>
      </>
   )
}

// slide 2 of 3
const SlideTwo = () => {
   return (
      <>
         <div className="flex items-center justify-center">
            <Image
               alt="Produce art over a star"
               src="/images/desktop-images/landing/card-produce.svg"
               width={155}
               height={150}
            />
         </div>
         <div className="col-span-3 lg:hidden flex items-center ml-4">
            <p>See all the peculiar produce you saved in your harvest board.</p>
         </div>
         <div className="hidden lg:flex lg:col-span-2 flex-col justify-center mr-8">
            <Title variant="h3" className="lg:text-[25px] mb-8">
               See all the peculiar produce you saved in your harvest board.
            </Title>
            <p>
               Have access to your gallery in your account. See what other
               Terrarians have posted on the Harvest Board page.
            </p>
         </div>
      </>
   )
}

// slide 3 of 3
const SlideThree = () => {
   return (
      <>
         <div className="flex items-center justify-center">
            <Image
               alt="Shopper using the app to learn"
               src="/images/desktop-images/landing/card-torso.svg"
               width={173}
               height={150}
            />
         </div>
         <div className="col-span-3 lg:hidden flex items-center ml-4">
            <p>
               Be educated on food waste through bite-sized food for thought.
            </p>
         </div>
         <div className="hidden lg:flex lg:col-span-2 flex-col justify-center  mr-8">
            <Title variant="h3" className="lg:text-[25px] mb-8">
               Be educated on food waste.
            </Title>
            <p className="mb-4">
               Too busy but want to be educated? We got you.{' '}
            </p>
            <p>
               Receive bite-sized food for thought about food waste every day
               and have access to the full article if you’re further interested.
            </p>
         </div>
      </>
   )
}

const LandingCards = ({ slide, slides }) => {
   const Slide = slides[slide]

   return (
      <div className="content col-span-4 lg:col-span-6 bg-primary text-white rounded-3xl p-5 lg:p-4 lg:py-16 grid grid-cols-4 lg:grid-cols-3 min-h-[130px] lg:min-h-[330px]">
         <Slide />
      </div>
   )
}

export const Slider = () => {
   const [slide, setSlide] = React.useState(0)
   const slides = { 0: SlideOne, 1: SlideTwo, 2: SlideThree }

   // dynamically create the slider mini nav based off of number of slides
   // create links for each nav item
   const createSliderNav = slide => {
      const slideCount = Object.keys(slides).length
      const inactiveButtons = slideCount - (slide + 1)
      const activeButtons = slideCount - inactiveButtons

      // create an array of 'active' and 'inactive' for each required button
      const buttons = []
      for (let i = 0; i < activeButtons; i++) {
         buttons.push('active')
      }
      for (let i = 0; i < inactiveButtons; i++) {
         buttons.push('inactive')
      }

      // generate nav based off of 'buttons' array
      const nav = buttons.map((button, index) => {
         return (
            <div className="" key={index}>
               <button
                  type="button"
                  className="py-4 px-2"
                  onClick={() => setSlide(index)}
               >
                  {button === 'inactive' && (
                     <Icon
                        icon="akar-icons:circle"
                        className="w-4 h-4 text-primary"
                     />
                  )}
                  {button === 'active' && (
                     <Icon
                        icon="akar-icons:circle-fill"
                        className="w-4 h-4 text-primary"
                     />
                  )}
               </button>
            </div>
         )
      })

      return nav
   }

   createSliderNav(slide)

   const handleSlideChange = type => {
      if (type === 'inc') {
         if (slide === Object.keys(slides).length - 1) return setSlide(0)
         return setSlide(slide + 1)
      }
      if (type === 'dec') {
         if (slide === 0) return setSlide(Object.keys(slides).length - 1)
         return setSlide(slide - 1)
      }
      return null
   }

   return (
      <>
         <Head>
            <link
               rel="preload"
               href="/images/desktop-images/landing/card-hand.svg"
               as="image"
            />
            <link
               rel="preload"
               href="/images/desktop-images/landing/card-produce.svg"
               as="image"
            />
            <link
               rel="preload"
               href="/images/desktop-images/landing/card-torso.svg"
               as="image"
            />
         </Head>
         <div className="terra-works grid grid-cols-6 lg:grid-cols-8 max-w-[1440px] mx-8 md:mx-16 lg:mx-0">
            <div className="title flex items-end col-span-3 lg:col-span-4">
               <Title
                  variant="h2"
                  className="lg:text-[32px] lg:ml-[84px] mb-4 lg:mn-8"
               >
                  How Terra Works
               </Title>
            </div>
            <div className="mrterra col-span-3 lg:col-span-4 flex justify-end">
               <Image alt="Mr. Terra with Groceries" src={mrterraIMG} />
            </div>
            <div className="leftarrow flex items-center justify-center  mt-4 lg:mt-0">
               <Button
                  variant="left"
                  css="lg:hidden"
                  onClick={() => handleSlideChange('dec')}
               >
                  Previous
               </Button>
               <button
                  type="button"
                  className="hidden lg:inline p-4 rounded-full"
                  onClick={() => handleSlideChange('dec')}
               >
                  <Icon
                     icon="dashicons:arrow-left-alt2"
                     className="w-10 h-10"
                  />
               </button>
            </div>

            <LandingCards slide={slide} slides={slides} />

            <div className="rightarrow flex items-center justify-center  mt-4 lg:mt-0">
               <Button
                  variant="right"
                  css="lg:hidden"
                  onClick={() => handleSlideChange('inc')}
               >
                  Next
               </Button>
               <button
                  type="button"
                  className="hidden lg:inline p-4 rounded-full"
                  onClick={() => handleSlideChange('inc')}
               >
                  <Icon
                     icon="dashicons:arrow-right-alt2"
                     className="w-10 h-10"
                  />
               </button>
            </div>
            <div className="dots flex items-center justify-center col-span-2 md:col-span-4 lg:col-span-8 mt-4 lg:mt-0">
               {createSliderNav(slide)}
            </div>
         </div>
      </>
   )
}
