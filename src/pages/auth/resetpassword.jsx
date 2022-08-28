import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Input } from '../../components/Input'
import { Footer } from '../../components/layout/Footer'
import { Header2 } from '../../components/layout/Header2'
import { Title } from '../../components/Title'
import { Button } from '../../components/ui/Button'
import { Layout } from '../../components/ui/Layout'
import { Error } from '../../components/ui/Error'

export default function ResetPassword() {
   const formSchema = z.object({
      email: z.string().email(),
   })

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: zodResolver(formSchema) })

   const onSubmit = data => {
      console.log('submitted', data)
      // signinMutation.mutate(data)
   }

   return (
      <>
         <div className="w-full flex flex-col items-center">
            <Title variant="h1">Reset Password</Title>
         </div>
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
            <Button variant="primary" type="submit">
               Reset Password
            </Button>
         </form>
         {errors.email?.type === 'invalid_string' && (
            <Error>Email is required</Error>
         )}
      </>
   )
}

ResetPassword.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>
            <Header2 />
            {page} <Footer />
         </Layout>
      </>
   )
}
