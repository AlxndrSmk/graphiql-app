import s from './JsonViewer.module.scss';

export const JsonViewer = () => {
  return (
    <div className={s.jsonViewer}>
      <textarea className={s.jsonViewer__textarea} readOnly>
        hello world
      </textarea>
    </div>
  );
};
