import * as React from 'react'
import { createPortal } from 'react-dom'
import { Icon } from '@iconify/react'

export const ModalBase = ({ children, selector }) => {
   const ref = React.useRef()
   const [mounted, setMounted] = React.useState(false)

   React.useEffect(() => {
      ref.current = document.getElementById(selector)
      setMounted(true)
   }, [selector])

   return mounted ? createPortal(children, ref.current) : null
}

export const Modal = ({ children, setShowModal }) => {
   return (
      <ModalBase selector="portal2">
         <div className="w-screen h-screen bg-black bg-opacity-70 flex items-center justify-center absolute top-0 right-0 left-0 bottom-0">
            <div className="bg-white w-[300px] p-6 rounded-3xl">
               <div className="flex justify-end">
                  <button onClick={() => setShowModal(false)}>
                     <Icon icon="eva:close-fill" className="w-8 h-8" />
                  </button>
               </div>
               <div className="w-full">{children}</div>
            </div>
         </div>
      </ModalBase>
   )
}
