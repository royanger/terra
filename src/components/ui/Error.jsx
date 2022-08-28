import classNames from 'classnames'

export const Error = ({ children, css }) => {
   return (
      <p
         className={classNames(
            'text-center text-error flex flex-row justify-center font-semibold',
            css
         )}
      >
         {children}
      </p>
   )
}
