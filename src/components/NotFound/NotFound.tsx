import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles['background-img']}>
      <div className={styles.space}></div>
      <div className={styles.wrapper}>
        <div className={styles['img-wrapper']}>
          <span>44</span>
        </div>
        <p>
          The webpage you are trying to access has been transferred to a
          parallel digital realm.
        </p>
        <Link href={ROUTES.WELCOME} className={styles.button}>
          Back to welcome page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
