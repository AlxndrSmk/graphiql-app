import { team } from '@/utils/team';
import Image from 'next/image';
import { en } from '@/locale/en';
import { ru } from '@/locale/ru';
import PageContainer from '../PageContainer/PageContainer';
import Header from '../Header/Header';
import styles from './Welcome.module.scss';

export const Welcome: React.FC = () => {
  const lang: 'ru' | 'en' = 'en';

  const curLang = lang === 'en' ? en : ru;
  return (
    <PageContainer>
      <Header />
      <section className={styles.main}>
        <h1 className={styles.main__title}>{curLang.welcome.title}</h1>
        <div className={styles.main__desc}>
          {curLang.welcome.desc}{' '}
          <a
            href="https://rickandmortyapi.com/documentation/"
            target="_blank"
            rel="noreferrer"
          >
            {curLang.welcome.descGrLink}{' '}
          </a>
          {curLang.welcome.descRs} <a href="https://rs.school/">RS School</a>
        </div>
        <ul className={styles.main__list}>
          {team[lang].map((el) => (
            <li className={styles.main__list_item} key={el.name}>
              <a className={styles.main__list_item_link} href={el.github}>
                <Image src="/github.svg" alt="github" width="30" height="30" />
              </a>
              <Image src={el.img} alt={el.name} width="100" height="100" />
              <p>{el.name}</p>
              <p>{el.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </PageContainer>
  );
};
