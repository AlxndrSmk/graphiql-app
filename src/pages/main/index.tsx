import { useEffect } from 'react';
import Router from 'next/router';
import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/context/AuthProvider';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainNav from '@/components/MainNav/MainNav';
import Editor from '@/components/Editor/Editor';

import styles from './mainLayout.module.scss';

const Main: React.FC = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user == null) {
      Router.push(ROUTES.SIGN_IN);
    }
  }, [user]);

  if (!user) {
    return null;
  }

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
