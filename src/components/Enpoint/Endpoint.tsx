import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import StoreType, { StoreDispatcher } from '@/redux/store/store-type';
import { EndpointProp } from '@/types/types';

import styles from './Endpoint.module.scss';
import setUrlAction from '@/redux/url/urlActionCreator';

const Endpoint: React.FC<EndpointProp> = ({
  isShowEndpoint,
  setShowEndpoint,
}: EndpointProp) => {
  const input: React.LegacyRef<HTMLInputElement> = useRef(null);

  const urlEndpoint = useSelector((state: StoreType) => state.url.url);
  const dispatcher: StoreDispatcher = useDispatch();

  const onClickHandler = (): void => {
    if (!input.current!.value) {
      input.current!.value = 'https://rickandmortyapi.com/graphql';
    }

    dispatcher(setUrlAction());
    setShowEndpoint(false);
  };
  return (
    <label
      className={`${styles.endpoint} ${
        isShowEndpoint ? styles['endpoint_open'] : styles['endpoint_close']
      }`}
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
