import classNames from 'classnames'

export const Input = ({
   type,
   id,
   label,
   register,
   placeholder,
   className,
   hideLabel,
}) => {
   return (
      <div className="flex flex-col">
         {!hideLabel && <label htmlFor={id}>{label}</label>}

         <input
            className={classNames(
               'border-[1px] border-black rounded-full mt-2 py-2 px-7 focus:border-primary',
               className
            )}
            placeholder={placeholder}
            type={type}
            {...register(id)}
         />
      </div>
   )
}
