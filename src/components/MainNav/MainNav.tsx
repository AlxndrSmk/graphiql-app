import React, {
  Suspense,
  lazy,
  startTransition,
  useEffect,
  useContext,
} from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LangContext, MainNavProps, StoreType } from '@/types/types';
import Button from '@/components/Button/Button';
import { LOADER_IMAGE } from '@/constants/buttonsImages';
import { useLazyGetIntrospectionQuery } from '@/redux/rtk-query/fetchApI';
import styles from './MainNav.module.scss';
import langContext from '@/context/langContext';

const Documentation = lazy(() => import('../Documentation/Documentation'));

const MainNav: React.FC<MainNavProps> = ({ setShowEndpoint }: MainNavProps) => {
  const [isShowDoc, setIsShowDoc] = useState<boolean>(false);
  const [dataRes, setDataRes] = useState(null);
  const context = useContext<LangContext>(langContext);
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
              ? context.getConstants().docErr
              : context.getConstants().doc
          }
          disabled={dataRes === undefined}
          isTooltip={true}
        />
        <Button
          img={queryImg}
          onClick={onEndpointHandler}
          onHoverText={context.getConstants().endpoint}
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
