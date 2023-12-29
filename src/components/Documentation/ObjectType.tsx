import { TObjectTypeProps, TDocField, TDocOfType } from '../../types/types';
import styles from './Documentation.module.scss';

export const ObjectType: React.FC<TObjectTypeProps> = ({
  types,
  handleBtnClick,
}) => {
  const handleArrKind = (arr: TDocOfType) => {
    if (arr.kind === 'LIST' && arr.ofType?.ofType !== null) {
      return arr.ofType.ofType.name + '[ ]';
    }
    if (arr.kind === 'LIST' && arr.ofType.kind === 'OBJECT') {
      return arr.ofType.name + '[ ]';
    }
  };

  const isType = (arr: TDocOfType) => {
    return (
      <button
        className={styles.docs__arg_type}
        onClick={() => handleBtnClick(arr.name ? arr.name : handleArrKind(arr))}
      >
        {arr.name ? arr.name : handleArrKind(arr)}
      </button>
    );
  };

  const Args = ({ arr }: { arr: TDocField }) => {
    return arr.args.map((arg, ind) => (
      <>
        {ind !== 0 && <br />}
        <span className={styles.docs__arg}>{arg.name}</span>:{' '}
        {arg.type.ofType ? (
          isType(arg.type.ofType)
        ) : (
          <button
            onClick={() => handleBtnClick(arg.type.name)}
            className={styles.docs__arg_type}
          >
            {arg.type.name}
          </button>
        )}
      </>
    ));
  };

  return (
    <>
      {types.fields.map((e, ind) => (
        <div key={e.name + ind}>
          <p className={styles.docs__query_btn}></p>
          <p>
            {e.name}
            {e.args.length > 0 && '('}
            <Args arr={e} />
            {e.args.length > 0 && ')'} :{' '}
            <button
              className={styles.docs__type}
              onClick={() =>
                handleBtnClick(
                  e.type.name !== null
                    ? e.type.name
                    : handleArrKind(e.type.ofType)
                )
              }
            >
              {e.type.name !== null
                ? e.type.name
                : handleArrKind(e.type.ofType)}
            </button>
          </p>
          <p className={styles.docs__desc}>{e.description}</p>
        </div>
      ))}
    </>
  );
};
