import styles from './JsonViewer.module.scss';

export const JsonViewer: React.FC = () => {
  return (
    <div className={styles.json_viewer}>
      <textarea className={styles.json_viewer__textarea} readOnly>
        hello world
      </textarea>
    </div>
  );
};
