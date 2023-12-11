import React from 'react';
import StylesOfButton from '@/types/PropsButtonComponent';
import './../AuthButton/AuthButton.module.scss';

const ButtonComponent: React.FC<StylesOfButton> = (props: StylesOfButton) => {
  const { button, textButtonStyle, textButton } = props;
  return (
    <button className={button}>
      <span className={textButtonStyle}>{textButton}</span>
    </button>
  );
};

export default ButtonComponent;
