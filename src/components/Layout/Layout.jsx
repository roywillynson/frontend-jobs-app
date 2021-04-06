import Head from 'next/head';
import Header from '../shared/Header/Header';
import { SITE_TITLE, SITE_DESCRIPTION } from 'helpers/constants/constants';

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={SITE_DESCRIPTION} />
        <title>
          {pageTitle} | {SITE_TITLE}
        </title>
      </Head>

      <Header />

      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
