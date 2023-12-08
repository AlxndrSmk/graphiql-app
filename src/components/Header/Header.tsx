import { ReactNode, useContext, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import LangButton from '@/components/LangButton/LangButton';
import { useRouter } from 'next/router';
import QueryType from '@/types/QueryType';
import AuthBlock from '@/components/AuthBlock/AuthBlock';
import Link from 'next/link';
import LanguageContext from '@/context/langContext';
import LangContext from '@/types/LangContext';

function Header(): ReactNode {
  const { query } = useRouter();
  const context = useContext<LangContext>(LanguageContext);
  const [stateHeader, setStateHeader] = useState<string>(
    styles.header + ' ' + styles.header_ordinary
  );

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
      <div className={styles.header__container}>
        <LangButton />
        <div className={styles.header__buttons}>
          <AuthBlock />
        </div>
      </div>
    </header>
  );

  function onScrollEv(e: Event): void {
    const { scrollingElement } = e.target as Document;
    const { scrollTop } = scrollingElement as Element;

    if (scrollTop > 80) {
      setStateHeader(styles.header + ' ' + styles.header_sticky);
    } else {
      setStateHeader(styles.header + ' ' + styles.header_ordinary);
    }
  }

  function redirectToWelcome(): string {
    const lang = query.lang as unknown as QueryType;

    return `.?lang=${lang}`;
  }
}

export default Header;
