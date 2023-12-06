import { ReactNode, useContext } from 'react';
import Image from 'next/image';
import logo from './../../../public/rsschool.svg';
import LanguageContext from '@/context/langContext';
import LangContext from '@/types/LangContext';
import styles from './Footer.module.scss';
import { useRouter } from 'next/router';

function Footer(): ReactNode {
  const context: LangContext = useContext<LangContext>(LanguageContext);
  const { push } = useRouter();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_authors}>
        <span className={styles.footer_names} onClick={toGitOne}>
          Oksana Pozdnyak
        </span>
        <span className={styles.footer_names} onClick={toGitTwo}>
          Alexander Samak
        </span>
        <span className={styles.footer_names} onClick={toGitThree}>
          Henadzi Vasukovich
        </span>
      </div>
      <div className={styles.footer_created}>
        <span className={styles.footer_text}>Created at 2023</span>
      </div>
      <div className={styles.footer_logo}>
        <Image
          className={styles.footer_school}
          src={logo}
          alt={context.getConstants().altLogo}
          width={100}
          height={40}
          onClick={toSchoolPage}
        />
      </div>
    </footer>
  );

  async function toGitOne(): Promise<void> {
    await push('https://github.com/pozdnyakoks');
  }

  async function toGitTwo(): Promise<void> {
    await push('https://github.com/AlxndrSmk');
  }

  async function toGitThree(): Promise<void> {
    await push('https://github.com/BrBrov');
  }

  async function toSchoolPage(): Promise<void> {
    await push('https://rs.school/react/');
  }
}

export default Footer;
