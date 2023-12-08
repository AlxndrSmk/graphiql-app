import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import styles from '../AuthButton/AuthButton.module.scss';
function ToMainButton(): ReactNode {
  const { push, query } = useRouter();
  return (
    <button className={styles.to_main} onClick={toMainPage}>
      <span className={styles.auth_text}>Main Page</span>
    </button>
  );

  async function toMainPage() {
    const lang = query.lang ? query.lang : 'en';
    const url = '/main?lang=' + lang;

    await push(url);
  }
}

export default ToMainButton;
