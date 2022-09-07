import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Menu } from '../Menu'

export const Header = () => {
   const [showMenu, setShowMenu] = React.useState(false)

   return (
      <>
         <div className="flex items-center justify-center relative bg-white border-b-2 border-purple-900">
            <div className="absolute left-3">
               <button onClick={() => setShowMenu(true)}>
                  <Icon icon="charm:menu-hamburger" className="w-6 h-6" />
               </button>
            </div>
            <Link href="/">
               <img
                  src="/images/terra-logo.svg"
                  alt="Terra"
                  className="w-logo"
               />
            </Link>
         </div>
         <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </>
   )
}
