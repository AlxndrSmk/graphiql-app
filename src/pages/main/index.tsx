import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainNav from '@/components/MainNav/MainNav';
import Editor from '@/components/Editor/Editor';

import styles from './mainLayout.module.scss';

const Main = () => {
  return (
    <>
      <Header />
      <main className={styles.mainLayout}>
        <MainNav />
        <Editor editor="query" />
        <Editor editor="json" />
      </main>
      <Footer />
    </>
  );
};

export default Main;
