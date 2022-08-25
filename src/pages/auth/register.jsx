import * as React from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Header2 from '../../components/Header2';
import { Input } from '../../components/input';
import { Title } from '../../components/Title';
import { Layout } from '../../components/ui/Layout';

export default function Register() {
   const [error, setError] = React.useState({ status: false, message: '' });
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const signinMutation = useMutation((data) => {
      const body = {
         username: data.username,
         password: data.password,
      };
      return axios
         .post('/api/auth/register', data)
         .then((res) => {})
         .catch((err) => {
            setError({ status: true, message: err.response.data.message });
         });
   });

   const onSubmit = (data) => {
      signinMutation.mutate(data);
   };

   return (
      <>
         <Header2 />
         <Link href='/'>
            <p className='flex flex-row mt-6'>
               <img
                  src='/images/icons/back-arrow.svg'
                  alt='Back'
                  className='mr-2'
               />
               Back
            </p>
         </Link>
         <div className='flex flex-col items-center mt-3'>
            <img
               className='w-36'
               src='/images/illustrations/with-phone.svg'
               alt='Girl on phone'
            />
            <Title variant='h1' className='mt-2'>
               Create Account
            </Title>
         </div>
         <Title variant='h2'>
            Join your fellow Terrarians - it takes less than a minute!
         </Title>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Input
               type='email'
               id='email'
               label='Email'
               required={true}
               register={register}
               defaultValue='royanger@gmail.com'
            />
            <Input
               type='text'
               id='name'
               label='Name'
               required={true}
               register={register}
               defaultValue='Roy A.'
            />
            <Input
               type='password'
               id='password'
               label='Password'
               required={true}
               register={register}
            />

            <button>Create Account</button>
         </form>
         {error.status === true && <p>{error.message}</p>}
         <p>or</p>
         <button>Continue with Google</button>
         <button>Continue with Facebook</button>
         <h5>Have an account?</h5>
         <a href='/signin'>Sign In</a>
      </>
   );
}

Register.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>{page}</Layout>
      </>
   );
};
