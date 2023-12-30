import { useContext, useEffect, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import LanguageContext from '@/context/langContext';
import { useAuth } from '@/context/AuthProvider';
import { logout } from '@/firebase/firebaseClient';
import langChecker from '@/utils/langChecker';
import { ROUTES } from '@/constants/routes';
import AuthButton from '@/components/AuthBlock/AuthButton/AuthButton';
import LinkButton from '@/components/LinkButton/LinkButton';
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu';
import Timer from '@/components/Timer/Timer';
import LangButton from '@/components/LangButton/LangButton';
import { AuthContextProps, LangContext } from '@/types/types';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState<boolean>(false);
  const { user } = useAuth() as AuthContextProps;
  const Router: NextRouter = useRouter();
  const context: LangContext = useContext<LangContext>(LanguageContext);
  const checkedLang = langChecker(Router, context);

  const handleSignOut = (): void => {
    logout();
    Router.push(ROUTES.WELCOME);
  };

  const handleScroll = (e: Event): void => {
    const { scrollingElement } = e.target as Document;
    const { scrollTop } = scrollingElement as Element;

    setIsHeaderSticky(scrollTop > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={
        isHeaderSticky
          ? styles.header + ' ' + styles.header_sticky
          : styles.header + ' ' + styles.header_ordinary
      }
    >
      <Link href={`.?lang=${checkedLang}`}>
        <Image
          className={styles.header__link}
          src="/rick-logo.png"
          alt="To welcome page"
          width={50}
          height={50}
        />
      </Link>
      <div className={styles.header__container}>
        {user ? (
          <>
            <div className={styles['header__container-buttons']}>
              <LinkButton
                alt={'To main page'}
                size={24}
                src={'/home.svg'}
                href={`/main?lang=${checkedLang}`}
                text={context.getConstants().mainPageLink}
              />
              <AuthButton
                text={context.getConstants().signOut}
                onClick={handleSignOut}
              />
            </div>
          </>
        ) : (
          <>
            <div className={styles['header__container-buttons']}>
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
            </div>
          </>
        )}
        {user && <Timer />}
        <LangButton />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
