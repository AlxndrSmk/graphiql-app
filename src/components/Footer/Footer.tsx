import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LangContext, TeamData } from '@/types/types';
import LanguageContext from '@/context/langContext';
import { team } from '@/constants/team';
import logo from '@/public/rsschool.svg';
import styles from './Footer.module.scss';
import { TeamMember } from '@/types/types';

const Footer: React.FC = () => {
  const context: LangContext = useContext<LangContext>(LanguageContext);

  const createAuthorLink = (index: number, member: TeamMember) => {
    return (
      <Link
        key={index}
        className={styles['footer__authors-names']}
        href={member.github}
      >
        {member.name}
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
