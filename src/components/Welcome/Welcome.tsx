import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import langContext from '@/context/langContext';
import DeveloperCard from '@/components/DeveloperCard/DeveloperCard';
import { team } from '@/constants/team';
import { getRandomColor } from '@/utils/getRandomColor';
import { LangContext, TeamData, TeamMember } from '@/types/types';
import styles from './Welcome.module.scss';

const Welcome: React.FC = () => {
  const context: LangContext = useContext<LangContext>(langContext);

  return (
    <section className={styles.main}>
      <div className={styles['big-image']}>
        <Image src={'/big-rick.png'} alt={'Rick'} fill sizes="100px" />
      </div>

      <h1 className={styles['main__title']}>{context.getConstants().title}</h1>
      <div className={styles['main__desc']}>
        <p>
          {context.getConstants().desc}{' '}
          <Link
            className={styles['main__links']}
            href="https://rickandmortyapi.com/documentation/"
            target="_blank"
            rel="noreferrer"
          >
            {context.getConstants().descGrLink}{' '}
          </Link>
        </p>
        <p>
          {context.getConstants().descRs}{' '}
          <Link
            className={styles['main__links']}
            href="https://rs.school/"
            target="_blank"
            rel="noreferrer"
          >
            {context.getConstants().linkRSS}
          </Link>
          {context.getConstants().descEnd}
        </p>
      </div>
      <section className={styles['card-section']}>
        {team[context.pageLang as keyof TeamData].map((el: TeamMember) => (
          <DeveloperCard
            key={el.github}
            firstName={el.firstName}
            lastName={el.lastName}
            github={el.github}
            image={el.img}
            description={el.desc}
            bgColor={getRandomColor()}
          />
        ))}
      </section>
    </section>
  );
};

export default Welcome;
