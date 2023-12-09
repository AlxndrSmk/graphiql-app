import { ReactNode, useContext } from 'react';
import styles from '@/components/AuthBlock/AuthButton/AuthButton.module.scss';
import PropsAuthButton from '@/types/PropsAuthButton';
import LangContext from '@/types/LangContext';
import LanguageContext from '@/context/langContext';
import StylesOfButton from '@/types/PropsButtonComponent';
import ButtonComponent from '@/components/AuthBlock/ButtonComponent/ButtonComponent';

function AuthButton(props: PropsAuthButton): ReactNode {
  const context = useContext<LangContext>(LanguageContext);
  const btnStyle: StylesOfButton = changeBtnType(props.type);

  return <ButtonComponent {...btnStyle} />;

  function changeBtnType(type: string): StylesOfButton {
    switch (type) {
      case 'sign-in':
        return {
          button: styles.sign_in,
          textButtonStyle: styles['sign_in-text'],
          textButton: context.getConstants().signInBtn,
        };
      case 'sign-up':
        return {
          button: styles.sign_up,
          textButtonStyle: styles['sign_up-text'],
          textButton: context.getConstants().signUpBtn,
        };
      case 'to-main':
      default:
        return {
          button: styles.to_main,
          textButtonStyle: styles['to_main-text'],
          textButton: context.getConstants().toMainBtn,
        };
    }
  }
}

export default AuthButton;
