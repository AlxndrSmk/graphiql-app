import Image from 'next/image';
import { LangContext, SignInFieldProps } from '@/types/types';

import styles from './AuthInput.module.scss';
import { useContext } from 'react';
import langContext from '@/context/langContext';
import errorLocalization from '@/utils/errorLocalization';

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
  const context = useContext<LangContext>(langContext);

  const errorLocalize = errorLocalization(error, context);

  const renderIcon = () => {
    if (id === 'password')
      return (
        <Image
          className={styles['form__eye']}
          onClick={handlePasswordVisibility}
          src={isVisible ? `/open.png` : `/close.png`}
          width="35"
          height="35"
          alt="eye"
        />
      );

    return null;
  };

  return (
    <div className={styles['form__item']}>
      <div className={styles['form__placeholder-container']}>
        {renderIcon()}
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
        {errorLocalize && (
          <p className={styles['form__error']}>{errorLocalize}</p>
        )}
      </div>
    </div>
  );
};

export default AuthInput;
