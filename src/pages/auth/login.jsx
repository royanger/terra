import * as React from 'react'
import { getCsrfToken, getProviders, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { Layout } from '@/components/ui/Layout'
import { Header } from '@/components/layout/Header'
import { Title } from '@/components/Title'
import { AuthInput } from '@/components/AuthInput'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Error } from '@/components/ui/Error'

import loginImg from '@/images/illustrations/sign-in-torso.svg'
import { BackBreadcrumb } from '@/components/ui/BackBreadcrumb'

export default function Login({ providers }) {
   const [emailError, setEmailError] = React.useState({})
   const [passwordError, setPasswordError] = React.useState({})

   const [csrfToken, setCrsfToken] = React.useState(
      getCsrfToken()
         .catch(e => console.error(e))
         .then(res => setCrsfToken(res))
   )

   const { query: params } = useRouter()

   return (
      <>
         <BackBreadcrumb href="/" />
         <div className="mb-3 flex items-center justify-center w-full">
            <Image
               alt="Sign In Image"
               src={loginImg}
               width={209}
               height={187}
            />
         </div>
         <div className="flex flex-col items-center mt-3">
            <Title variant="h1" className="mt-2 mb-8">
               Sign In
            </Title>
         </div>

         <div className="flex flex-col items-center w-full">
            <div className=" flex flex-col items-center justify-center w-full">
               <div className="flex flex-col items-center justify-center  w-full">
                  <form
                     action="/api/auth/callback/credentials"
                     method="POST"
                     className="flex flex-col w-full"
                  >
                     <input type="hidden" name="csrfToken" value={csrfToken} />
                     <AuthInput
                        id="email"
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="e.g. janedoe@gmail.com"
                        setError={setEmailError}
                        checks={['typeMismatch', 'valueMissing']}
                        message="Please provide a valid email"
                     />
                     <AuthInput
                        id="password"
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                        setError={setPasswordError}
                        checks={['valueMissing']}
                        message="Please enter a password"
                     />

                     <Button variant="primary" type="submit" css="mt-1 mb-6">
                        Login
                     </Button>
                  </form>
                  {emailError?.status && (
                     <Error css={passwordError.status ? '' : 'mb-6'}>
                        {emailError.error}
                     </Error>
                  )}
                  {passwordError?.status && (
                     <Error css="mb-6">{passwordError.error}</Error>
                  )}

                  {params.error === 'CredentialsSignin' && (
                     <Error css="mb-6">Please check your email/password</Error>
                  )}
               </div>
               <div className="mb-8">
                  <Link href="/auth/password/reset">
                     <a className="font-bold underline">Forgot Password?</a>
                  </Link>
               </div>
               <div className="w-full flex flex-row justify-center relative mb-4 ">
                  <Title
                     variant="h3"
                     className="terra-or relative block w-full text-center "
                  >
                     or
                  </Title>
               </div>

               {Object.values(providers)
                  .filter(provider => provider.id !== 'credentials')
                  .map(provider => {
                     return (
                        <div key={provider.id} className="w-full mb-4">
                           <Button
                              variant="secondary"
                              onClick={() =>
                                 signIn(provider.id, {
                                    callbackUrl: '/dashboard',
                                 })
                              }
                           >
                              Continue with {provider.name}
                           </Button>
                        </div>
                     )
                  })}
               <Title variant="h2" className="mt-8 mb-3">
                  Don't have an account?
               </Title>
               <Link href="/auth/register" passHref>
                  <a className="w-full">
                     <Button variant="primary">Join the Terrarians</Button>
                  </a>
               </Link>
            </div>
         </div>
      </>
   )
}

export async function getServerSideProps() {
   return { props: { providers: await getProviders() } }
}

Login.getLayout = function getLayout(page) {
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
