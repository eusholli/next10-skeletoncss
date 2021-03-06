import '../styles/normalize.css';
import '../styles/skeleton.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
