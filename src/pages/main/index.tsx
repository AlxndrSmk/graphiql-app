import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/context/AuthProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainNav from '@/components/MainNav/MainNav';
import styles from './mainLayout.module.scss';
import { AuthContextProps } from '@/types/types';
import Editor from '@/components/Editor/Editor';
import CMComponent from '@/components/CodeMirror/CMComponent';

const Main: React.FC = () => {
  const [stateData, setStateData] = useState<string>('');

  const { user }: AuthContextProps = useAuth();

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
        {Editor(CMComponent, { type: 'query', stateData, setStateData })}
        {Editor(CMComponent, { type: 'json', stateData, setStateData })}
      </main>
      <Footer />
    </>
  );
};

export default Main;
