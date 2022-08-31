import Image from 'next/image'
import { Title } from './Title'
import { BackBreadcrumb } from './ui/BackBreadcrumb'
import verifyEmailImg from '@/images/illustrations/onboarding-email-verify.svg'

export const VerifyEmail = ({ email }) => {
   return (
      <>
         <BackBreadcrumb href="/auth/login" />
         <div className="w-full flex flex-col items-center mt-12">
            <Image alt="Verify Email" src={verifyEmailImg} />
            <Title variant="h1" className="mt-8 mb-4">
               Verify Email
            </Title>
            <p className="mb-32 text-center">
               We’ve sent an email to <span className="font-bold">{email}</span>{' '}
               to verify your account. Please check your email to finish setting
               up your Terra account!
            </p>
         </div>
      </>
   )
}
