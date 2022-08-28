import * as React from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Header2 } from '../../components/layout/Header2'
import { Input } from '../../components/Input'
import { Title } from '../../components/Title'
import { Layout } from '../../components/ui/Layout'
import { Button } from '../../components/ui/Button'
import { Footer } from '../../components/layout/Footer'
import { Error } from '../../components/ui/Error'

import createAccountImg from '../../../public/images/illustrations/create-acc-produce.svg'
import { BackBreadcrumb } from '../../components/ui/BackBreadcrumb'
import { VerifyEmail } from '../../components/VerifyEmail'

export default function Register() {
   const [error, setError] = React.useState({
      status: false,
      message: '',
   })
   const [success, setSuccess] = React.useState({
      status: false,
      email: '',
   })

   const formSchema = z.object({
      email: z.string().email(),
      name: z.string().min(1),
      password: z.string().min(10),
      passwordconfirm: z.string(),
   })

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: zodResolver(formSchema) })

   const signinMutation = useMutation(data => {
      return axios
         .post('/api/auth/register', data)
         .then(res => {
            setSuccess({ status: true, email: res.data.email })
         })

         .catch(err => {
            setError({ status: true, message: err.response.data.message })
         })
   })

   const onSubmit = data => {
      signinMutation.mutate(data)
   }

   if (success.status === true) return <VerifyEmail email={success.email} />
   return (
      <>
         <BackBreadcrumb href="/" />

         <div className="flex flex-col items-center mt-3">
            <Image src={createAccountImg} alt="Happy Fruit" />
            <Title variant="h1" className="mt-6 mb-1">
               Create Account
            </Title>
         </div>
         <Title variant="h2" className="mb-9 text-center">
            Join your fellow Terrarians - it takes less than a minute!
         </Title>
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
               className="mb-5"
            />
            <label htmlFor="name">
               <Title variant="h3" className="mb-2">
                  Name
               </Title>
            </label>
            <Input
               type="text"
               id="name"
               label="Name"
               required={true}
               register={register}
               placeholder="e.g. Jane Doe"
               hideLabel={true}
               className="mb-5"
            />
            <label htmlFor="password">
               <Title variant="h3" className="mb-2">
                  Password
               </Title>
            </label>
            <Input
               type="password"
               id="password"
               label="Password"
               required={true}
               register={register}
               title="h3"
               hideLabel={true}
               placeholder="Enter your password"
               className="mb-2"
            />
            <Input
               type="password"
               id="passwordconfirm"
               required={true}
               register={register}
               hideLabel={true}
               placeholder="Confirm your password"
               className="mb-5"
            />

            <Button variant="primary" css="mb-5">
               Create Account
            </Button>
         </form>

         {error.status === true && <Error>{error.message}</Error>}
         {errors.email?.type === 'invalid_string' && (
            <Error>Email is required</Error>
         )}
         {errors.name?.type === 'too_small' && <Error>Name is required</Error>}
         {errors.password?.type === 'too_small' && (
            <Error>A Password of 10 characters or more is required</Error>
         )}
         <div className="w-full flex flex-row justify-center relative ">
            <Title
               variant="h3"
               className="terra-or relative block w-full text-center mt-5"
            >
               or
            </Title>
         </div>
         <Button variant="secondary" css="my-4">
            Continue with Google
         </Button>
         <Button variant="secondary" css="mb-12">
            Continue with Facebook
         </Button>
         <div className="flex flex-row justify-center">
            <p>
               Have an account?{' '}
               <Link href="/auth/login">
                  <a className="underline font-bold">Sign In</a>
               </Link>
            </p>
         </div>
      </>
   )
}

Register.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>
            <Header2 />
            {page}
            <Footer />
         </Layout>
      </>
   )
}
