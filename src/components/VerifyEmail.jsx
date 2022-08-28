import Image from 'next/image'
import verifyEmailImg from '../../public/images/illustrations/onboarding-email-verify.svg'
import { Title } from './Title'

export const VerifyEmail = ({ email }) => {
   return (
      <div className="w-full flex flex-col items-center mt-16">
         <Image alt="Verify Email" src={verifyEmailImg} />
         <Title variant="h1" className="mt-8 mb-4">
            Verify Email
         </Title>
         <p className="mb-32 text-center">
            We’ve sent an email to <span className="font-bold">{email}</span> to
            verify your account. Please check your email to finish setting up
            your Terra account!
         </p>
      </div>
   )
}
