import Link from 'next/link'
import { Icon } from '@iconify/react'


const Header = () => {
   return (
      <>
         <div className="flex items-center justify-center">
            <div className="absolute left-3">
               <Icon icon="charm:menu-hamburger" />
            </div>
            <Link href="/">
               <img
                  className="w-32"
                  src="/images/terra-logo.svg"
                  alt="Teerra Logo"
               />
            </Link>
         </div>
      </>
   )
}

export default Header
