import { ReactNode } from 'react';
import styles from './../Buttons.module.scss';
function SignUpButton(): ReactNode {
  //TODO have to add logic!!!
  return (
    <button className={styles.sign_up}>
      <span className={styles.auth_text}>Sign Up</span>
    </button>
  );
}
export default SignUpButton;
