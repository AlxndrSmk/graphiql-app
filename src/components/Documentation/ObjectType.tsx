import { TObjectTypeProps } from '../../types/types';
import styles from './Documentation.module.scss';

export const ObjectType: React.FC<TObjectTypeProps> = ({
  el,
  handleBtnClick,
}) => {
  return (
    <>
      {el.fields.map((e, ind) => (
        <div key={e.name + ind}>
          <p className={styles.docs__query_btn}></p>
          <p>
            {e.name}
            {e.args.length > 0 && '('}
            {e.args.map((arg) => (
              <>
                <span style={{ color: 'red' }}>{arg.name}</span>:
                {arg.type.ofType ? (
                  <button
                    onClick={() => handleBtnClick(arg.type.ofType.name)}
                    style={{ color: 'green' }}
                  >
                    {arg.type.ofType.name}
                  </button>
                ) : (
                  <button
                    onClick={() => handleBtnClick(arg.type.name)}
                    style={{ color: 'green' }}
                  >
                    {arg.type.name}
                  </button>
                )}
              </>
            ))}
            {e.args.length > 0 && ')'} :{' '}
            <button onClick={() => handleBtnClick(e.type.name)}>
              {e.type.name}
            </button>
          </p>
          <p className={styles.docs__desc}>{e.description}</p>
        </div>
      ))}
    </>
  );
};
