import { Menu } from '../Menu'

export const Layout = ({ children }) => {
   return (
      <div className="flex justify-center">
         <div className="border-4 border-indigo-600 min-w-sm relative">
            {/* <Menu /> */}
            <div className="pt-7 px-8 max-w-sm w-full ">{children}</div>
         </div>
      </div>
   )
}
