import Head from 'next/head';

export default function Home() {
  return (
    <div className="row">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="one-half column" style={{ marginTop: '25%' }}>
        <h4>Basic Page</h4>
        <p>
          This index.html page is a placeholder with the CSS, font and favicon. It&apos;s just
          waiting for you to add some content! If you need some help hit up the{' '}
          <a href="http://www.getskeleton.com">Skeleton documentation</a>.
        </p>
      </div>
    </div>
  );
}
