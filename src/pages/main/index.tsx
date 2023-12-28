import React, { useEffect, useRef, useState } from 'react';
import Router from 'next/router';
import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/context/AuthProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MainNav from '@/components/MainNav/MainNav';
import styles from './mainLayout.module.scss';
import { AuthContextProps, QueryEditor } from '@/types/types';
import Editor from '@/components/Editor/Editor';
import CMComponent from '@/components/CodeMirror/CMComponent';
import useGetWindowDimensions from '@/utils/useGetWindowsDimensions';
import { tablet } from '@/utils/constants';

const Main: React.FC = () => {
  const [isShow, setShow] = useState<boolean>(false);
  const [stateData, setStateData] = useState<string>('');
  const [isShowEndpoint, setShowEndpoint] = useState<boolean>(false);

  const QueryEditor: React.MutableRefObject<React.FC<QueryEditor>> = useRef(
    Editor(CMComponent, { type: 'query' })
  );

  const JsonEditor: React.MutableRefObject<React.FC<QueryEditor>> = useRef(
    Editor(CMComponent, { type: 'json' })
  );

  const { width } = useGetWindowDimensions();
  const isTablet = width < tablet;

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
        <MainNav setShowEndpoint={setShowEndpoint} />
        <QueryEditor.current
          isShow={isShow}
          isTablet={isTablet}
          setShow={setShow}
          setStateData={setStateData}
          stateData={stateData}
          isShowEndpoint={isShowEndpoint}
          setShowEndpoint={setShowEndpoint}
        />
        <JsonEditor.current
          isShow={isShow}
          isTablet={isTablet}
          setShow={setShow}
          setStateData={setStateData}
          stateData={stateData}
          isShowEndpoint={isShowEndpoint}
          setShowEndpoint={setShowEndpoint}
        />
      </main>
      <Footer />
    </>
  );
};

export default Main;
