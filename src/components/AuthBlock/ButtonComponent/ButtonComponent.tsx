import React from 'react';
import { StylesOfButton } from '@/types/types';

const ButtonComponent: React.FC<StylesOfButton> = (props: StylesOfButton) => {
  const { button, textButtonStyle, textButton } = props;
  return (
    <button className={button}>
      <span className={textButtonStyle}>{textButton}</span>
    </button>
  );
};

export default ButtonComponent;
