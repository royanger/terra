import Link from 'next/link'
import Image from 'next/image'
import backIcon from '../../../public/images/icons/back-arrow.svg'

export const BackBreadcrumb = ({ href }) => {
   return (
      <Link href={href}>
         <a>
            <p className="flex flex-row my-6 items-center h-7">
               <span className="mr-2">
                  <Image src={backIcon} alt="Back" width={16} height={14} />
               </span>
               Back
            </p>
         </a>
      </Link>
   )
}
