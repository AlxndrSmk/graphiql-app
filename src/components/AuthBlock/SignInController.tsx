import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Router from 'next/router';
import Link from 'next/link';
import { schema } from '@/validation/validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { getAuthError } from '@/utils/getAuthError';
import { ROUTES } from '@/constants/routes';
import AuthInput from './AuthInput/AuthInput';
import AuthButton from './AuthButton/AuthButton';
import { AuthViewProps, LangContext, schemaType } from '@/types/types';

import styles from './style.module.scss';
import langContext from '@/context/langContext';
import langChecker from '@/utils/langChecker';

const SignInController = ({ authCallback }: AuthViewProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [authError, setAuthError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const context: LangContext = useContext<LangContext>(langContext);

  const checkedLang = langChecker(Router, context);

  const handlePasswordVisibility = (): void => {
    setIsVisible(!isVisible);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<schemaType>({ mode: 'all', resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    setLoading(true);
    try {
      await authCallback(email, password);
      await Router.push(ROUTES.MAIN);
    } catch (e) {
      const err = getAuthError(e);
      setAuthError(err);
      setLoading(false);
    }
  });

  return (
    <section className={styles['form__wrapper']}>
      <div className={styles['form__block']}>
        <form className={styles['form']} onSubmit={onSubmit}>
          <div className={styles['form__title-container']}>
            <h3 className={styles['form__title']}>
              {context.getConstants().signIn}
            </h3>
            {authError && (
              <p className={styles['form__error']} data-testid="auth-error">
                {context.getConstants().incorrect}
              </p>
            )}
          </div>
          <p className={styles['form__account']}>
            {context.getConstants().haveAccount}{' '}
            <Link
              data-testid="sign-up-link"
              className={styles['form__link']}
              href={ROUTES.SIGN_UP + `?lang=${checkedLang}`}
            >
              {context.getConstants().signUpHere}
            </Link>
            <br />
            {context.getConstants().signOr}{' '}
            <Link
              data-testid="welcome-link"
              className={styles['form__link']}
              href={ROUTES.WELCOME + `?lang=${checkedLang}`}
            >
              {context.getConstants().signToWelcome}
            </Link>
          </p>
          <div
            className={`${styles['form__controls']} ${styles['form__controls_signin']}`}
          >
            <AuthInput
              data-testid="email"
              id="email"
              type="text"
              register={register('email')}
              label={context.getConstants().email}
              error={errors.email?.message}
              placeholder={''}
            />
            <AuthInput
              data-testid="password"
              id="password"
              type={isVisible ? 'text' : 'password'}
              register={register('password')}
              label={context.getConstants().password}
              error={errors.password?.message}
              placeholder={''}
              isVisible={isVisible}
              handlePasswordVisibility={handlePasswordVisibility}
            />
          </div>
          <AuthButton
            text={context.getConstants().signIn}
            type="submit"
            isLoading={loading}
            isDisabled={!isValid || loading}
            dataTestId="signin-button"
          />
        </form>
      </div>
    </section>
  );
};

export default SignInController;
