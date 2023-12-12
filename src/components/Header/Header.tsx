import Router from 'next/router';
import { Button } from '../Button/Button';
import { en } from '@/locale/en';
import { ru } from '@/locale/ru';
import styles from './Header.module.scss';
import { ROUTES } from '@/constants/routes';
import { useAuth } from '../../context/AuthProvider';
import { logout } from '@/firebase/firebaseClient';
import Timer from '../Timer/Timer';

export const Header: React.FC = () => {
  const { user } = useAuth();

  const lang: 'ru' | 'en' = 'en';
  const curLang = lang === 'en' ? en : ru;

  const handleSignOut = (): void => {
    logout();
    Router.push(ROUTES.WELCOME);
  };

  return (
    <div className={styles.header__btns}>
      {user ? (
        <>
          <Button text={curLang.auth.signOut} onClick={handleSignOut} />
          <Timer />
        </>
      ) : (
        <>
          <Button
            text={curLang.auth.signIn}
            onClick={() => Router.push(ROUTES.SIGN_IN)}
          />
          <Button
            text={curLang.auth.signUp}
            onClick={() => Router.push(ROUTES.SIGN_UP)}
          />
        </>
      )}
    </div>
  );
};

export default Header;
