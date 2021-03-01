import Layout from '../components/Layout/Layout';
import '../global.scss';

export default function JobsApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
