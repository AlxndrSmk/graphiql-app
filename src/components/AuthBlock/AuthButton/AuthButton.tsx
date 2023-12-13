import React, { useContext } from 'react';
import { LangContext, PropsAuthButton, StylesOfButton } from '@/types/types';
import LanguageContext from '@/context/langContext';
import ButtonComponent from '@/components/AuthBlock/ButtonComponent/ButtonComponent';
import styles from '@/components/AuthBlock/AuthButton/AuthButton.module.scss';

const AuthButton: React.FC<PropsAuthButton> = (props: PropsAuthButton) => {
  const context: LangContext = useContext<LangContext>(LanguageContext);

  const changeBtnType = (type: string): StylesOfButton => {
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
  };

  const btnStyle: StylesOfButton = changeBtnType(props.type);

  return <ButtonComponent {...btnStyle} />;
};

export default AuthButton;
