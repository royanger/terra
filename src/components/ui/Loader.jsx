export const Loader = ({ ratio }) => {
   const newSize = ratio / 100
   console.log('newSize', newSize)
   const cssValues = {
      '--newSize': newSize,
   }

   return (
      <>
         <div
            className="terra-ring"
            role="alert"
            aria-live="assertive"
            style={{ '--rts-color': '#35572F' }}
         >
            <div className="inline-block relative" style={cssValues}>
               <p className="sr-only" aria-hidden="false">
                  Loading
               </p>
               <div aria-hidden="true"></div>
               <div aria-hidden="true"></div>
               <div aria-hidden="true"></div>
               <div aria-hidden="true"></div>
            </div>
         </div>
      </>
   )
}
