import Header from '../components/Header'
import { Title } from '../components/Title'

export function Donate() {
   return (
      <>
         <Header />
         <div className="flex flex-row items-center mb-3">
            <img
               src="https://i.imgur.com/VJNHQGm.png"
               alt="Mr. Terra"
               className="w-44"
            />
            <Title variant="h1" className="ml-2">
               Donate
            </Title>
         </div>
         <p>
            Explore some food rescue organizations below and consider making a
            small donation. It saves Mister Terra from food waste!{' '}
         </p>
         <p>
            Get your first Explore Orgs Badge by checking out their websites.
         </p>
         <img
            src="https://i.imgur.com/C7eOXat.png"
            className="w-[326px]"
            alt="Donation info"
         />
         <img
            src="https://i.imgur.com/Ei7fM2i.png"
            className="w-[326px]"
            alt="Donation info"
         />
         <img
            src="https://i.imgur.com/E9WhaGV.png"
            className="w-[326px]"
            alt="Donation info"
         />
      </>
   )
}
