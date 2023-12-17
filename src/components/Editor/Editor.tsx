import Image from 'next/image';
import { useGetWindowDimensions } from '@/utils/use-get-windows-dimensions';
import Tabs from '../Tabs/Tabs';
import Button from '../Button/Button';
import EditorText from '@/utils/editorText';
import { TEditor } from '@/types/types';
import { tablet } from '@/utils/constants';

import styles from './Editor.module.scss';

const Editor: React.FC<TEditor> = ({
  type = 'json',
  text,
  showRight,
  setShowRight,
}) => {
  const { width } = useGetWindowDimensions();
  const isTablet = width < tablet;

  const openNext = () => {
    setShowRight((prev) => !prev);
  };

  const isQueryEditor = type === 'query';

  const CleainImg = (
    <Image src="/clean.svg" alt="prettify" width="20" height="20" />
  );
  const PlayImg = (
    <Image src="play.svg" alt="prettify" width="20" height="20" />
  );

  return (
    <div className={`${styles.editor} ${showRight && styles.open}`}>
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
        contentEditable={isQueryEditor}
        spellCheck="false"
      >
        {isQueryEditor && <EditorText />}
        {text}
      </div>
      {isQueryEditor && <Tabs />}
    </div>
  );
};

export default Editor;
