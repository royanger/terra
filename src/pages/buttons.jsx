import { Title } from '../components/Title'
import { Button } from '../components/ui/Button'
import { Layout } from '../components/ui/Layout'

export default function ButtonStyles() {
   return (
      <div className="w-full">
         <Title variant="h1">Button Styles</Title>
         <p>
            test test test test test test test test test test test test test
            test test test test test{' '}
         </p>
         <div className="">
            <div className="mb-8">
               <Button variant="primary">Primary</Button>
               <p>Primary Long</p>
            </div>
            <div className="mb-8">
               <Button variant="secondary">Secondary</Button>
               <p>Secondary Long</p>
            </div>
            <div className="mb-8">
               <Button variant="questionnaire">Questionnaire</Button>
               <p>Questionnaire</p>
            </div>
            <div className="grid grid-cols-2 gap-x-3 mb-2">
               <Button variant="primaryShort">Next</Button>
               <Button variant="secondaryShort">Back</Button>
            </div>
            <div className="mb-8">
               <p>Primary Short and Secondary Short buttons</p>
            </div>

            <div className="mb-8">
               <div className="bg-primary px-7 py-4">
                  <Button variant="donate">Donate</Button>
               </div>
               <p>Donate button</p>
            </div>

            <div className="mb-8">
               <Button variant="modal">Modal</Button>
               <p>Modal Primary</p>
            </div>
            <div className="grid grid-cols-2 gap-x-3 mb-2">
               <Button variant="left">Back</Button>
               <Button variant="right">Forward</Button>
            </div>
            <div className="mb-8">
               <p>Primary Left and Primary Right</p>
            </div>
            <div className="grid grid-cols-2 gap-x-11 mb-2">
               <Button variant="modalLeft">Back</Button>
               <Button variant="modalRight">Forward</Button>
            </div>
            <div className="mb-8">
               <p>Modal left and right</p>
            </div>
         </div>
      </div>
   )
}

ButtonStyles.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>{page}</Layout>
      </>
   )
}
