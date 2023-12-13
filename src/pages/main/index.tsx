import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { QueryEditor } from '@/components/QueryEditor/QueryEditor';
import { JsonViewer } from '@/components/JsonViewer/JsonViewer';
import { MainNav } from '@/components/MainNav/MainNav';

import s from './mainLayout.module.scss';

export default () => {
  return (
    <>
      <Header />
      <main className={s.mainLayout}>
        <MainNav />
        <QueryEditor />
        <JsonViewer />
      </main>
      <Footer />
    </>
  );
};
