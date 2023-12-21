import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import useGetWindowDimensions from '../../utils/useGetWindowsDimensions';
import Tabs from '../Tabs/Tabs';
import Button from '../Button/Button';
import { TEditor } from '../../types/types';
import { prettify } from '../../utils/prettify';
import { CLEAN_IMAGE, PLAY_IMAGE } from '../../constants/buttonsImages';
import { DEFAULT_REQUEST } from '../../constants/DefaultRequest';
import { tablet } from '../../utils/constants';

import { codeMirrorTheme } from '../../styles/codeMirrorTheme';
import styles from './Editor.module.scss';
import { useGetIntrospectionQuery } from '../../redux/rtk-query/fetchApI';

const Editor: React.FC<TEditor> = ({ type, showRight, setShowRight }) => {
  const [editorValue, setEditorValue] = useState<string>(DEFAULT_REQUEST);
  const [responseValue] = useState<string>('');
  const isQueryEditor = type === 'query';
  const { width } = useGetWindowDimensions();
  const isTablet = width < tablet;
  const intro = useGetIntrospectionQuery('https://rickandmortyapi.com/graphql');

  console.log(intro.data);

  const openNext = () => {
    setShowRight((prev) => !prev);
  };

  const handleEditorChange = React.useCallback((value: string) => {
    setEditorValue(value);
  }, []);

  const handlePrettifyClick = () => {
    setEditorValue(prettify(editorValue));
  };

  return (
    <div className={`${styles.editor} ${showRight && styles.open}`}>
      <div className={styles.editor__text}>
        <CodeMirror
          value={isQueryEditor ? editorValue : responseValue}
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
              onClick={() => console.log('Execute query')}
              className="execute_btn"
            />
          </div>
          <Tabs />
        </>
      )}
    </div>
  );
};

export default Editor;
