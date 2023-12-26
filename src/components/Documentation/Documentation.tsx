// import { TDoc } from '../../types/types';

import styles from './Documentation.module.scss';
// import DocQuery from './DocQuery';
import Image from 'next/image';

import { res } from '../MainNav/ddd';
import { useState } from 'react';
// import crumb from '.'

const Documentation: React.FC = () => {
  // const [isMainDoc, setIsMainDoc] = useState<boolean>(true);
  const [, setQueryData] = useState(null);
  const [breadCrumb, setBreadCrumb] = useState(['Docs']);

  // const btnHandler = (el) => {
  //   // setIsMainDoc((prev) => !prev);
  //   setQueryData(el);
  // };

  const handleBreadCrumbsBtn = (ind: number, el: string) => {
    const arr = breadCrumb.slice(0, ind + 1);
    console.log(arr);
    setBreadCrumb(arr);
    filterData(el);
  };

  const handleBtnClick = (title: string) => {
    setBreadCrumb((prev) => [...prev, title]);
  };

  const filterData = (key: string) => {
    const filtered = res.filter((el) => el.kind === key);
    setQueryData(filtered);
  };

  const breadCrumbsMaker = () => {
    return breadCrumb.map((el, ind) => {
      if (ind === 0) {
        return (
          <button
            className={styles.docs__bread}
            onClick={() => handleBreadCrumbsBtn(ind, el)}
            key={ind}
          >
            {el}
          </button>
        );
      } else {
        return (
          <button
            className={styles.docs__bread}
            onClick={() => handleBreadCrumbsBtn(ind, el)}
            key={ind}
          >
            <Image src="/less.svg" width={15} height={15} alt="back" />
            <span>{el}</span>
          </button>
        );
      }
    });
  };

  // console.log(data);
  return (
    <div className={styles.docs}>
      <div className={styles.docs__title}>{breadCrumbsMaker()}</div>

      {res.map((el, ind) => {
        return (
          <div key={el.description + ind}>
            {el.name === 'Query' ? (
              <>
                <h3 className={styles.docs__header}>Root types</h3>
                <button
                  onClick={() => handleBtnClick(el.name)}
                  className={styles.docs__query}
                >
                  {el.name}
                </button>
                <h3 className={styles.docs__header}>All Schema Types</h3>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleBtnClick(el.name)}
                  className={styles.docs__query}
                >
                  {el.name}
                </button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Documentation;
