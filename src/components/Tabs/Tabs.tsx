import { useRef, useState } from 'react';
import styles from './Tabs.module.scss';

export const Tabs: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('var');
  const [varValue, setVarValue] = useState('');
  const [headValue, setHeadValue] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const isVariable = currentTab === 'var';

  function handleTabClick() {
    currentTab === 'var' ? setCurrentTab('headers') : setCurrentTab('var');
    ref.current?.focus();
  }
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
          onChange={(e) =>
            isVariable
              ? setVarValue(e.target.value)
              : setHeadValue(e.target.value)
          }
          value={isVariable ? varValue : headValue}
        />
      </div>
    </>
  );
};
