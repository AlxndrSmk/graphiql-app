import { useEffect, useState } from 'react';
import { BreadCrumbsMaker } from './BreadcrumbsMaker';
import { TDocType } from '../../types/types';
import { res } from '../MainNav/res';
import { ObjectType } from './ObjectType';
import { removeSymbols } from '../../utils/removeSymbols';
import styles from './Documentation.module.scss';

const Documentation: React.FC = () => {
  const types: TDocType[] = res.data.__schema.types;
  const [data, setQueryData] = useState<TDocType[]>(types);
  const [breadCrumb, setBreadCrumb] = useState<string[]>(['Docs']);

  useEffect(() => {
    const filter: TDocType[] = types.filter((el) => !el.name.startsWith('_'));
    setQueryData(filter);
  }, []);

  const handleBtnClick = (title: string): void => {
    const withoutSym: string = removeSymbols(title);
    if (breadCrumb[breadCrumb.length - 1] !== withoutSym) {
      setBreadCrumb((prev) => [...prev, withoutSym]);
      filterData(withoutSym);
    }
  };

  const filterData = (key: string): void => {
    const filtered: TDocType[] = types.filter(
      (el) => el.name === removeSymbols(key)
    );
    setQueryData(filtered);
  };

  const inputFields = (field: TDocType): JSX.Element => {
    return (
      <>
        <h2 className={styles.docs__title}>Fields</h2>
        {field.inputFields.map((field) => (
          <>
            <span>{field.name}</span>:{' '}
            <button
              onClick={() => handleBtnClick(field.type.name)}
              className={styles.docs__arg_type}
            >
              {field.type.name}
            </button>
            <br />
          </>
        ))}
      </>
    );
  };

  const enumFiled = (el: TDocType): JSX.Element => {
    return (
      <>
        <h2 className={styles.docs__title}>Enum Values</h2>
        {el.enumValues.map((value, ind) => (
          <span className={styles.docs__enum} key={value.name + ind}>
            {value.name}
          </span>
        ))}
      </>
    );
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
            <button
              onClick={() => handleBtnClick(el.name)}
              className={styles.docs__query}
              disabled={breadCrumb[breadCrumb.length - 1] === el.name}
            >
              <p>{el.name}</p>
            </button>
            {breadCrumb.length > 1 && el.kind === 'OBJECT' && (
              <ObjectType types={el} handleBtnClick={handleBtnClick} />
            )}

            {breadCrumb.length > 1 && el.kind !== 'OBJECT' && (
              <p className={styles.docs__desc}>{el.description}</p>
            )}

            {breadCrumb.length > 1 &&
              el.kind === 'INPUT_OBJECT' &&
              inputFields(el)}

            {breadCrumb.length > 1 && el.kind === 'ENUM' && enumFiled(el)}
          </div>
        );
      })}
    </div>
  );
};

export default Documentation;
