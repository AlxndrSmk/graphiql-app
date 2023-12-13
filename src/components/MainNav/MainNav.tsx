import Image from 'next/image';
import Button from '../Button/Button';

import styles from './MainNav.module.scss';

const MainNav: React.FC = () => {
  const docImg = (
    <Image src="/document.svg" alt="documentation" width="50" height="50" />
  );

  const queryImg = (
    <Image src="" alt="change endpoint" width="50" height="50" />
  );

  return (
    <div className={styles.main_nav}>
      <Button img={docImg} onClick={() => console.log('doc')} />
      <Button img={queryImg} onClick={() => console.log('change')} />
    </div>
  );
};

export default MainNav;
