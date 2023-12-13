import Tabs from '../Tabs/Tabs';
import Button from '../Button/Button';

import styles from './Editor.module.scss';

type TEditor = {
  editor: 'json' | 'query';
};

const Editor: React.FC<TEditor> = ({ editor = 'json' }) => {
  const isQueryEditor = editor === 'json';

  return (
    <div className={styles.editor}>
      {!isQueryEditor && (
        <Button text="prettify" onClick={() => console.log('prettify')} />
      )}
      <div
        className={styles.editor__text}
        contentEditable={!isQueryEditor}
        spellCheck="false"
      >
        <div>function example() &#123; </div>
        <div> return 42;</div>
        <div> &#125; </div>
      </div>
      {!isQueryEditor && <Tabs />}
    </div>
  );
};

export default Editor;
