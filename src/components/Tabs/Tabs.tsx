import Image from 'next/image';
import { ChangeEvent, FC, SyntheticEvent, useRef, useState } from 'react';
import Button from '@/components/Button/Button';
import styles from './Tabs.module.scss';
import { TabsProps } from '@/types/types';

const Tabs: FC<TabsProps> = ({
  variables,
  headers,
  setVariables,
  setHeaders,
}) => {
  const [currentTab, setCurrentTab] = useState<'Variables' | 'Headers'>(
    'Variables'
  );
  const [openTab, setOpenTab] = useState<boolean>(false);

  const ref = useRef<HTMLTextAreaElement>(null);

  const isVariable = currentTab === 'Variables';

  const handleTabClick = (event: SyntheticEvent): void => {
    const { target } = event;
    const { textContent } = target as HTMLButtonElement;
    if (textContent !== currentTab) {
      setCurrentTab((prevTab) =>
        prevTab === 'Variables' ? 'Headers' : 'Variables'
      );
    }
    ref.current?.focus();
  };

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    isVariable ? setVariables(e.target.value) : setHeaders(e.target.value);
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
          isDisabled={isVariable}
        />

        <Button
          text="Headers"
          onClick={handleTabClick}
          className={isVariable ? 'tab__btns_btn' : 'tab__btns_btn_dis'}
          isDisabled={!isVariable}
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
        <textarea
          className={styles.tabs__content_input}
          ref={ref}
          onChange={changeHandler}
          contentEditable={true}
          suppressContentEditableWarning={true}
          spellCheck="false"
          style={{ minHeight: '0' }}
          value={isVariable ? variables : headers}
        />
      </div>
    </>
  );
};

export default Tabs;
