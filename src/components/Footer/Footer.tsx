import React, { useContext } from 'react';
import Image from 'next/image';
import { LangContext, URLsForRedirect } from "@/types/types";
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
        <a className={styles['footer__authors-names']} href={urls.pozdnyakoks}>
          Oksana Pozdnyak
        </a>
        <a className={styles['footer__authors-names']} href={urls.alxndrsmk}>
          Alexander Samak
        </a>
        <a className={styles['footer__authors-names']} href={urls.brbrov}>
          Henadzi Vasukovich
        </a>
      </div>
      <div className={styles.footer__created}>
        <span className={styles['footer__created-text']}>{`${
          context.getConstants().textCreated
        } 2023`}</span>
      </div>
      <div className={styles.footer__logo}>
        <a href={urls.rsschool}>
          <Image
            className={styles['footer__logo-school']}
            src={logo}
            alt={context.getConstants().altLogo}
            width={100}
            height={40}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
