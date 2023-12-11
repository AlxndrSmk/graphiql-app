import { useEffect, useState } from 'react';
import Router from 'next/router';
import * as Yup from 'yup';
import { useAuth } from '../AuthController';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { getAuthError } from '../../../utils/getAuthError';
import PageContainer from '../../../components/PageContainer/PageContainer';

import styles from '../style.module.scss';
import { ROUTES } from '@/constants/routes';
import { AuthViewProps } from '@/types/types';

const SignUpController = ({ authCallback }: AuthViewProps) => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setLoading(false);
      Router.push(ROUTES.MAIN);
    }
  }, [user]);

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
          <h3 className={styles['form__title']} style={{ textAlign: 'left' }}>
            Create an account
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
            <div className={styles['form__controls']}>
              <label className={styles['form__label']}>Email</label>

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

              <label className={styles['form__label']}>Password</label>

              <div className={styles['form__item-signup']}>
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

            <button type="submit">Sign up</button>
          </form>
        </div>
      </section>
    </PageContainer>
  );
};

export default SignUpController;
