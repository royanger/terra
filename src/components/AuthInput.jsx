import classNames from 'classnames';

export const AuthInput = ({ type, id, placeholder, label, name }) => {
   return (
      <div className='flex flex-col'>
         <label htmlFor={id}>{label}</label>

         <input
            className={classNames(
               'border-[1px] border-black rounded-full mt-2 py-2 px-7'
            )}
            required={true}
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
         />
      </div>
   );
};
