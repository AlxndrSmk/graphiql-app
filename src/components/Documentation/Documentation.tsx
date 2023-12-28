import { useEffect, useState } from 'react';
import { BreadCrumbsMaker } from './BreadcrumbsMaker';
import { TDocType } from '../../types/types';
import { res } from '../MainNav/ddd';
import { ObjectType } from './objectType';
import styles from './Documentation.module.scss';

const Documentation: React.FC = () => {
  const types: TDocType[] = res.data.__schema.types;
  const [data, setQueryData] = useState<TDocType[]>(types);
  const [breadCrumb, setBreadCrumb] = useState<string[]>(['Docs']);

  useEffect(() => {
    const filter: TDocType[] = types.filter((el) => !el.name.startsWith('_'));
    setQueryData(filter);
  }, []);

  const handleBtnClick = (title: string) => {
    if (breadCrumb[breadCrumb.length - 1] !== title) {
      setBreadCrumb((prev) => [...prev, title]);
      filterData(title);
    }
  };

  const filterData = (key: string) => {
    const filtered: TDocType[] = types.filter((el) => el.name === key);
    setQueryData(filtered);
  };

  return (
    <div className={styles.docs}>
      <div className={styles.docs__breads}>
        <BreadCrumbsMaker
          breadCrumb={breadCrumb}
          types={types}
          setBreadCrumb={setBreadCrumb}
          setQueryData={setQueryData}
        />
      </div>

      {data.map((el, ind) => {
        return (
          <div key={el.description + ind}>
            <>
              <button
                onClick={() => handleBtnClick(el.name)}
                className={styles.docs__query}
                disabled={breadCrumb[breadCrumb.length - 1] === el.name}
              >
                <p>{el.name}</p>
              </button>
              {breadCrumb.length > 1 && el.kind === 'OBJECT' && (
                <ObjectType el={el} handleBtnClick={handleBtnClick} />
              )}

              {breadCrumb.length > 1 && el.kind !== 'OBJECT' && (
                <p className={styles.docs__desc}>{el.description}</p>
              )}
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Documentation;
