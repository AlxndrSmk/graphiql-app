import React, { useContext, useEffect, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import Link from 'next/link';
import LanguageContext from '@/context/langContext';
import { useAuth } from '@/context/AuthProvider';
import { logout } from '@/firebase/firebaseClient';
import { ROUTES } from '@/constants/routes';
import Timer from '@/components/Timer/Timer';
import LangButton from '@/components/LangButton/LangButton';
import { LangContext } from '@/types/types';
import styles from './Header.module.scss';
import AuthButton from '../AuthButton/AuthButton';
import langChecker from '@/utils/langChecker';

const Header: React.FC = () => {
  const [stateHeader, setStateHeader] = useState<string>(
    styles.header + ' ' + styles.header_ordinary
  );
  const { user } = useAuth();
  const Router: NextRouter = useRouter();
  const context: LangContext = useContext<LangContext>(LanguageContext);

  const checkedLang = langChecker(Router, context);

  const handleSignOut = (): void => {
    logout();
    Router.push(ROUTES.WELCOME);
  };

  const onScrollEv = (e: Event): void => {
    const { scrollingElement } = e.target as Document;
    const { scrollTop } = scrollingElement as Element;

    if (scrollTop > 80) {
      setStateHeader(styles.header + ' ' + styles.header_sticky);
    } else {
      setStateHeader(styles.header + ' ' + styles.header_ordinary);
    }
  };

  const redirectToWelcome = (): string => {
    const lang = Router.query.lang;
    return `.?lang=${lang}`;
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollEv);

    return () => {
      window.removeEventListener('scroll', onScrollEv);
    };
  }, []);

  return (
    <header className={stateHeader}>
      <Link className={styles.header__link} href={redirectToWelcome()}>
        {context.getConstants().welcomePageLink}
      </Link>
      {user && (
        <Link className={styles.header__link} href="/main">
          To main page
        </Link>
      )}
      <div className={styles.header__container}>
        <LangButton />
        {user ? (
          <>
            <AuthButton
              text={context.getConstants().signOut}
              onClick={handleSignOut}
            />
            <Timer />
          </>
        ) : (
          <>
            <AuthButton
              text={context.getConstants().signIn}
              onClick={() =>
                Router.push(ROUTES.SIGN_IN + `?lang=${checkedLang}`)
              }
            />
            <AuthButton
              text={context.getConstants().signUp}
              onClick={() =>
                Router.push(ROUTES.SIGN_UP + `?lang=${checkedLang}`)
              }
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
