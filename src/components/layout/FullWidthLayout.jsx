export const FullWidthLayout = ({ children }) => {
   return (
      <div className="flex justify-center">
         <div className="border-4 border-indigo-600 min-w-sm">
            <div className="pt-7 max-w-sm w-full ">{children}</div>
         </div>
      </div>
   )
}
