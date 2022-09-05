import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export const Header = () => {
   return (
      <>
         <div className="flex items-center justify-center relative bg-white border-b-2 border-purple-900">
            <div className="absolute left-3">
               <Icon icon="charm:menu-hamburger" className="w-6 h-6" />
            </div>
            <Link href="/">
               <img
                  src="/images/terra-logo.svg"
                  alt="Terra"
                  className="w-logo"
               />
            </Link>
         </div>
      </>
   )
}
