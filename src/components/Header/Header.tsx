import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NextRouter, useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import AuthButton from '@/components/AuthBlock/AuthButton/AuthButton';
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu';
import LangButton from '@/components/LangButton/LangButton';
import LinkButton from '@/components/LinkButton/LinkButton';
import Timer from '@/components/Timer/Timer';
import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/context/AuthProvider';
import LanguageContext from '@/context/langContext';
import { logout } from '@/firebase/firebaseClient';
import { AuthContextProps, LangContext } from '@/types/types';
import langChecker from '@/utils/langChecker';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState<boolean>(false);
  const { user } = useAuth() as AuthContextProps;
  const Router: NextRouter = useRouter();
  const context: LangContext = useContext<LangContext>(LanguageContext);
  const checkedLang = langChecker(Router, context);
  const pathname = usePathname();

  const handleSignOut = (): void => {
    logout();
    // Router.push(ROUTES.WELCOME);
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
      data-testid="header-sticky"
      className={
        isHeaderSticky
          ? styles.header + ' ' + styles.header_sticky
          : styles.header + ' ' + styles.header_ordinary
      }
    >
      <Link href={`.?lang=${checkedLang}`} data-testid="welcome-link">
        <Image
          className={styles.header__link}
          src="/rick-logo.png"
          alt="To welcome page"
          width={50}
          height={50}
          data-testid="header-logo"
        />
      </Link>
      <div className={styles.header__container}>
        {user ? (
          <>
            <div
              className={styles['header__container-buttons']}
              data-testid="buttons-container"
            >
              {pathname !== '/main' && (
                <LinkButton
                  alt={'To main page'}
                  size={24}
                  src={'/home.svg'}
                  href={`/main?lang=${checkedLang}`}
                  text={context.getConstants().mainPageLink}
                  dataTestId="to-main-button"
                />
              )}
              <AuthButton
                text={context.getConstants().signOut}
                onClick={handleSignOut}
                dataTestId="sign-out-button"
              />
            </div>
          </>
        ) : (
          <>
            <div
              className={styles['header__container-buttons']}
              data-testid="buttons-container"
            >
              <AuthButton
                text={context.getConstants().signIn}
                onClick={() =>
                  Router.push(ROUTES.SIGN_IN + `?lang=${checkedLang}`)
                }
                dataTestId="signin-button"
              />
              <AuthButton
                text={context.getConstants().signUp}
                onClick={() =>
                  Router.push(ROUTES.SIGN_UP + `?lang=${checkedLang}`)
                }
                dataTestId="signup-button"
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
