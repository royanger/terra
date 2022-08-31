import Image from 'next/image'
import Link from 'next/link'
import logo from '@/images/terra-logo.svg'

export const Footer = () => {
   return (
      <div className="mt-[72px] w-full">
         <div className="flex flex-row items-center">
            <Link href="/">
               <a>
                  <Image alt="Terra" src={logo} width={98} height={48} />
               </a>
            </Link>
            <div className="flex flex-row justify-end w-full">
               <ul className="flex-col flex">
                  <div className="flex flex-row">
                     <li>
                        <Link href="/about-us">
                           <a className="mr-6 mb-2">About Us</a>
                        </Link>
                     </li>
                     <li>
                        <Link href="/about-us/faq">
                           <a className="mb-2">FAQ</a>
                        </Link>
                     </li>
                  </div>
                  <li>
                     <Link href="/about-us/tos">
                        <a className="mb-2">Terms of Service</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/about-us/privacypolicy">
                        <a>Privacy Policy</a>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
         <div className="flex flex-row justify-center my-6">
            &copy; Copyright 2022, All Rights Reserved
         </div>
      </div>
   )
}
