import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

import { TBreadCrumbProps, TDocType } from '@/types/types';
import styles from './Documentation.module.scss';

const BreadCrumbsMaker: React.FC<TBreadCrumbProps> = ({
  breadCrumb,
  types,
  setBreadCrumb,
  setQueryData,
}) => {
  const handleBreadCrumbsBtn = (
    ind: number,
    element: string,
    breadCrumb: string[],
    types: TDocType[],
    setBreadCrumb: Dispatch<SetStateAction<string[]>>,
    setQueryData: Dispatch<SetStateAction<TDocType[] | null>>
  ) => {
    const arr = breadCrumb.slice(0, ind + 1);

    setBreadCrumb(arr);
    if (element !== 'Docs') {
      const filtered = types.filter((el) => el.name === element);
      setQueryData(filtered);
    } else {
      const filter = types.filter((el) => !el.name.startsWith('_'));
      setQueryData(filter);
    }
  };

  return (
    <>
      {breadCrumb.map((breadName, ind) => (
        <button
          className={styles.docs__breads__bread}
          onClick={() =>
            handleBreadCrumbsBtn(
              ind,
              breadName,
              breadCrumb,
              types,
              setBreadCrumb,
              setQueryData
            )
          }
          key={ind}
        >
          {ind !== 0 && (
            <Image src="/less.svg" width={15} height={15} alt="back" />
          )}
          <span>{breadName}</span>
        </button>
      ))}
    </>
  );
};

export default BreadCrumbsMaker;
