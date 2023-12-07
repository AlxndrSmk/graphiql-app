import {ReactNode, useContext, useEffect, useReducer, useState} from 'react';
import LangContext from '@/types/LangContext';
import LanguageContext from '@/context/langContext';
import { useRouter } from 'next/router';
import checkQueryParams from '@/utils/checkQueryParams';
import styles from './LangButton.module.scss';

function LangButton(): ReactNode {
  const context = useContext<LangContext>(LanguageContext);
  const router = useRouter();
  const lang: string | null = checkQueryParams(router);
  const [isClicked, setIsClicked] = useState(false);
  const [btnStyle, setBtnStyle]
    = useReducer( onAction, `${styles.language_button} ${styles.en_bg}`);

  useEffect(() => {
    if (!lang) {
      router.replace('main?lang=en').then(() => context.setPageLang('en'));
    } else {
      context.setPageLang(lang);
      setBtnStyle({type: lang});
    }
  }, [lang]);

  return (
    <div className={styles.language_wrapper}>
      <button className={btnStyle} onClick={onChangeLang}>
        <span className={styles.language_label}>
          {context.getConstants().langButton}
        </span>
      </button>
    </div>
  );

  async function onChangeLang(): Promise<void> {
    if (!isClicked) {
      setIsClicked(true);
      context.pageLang = context.pageLang === 'en' ? 'ru' : 'en';
      await router.push(`./main?lang=${context.pageLang}`);
      setIsClicked(false);
    }
  }

  function onAction(_state: string, action: {type: string}): string {
    switch (action.type) {
      case 'en':
        return `${styles.language_button} ${styles.en_bg}`;
      case 'ru':
        return `${styles.language_button} ${styles.ru_bg}`;
      default:
        return `${styles.language_button} ${styles.en_bg}`;
    }
  }
}

export default LangButton;
