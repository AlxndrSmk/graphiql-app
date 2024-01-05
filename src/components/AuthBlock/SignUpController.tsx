import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { schema } from '@/validation/validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { getAuthError } from '@/utils/getAuthError';
import { useAuth } from '@/context/AuthProvider';
import { ROUTES } from '@/constants/routes';
import AuthButton from './AuthButton/AuthButton';
import AuthInput from './AuthInput/AuthInput';
import { AuthViewProps, LangContext, schemaType } from '@/types/types';
import styles from './style.module.scss';
import langContext from '@/context/langContext';
import langChecker from '@/utils/langChecker';

const SignUpController = ({ authCallback }: AuthViewProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const context = useContext<LangContext>(langContext);
  const Router = useRouter();
  const { user } = useAuth();

  const checkedLang = langChecker(Router, context);

  const handlePasswordVisibility = (): void => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (user) {
      setLoading(false);
      Router.push(ROUTES.MAIN);
    }
  }, [user, Router]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<schemaType>({ mode: 'all', resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    setLoading(true);
    try {
      await authCallback(email, password);
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
              {context.getConstants().signUpTitle}
            </h3>
            {authError && (
              <p className={styles['form__error']}>
                {context.getConstants().alreadyExists}
              </p>
            )}
          </div>
          <p className={styles['form__account']}>
            {context.getConstants().alreadyRegistered}{' '}
            <Link
              className={styles['form__link']}
              href={ROUTES.SIGN_IN + `?lang=${checkedLang}`}
            >
              {context.getConstants().signInHere}
            </Link>
            <br />
            {context.getConstants().signOr}{' '}
            <Link
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
              id="email"
              type="text"
              register={register('email')}
              label={context.getConstants().email}
              error={errors.email?.message}
              placeholder={''}
            />
            <AuthInput
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
            text={context.getConstants().signUp}
            type="submit"
            isLoading={loading}
            isDisabled={!isValid || loading}
          />
        </form>
      </div>
    </section>
  );
};

export default SignUpController;
