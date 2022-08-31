import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Image from 'next/image'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { Input } from '@/components/Input'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Title } from '@/components/Title'
import { Button } from '@/components/ui/Button'
import { Layout } from '@/components/layout/Layout'
import { Error } from '@/components/ui/Error'
import { BackBreadcrumb } from '@/components/ui/BackBreadcrumb'

import resetImg from '@/images/illustrations/forgot-pw-phone.svg'
export default function ResetPassword() {
   const [status, setStatus] = React.useState({})
   const formSchema = z.object({
      email: z.string().email(),
   })

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: zodResolver(formSchema) })

   const resetMutation = useMutation(data => {
      return axios
         .post('/api/auth/reset-request', data)
         .then(res => {
            setStatus({ result: 'success', email: res.data.email })
         })

         .catch(err => {
            setStatus({ result: 'error', email: err.data.email })
         })
   })

   const onSubmit = data => {
      resetMutation.mutate(data)
   }

   return (
      <>
         <BackBreadcrumb href="/auth/login" />
         <div className="w-full flex justify-center mb-11">
            <Image alt="Reset Password" src={resetImg} />
         </div>
         <div className="w-full flex flex-col items-center mb-4">
            <Title variant="h1">Reset Password</Title>
         </div>

         {status?.result === 'success' ? (
            <>
               <p className="text-center">
                  An email has been sent to{' '}
                  <span className="font-bold">{status.email}</span>. Please
                  check your email to receive password reset instructions.
               </p>
            </>
         ) : (
            <>
               <p className="mb-4 text-center">
                  Don’t worry! It happens. Please enter your email address
                  associated with your account.
               </p>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="email">
                     <Title variant="h3" className="mb-2">
                        Email
                     </Title>
                  </label>
                  <Input
                     type="email"
                     id="email"
                     label="Email"
                     required={true}
                     register={register}
                     placeholder="e.g. janedoe@gmail.com"
                     hideLabel={true}
                     className="mb-4"
                  />
                  <Button variant="primary" type="submit" className="mb-5">
                     Submit
                  </Button>
               </form>
               {errors.email?.type === 'invalid_string' && (
                  <Error>Email is required</Error>
               )}
            </>
         )}
      </>
   )
}

ResetPassword.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>
            <Header />
            {page} <Footer />
         </Layout>
      </>
   )
}
