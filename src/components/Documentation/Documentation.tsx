// import { TDoc } from '../../types/types';

import styles from './Documentation.module.scss';
import DocQuery from './DocQuery';

import { res } from '../MainNav/ddd';
import { useState } from 'react';

const Documentation: React.FC = () => {
  const [isMainDoc, setIsMainDoc] = useState<boolean>(true);
  const [queryData, setQueryData] = useState(null);

  const btnHandler = (el) => {
    setIsMainDoc((prev) => !prev);
    setQueryData(el);
  };

  // console.log(data);
  return (
    <div className={styles.docs}>
      <h2 className={styles.docs__title}>Docs</h2>
      <div></div>

      {res.map((el) => {
        return (
          <>
            <DocQuery
              isShown={isMainDoc}
              setIsShown={setIsMainDoc}
              data={queryData}
            />
            {el.name === 'Query' ? (
              <>
                <h3 className={styles.docs__header}>Root types</h3>
                <button onClick={btnHandler} className={styles.docs__query}>
                  {el.name}
                </button>
                <h3 className={styles.docs__header}>All Schema Types</h3>
              </>
            ) : (
              <>
                <button
                  onClick={() => btnHandler(el)}
                  className={styles.docs__query}
                >
                  {el.name}
                </button>
              </>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Documentation;
