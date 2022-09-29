import PageLayout from '../components/PageLayout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}

export default MyApp;
