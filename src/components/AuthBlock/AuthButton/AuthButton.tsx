import Image from 'next/image';
import { AuthButtonProps } from '@/types/types';
import styles from './AuthButton.module.scss';

const AuthButton: React.FC<AuthButtonProps> = ({
  isDisabled,
  isLoading,
  text,
  onClick,
  icon,
  dataTestId,
}) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={isDisabled}
      data-testid={dataTestId}
    >
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
