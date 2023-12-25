import { SetStateAction } from 'react';
import styles from './Documentation.module.scss';

type TDocQuery = {
  isShown: boolean;
  setIsShown: React.Dispatch<SetStateAction<boolean>>;
  data: { res: string };
};

const DocQuery: React.FC<TDocQuery> = ({ isShown, setIsShown, data }) => {
  console.log(isShown);
  console.log(setIsShown);
  console.log(data);
  return (
    <>
      <div className={styles.docs__page}>
        {/* <button onClick={btnHandler}>Back to Docs</button> */}
        <h2>Title</h2>
        <p>description</p>
      </div>
    </>
  );
};

export default DocQuery;
