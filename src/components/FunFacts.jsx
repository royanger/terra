import * as React from 'react'
import foodForThoughBGIMG from '@/images/images/home-food-for-thought-bg-optimized.jpg'
import { Button } from './ui/Button'

export const FunFacts = ({ data }) => {
   const [currentFact, setCurrentFact] = React.useState(data[0])

   // randomize fact on long -- prevent hydration error
   React.useEffect(() => {
      setCurrentFact(data[Math.floor(Math.random() * data.length)])
   }, [])

   return (
      <>
         <div
            className="flex flex-col items-center justify-center mt-3  rounded-3xl bg-cover w-full"
            style={{ backgroundImage: `url('${foodForThoughBGIMG.src}')` }}
         >
            <div className="flex flex-col items-center justify-center rounded-3xl text-white bg-black bg-opacity-60 drop-shadow-md p-7 text-[1.125rem] font-semibold">
               <div>
                  {currentFact.message}
                  <div className="text-xs mt-2 items-start w-full">
                     {currentFact.ref}
                  </div>
               </div>
               <div className="grid grid-cols-5 w-full mt-7">
                  <div className="col-span-3 flex items-center justify-end pr-4">
                     Read More
                  </div>
                  <div className="text-black col-span-2">
                     <Button variant="right">Forward</Button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
