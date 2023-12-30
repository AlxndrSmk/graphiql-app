import styles from './AuthButton.module.scss';
import { AuthButtonProps } from '@/types/types';

const AuthButton: React.FC<AuthButtonProps> = ({
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

export default AuthButton;
