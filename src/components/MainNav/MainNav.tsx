import { Button } from '../Button/Button';

import styles from './MainNav.module.scss';

export const MainNav: React.FC = () => {
  return (
    <div className={styles.main_nav}>
      <Button text="Documentation" onClick={() => console.log('doc')}></Button>
      <Button
        text="Change endpoint"
        onClick={() => console.log('change')}
      ></Button>
    </div>
  );
};
