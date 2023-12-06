import { ReactNode, useEffect, useState } from 'react';
import styles from './Header.module.scss';

function Header(): ReactNode {
  const [stateHeader, setStateHeader] = useState<string>(styles.header);

  useEffect(() => {
    window.addEventListener('scroll', onScrollEv);

    return () => {
      window.removeEventListener('scroll', onScrollEv);
    };
  }, []);

  return (
    <header className={stateHeader}>
      <div className={styles.header_container}>
        <span>Here will button</span>
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
}

export default Header;
