import styles from './JsonViewer.module.scss';

const JsonViewer: React.FC = () => {
  return (
    <div className={styles.json_viewer}>
      {/* <textarea className={styles.json_viewer__textarea} readOnly>
        hello world
      </textarea> */}
      <div className="editor" contentEditable="true" spellCheck="false">
        {/* <code> */}
        <div>function example() &#123; </div>
        <div> return 42;</div>
        <div> &#125; </div>
        {/* </code> */}
      </div>
    </div>
  );
};

export default JsonViewer;
