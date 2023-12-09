import { ReactNode } from 'react';
import styles from './AuthBlock.module.scss';
import AuthButton from '@/components/AuthBlock/AuthButton/AuthButton';

function AuthBlock(): ReactNode {
  //TODO have to add logic!!!
  return (
    <div className={styles.auth__block}>
      <AuthButton type={'sign-in'} />
      <AuthButton type={'sign-up'} />
    </div>
  );
}

export default AuthBlock;
