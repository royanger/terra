import React from 'react'

const FunFacts = ({ funFactToggle, funFactMessage, funFactRef }) => {
   return (
      <>
         <div
            className="flex items-center justify-center mt-3 mx-8"
            onClick={funFactToggle}
         >
            <div className="flex flex-col items-center justify-center border-[1px] border-gray rounded-3xl text-white bg-tertiary drop-shadow-md p-3">
               {funFactMessage}
               <div className="text-xs mt-2 items-start w-full">
                  {funFactRef}
               </div>
            </div>
         </div>
      </>
   )
}

export default FunFacts
