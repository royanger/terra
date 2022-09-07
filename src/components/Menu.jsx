import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'

import { Title } from './Title'
import classNames from 'classnames'
import logoIMG from '../../public/images/terra-logo.svg'

export const Menu = ({ showMenu, setShowMenu }) => {
   return (
      <div
         className={classNames(
            'absolute rounded-tr-[40px] top-0 left-0 h-screen w-72 bg-white z-10',
            { hidden: showMenu === false }
         )}
      >
         <div className="flex flex-row">
            <div className="grow ml-8 my-12">
               <Image src={logoIMG} alt="Terra" width={108} height={52} />
            </div>
            <button className="mr-10" onClick={() => setShowMenu(false)}>
               <Icon icon="bi:x" className="w-7 h-7 mr-4" />
            </button>
         </div>
         <div>
            <ul className="mt-5 ml-8">
               <li>
                  <Link href="/account">
                     <a className="mb-7 flex flex-row items-center">
                        <Icon
                           icon="ant-design:home-outlined"
                           className="w-7 h-7 mr-4"
                        />
                        Home
                     </a>
                  </Link>
               </li>
               <li>
                  <Link href="/account">
                     <a className="mb-7 flex flex-row items-center">
                        <Icon icon="codicon:account" className="w-7 h-7 mr-4" />
                        My Account
                     </a>
                  </Link>
               </li>
               <li>
                  <Link href="/donate">
                     <a className="mb-7 flex flex-row items-center">
                        <Icon
                           icon="dashicons:money-alt"
                           className="w-7 h-7 mr-4"
                        />
                        Donate
                     </a>
                  </Link>
               </li>
               <li>
                  <Link href="community">
                     <a className="mb-7 flex flex-row items-center">
                        <Icon
                           icon="majesticons:globe-earth-line"
                           className="w-7 h-7 mr-4"
                        />
                        Community
                     </a>
                  </Link>
               </li>
               <li>
                  <Link href="harvest-board">
                     <a className="mb-7 flex flex-row items-center">
                        <Icon
                           icon="carbon:fruit-bowl"
                           className="w-7 h-7 mr-4"
                        />
                        Harvest Board
                     </a>
                  </Link>
               </li>
               <li>
                  <Link href="about-us">
                     <a className="mb-7 flex flex-row items-center">
                        <Icon
                           icon="clarity:info-circle-line"
                           className="w-7 h-7 mr-4"
                        />
                        About Us
                     </a>
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   )
}
