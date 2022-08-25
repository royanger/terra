import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Header2 from '../components/Header2';
import { Title } from '../components/Title';
import { Input } from '../components/input';

export function SignIn() {
   const [error, setError] = React.useState({});
   const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const loginMutation = useMutation((data) => {
      return axios
         .post('http://localhost:3002/auth/login', data)
         .then((res) => {
            navigate('/dashboard');
         })
         .catch((err) => {
            setError(err.response.data.error);
         });
   });

   const onSubmit = async (data) => {
      loginMutation.mutate(data);
   };

   return (
      <>
         <Header2 />
         <Link to='/'>
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
               Sign In
            </Title>
         </div>
         <form onSubmit={onSubmit}>
            <Input
               type='email'
               id='username'
               label='Email'
               required={true}
               register={register}
               customCSS={
                  (error?.name === 'UserNotFound' || errors?.username) &&
                  'border-error'
               }
            />
            <Input
               type='password'
               id='password'
               label='Password'
               required={true}
               register={register}
               customCSS={
                  (error?.name === 'WrongPassword' || errors?.password) &&
                  'border-error'
               }
            />

            <button>Sign In</button>
            <div className='text-error w-full flex-col items-center'>
               {error && <p>{error.message}</p>}
               {errors.username && <p>Please enter a valid email</p>}
               {errors.password && <p>Please enter a password</p>}
            </div>
         </form>
         <p>Forgot Password?</p>
         <p>or</p>
         <a href='http://localhost:3002/auth/google'>
            <button>Continue with Google</button>
         </a>
         <a href='http://localhost:3002/auth/facebook'>
            <button>Continue with Facebook</button>
         </a>
         <button>Join the Terrarians</button>
         <p>Don't have account?</p>
      </>
   );
}
