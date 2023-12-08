import * as Yup from 'yup';
import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { getAuthError } from '../../../utils/getAuthError';
import PageContainer from '../../../components/PageContainer/PageContainer';
import { ROUTES } from '@/constants/routes';

import styles from '../style.module.scss';
import { AuthViewProps } from '@/types/types';

const SignInController = ({ authCallback, page }: AuthViewProps) => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .required('Email is required')
      .email('Enter a valid email (e.g., user@example.com)')
      .matches(/^.+@.+\..+$/, 'Email address must contain a domain name'),
    password: Yup.string()
      .trim()
      .min(8, 'Password should be of minimum 8 characters length')
      .test(
        'digit',
        'Must include at least one digit (0-9)',
        (value) => value !== undefined && /[0-9]/.test(value)
      )
      .test(
        'uppercase',
        'Must include at least one letter',
        (value) => value !== undefined && /[a-zA-Z]/.test(value)
      )
      .test(
        'specialCharacters',
        'Must include at least one special character (!@#$%^&*)',
        (value) => value !== undefined && /[!@#$%^&*]/.test(value)
      )
      .required('Password is required'),
  });

  const resolver = yupResolver(schema);
  type schemaType = Yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaType>({ resolver });
  const [authError, setAuthError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async ({ email, password }) => {
    setLoading(true);
    try {
      await authCallback(email, password);
      setLoading(false);
      Router.push(ROUTES.MAIN);
    } catch (e) {
      const err = getAuthError(e);
      setAuthError(err);
      setLoading(false);
    }
  });

  return (
    <PageContainer>
      <section className={styles['form__wrapper']}>
        <div className={styles['form__block']}>
          <h3 className={styles['form__title']} style={{ textAlign: 'center' }}>
            Sign in
          </h3>

          <form className={styles['form']} onSubmit={onSubmit}>
            {loading ? (
              <div className={styles['form__loading']}>
                <p>Loading...</p>
              </div>
            ) : null}

            {authError && (
              <p className={styles['form__error']} data-testid="auth-error">
                {authError}
              </p>
            )}
            <div
              className={`${styles['form__controls']} ${
                page === 'SIGN_IN' ? styles['form__controls_signin'] : ''
              }`}
            >
              <div className={styles['form__item']}>
                <input
                  className={styles['form__input']}
                  id="email"
                  type="text"
                  {...register('email')}
                  placeholder="Email"
                />
                {errors.email?.message && (
                  <p className={styles['form__error']} data-testid="auth-error">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <div className={styles['form__item']}>
                <div className={styles['form__error-block']}>
                  <input
                    className={styles['form__input']}
                    id="password"
                    type="password"
                    {...register('password')}
                    placeholder="Password"
                  />

                  {errors.password?.message && (
                    <p
                      className={styles['form__error']}
                      data-testid="auth-error"
                    >
                      {errors.password?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <button type="submit">
              {page === 'SIGN_IN' ? 'Sign in' : 'Sign up'}
            </button>
            <p className={styles['form__account']}>
              Dont have an account?
              <Link
                className={styles['form__link']}
                data-testid="login-link"
                href={ROUTES.SIGN_UP}
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </PageContainer>
  );
};

export default SignInController;
