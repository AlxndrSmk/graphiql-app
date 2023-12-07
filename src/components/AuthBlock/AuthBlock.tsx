import { ReactNode } from 'react';
import SignInButton from '@/components/AuthBlock/SignInButton/SignInButton';
import SignUpButton from '@/components/AuthBlock/SignUpButton/SignUpButton';
import styles from './AuthBlock.module.scss';

function AuthBlock(): ReactNode {
  //TODO have to add logic!!!
  return (
    <div className={styles.auth_block}>
      <SignInButton />
      <SignUpButton />
    </div>
  );
}

export default AuthBlock;
