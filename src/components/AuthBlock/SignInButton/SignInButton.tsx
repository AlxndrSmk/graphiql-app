import { ReactNode } from 'react';
import styles from './../Buttons.module.scss';
function SignInButton(): ReactNode {
  //TODO have to add logic!!!
  return (
    <button className={styles.sign_in}>
      <span className={styles.auth_text}>Sign In</span>
    </button>
  );
}

export default SignInButton;
