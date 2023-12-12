import React from 'react';
import AuthButton from '@/components/AuthBlock/AuthButton/AuthButton';
import styles from './AuthBlock.module.scss';

const AuthBlock: React.FC = () => {
  //TODO have to add logic!!!
  return (
    <div className={styles.auth__block}>
      <AuthButton type={'sign-in'} />
      <AuthButton type={'sign-up'} />
    </div>
  );
};

export default AuthBlock;
