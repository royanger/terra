import * as React from 'react'
import { useMutation } from '@tanstack/react-query'
import { useHydratedSession } from '../../utils/customHooks'
import Image from 'next/image'
import apiClient from '../../utils/axios'
import { Button } from '../ui/Button'
import { Modal } from './Modal'
import { Title } from '../Title'

import successIMG from '../../../public/images/mrterra/mr.t-with-coin.svg'

export const FunFactsModal = ({ href, description, id, setShowModal }) => {
   const session = useHydratedSession()
   const [clicked, setClicked] = React.useState(false)

   const pointMutation = useMutation(data => {
      return apiClient.post('/api/points/article', { ...data })
   })

   const handleClick = () => {
      pointMutation.mutate({ articleId: id, email: session.user.email })
      if (clicked === false) {
         setClicked(true)
      }
   }

   const handleClearStatus = () => {
      setShowModal(false)
      setClicked(false)
   }

   if (clicked)
      return (
         <Modal setShowModal={setShowModal}>
            <div className="">
               <div className="flex items-center justify-center mb-2">
                  <Image src={successIMG} alt="You got an award!" />
               </div>
               <Title variant="h1" className="text-primary">
                  Congratulations
               </Title>
               <p className="mt-2">
                  Woo hoo, you've earned 1 point. Keep it up to rescue Mister
                  Terra from food waste!
               </p>
               <Button
                  variant="primary"
                  css="mt-4 mb-6"
                  onClick={() => handleClearStatus()}
               >
                  Go to my account
               </Button>
            </div>
         </Modal>
      )

   return (
      <Modal setShowModal={setShowModal}>
         <div className="">
            <p className="mb-4">{description}</p>
            <a href={href} target="_blank">
               <Button variant="donate" onClick={() => handleClick()}>
                  Read Article
               </Button>
            </a>
         </div>
      </Modal>
   )
}
