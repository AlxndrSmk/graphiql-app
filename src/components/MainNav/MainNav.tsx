import React, { Suspense, lazy, startTransition, useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MainNavProps } from '@/types/types';
import Button from '@/components/Button/Button';
import { LOADER_IMAGE } from '../../constants/buttonsImages';
import StoreType from '../../redux/store/store-type';
import { useLazyGetIntrospectionQuery } from '../../redux/rtk-query/fetchApI';
import styles from './MainNav.module.scss';

const Documentation = lazy(() => import('../Documentation/Documentation'));

const MainNav: React.FC<MainNavProps> = ({ setShowEndpoint }: MainNavProps) => {
  const [isShowDoc, setIsShowDoc] = useState<boolean>(false);
  const [dataRes, setDataRes] = useState(null);
  const urlFromStore = useSelector((state: StoreType) => state.url);
  const [fetchFunction] = useLazyGetIntrospectionQuery();

  const docImg = (
    <Image src="/document.svg" alt="documentation" width="20" height="20" />
  );

  const queryImg = (
    <Image src="/edit.svg" alt="change endpoint" width="20" height="20" />
  );

  useEffect(() => {
    fetchFunction(urlFromStore).then((res) => {
      const { data } = res;
      setDataRes(data);
      setIsShowDoc(false);
    });
  }, [urlFromStore]);

  const handleDocButton = () => {
    startTransition(() => {
      fetchFunction(urlFromStore).then((res) => {
        const { data } = res;
        setDataRes(data);
        setIsShowDoc((prev) => !prev);
      });
    });
  };

  const onEndpointHandler = (): void => {
    setShowEndpoint((prev: boolean) => !prev);
  };

  return (
    <>
      <div className={styles.main_nav}>
        <Button
          img={docImg}
          onClick={handleDocButton}
          onHoverText={
            dataRes === undefined
              ? 'smth went wrong, please check endpoint'
              : 'Documentation'
          }
          disabled={dataRes === undefined}
          isTooltip={true}
        />
        <Button
          img={queryImg}
          onClick={onEndpointHandler}
          onHoverText="Change endpoint"
          isTooltip={true}
        />
      </div>
      <Suspense fallback={<Button img={LOADER_IMAGE} isDisabled={true} />}>
        {isShowDoc && <Documentation res={dataRes} />}
      </Suspense>
    </>
  );
};

export default MainNav;
