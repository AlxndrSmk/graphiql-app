import React from 'react';
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import Tabs from '../Tabs/Tabs';
import Button from '../Button/Button';
import { TEditor } from '@/types/types';
import { prettify } from '@/utils/prettify';
import { CLEAN_IMAGE, PLAY_IMAGE } from '@/constants/buttonsImages';
import { DEFAULT_REQUEST } from '@/constants/DefaultRequest';

import { codeMirrorTheme } from '@/styles/codeMirrorTheme';
import styles from './Editor.module.scss';

const Editor: React.FC<TEditor> = ({ type }) => {
  const [editorValue, setEditorValue] = useState<string>(DEFAULT_REQUEST);
  const [responseValue] = useState<string>('');

  const isQueryEditor = type === 'query';

  const handleEditorChange = React.useCallback((value: string) => {
    setEditorValue(value);
  }, []);

  const handlePrettifyClick = () => {
    setEditorValue(prettify(editorValue));
  };

  return (
    <div className={styles.editor}>
      <div className={styles.editor__text}>
        <CodeMirror
          value={isQueryEditor ? editorValue : responseValue}
          onChange={handleEditorChange}
          theme={codeMirrorTheme}
          readOnly={!isQueryEditor}
        />
      </div>
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
