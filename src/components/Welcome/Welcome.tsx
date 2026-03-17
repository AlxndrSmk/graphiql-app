import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import langContext from '@/context/langContext';
import { LangContext } from '@/types/types';
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
          {context.getConstants().desc}
          <Link
            className={styles['main__links']}
            href="https://rickandmortyapi.com/documentation/"
            target="_blank"
            rel="noreferrer"
          >
            {context.getConstants().descGrLink}
          </Link>
          {context.getConstants().descGrLinkEnd}
        </p>
      </div>
    </section>
  );
};

export default Welcome;
