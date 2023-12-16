import Image from 'next/image';
import { SignInFieldProps } from '@/types/types';

import styles from './AuthInput.module.scss';

const AuthInput: React.FC<SignInFieldProps> = ({
  label,
  type,
  register,
  placeholder,
  error,
  id,
  handlePasswordVisibility,
  isVisible,
}) => {
  return (
    <div className={styles['form__item']}>
      <div className={styles['form__placeholder-container']}>
        {id === 'password' && (
          <Image
            className={styles['form__eye']}
            onClick={handlePasswordVisibility}
            src={isVisible ? `/open.png` : `/close.png`}
            width="35"
            height="35"
            alt="eye"
          />
        )}
        <input
          className={styles['form__input']}
          id={id}
          type={type}
          {...register}
          placeholder={placeholder}
        />
        <label htmlFor={id} className={styles['form__label']}>
          {label}
        </label>
        {error && <p className={styles['form__error']}>{error}</p>}
      </div>
    </div>
  );
};

export default AuthInput;
