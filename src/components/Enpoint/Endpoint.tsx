import React, { useContext, useRef } from 'react';

import {
  EndpointProps,
  LangContext,
  StoreDispatcher,
  StoreType,
} from '@/types/types';
import { useDispatch, useSelector } from 'react-redux';

import langContext from '@/context/langContext';
import setUrlAction from '@/redux/url/urlActionCreator';
import styles from './Endpoint.module.scss';

const Endpoint: React.FC<EndpointProps> = ({
  isShowEndpoint,
  setShowEndpoint,
}: EndpointProps) => {
  const isStart: React.MutableRefObject<boolean> = useRef(false);
  const input: React.LegacyRef<HTMLInputElement> = useRef(null);
  const context = useContext<LangContext>(langContext);

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
      data-testid="endpoint-label"
    >
      <input
        id="enpoint"
        type="text"
        name="endpoint"
        className={styles['endpoint__input']}
        ref={input}
        defaultValue={urlEndpoint}
        data-testid="endpoint-input"
      />
      <button
        type="button"
        className={styles['endpoint__button']}
        onClick={onClickHandler}
        data-testid="set-endpoint-button"
      >
        {context.getConstants().setBtn}
      </button>
    </label>
  );
};

export default Endpoint;
