// import { TDoc, TDocType } from '../../types/types';

import styles from './Documentation.module.scss';
import Image from 'next/image';

import res from '../MainNav/ddd.json';
import { useEffect, useState } from 'react';

const Documentation: React.FC = () => {
  // const rr = dat.data.__schema.types;
  const [data, setQueryData] = useState(res);
  const [breadCrumb, setBreadCrumb] = useState(['Docs']);

  useEffect(() => {
    const filter = res.filter((el) => !el.name.startsWith('_'));
    setQueryData(filter);
  }, []);

  const handleBreadCrumbsBtn = (ind: number, el: string) => {
    const arr = breadCrumb.slice(0, ind + 1);

    setBreadCrumb(arr);
    if (el !== 'Docs') {
      filterData(el);
    } else {
      const filter = res.filter((el) => !el.name.startsWith('_'));
      setQueryData(filter);
    }
  };

  const handleBtnClick = (title: string) => {
    setBreadCrumb((prev) => [...prev, title]);
    filterData(title);
  };

  const filterData = (key: string) => {
    const filtered = res.filter((el) => el.name === key);
    // console.log(res);
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

      {data.map((el, ind) => {
        return (
          <div key={el.description + ind}>
            {/* {el.name === 'Query' ? (
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
            ) : ( */}
            <>
              <button
                onClick={() => handleBtnClick(el.name)}
                className={styles.docs__query}
              >
                <p>{el.name}</p>
                {
                  breadCrumb.length > 1 && <p>{el.description}</p>

                  // {el.fields.map(e => {
                  //   e.
                  // })

                  // }
                }
              </button>
            </>
            {/* )} */}
          </div>
        );
      })}
    </div>
  );
};

export default Documentation;
