import { team } from '@/constants/team';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Welcome.module.scss';
import { LangContext, TeamData, TeamMember } from '@/types/types';
import langContext from '@/context/langContext';
import { useContext } from 'react';

const Welcome: React.FC = () => {
  const context: LangContext = useContext<LangContext>(langContext);

  return (
    <section className={styles.main}>
      <h1 className={styles.main__title}>{context.getConstants().title}</h1>
      <div className={styles.main__desc}>
        {context.getConstants().desc}{' '}
        <Link
          href="https://rickandmortyapi.com/documentation/"
          target="_blank"
          rel="noreferrer"
        >
          {context.getConstants().descGrLink}{' '}
        </Link>
        {context.getConstants().descRs}{' '}
        <a href="https://rs.school/">RS School</a>
      </div>
      <ul className={styles.main__list}>
        {team[context.pageLang as keyof TeamData].map((el: TeamMember) => (
          <li className={styles.main__list_item} key={el.name}>
            <Link className={styles.main__list_item_link} href={el.github}>
              <Image src="/github.svg" alt="github" width="30" height="30" />
            </Link>
            <Image src={el.img} alt={el.name} width="100" height="100" />
            <p>{el.name}</p>
            <p>{el.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Welcome;
