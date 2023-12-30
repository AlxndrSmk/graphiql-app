import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import StoreType, { StoreDispatcher } from '@/redux/store/store-type';
import { EndpointProps } from '@/types/types';

import styles from './Endpoint.module.scss';
import setUrlAction from '@/redux/url/urlActionCreator';

const Endpoint: React.FC<EndpointProps> = ({
  isShowEndpoint,
  setShowEndpoint,
}: EndpointProps) => {
  const isStart: React.MutableRefObject<boolean> = useRef(false);
  const input: React.LegacyRef<HTMLInputElement> = useRef(null);

  const urlEndpoint = useSelector((state: StoreType) => state.url);
  const dispatcher: StoreDispatcher = useDispatch();

  const onClickHandler = (): void => {
    if (!input.current!.value) {
      input.current!.value = 'https://rickandmortyapi.com/graphql';
    }

    dispatcher(setUrlAction(input.current!.value));
    setShowEndpoint(false);
  };

  if (!isStart.current) {
    if (isShowEndpoint) {
      isStart.current = true;
    }
    return <div></div>;
  }

  return (
    <label
      className={
        isShowEndpoint
          ? `${styles['endpoint']} ${styles['endpoint_open']}`
          : `${styles['endpoint']} ${styles['endpoint_close']}`
      }
      htmlFor="endpoint"
    >
      <input
        id="enpoint"
        type="text"
        name="endpoint"
        className={styles['endpoint__input']}
        ref={input}
        defaultValue={urlEndpoint}
      />
      <button
        type="button"
        className={styles['endpoint__button']}
        onClick={onClickHandler}
      >
        Set
      </button>
    </label>
  );
};

export default Endpoint;
