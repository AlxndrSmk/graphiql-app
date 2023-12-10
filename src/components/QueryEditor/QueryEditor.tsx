import { Tabs } from '../Tabs/Tabs';
import { Button } from '../Button/Button';

import s from './QueryEditor.module.scss';

export const QueryEditor = () => {
  return (
    <div className={s.queryEditor}>
      <Button text="prettify" onClick={() => console.log('prettify')} />
      <textarea className={s.queryEditor__textarea}>hello world</textarea>
      <Tabs />
    </div>
  );
};
