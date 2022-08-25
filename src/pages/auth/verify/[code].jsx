import axios from 'axios';
import Link from 'next/link';
import { Layout } from '../../../components/ui/Layout';

export default function Verify(props) {
   if (props.type === 'error') {
      return (
         <p>
            There was an error verifying your email. Please contact{' '}
            <a href='info@savemrterra.com'>Terra</a> to resolve the problem.
         </p>
      );
   }

   return (
      <>
         <h1>Email Verified!</h1>
         <p>{props.message}</p>
         <Link href='/auth/login'>Sigin</Link>
      </>
   );
}

export async function getServerSideProps(context) {
   const { data } = await axios.post('http://localhost:3000/api/auth/verify', {
      code: context.params.code,
   });

   return {
      props: data,
   };
}

Verify.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>{page}</Layout>
      </>
   );
};
