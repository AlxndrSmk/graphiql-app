import Image from 'next/image';
import Tabs from '../Tabs/Tabs';
import Button from '../Button/Button';
import EditorText from '@/utils/editorText';
import { TEditor } from '@/types/types';

import styles from './Editor.module.scss';

const Editor: React.FC<TEditor> = ({ editor = 'json', text }) => {
  const isQueryEditor = editor === 'json';

  const CleainImg = (
    <Image src="/clean.svg" alt="prettify" width="20" height="20" />
  );
  const PlayImg = (
    <Image src="play.svg" alt="prettify" width="20" height="20" />
  );

  return (
    <div className={styles.editor}>
      {!isQueryEditor && (
        <div className={styles.editor__btns}>
          <Button
            img={CleainImg}
            isTooltip={true}
            onHoverText="Prettify"
            onClick={() => console.log('prettify')}
          />
          <Button
            img={PlayImg}
            isTooltip={true}
            onHoverText="Execute query"
            onClick={() => console.log('Execute query')}
            className="execute_btn"
          />
        </div>
      )}
      <div
        className={styles.editor__text}
        contentEditable={!isQueryEditor}
        spellCheck="false"
      >
        {!isQueryEditor && <EditorText />}
        {text}
      </div>
      {!isQueryEditor && <Tabs />}
    </div>
  );
};

export default Editor;
