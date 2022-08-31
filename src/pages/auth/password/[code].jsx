import * as React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { BackBreadcrumb } from '@/components/ui/BackBreadcrumb'
import { Layout } from '@/components/layout/Layout'
import { db } from '@/utils/db.server'
import resetImg from '@/images/illustrations/forgot-pw-phone.svg'
import { Title } from '@/components/Title'
import { Input } from '@/components/Input'
import { Button } from '@/components/ui/Button'
import { Error } from '@/components/ui/Error'
import successImg from '@/images/mrterra/mr.t-jumping.svg'

export default function UpdatePassword(props) {
   const [status, setStatus] = React.useState({})
   const formSchema = z.object({
      password: z.string().min(10),
      confirmPassword: z.string().min(10),
      code: z.string().uuid(),
      userId: z.string().cuid(),
   })

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: zodResolver(formSchema) })

   const resetMutation = useMutation(data => {
      return axios
         .post('/api/auth/reset', data)
         .then(res => {
            setStatus({ result: 'success' })
         })

         .catch(err => {
            setStatus({ result: 'error', message: err.response.data.message })
         })
   })

   if (props.check === false) {
      return (
         <>
            <p className="mt-12 text-center">
               This password reset appears to be invalid. Please try again.
            </p>
         </>
      )
   }

   const onSubmit = data => {
      resetMutation.mutate(data)
   }

   if (status.result === 'success') {
      return (
         <>
            <BackBreadcrumb href="/auth/login" />
            <div className="w-full flex justify-center mb-11">
               <Image alt="Password Reset" src={successImg} />
            </div>
            <div className="w-full flex flex-col items-center mb-4">
               <Title variant="h1" className="text-primary">
                  Woo hoo!
               </Title>
               <p className="mt-2">You successfully reset your password!</p>
               <Link href="/auth/login">
                  <a className="w-full mt-4">
                     <Button variant="primary">Sign In</Button>
                  </a>
               </Link>
            </div>
         </>
      )
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

         <p className="mb-4 text-center">
            Please enter and confirm your new password.
         </p>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               type="hidden"
               id="userId"
               name="id"
               {...register('userId', { value: props.id })}
            />
            <input
               type="hidden"
               id="code"
               name="code"
               {...register('code', { value: props.code })}
            />
            <label htmlFor="password">
               <Title variant="h3" className="mb-2">
                  Enter New Password
               </Title>
            </label>
            <Input
               type="password"
               id="password"
               label="Password"
               required={true}
               register={register}
               placeholder="Enter password"
               hideLabel={true}
               className="mb-4"
            />
            <label htmlFor="confirmPassword">
               <Title variant="h3" className="mb-2">
                  Confirm Password
               </Title>
            </label>
            <Input
               type="password"
               id="confirmPassword"
               label="Confirm Password"
               required={true}
               register={register}
               placeholder="Confirm password"
               hideLabel={true}
               className="mb-4"
            />
            <Button variant="primary" type="submit">
               Submit
            </Button>
         </form>
         {(errors.password?.type === 'too_small' ||
            errors.confirmPassword?.type === 'too_small') && (
            <Error css="mt-3">
               <p>Please enter both passwords</p>
               <p>Passwords must be 10 or more characters</p>
            </Error>
         )}
         {status?.result === 'error' && (
            <Error css="mt-3">{status.message}</Error>
         )}
      </>
   )
}

export async function getServerSideProps(context) {
   const resetData = await db.reset.findUnique({
      where: {
         code: context.params.code,
      },
      include: {
         user: true,
      },
   })

   if (!resetData) {
      return {
         props: {
            check: false,
         },
      }
   }

   return {
      props: {
         check: true,
         id: resetData.user.id,
         code: context.params.code,
      },
   }
}

UpdatePassword.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>
            <Header />
            {page}
            <Footer />
         </Layout>
      </>
   )
}
