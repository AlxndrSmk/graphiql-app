import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { codeMirrorTheme } from '@/styles/codeMirrorTheme';
import { CMCType } from '@/types/types';
import styles from './CMCComponent.module.scss';
const CMComponent: React.FC<CMCType> = ({
  valueView,
  readOnly,
  eventOnChange,
}: CMCType) => {
  return (
    <div className={styles.editor__text}>
      <CodeMirror
        value={valueView}
        onChange={eventOnChange ? eventOnChange : (): void => {}}
        theme={codeMirrorTheme}
        readOnly={readOnly}
      />
    </div>
  );
};

export default CMComponent;
