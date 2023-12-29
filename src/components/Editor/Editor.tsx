import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import Tabs from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import { PrettierArgs, TEditorOld } from '@/types/types';
import { prettify } from '@/utils/prettify';
import { CLEAN_IMAGE, PLAY_IMAGE } from '@/constants/buttonsImages';

import { codeMirrorTheme } from '@/styles/codeMirrorTheme';
import styles from './Editor.module.scss';
import createGQLArgs from '../../utils/createGQLArgs';
import { useSelector } from 'react-redux';
import StoreType from '../../redux/store/store-type';
import { useLazyGetGQLResponseQuery } from '@/redux/rtk-query/fetchApI';
import startQueryRequest from '@/constants/startQueryRequest';
import Endpoint from '@/components/Enpoint/Endpoint';

const EditorOld: React.FC<TEditorOld> = ({
  type,
  isShow,
  isTablet,
  setShow,
  setStateData,
  stateData,
  isShowEndpoint,
  setShowEndpoint,
}) => {
  const [stateInput, setStateInput] = useState<string>(startQueryRequest);
  const [variables, setVariables] = useState<string>('');
  const [headers, setHeaders] = useState<string>('');

  const urlFromStore = useSelector((state: StoreType) => state.url);
  const [fetchGQL] = useLazyGetGQLResponseQuery();

  const isQueryEditor = type === 'query';

  const handleEditorChange = (value: string): void => {
    setStateInput(value);
  };

  const handlePrettifyClick = (): void => {
    setStateInput(prettify(stateInput));
  };
  const handleExecute = (): void => {
    const args: PrettierArgs = createGQLArgs(
      stateInput,
      variables,
      headers,
      urlFromStore
    );

    if (args.errors) {
      setStateData(`errors:\n ${args.errors!.join('\n')}`);
    } else {
      fetchGQL(args.args, true).then(({ data, error, isSuccess }): void => {
        const result: string = isSuccess
          ? prettify(JSON.stringify(data))
          : prettify(JSON.stringify(error));
        setStateData(result);
      });
    }
  };

  const openNext = (): void => {
    setShow((prev: boolean) => !prev);
  };

  return (
    <div className={`${styles.editor} ${isShow && styles.open}`}>
      <div className={styles.editor__text}>
        {isQueryEditor && (
          <Endpoint
            isShowEndpoint={isShowEndpoint}
            setShowEndpoint={setShowEndpoint}
          />
        )}
        <CodeMirror
          value={isQueryEditor ? stateInput : stateData}
          onChange={handleEditorChange}
          theme={codeMirrorTheme}
          readOnly={!isQueryEditor}
        />
      </div>
      {isTablet && (
        <button className={styles.show_next} onClick={() => openNext()}>
          <Image
            src="/openNext.svg"
            alt="open JSON Viewer"
            width="30"
            height="30"
          />
        </button>
      )}
      {isQueryEditor && (
        <>
          <div className={styles.editor__btns}>
            <Button
              img={CLEAN_IMAGE}
              isTooltip={true}
              onHoverText="Prettify"
              onClick={handlePrettifyClick}
            />
            <Button
              img={PLAY_IMAGE}
              isTooltip={true}
              onHoverText="Execute query"
              onClick={handleExecute}
              className="execute_btn"
            />
          </div>
          <Tabs
            headers={headers}
            setHeaders={setHeaders}
            variables={variables}
            setVariables={setVariables}
          />
        </>
      )}
    </div>
  );
};

export default EditorOld;
