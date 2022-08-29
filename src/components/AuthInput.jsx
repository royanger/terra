import classNames from 'classnames'
import { Title } from './Title'

export const AuthInput = ({
   type,
   id,
   placeholder,
   label,
   name,
   message,
   setError,
}) => {
   const checkValidity = e => {
      const { validity } = e.target
      console.log('validity', validity, validity.valid, e.target.value)
      if (validity.valid) {
         setError()
      } else {
         setError({ status: true, error: message })
      }
   }

   return (
      <div className="flex flex-col mb-5">
         <label htmlFor={id}>
            <Title variant="h3">{label}</Title>
         </label>

         <input
            className={classNames(
               'border-[1px] border-black rounded-full mt-2 py-2 px-7 focus:outline-none focus:border-primary'
            )}
            required={true}
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            onBlur={checkValidity}
         />
      </div>
   )
}
