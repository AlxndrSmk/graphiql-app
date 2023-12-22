import { FC, useState } from 'react';
import { TButton } from '../../types/types';
import styles from './Button.module.scss';

const Button: FC<TButton> = ({
  text,
  onClick,
  img,
  onHoverText,
  isTooltip,
  className,
  isDisabled,
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const onHoverFunc = () => setShowTooltip(true);
  const onMouseOutFunc = () => setShowTooltip(false);

  return (
    <button
      className={`${styles.btn} ${className && styles[className]}`}
      onClick={onClick}
      onMouseOver={onHoverFunc}
      onMouseOut={onMouseOutFunc}
      disabled={isDisabled}
    >
      {isTooltip && (
        <p className={`${styles.btn__tooltip} ${showTooltip && styles.active}`}>
          {onHoverText}
        </p>
      )}
      {text}
      {img}
    </button>
  );
};

export default Button;
