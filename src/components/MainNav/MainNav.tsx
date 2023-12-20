import Image from 'next/image';
import Button from '../Button/Button';
import styles from './MainNav.module.scss';

const MainNav: React.FC = () => {
  const docImg = (
    <Image src="/document.svg" alt="documentation" width="20" height="20" />
  );

  const queryImg = (
    <Image src="/edit.svg" alt="change endpoint" width="20" height="20" />
  );

  return (
    <div className={styles.main_nav}>
      <Button
        img={docImg}
        onClick={() => console.log('doc')}
        onHoverText="Documentation"
        isTooltip={true}
      />

      <Button
        img={queryImg}
        onClick={() => console.log('change')}
        onHoverText="Change endpoint"
        isTooltip={true}
      />
    </div>
  );
};

export default MainNav;
