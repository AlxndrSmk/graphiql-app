import Head from 'next/head';
import Welcome from '@/components/Welcome/Welcome';
import styles from '@/styles/Home.module.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>GraphiQL by RSHeroes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.main}`}>
        <Welcome />
      </main>
      <Footer />
    </>
  );
};

export default Home;
