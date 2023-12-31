import styles from './AuthButton.module.scss';
import { AuthButtonProps } from '@/types/types';
import Image from 'next/image';

const AuthButton: React.FC<AuthButtonProps> = ({
  isDisabled,
  isLoading,
  text,
  onClick,
  icon,
}) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={isDisabled}>
      {icon && (
        <Image
          alt={icon.alt}
          height={icon.size}
          src={icon.src}
          width={icon.size}
        />
      )}
      {isLoading ? 'Loading' : text}
    </button>
  );
};

export default AuthButton;
