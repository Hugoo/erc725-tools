import Head from 'next/head';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <meta
          httpEquiv="refresh"
          content="0; url=https://erc725-inspect.lukso.tech/"
        />
      </Head>
      <div className="content">Redirecting....</div>
    </div>
  );
};

export default Home;
