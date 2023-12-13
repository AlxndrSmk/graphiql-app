import styles from './Button.module.scss';
import { TButton } from '@/types/types';

export const Button: React.FC<TButton> = ({ text, onClick, img }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
      {img}
    </button>
  );
};
