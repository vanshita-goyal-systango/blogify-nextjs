import React from 'react';
import "../styles/globals.css";
import { AppProps } from 'next/app';
import AdminLayout from '@/components/layouts/AdminLayout';
import UsersLayout from '@/components/layouts/UsersLayout';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }: AppProps) => {
const router = useRouter()
//   const path =
//     typeof window !== 'undefined'
//       ? window.location.pathname
//       : pageProps?.router?.asPath || "";

  const Layout = router.pathname.startsWith('/admin') ? AdminLayout : UsersLayout;

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;


