import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import QueryEditor from '@/components/QueryEditor/QueryEditor';
import JsonViewer from '@/components/JsonViewer/JsonViewer';
import MainNav from '@/components/MainNav/MainNav';

import styles from './mainLayout.module.scss';

const Main = () => {
  return (
    <>
      <Header />
      <main className={styles.mainLayout}>
        <MainNav />
        <QueryEditor />
        <JsonViewer />
      </main>
      <Footer />
    </>
  );
};

export default Main;
