import React, { useContext, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { NextRouter, useRouter } from 'next/router';
import Link from 'next/link';
import { LangContext } from '@/types/types';
import LangButton from '@/components/LangButton/LangButton';
import AuthBlock from '@/components/AuthBlock/AuthBlock';
import LanguageContext from '@/context/langContext';
import checkQueryParams from '@/utils/checkQueryParams';

const Header: React.FC = () => {
  const [stateHeader, setStateHeader] = useState<string>(
    styles.header + ' ' + styles.header_ordinary
  );
  const router: NextRouter = useRouter();
  const context: LangContext = useContext<LangContext>(LanguageContext);

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
    const lang = router.query.lang;

    return `.?lang=${lang}`;
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollEv);

    return () => {
      window.removeEventListener('scroll', onScrollEv);
    };
  }, []);

  useEffect(() => {
    const lang: string | null = checkQueryParams(router);
    if (!lang) {
      router
        .replace(router.pathname + '?lang=en')
        .then(() => context.setPageLang('en'));
    } else {
      context.setPageLang(lang ? lang : 'en');
    }
  }, []);

  return (
    <header className={stateHeader}>
      <Link className={styles.header__link} href={redirectToWelcome()}>
        {context.getConstants().welcomePageLink}
      </Link>
      <div className={styles.header__container}>
        <LangButton />
        <div className={styles['header__container-buttons']}>
          <AuthBlock />
        </div>
      </div>
    </header>
  );
};

export default Header;
