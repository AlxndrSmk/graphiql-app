import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';
import Button from '../Button/Button';
import styles from './Tabs.module.scss';

const Tabs: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<'var' | 'headers'>('var');
  const [varValue, setVarValue] = useState<string>('');
  const [headValue, setHeadValue] = useState<string>('');
  const [openTab, setOpenTab] = useState<boolean>(false);

  const ref = useRef<HTMLInputElement>(null);

  const isVariable = currentTab === 'var';

  const handleTabClick = () => {
    setCurrentTab((prevTab) => (prevTab === 'var' ? 'headers' : 'var'));
    ref.current?.focus();
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    isVariable ? setVarValue(e.target.value) : setHeadValue(e.target.value);
  };

  const openTabs = () => {
    setOpenTab((prev) => !prev);
    ref.current?.focus();
  };

  const TabArrow = (
    <Image src="/up.svg" alt="open/close" width="20" height="20" />
  );

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
        <Button
          onClick={openTabs}
          img={TabArrow}
          className={openTab ? 'btn__tab_btn' : 'btn__tab_btn_open'}
        />
      </div>

      <div
        className={`${styles.tabs__content} ${
          openTab && styles.tabs__content_open
        }`}
      >
        <div
          className={styles.tabs__content_input}
          ref={ref}
          onChange={changeHandler}
          contentEditable={true}
          spellCheck="false"
          style={{ minHeight: '0' }}
        >
          {isVariable ? varValue : headValue}
        </div>
      </div>
    </>
  );
};

export default Tabs;