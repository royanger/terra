export const Layout = ({ children }) => {
   return (
      <div className='flex justify-center'>
         <div className='pt-7 px-8 max-w-sm  border-[5px] border-indigo-500'>
            {children}
         </div>
      </div>
   );
};
