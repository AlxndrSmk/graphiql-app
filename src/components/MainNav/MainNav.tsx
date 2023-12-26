import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import Documentation from '../Documentation/Documentation';
// import res from './fakeResponse.json';
// import { TDoc, TDocType } from '../../types/types';
import styles from './MainNav.module.scss';

const MainNav: React.FC = () => {
  const [isShowDoc, setIsShowDoc] = useState<boolean>(false);
  // const [response, setResponse] = useState<>();

  const getResponse = async () => {
    try {
      // const res = fetch('');
      // setResponse(res);
    } catch (er) {
      console.log(er);
      // setResponse(null);
    }
  };

  useEffect(() => {
    getResponse();
  }, []);

  const docImg = (
    <Image src="/document.svg" alt="documentation" width="20" height="20" />
  );

  const queryImg = (
    <Image src="/edit.svg" alt="change endpoint" width="20" height="20" />
  );

  const handleDocButton = () => {
    setIsShowDoc((prev) => !prev);
  };

  return (
    <>
      <div className={styles.main_nav}>
        {/* {response && */}
        {/* ( */}
        <Button
          img={docImg}
          onClick={handleDocButton}
          onHoverText="Documentation"
          isTooltip={true}
        />
        {/* ) */}
        {/* } */}
        <Button
          img={queryImg}
          onClick={() => console.log('change')}
          onHoverText="Change endpoint"
          isTooltip={true}
        />
      </div>
      {isShowDoc && (
        <Documentation
        // data={response}
        />
      )}
    </>
  );
};

export default MainNav;
