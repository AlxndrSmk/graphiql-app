import React, { useCallback } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import useGetWindowDimensions from '@/utils/useGetWindowsDimensions';
import Tabs from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import { PrettierArgs, TEditorOld } from '@/types/types';
import { prettify } from '@/utils/prettify';
import { CLEAN_IMAGE, PLAY_IMAGE } from '@/constants/buttonsImages';
import { DEFAULT_REQUEST } from '@/constants/DefaultRequest';
import { tablet } from '@/utils/constants';

import { codeMirrorTheme } from '@/styles/codeMirrorTheme';
import styles from './Editor.module.scss';
import createGQLArgs from '../../utils/createGQLArgs';
import { useSelector } from 'react-redux';
import StoreType from '../../redux/store/store-type';

//TODO must be delete or approve
const EditorOld: React.FC<TEditorOld> = ({
  type,
  showRight,
  setShowRight,
  operation,
  response,
}) => {
  const [editorValue, setEditorValue] = useState<string>(DEFAULT_REQUEST);
  const [variables, setVariables] = useState<string>('');
  const [headers, setHeaders] = useState<string>('');
  const urlFromStore = useSelector((state: StoreType) => state.url);

  const isQueryEditor = type === 'query';
  const { width } = useGetWindowDimensions();
  const isTablet = width < tablet;

  const openNext = () => {
    setShowRight((prev) => !prev);
  };

  const handleEditorChange = useCallback((value: string) => {
    setEditorValue(value);
  }, []);

  const handlePrettifyClick = (): void => {
    setEditorValue(prettify(editorValue));
  };

  const executeQuery = (): void => {
    if (isQueryEditor) {
      const params: PrettierArgs = createGQLArgs(
        editorValue,
        variables,
        headers,
        urlFromStore
      );
      operation(params);
    }
  };

  return (
    <div className={`${styles.editor} ${showRight && styles.open}`}>
      <div className={styles.editor__text}>
        <CodeMirror
          value={isQueryEditor ? editorValue : response}
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
              onClick={executeQuery}
              className="execute_btn"
            />
          </div>
          <Tabs
            headers={headers}
            setHeaders={setHeaders}
            setVariables={setVariables}
            variables={variables}
          />
        </>
      )}
    </div>
  );
};

export default EditorOld;
