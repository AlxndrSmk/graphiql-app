import { Fragment } from 'react';
import { TObjectTypeProps, TDocField, TDocOfType } from '@/types/types';
import styles from './Documentation.module.scss';

export const ObjectType: React.FC<TObjectTypeProps> = ({
  types,
  handleBtnClick,
}) => {
  const handleArrKind = (arr: TDocOfType) => {
    if (arr.kind === 'LIST' && arr.ofType?.ofType !== null) {
      return arr.ofType?.ofType.name + '[ ]';
    }
    if (arr.kind === 'LIST' && arr.ofType?.kind === 'OBJECT') {
      return arr.ofType.name + '[ ]';
    } else return '';
  };

  const typeOfType = (arr: TDocOfType): JSX.Element => {
    return (
      <button
        className={styles.docs__arg_type}
        onClick={() =>
          handleBtnClick(
            arr.name !== undefined && arr.name !== null
              ? arr.name
              : handleArrKind(arr)
          )
        }
      >
        {arr.name ? arr.name : handleArrKind(arr)}
      </button>
    );
  };

  const Args = ({ arr }: { arr: TDocField }): JSX.Element[] => {
    return arr.args.map((arg, ind) => (
      <Fragment key={arg.description + ind}>
        {ind !== 0 && <br />}
        <span key={arg.name + ind} className={styles.docs__arg}>
          {arg.name}
        </span>
        :{' '}
        {arg.type.ofType ? (
          typeOfType(arg.type.ofType)
        ) : (
          <button
            key={arg.type.name && arg.type.name + 1}
            onClick={() => handleBtnClick(arg.type.name || '')}
            className={styles.docs__arg_type}
          >
            {arg.type.name}
          </button>
        )}
      </Fragment>
    ));
  };

  return (
    <>
      <h2 className={styles.docs__title}>Fields</h2>
      {types.fields?.map((e, ind) => (
        <div key={e.name + ind}>
          <p>
            {e.name}
            {e.args.length > 0 && '('}
            <Args arr={e} />
            {e.args.length > 0 && ')'} :{' '}
            <button
              className={styles.docs__type}
              onClick={() =>
                handleBtnClick(
                  e.type?.name !== null || e.type.kind === 'LIST'
                    ? e.type?.name || `${e.type?.ofType?.name}[ ]`
                    : handleArrKind(e.type.ofType!)
                )
              }
            >
              {e.type?.name !== null || e.type.kind === 'LIST'
                ? e.type?.name || `${e.type?.ofType?.name}[ ]`
                : handleArrKind(e.type.ofType!)}
            </button>
          </p>
          <p className={styles.docs__desc}>{e.description}</p>
        </div>
      ))}
    </>
  );
};
