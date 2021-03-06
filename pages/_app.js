import Head from 'next/head';
import '../styles/normalize.css';
import '../styles/skeleton.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
