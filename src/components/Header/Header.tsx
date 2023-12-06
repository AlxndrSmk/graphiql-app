import { ReactNode, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import LangButton from '@/components/LangButton/LangButton';
import { useRouter } from 'next/router';
import QueryType from '@/types/QueryType';

function Header(): ReactNode {
  const { push, query } = useRouter();
  const [stateHeader, setStateHeader] = useState<string>(styles.header);

  useEffect(() => {
    window.addEventListener('scroll', onScrollEv);

    return () => {
      window.removeEventListener('scroll', onScrollEv);
    };
  }, []);

  return (
    <header className={stateHeader}>
      <span className={styles.header_link} onClick={redirectToWelcome}>
        To welcome page
      </span>
      <div className={styles.header_container}>
        <LangButton />
        <div className={styles.header_buttons}>
          <span>Sign Out</span>
        </div>
      </div>
    </header>
  );

  function onScrollEv(e: Event): void {
    const { scrollingElement } = e.target as Document;
    const { scrollTop } = scrollingElement as Element;

    if (scrollTop > 80) {
      setStateHeader(styles.header_sticky);
    } else {
      setStateHeader(styles.header);
    }
  }

  async function redirectToWelcome(): Promise<void> {
    const lang = query.lang as unknown as QueryType;

    await push(`.?lang=${lang}`);
  }
}

export default Header;
