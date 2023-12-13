import { ChangeEvent, useRef, useState } from 'react';
import Button from '../Button/Button';
import styles from './Tabs.module.scss';

const Tabs: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<'var' | 'headers'>('var');
  const [varValue, setVarValue] = useState<string>('');
  const [headValue, setHeadValue] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  const isVariable = currentTab === 'var';

  const handleTabClick = () => {
    currentTab === 'var' ? setCurrentTab('headers') : setCurrentTab('var');
    ref.current?.focus();
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    isVariable ? setVarValue(e.target.value) : setHeadValue(e.target.value);
  };

  return (
    <>
      <div className={styles.tabs__btns}>
        <Button
          text="Variables"
          onClick={handleTabClick}
          className={!isVariable ? 'tab__btns_btn' : 'tab__btns_btn_dis'}
        />

        <Button
          text="Headers"
          onClick={handleTabClick}
          className={isVariable ? 'tab__btns_btn' : 'tab__btns_btn_dis'}
        />
      </div>

      <div className={styles.tabs__content}>
        <div
          className={styles.tabs__content_input}
          ref={ref}
          onChange={changeHandler}
          contentEditable={true}
          spellCheck="false"
        >
          {isVariable ? varValue : headValue}
        </div>
      </div>
    </>
  );
};

export default Tabs;
