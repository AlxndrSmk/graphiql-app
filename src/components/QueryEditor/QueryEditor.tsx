import { Tabs } from '../Tabs/Tabs';
import { Button } from '../Button/Button';

import styles from './QueryEditor.module.scss';

export const QueryEditor: React.FC = () => {
  return (
    <div className={styles.query_editor}>
      <Button text="prettify" onClick={() => console.log('prettify')} />
      <textarea className={styles.queryEditor__textarea}>hello world</textarea>
      <Tabs />
    </div>
  );
};
