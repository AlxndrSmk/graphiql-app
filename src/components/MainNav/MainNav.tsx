import { Button } from '../Button/Button';

import s from './MainNav.module.scss';

export const MainNav = () => {
  return (
    <div className={s.mainNav}>
      <Button text="Documentation" onClick={() => console.log('doc')}></Button>
      <Button
        text="Change endpoint"
        onClick={() => console.log('change')}
      ></Button>
    </div>
  );
};
