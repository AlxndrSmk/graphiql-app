import Image from 'next/image';
import { useContext } from 'react';

import langContext from '@/context/langContext';
import { AuthInputProps, LangContext } from '@/types/types';
import errorLocalization from '@/utils/errorLocalization';
import styles from './AuthInput.module.scss';

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  type,
  register,
  placeholder,
  error,
  id,
  handlePasswordVisibility,
  isVisible,
  dataTestId,
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
          data-testid={dataTestId}
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
