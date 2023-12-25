import React, { useContext, useEffect, useState } from 'react';
import { LangContext } from '@/types/types';
import LanguageContext from '@/context/langContext';
import { NextRouter, useRouter } from 'next/router';
import styles from './LangButton.module.scss';

const LangButton: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [language, setLanguage] = useState(false);
  const router: NextRouter = useRouter();
  const context: LangContext = useContext<LangContext>(LanguageContext);

  useEffect(() => {
    setLanguage(context.pageLang === 'ru');
    setIsClicked(false);
  }, [context.pageLang]);

  const onChangeLang = async (): Promise<void> => {
    if (!isClicked) {
      setIsClicked(true);
      const newLang = context.pageLang === 'en' ? 'ru' : 'en';
      await router.replace(router.pathname + `?lang=${newLang}`);
      setLanguage(newLang === 'ru');
      setIsClicked(false);
    }
  };

  return (
    <div className={styles.switch}>
      <input
        id="language-toggle"
        className={`${styles['check-toggle']} ${styles['check-toggle-round-flat']}`}
        type="checkbox"
        onChange={onChangeLang}
        checked={language}
      />
      <label htmlFor="language-toggle"></label>
      <span className={styles.on}>EN</span>
      <span className={styles.off}>РУ</span>
    </div>
  );
};

export default LangButton;
