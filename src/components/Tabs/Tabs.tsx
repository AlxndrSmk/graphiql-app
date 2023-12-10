import { useRef, useState } from 'react';
import s from './Tabs.module.scss';

export const Tabs = () => {
  const [currentTab, setCurrentTab] = useState('var');
  const [varValue, setVarValue] = useState('');
  const [headValue, setHeadValue] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const isVar = currentTab === 'var';

  function handleTabClick() {
    currentTab === 'var' ? setCurrentTab('headers') : setCurrentTab('var');
    ref.current?.focus();
  }
  return (
    <>
      <div className={s.tabs__btns}>
        <button disabled={isVar} onClick={handleTabClick}>
          Variables
        </button>
        <button disabled={currentTab === 'headers'} onClick={handleTabClick}>
          Headers
        </button>
      </div>

      <div className={s.tabs__content}>
        <input
          className={s.tabs__content_input}
          ref={ref}
          onChange={(ev) =>
            isVar ? setVarValue(ev.target.value) : setHeadValue(ev.target.value)
          }
          value={isVar ? varValue : headValue}
        />
      </div>
    </>
  );
};
