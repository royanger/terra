import Link from 'next/link'
import { Title } from './Title'

export const Menu = () => {
   return (
      <div className="absolute border-2 border-error top-0 left-0 h-screen w-72 bg-white z-10">
         <div>
            <ul className="mt-5">
               <li>
                  <Title variant="h2">Menu asdf</Title>
               </li>
               <li>
                  <Link href="/account">My Account</Link>
               </li>
               <li>
                  <Link href="/donate">Donate</Link>
               </li>
               <li>
                  <Link href="community">Community</Link>
               </li>
               <li>
                  <Link href="harvest-board">Harvest Board</Link>
               </li>
               <li>
                  <Link href="about-us">About Us</Link>
               </li>
            </ul>
         </div>
      </div>
   )
}
