import React, { Suspense, lazy, startTransition, useContext } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LangContext, MainNavProps, StoreType } from '@/types/types';
import Button from '@/components/Button/Button';
import { useLazyGetIntrospectionQuery } from '@/redux/rtk-query/fetchApI';
import styles from './MainNav.module.scss';
import langContext from '@/context/langContext';

const Documentation = lazy(() => import('../Documentation/Documentation'));

const MainNav: React.FC<MainNavProps> = ({ setShowEndpoint }: MainNavProps) => {
  const [isShowDoc, setIsShowDoc] = useState<boolean>(false);
  const [dataRes, setDataRes] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const context = useContext<LangContext>(langContext);
  const urlFromStore = useSelector((state: StoreType) => state.url);
  const [fetchFunction] = useLazyGetIntrospectionQuery();

  const docImg = (
    <Image src="/document.svg" alt="documentation" width="20" height="20" />
  );

  const queryImg = (
    <Image src="/edit.svg" alt="change endpoint" width="20" height="20" />
  );

  const handleDocButton = () => {
    if (isShowDoc) {
      setIsShowDoc(false);
    } else {
      setIsLoading(true);
      startTransition(() => {
        fetchFunction(urlFromStore).then((res) => {
          const { data, isSuccess, isError } = res;
          if (isSuccess) {
            setDataRes(data);
            setIsShowDoc((prev) => !prev);
          }
          if (isError) {
            setIsError(true);
            setTimeout(() => {
              setIsError(false);
            }, 3000);
          }
          setIsLoading(false);
        });
      });
    }
  };

  const onEndpointHandler = (): void => {
    setShowEndpoint((prev: boolean) => !prev);
  };

  return (
    <>
      <div className={styles.main_nav}>
        {isError && (
          <div className={styles.main_nav_error}>
            <div>{context.getConstants().docErr}</div>
          </div>
        )}
        <Button
          img={docImg}
          onClick={handleDocButton}
          className={`${isLoading && 'loader'}`}
          onHoverText={context.getConstants().doc}
          isDisabled={isLoading}
          isTooltip={true}
        />
        <Button
          img={queryImg}
          onClick={onEndpointHandler}
          onHoverText={context.getConstants().endpoint}
          isTooltip={true}
        />
      </div>
      <Suspense>{isShowDoc && <Documentation res={dataRes} />}</Suspense>
    </>
  );
};

export default MainNav;
