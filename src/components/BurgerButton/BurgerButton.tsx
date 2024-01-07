import { BurgerButtonProps } from '@/types/types';
import styles from './BurgerButton.module.scss';

const BurgerButton: React.FC<BurgerButtonProps> = (props) => {
  const { isOpen, setIsOpen } = props;

  return (
    <button
      className={styles.button}
      onClick={() => setIsOpen(!isOpen)}
      data-testid="burger-button"
    >
      <div
        className={`${styles.first} ${isOpen ? styles.open : styles.closed}`}
      />
      <div
        className={`${styles.second} ${isOpen ? styles.open : styles.closed}`}
      />
      <div
        className={`${styles.third} ${isOpen ? styles.open : styles.closed}`}
      />
    </button>
  );
};

export default BurgerButton;
