import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '../styles/styles.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
   const queryclient = new QueryClient();

   const getLayout = Component.getLayout || ((page) => page);
   return getLayout(
      <QueryClientProvider client={queryclient}>
         <SessionProvider session={session}>
            <Component {...pageProps} />
         </SessionProvider>
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   );
}

export default MyApp;
