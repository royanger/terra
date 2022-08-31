import { Title } from '../Title'
import { Modal, ModalBase } from './Modal'

export const FunFactsModal = ({ showModal, setShowModal }) => {
   return (
      <Modal setShowModal={setShowModal}>
         <div className="">
            <Title variant="h1">Modal</Title>
         </div>
      </Modal>
   )
}
