import { ChangeEvent, useRef, useState } from 'react';
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
        <button disabled={isVariable} onClick={handleTabClick}>
          Variables
        </button>
        <button disabled={currentTab === 'headers'} onClick={handleTabClick}>
          Headers
        </button>
      </div>

      <div className={styles.tabs__content}>
        <input
          className={styles.tabs__content_input}
          ref={ref}
          onChange={changeHandler}
          value={isVariable ? varValue : headValue}
        />
      </div>
    </>
  );
};

export default Tabs;
