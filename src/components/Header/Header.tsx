import Router from 'next/router';
import { Button } from '../Button/Button';
import { en } from '@/locale/en';
import { ru } from '@/locale/ru';
import styles from './Header.module.scss';
import { ROUTES } from '@/constants/routes';
import { useAuth } from '../../context/AuthProvider';
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
      {user ? (
        <Button text={curLang.auth.signOut} onClick={handleSignOut} />
      ) : (
        <>
          <Button text={curLang.auth.signIn} onClick={handleSignIn} />
          <Button text={curLang.auth.signUp} onClick={handleSignUp} />
        </>
      )}
    </div>
  );
};

export default Header;
