import React, { useContext, useEffect, useReducer, useState } from 'react';
import LangContext from '@/types/LangContext';
import LanguageContext from '@/context/langContext';
import {NextRouter, useRouter} from 'next/router';
import styles from './LangButton.module.scss';

const LangButton: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onAction = (_state: string, action: { type: string }): string => {
    switch (action.type) {
      case 'en':
        return `${styles.language_button} ${styles.en_bg}`;
      case 'ru':
        return `${styles.language_button} ${styles.ru_bg}`;
      default:
        return `${styles.language_button} ${styles.en_bg}`;
    }
  }

  const [btnStyle, setBtnStyle] = useReducer(
      onAction,
      `${styles.language_button} ${styles.en_bg}`
  );
  const router: NextRouter = useRouter();
  const context: LangContext = useContext<LangContext>(LanguageContext);

  const  onChangeLang = async (): Promise<void> => {
    if (!isClicked) {
      setIsClicked(true);
      context.pageLang = context.pageLang === 'en' ? 'ru' : 'en';
      await router.replace(router.pathname + `?lang=${context.pageLang}`);
      setIsClicked(false);
    }
  }

  useEffect(() => {
    const lang: string = context.pageLang;
    setBtnStyle({ type: lang });
  }, [context.pageLang]);

  return (
    <div className={styles.language_wrapper}>
      <button className={btnStyle} onClick={onChangeLang}>
        <span className={styles.language_label}>
          {context.getConstants().langButton}
        </span>
      </button>
    </div>
  );
}

export default LangButton;
