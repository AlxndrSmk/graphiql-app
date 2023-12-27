import { LinkButtonProps } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import styles from './LinkButton.module.scss';

const LinkButton: React.FC<LinkButtonProps> = ({
  alt,
  size,
  src,
  href,
  text,
}) => {
  return (
    <Link className={styles.button} href={href}>
      <Image
        alt={alt}
        height={size}
        src={src}
        width={size}
        className={styles.logo}
      />
      {text}
    </Link>
  );
};

export default LinkButton;
