import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { ROUTES } from '../../constants/routes';
import { useAuth } from '../../context/AuthProvider';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainNav from '../../components/MainNav/MainNav';
import Editor from '../../components/Editor/Editor';

import styles from './mainLayout.module.scss';
import { AuthContextProps, PrettierArgs } from '../../types/types';
import { useLazyGetGQLResponseQuery } from '../../redux/rtk-query/fetchApI';
import { prettify } from '../../utils/prettify';

const Main: React.FC = () => {
  const [showRight, setShowRight] = useState<boolean>(false);
  const [response, setResponse] = useState<string>('');
  const [fetchGQL, data] = useLazyGetGQLResponseQuery();

  const { user }: AuthContextProps = useAuth();

  useEffect(() => {
    if (user == null) {
      Router.push(ROUTES.SIGN_IN);
    }
  }, [user]);

  const getParams = (args: PrettierArgs): void => {
    if (args.errors) {
      setResponse(`errors:\n ${args.errors.join('\n')}`);
    } else {
      fetchGQL(args.args);
      const result = prettify(JSON.stringify(data.data));
      setResponse(() => result);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <Header />
      <main className={styles.mainLayout}>
        <MainNav />
        <Editor
          type="query"
          showRight={showRight}
          setShowRight={setShowRight}
          operation={getParams}
          response={response}
        />
        <Editor
          type="json"
          showRight={showRight}
          setShowRight={setShowRight}
          operation={getParams}
          response={response}
        />
      </main>
      <Footer />
    </>
  );
};

export default Main;
