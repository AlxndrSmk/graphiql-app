import styles from './Button.module.scss';
import { ButtonProps } from '@/types/types';

export const Button: React.FC<ButtonProps> = ({
  isDisabled,
  isLoading,
  text,
  onClick,
}) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={isDisabled}>
      {isLoading ? 'Loading' : text}
    </button>
  );
};
