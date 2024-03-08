import '@/styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ML Excange</title>
        <meta name="description" content="MLExchange is a platform designed to showcase various AI models deployed by organizations and developers." />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
