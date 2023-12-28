import Image from 'next/image';
import Button from '@/components/Button/Button';
import styles from './MainNav.module.scss';
import { MainNavProp } from '@/types/types';
import React from 'react';
import { useSelector } from 'react-redux';
import StoreType from '@/redux/store/store-type';

const MainNav: React.FC<MainNavProp> = ({ setShowEndpoint }: MainNavProp) => {
  const selector = useSelector((state: StoreType) => state.url.url);
  console.log(selector);
  const docImg = (
    <Image src="/document.svg" alt="documentation" width="20" height="20" />
  );

  const queryImg = (
    <Image src="/edit.svg" alt="change endpoint" width="20" height="20" />
  );

  const onEndpointHandler = (): void => {
    setShowEndpoint((prev: boolean) => !prev);
  };

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
        onClick={onEndpointHandler}
        onHoverText="Change endpoint"
        isTooltip={true}
      />
    </div>
  );
};

export default MainNav;
