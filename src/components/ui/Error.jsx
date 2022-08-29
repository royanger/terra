import classNames from 'classnames'

export const Error = ({ children, css }) => {
   return (
      <p
         className={classNames(
            'text-center text-error flex flex-col items-center font-semibold',
            css
         )}
      >
         {children}
      </p>
   )
}
