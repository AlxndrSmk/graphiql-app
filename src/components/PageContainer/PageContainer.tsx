import { PageContainerProps } from '@/types/types';
import styles from './PageContainer.module.scss';

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageContainer;
