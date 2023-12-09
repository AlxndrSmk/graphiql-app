import styles from './Button.module.scss';
import { ButtonProps } from '@/types/types';

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};
