import styles from './Button.module.scss';

export const Button = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};
