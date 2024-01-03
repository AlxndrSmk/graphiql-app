import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import LanguageContext from '@/context/langContext';
import { team } from '@/constants/team';
import logo from '@/public/rsschool.svg';
import { LangContext, TeamData, TeamMember } from '@/types/types';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const context: LangContext = useContext<LangContext>(LanguageContext);

  const createAuthorLink = (index: number, member: TeamMember) => {
    return (
      <Link
        key={index}
        className={styles['footer__authors-names']}
        href={member.github}
      >
        {`${member.firstName} ${member.lastName}`}
      </Link>
    );
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__authors}>
        {team[context.pageLang as keyof TeamData].map(
          (member: TeamMember, index: number) => createAuthorLink(index, member)
        )}
      </div>
      <div className={styles.footer__created}>
        <span className={styles['footer__created-text']}>{`© 2023 ${
          context.getConstants().textCreated
        }`}</span>
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
