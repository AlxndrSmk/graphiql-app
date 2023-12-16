import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LangContext, URLsForRedirect } from '@/types/types';
import LanguageContext from '@/context/langContext';
import logo from './../../../public/rsschool.svg';
import styles from './Footer.module.scss';

const urls: URLsForRedirect = {
  pozdnyakoks: 'https://github.com/pozdnyakoks',
  alxndrsmk: 'https://github.com/AlxndrSmk',
  brbrov: 'https://github.com/BrBrov',
  rsschool: 'https://rs.school/react/',
};

const Footer: React.FC = () => {
  const context: LangContext = useContext<LangContext>(LanguageContext);
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__authors}>
        <Link
          className={styles['footer__authors-names']}
          href={urls.pozdnyakoks}
        >
          Oksana Pozdnyak
        </Link>
        <Link className={styles['footer__authors-names']} href={urls.alxndrsmk}>
          Alexander Samak
        </Link>
        <Link className={styles['footer__authors-names']} href={urls.brbrov}>
          Henadzi Vasukovich
        </Link>
      </div>
      <div className={styles.footer__created}>
        <span className={styles['footer__created-text']}>{`${
          context.getConstants().textCreated
        } 2023`}</span>
      </div>
      <div className={styles.footer__logo}>
        <Link href={urls.rsschool} target="blank">
          <Image
            className={styles['footer__logo-school']}
            src={logo}
            alt={context.getConstants().altLogo}
            width={100}
            height={40}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
