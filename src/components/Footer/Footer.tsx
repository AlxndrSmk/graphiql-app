import { useContext } from 'react';

import LanguageContext from '@/context/langContext';
import { LangContext } from '@/types/types';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const context: LangContext = useContext<LangContext>(LanguageContext);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__created}>
        <span
          className={styles['footer__created-text']}
        >{`© ${new Date().getFullYear()} ${
          context.getConstants().textCreated
        }`}</span>
      </div>
    </footer>
  );
};

export default Footer;
