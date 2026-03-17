import Head from 'next/head';
import Welcome from '@/components/Welcome/Welcome';
import styles from '@/styles/Home.module.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>GraphiQL - Educational IDE</title>
        <meta
          name="description"
          content="Interactive GraphQL IDE to help students learn query syntax and API exploration. Connect to Rick and Morty API and experiment with real data."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          <Welcome />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
