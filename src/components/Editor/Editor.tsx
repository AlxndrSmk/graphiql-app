import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import Tabs from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import { PrettierArgs, TEditor, StoreType } from '@/types/types';
import { prettify } from '@/utils/prettify';
import {
  CLEAN_IMAGE,
  PLAY_IMAGE,
  LOADER_IMAGE,
} from '@/constants/buttonsImages';
import { EditorView } from '@codemirror/view';

import { codeMirrorTheme } from '@/styles/codeMirrorTheme';
import styles from './Editor.module.scss';
import createGQLArgs from '@/utils/createGQLArgs';
import { useSelector } from 'react-redux';
import { useLazyGetGQLResponseQuery } from '@/redux/rtk-query/fetchApI';
import startQueryRequest from '@/constants/startQueryRequest';
import Endpoint from '@/components/Enpoint/Endpoint';

const Editor: React.FC<TEditor> = ({
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
  const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(false);

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
    setIsDisabledBtn(true);

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
        setIsDisabledBtn(false);
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
          extensions={[EditorView.lineWrapping]}
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
              img={isDisabledBtn ? LOADER_IMAGE : PLAY_IMAGE}
              isTooltip={true}
              onHoverText="Execute query"
              onClick={handleExecute}
              className="execute_btn"
              isDisabled={isDisabledBtn}
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

export default Editor;
