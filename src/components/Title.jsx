export const Title = ({ variant, children, className }) => {
   const css = {
      h1: 'font-epilogue font-semibold text-[28px] leading-[150%]',
      h2: 'font-montserrat font-semibold text-[20px] leading-[150%]',
      h3: 'font-montserrat font-semibold text-[18px] leading-[150%]',
   }

   const titleVariants = ['h1', 'h2', 'h3']
   const safeTitle = variant ? variant.toLowerCase() : ''
   const Heading = titleVariants.includes(safeTitle) ? safeTitle : 'h1'

   return (
      <>
         <Heading className={`${css[Heading]} ${className ? className : ''}`}>
            {children}
         </Heading>
      </>
   )
}
