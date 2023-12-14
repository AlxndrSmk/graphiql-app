import React, { useContext, useEffect, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import Link from 'next/link';
import LanguageContext from '@/context/langContext';
import checkQueryParams from '@/utils/checkQueryParams';
import { useAuth } from '@/context/AuthProvider';
import { logout } from '@/firebase/firebaseClient';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/Button/Button';
import Timer from '@/components/Timer/Timer';
import LangButton from '@/components/LangButton/LangButton';

import { LangContext } from '@/types/types';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [stateHeader, setStateHeader] = useState<string>(
    styles.header + ' ' + styles.header_ordinary
  );
  const { user } = useAuth();
  const Router: NextRouter = useRouter();
  const context: LangContext = useContext<LangContext>(LanguageContext);

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

  useEffect(() => {
    const lang: string | null = checkQueryParams(Router);
    if (!lang) {
      Router.replace(Router.pathname + '?lang=en').then(() =>
        context.setPageLang('en')
      );
    } else {
      context.setPageLang(lang ? lang : 'en');
    }
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
            <Button text="Sign Out" onClick={handleSignOut} />
            <Timer />
          </>
        ) : (
          <>
            <Button
              text="Sign In"
              onClick={() => Router.push(ROUTES.SIGN_IN)}
            />
            <Button
              text="Sign Up"
              onClick={() => Router.push(ROUTES.SIGN_UP)}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
