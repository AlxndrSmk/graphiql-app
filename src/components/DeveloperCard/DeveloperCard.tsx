import Image from 'next/image';
import LinkButton from '@/components/LinkButton/LinkButton';
import { DeveloperCardProps, LangContext } from '@/types/types';
import styles from './DeveloperCard.module.scss';
import { useContext } from 'react';
import langContext from '@/context/langContext';

const DeveloperCard: React.FC<DeveloperCardProps> = (props) => {
  const context = useContext<LangContext>(langContext);
  const { bgColor, firstName, lastName, github, image, description } = props;

  return (
    <>
      <div className={styles['card']}>
        <div className={styles['flip-card']}>
          <div className={styles['flip-card__container']}>
            <div className={styles['card-front']}>
              <div
                style={{ backgroundColor: bgColor }}
                className={styles['card-front__tp']}
              >
                <div className={styles['card-front__icon']}>
                  <Image alt={firstName} height={110} src={image} width={110} />
                </div>
                <h2 className={styles['card-front__heading']}>{firstName}</h2>
              </div>

              <div className={styles['card-front__bottom']}>
                <p className={styles['card-front__text-view']}>
                  {context.getConstants().details}
                </p>
              </div>
            </div>

            <div className={styles['card-back']}>
              <div className={styles['card-back__photo']}>
                <Image alt={firstName} src={image} fill sizes="100px" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles['inside-page']}>
          <div className={styles['inside-page__container']}>
            <h3 className={styles['inside-page__heading']}>
              {`${firstName} ${lastName}`}
            </h3>

            <p className={styles['inside-page__text']}>{description}</p>
            <LinkButton
              alt={`${firstName} github`}
              size={35}
              src={'./github.svg'}
              href={github}
              text={'Github'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeveloperCard;
