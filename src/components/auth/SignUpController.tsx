import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Router from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { en } from '@/locale/en';
import { ru } from '@/locale/ru';
import { schema } from '@/validation/validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { getAuthError } from '../../utils/getAuthError';
import { useAuth } from '../../context/AuthProvider';
import { ROUTES } from '@/constants/routes';
import { Button } from '../Button/Button';
import { AuthViewProps, schemaType } from '@/types/types';
import styles from './style.module.scss';

const SignUpController = ({ authCallback }: AuthViewProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [authError, setAuthError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const lang: 'ru' | 'en' = 'en';
  const curLang = lang === 'en' ? en : ru;

  const handlePasswordVisibility = (): void => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (user) {
      setLoading(false);
      Router.push(ROUTES.MAIN);
    }
  }, [user]);

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
              {curLang.auth.signUpTitle}
            </h3>
            {authError && (
              <p className={styles['form__error']}>
                {curLang.auth.alreadyExists}
              </p>
            )}
          </div>
          <p className={styles['form__account']}>
            {curLang.auth.alreadyRegistered}{' '}
            <Link className={styles['form__link']} href={ROUTES.SIGN_IN}>
              {curLang.auth.signInHere}
            </Link>
            <br />
            or{' '}
            <Link className={styles['form__link']} href={ROUTES.WELCOME}>
              back to welcome page
            </Link>
          </p>
          <div
            className={`${styles['form__controls']} ${styles['form__controls_signin']}`}
          >
            <div className={styles['form__item']}>
              <div className={styles['form__placeholder-container']}>
                <input
                  className={styles['form__input']}
                  id="email"
                  type="text"
                  {...register('email')}
                  placeholder=""
                />
                <label htmlFor="email" className={styles['form__label']}>
                  {curLang.auth.email}
                </label>
                {errors.email?.message && (
                  <p className={styles['form__error']}>
                    {errors.email?.message}
                  </p>
                )}
              </div>
            </div>

            <div className={styles['form__item']}>
              <div className={styles['form__placeholder-container']}>
                <div className={styles['form__error-block']}>
                  <Image
                    onClick={handlePasswordVisibility}
                    className={styles['form__eye']}
                    src={isVisible ? `/open.png` : `/close.png`}
                    alt="eye"
                    width="35"
                    height="35"
                  />
                  <input
                    className={styles['form__input']}
                    id="password"
                    type={isVisible ? 'text' : 'password'}
                    {...register('password')}
                    placeholder=""
                  />
                  <label htmlFor="password" className={styles['form__label']}>
                    {curLang.auth.password}
                  </label>
                  {errors.password?.message && (
                    <p className={styles['form__error']}>
                      {errors.password?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Button
            text={curLang.auth.signUp}
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
