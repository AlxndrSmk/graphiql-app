import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LangContext, TeamData } from '@/types/types';
import LanguageContext from '@/context/langContext';
import { team } from '@/utils/team';
import logo from './../../../public/rsschool.svg';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const context: LangContext = useContext<LangContext>(LanguageContext);
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__authors}>
        <Link
          className={styles['footer__authors-names']}
          href={team.en[0].github}
        >
          {team[context.pageLang as keyof TeamData][0].name}
        </Link>
        <Link
          className={styles['footer__authors-names']}
          href={team.en[1].github}
        >
          {team[context.pageLang as keyof TeamData][1].name}
        </Link>
        <Link
          className={styles['footer__authors-names']}
          href={team.en[2].github}
        >
          {team[context.pageLang as keyof TeamData][2].name}
        </Link>
      </div>
      <div className={styles.footer__created}>
        <span className={styles['footer__created-text']}>{`${
          context.getConstants().textCreated
        } 2023`}</span>
      </div>
      <div className={styles.footer__logo}>
        <Link href="https://rs.school/react/" target="blank">
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
