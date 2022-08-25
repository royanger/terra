import classNames from 'classnames'

export const Input = ({
   type,
   id,
   label,
   required,
   register,
   defaultValue,
   customCSS,
}) => {
   return (
      <div className="flex flex-col">
         <label htmlFor={id}>{label}</label>

         <input
            className={classNames(
               'border-[1px] border-black rounded-full mt-2 py-2 px-7',
               customCSS
            )}
            defaultValue={defaultValue}
            type={type}
            {...register(id, { required: required })}
         />
      </div>
   )
}
