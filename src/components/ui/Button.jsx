import className from 'classnames'
import { AngledArrow } from './icons/AngledArrow'
import { LongArrowIcon } from './icons/LongArrowIcon'

export const Button = ({
   variant,
   children,
   css,
   type = 'button',
   onClick,
}) => {
   const buttonCSS = {
      primary:
         'bg-secondary hover:bg-tertiary hover:text-white font-semibold text-[1.125rem]  leading-[156%]',
      secondary:
         'border-[1px] border-black hover:border-tertiary hover:bg-tertiary hover:text-white font-semibold text-[1.125rem]  leading-[156%]',
      questionnaire:
         'border-[1px] border-black hover:border-primary hover:bg-primary hover:text-white py-[11px]',
      primaryShort:
         'bg-secondary hover:bg-tertiary hover:text-white font-semibold text-[1.125rem]  leading-[156%] w-[100px]',
      secondaryShort:
         'border-[1px] border-black hover:border-tertiary hover:bg-tertiary hover:text-white font-semibold text-[1.125rem]  leading-[156%]  w-[100x]',
      donate:
         'bg-secondary hover:bg-tertiary hover:text-white font-semibold text-[1.125rem]  leading-[156%]',
      modal: 'bg-secondary hover:bg-tertiary hover:text-white font-semibold text-[1.125rem]  leading-[156%]',
      left: 'border-[1px] border-black hover:border-tertiary hover:bg-tertiary hover:text-white py-2.5',
      right: 'border-[1px] border-black hover:border-tertiary hover:bg-tertiary hover:text-white py-2.5',
      modalleft: 'bg-secondary hover:bg-tertiary hover:text-white py-2.5',
      modalright: 'bg-secondary hover:bg-tertiary hover:text-white py-2.5',
   }

   const buttonVariants = [
      'primary',
      'secondary',
      'questionnaire',
      'primaryShort',
      'secondaryShort',
      'donate',
      'modal',
      'left',
      'right',
      'modalleft',
      'modalright',
   ]
   const safeButton = variant ? variant.toLowerCase() : ''
   const ButtonComponent = buttonVariants.includes(safeButton)
      ? safeButton
      : 'primary'

   let content

   switch (ButtonComponent) {
      case 'donate':
         content = (
            <>
               {children}
               <AngledArrow className="h-6 ml-3" />
            </>
         )
         break
      case 'left':
         content = (
            <>
               <span className="sr-only">{children}</span>
               <LongArrowIcon className=" h-6" test="this" />
            </>
         )
         break
      case 'right':
         content = (
            <>
               <span className="sr-only">{children}</span>
               <LongArrowIcon className="rotate-180 h-6" test="this" />
            </>
         )
         break
      case 'modalleft':
         content = (
            <>
               <span className="sr-only">{children}</span>
               <LongArrowIcon className=" h-6" test="this" />
            </>
         )
         break
      case 'modalright':
         content = (
            <>
               <span className="sr-only">{children}</span>
               <LongArrowIcon className="rotate-180 h-6" test="this" />
            </>
         )
         break
      default:
         content = children
         break
   }

   return (
      <button
         className={className(
            'rounded-full py-2 px-3 w-full flex items-center justify-center font-montserrat',
            buttonCSS[ButtonComponent],
            css
         )}
         type={type}
         onClick={onClick}
      >
         {content}
      </button>
   )
}
