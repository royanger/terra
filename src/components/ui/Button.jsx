import className from 'classnames'
import { LongArrowIcon } from './LongArrowIcon'

export const Button = ({ variant, children }) => {
   const buttonCSS = {
      primary: 'bg-secondary hover:bg-tertiary hover:text-white',
      secondary:
         'border-[1px] border-black hover:border-tertiary hover:bg-tertiary hover:text-white',
      questionnaire:
         'border-[1px] border-primary hover:bg-primary hover:text-white',
      primaryShort: 'bg-secondary hover:bg-tertiary hover:text-white',
      secondaryShort:
         'border-[1px] border-black hover:border-tertiary hover:bg-tertiary hover:text-white',
      donate: 'bg-secondary hover:bg-tertiary hover:text-white',
      modal: 'bg-secondary hover:bg-tertiary hover:text-white',
      left: 'border-[1px] border-black hover:border-tertiary hover:bg-tertiary hover:text-white',
      right: 'border-[1px] border-black hover:border-tertiary hover:bg-tertiary hover:text-white',
      modalleft: 'bg-secondary hover:bg-tertiary hover:text-white',
      modalright: 'bg-secondary hover:bg-tertiary hover:text-white',
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

   console.log('test', ButtonComponent)
   return (
      <>
         <div className="w-full ">
            <ButtonComponent
               className={className(
                  'rounded-full py-2 px-3 w-full flex items-center justify-center font-montserrat font-semibold',
                  buttonCSS[ButtonComponent]
               )}
            >
               {content}
            </ButtonComponent>
         </div>
      </>
   )
}
