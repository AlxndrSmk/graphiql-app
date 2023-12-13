import { TButton } from '@/types/types';
import styles from './Button.module.scss';

const Button: React.FC<TButton> = ({ text, onClick, img }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
      {img}
    </button>
  );
};

export default Button;
