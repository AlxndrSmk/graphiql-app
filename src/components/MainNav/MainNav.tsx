import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { MainNavProps } from '@/types/types';
import Button from '@/components/Button/Button';
import Documentation from '../Documentation/Documentation';
import { TDoc } from '../../types/types';
import styles from './MainNav.module.scss';
import { useGetIntrospectionQuery } from '@/redux/rtk-query/fetchApI';
import { useSelector } from 'react-redux';
import StoreType from '@/redux/store/store-type';

const MainNav: React.FC<MainNavProps> = ({ setShowEndpoint }: MainNavProps) => {
  const [isShowDoc, setIsShowDoc] = useState<boolean>(false);
  const urlFromStore = useSelector((state: StoreType) => state.url);
  const [response, setResponse] = useState<TDoc | null>(
    useGetIntrospectionQuery(urlFromStore).data
  );

  const { isSuccess } = useGetIntrospectionQuery(urlFromStore);
  const data = useGetIntrospectionQuery(urlFromStore);

  useEffect(() => {
    if (isSuccess) setResponse(data.data);
  }, [isSuccess]);

  const docImg = (
    <Image src="/document.svg" alt="documentation" width="20" height="20" />
  );

  const queryImg = (
    <Image src="/edit.svg" alt="change endpoint" width="20" height="20" />
  );

  const handleDocButton = () => {
    setIsShowDoc((prev) => !prev);
  };

  const onEndpointHandler = (): void => {
    setShowEndpoint((prev: boolean) => !prev);
  };

  return (
    <>
      <div className={styles.main_nav}>
        {response && (
          <Button
            img={docImg}
            onClick={handleDocButton}
            onHoverText="Documentation"
            isTooltip={true}
          />
        )}
        <Button
          img={queryImg}
          onClick={onEndpointHandler}
          onHoverText="Change endpoint"
          isTooltip={true}
        />
      </div>
      {response && isShowDoc && <Documentation res={response} />}
    </>
  );
};

export default MainNav;
