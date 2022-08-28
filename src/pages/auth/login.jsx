import * as React from 'react'
import { getCsrfToken, getProviders, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Layout } from '../../components/ui/Layout'
import { Header2 } from '../../components/layout/Header2'
import { Title } from '../../components/Title'
import { AuthInput } from '../../components/AuthInput'

export default function Login({ providers }) {
   const [csrfToken, setCrsfToken] = React.useState(
      getCsrfToken()
         .catch(e => console.error(e))
         .then(res => setCrsfToken(res))
   )

   const { query: params } = useRouter()

   return (
      <>
         <Header2 />
         <Link href="/">
            <p className="flex flex-row mt-6">
               <img
                  src="/images/icons/back-arrow.svg"
                  alt="Back"
                  className="mr-2"
               />
               Back
            </p>
         </Link>
         <div className="flex flex-col items-center mt-3">
            <img
               className="w-36"
               src="/images/illustrations/with-phone.svg"
               alt="Girl on phone"
            />
            <Title variant="h1" className="mt-2">
               Sign In
            </Title>
         </div>

         <div className="flex flex-col items-center">
            <div className=" flex flex-col items-center md:max-w-md ">
               <div className=" flex flex-col items-center justify-center">
                  {params.error && (
                     <div className="bg-error text-white w-full p-2 flex items-center justify-center">
                        There was an error
                     </div>
                  )}

                  {params.error === 'CredentialsSignin' && (
                     <div className="bg-error text-white w-full p-2 mb-2 flex items-center justify-center">
                        Please check your email/password
                     </div>
                  )}
                  <div className="flex flex-row items-center justify-center  w-full">
                     <form
                        action="/api/auth/callback/credentials"
                        method="POST"
                        className="flex flex-col"
                     >
                        <input
                           type="hidden"
                           name="csrfToken"
                           value={csrfToken}
                        />
                        <AuthInput
                           id="email"
                           type="email"
                           name="email"
                           label="Email"
                           placeholder="e.g. janedoe@gmail.com"
                        />
                        <AuthInput
                           id="password"
                           type="password"
                           name="password"
                           label="Password"
                           placeholder="Enter your password"
                        />
                        {/* <label className='text-lg pb-2' htmlFor='email'>
                           Email:
                        </label>
                        <input
                           id='email'
                           type='email'
                           name='email'
                           placeholder='email@example.com'
                           required={true}
                           className='border-2 border-green !w-full block text-lg py-2 px-4 mb-4 rounded-2xl'
                        />
                        <label className='text-lg pb-2' htmlFor='password'>
                           Password:
                        </label>
                        <input
                           id='password'
                           type='password'
                           name='password'
                           required={true}
                           className='border-2 border-green !w-full block text-lg py-2 px-4 mb-4 rounded-2xl'
                        /> */}

                        <button
                           type="submit"
                           className="bg-primary text-white font-poppins text-xl px-10 py-3 rounded-2xl "
                        >
                           Login
                        </button>
                     </form>
                  </div>
                  <div className="or h-20 flex items-center justify-center w-3/5">
                     <span className="px-4">OR</span>
                  </div>

                  {Object.values(providers)
                     .filter(provider => provider.id !== 'credentials')
                     .map(provider => {
                        return (
                           <div
                              key={provider.id}
                              className="flex flex-row items-center justify-center border-[1px] border-grey py-2 mb-2 rounded-2xl w-full"
                           >
                              <button
                                 onClick={() =>
                                    signIn(provider.id, {
                                       callbackUrl: '/dashboard',
                                    })
                                 }
                                 className="flex flex-row items-center justify-center"
                              >
                                 <p className="ml-4 text-xl">
                                    {' '}
                                    {provider.name}
                                 </p>
                              </button>
                           </div>
                        )
                     })}
                  <p>Don't have account?</p>
                  <button>Join the Terrarians</button>
               </div>
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
         <Layout>{page}</Layout>
      </>
   )
}
