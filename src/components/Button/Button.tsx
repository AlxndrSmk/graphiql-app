import { useState } from 'react';
import { TButton } from '@/types/types';
import styles from './Button.module.scss';

const Button: React.FC<TButton> = ({
  text,
  onClick,
  img,
  onHoverText,
  isTooltip,
  className,
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
