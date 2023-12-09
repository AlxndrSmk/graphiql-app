import { ReactNode } from 'react';
import StylesOfButton from '@/types/PropsButtonComponent';
import './../AuthButton/AuthButton.module.scss';

function ButtonComponent(props: StylesOfButton): ReactNode {
  const { button, textButtonStyle, textButton } = props;
  return (
    <button className={button}>
      <span className={textButtonStyle}>{textButton}</span>
    </button>
  );
}

export default ButtonComponent;
