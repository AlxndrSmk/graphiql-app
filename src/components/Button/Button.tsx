import styles from './Button.module.scss';
import { TButton } from '@/types/types';

export const Button: React.FC<TButton> = ({ text, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};
