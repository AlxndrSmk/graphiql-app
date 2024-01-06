import { useState, useRef, useContext } from 'react';

import BurgerButton from '@/components/BurgerButton/BurgerButton';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import LanguageContext from '@/context/langContext';
import langChecker from '@/utils/langChecker';
import { NextRouter, useRouter } from 'next/router';
import { logout } from '@/firebase/firebaseClient';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';
import { useAuth } from '@/context/AuthProvider';
import { AuthContextProps, LangContext } from '@/types/types';

import styles from './BurgerMenu.module.scss';

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const { user } = useAuth() as AuthContextProps;
  const context: LangContext = useContext<LangContext>(LanguageContext);
  const Router: NextRouter = useRouter();

  const close = () => setIsOpen(false);
  const checkedLang = langChecker(Router, context);

  useOnClickOutside(node, () => setIsOpen(false));

  return (
    <div ref={node}>
      <nav
        className={`${styles.menu} ${isOpen ? styles.visible : styles.hidden}`}
      >
        {user ? (
          <>
            <Link
              href={`/main?lang=${checkedLang}`}
              className={styles['styled-link']}
            >
              {context.getConstants().mainPageLink}
            </Link>
            <Link
              className={styles['styled-link']}
              onClick={() => {
                close();
                logout();
              }}
              href={ROUTES.WELCOME}
            >
              {context.getConstants().signOut}
            </Link>
          </>
        ) : (
          <>
            <Link
              className={styles['styled-link']}
              onClick={() => close()}
              href={ROUTES.SIGN_IN + `?lang=${checkedLang}`}
            >
              {context.getConstants().signIn}
            </Link>
            <Link
              className={styles['styled-link']}
              onClick={() => close()}
              href={ROUTES.SIGN_UP + `?lang=${checkedLang}`}
            >
              {context.getConstants().signUp}
            </Link>
          </>
        )}
      </nav>
      <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default BurgerMenu;
