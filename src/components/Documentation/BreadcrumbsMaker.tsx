import Image from 'next/image';
import styles from './Documentation.module.scss';
import { TDocType, TBreadCrumbProps } from '../../types/types';
import { Dispatch, SetStateAction } from 'react';

export const BreadCrumbsMaker: React.FC<TBreadCrumbProps> = ({
  breadCrumb,
  types,
  setBreadCrumb,
  setQueryData,
}) => {
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

const handleBreadCrumbsBtn = (
  ind: number,
  element: string,
  breadCrumb: string[],
  types: TDocType[],
  setBreadCrumb: Dispatch<SetStateAction<string[]>>,
  setQueryData: Dispatch<SetStateAction<TDocType[]>>
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
