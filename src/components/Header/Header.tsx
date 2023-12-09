import Router from 'next/router';
import { Button } from '../Button/Button';
import { en } from '@/locale/en';
import { ru } from '@/locale/ru';
import styles from './Header.module.scss';
import { ROUTES } from '@/constants/routes';
import { useAuth } from '../auth/AuthController';
import { logout } from '@/firebase/firebaseClient';

export const Header: React.FC = () => {
  const { user } = useAuth();
  const lang: 'ru' | 'en' = 'en';
  const curLang = lang === 'en' ? en : ru;

  const handleSignOut = (): void => {
    logout();
    Router.push(ROUTES.WELCOME);
  };

  const handleSignIn = (): void => {
    Router.push(ROUTES.SIGN_IN);
  };

  const handleSignUp = (): void => {
    Router.push(ROUTES.SIGN_UP);
  };

  return (
    <div className={styles.header__btns}>
      {!user ? (
        <>
          <Button text={curLang.welcome.signIn} onClick={handleSignIn} />
          <Button text={curLang.welcome.signUp} onClick={handleSignUp} />
        </>
      ) : (
        <Button text={curLang.welcome.signOut} onClick={handleSignOut} />
      )}
    </div>
  );
};

export default Header;
