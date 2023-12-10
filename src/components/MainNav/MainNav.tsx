import { Button } from '../Button/Button';

export const MainNav = () => {
  return (
    <div className="left">
      <Button text="Documentation" onClick={() => console.log('doc')}></Button>
      <Button
        text="Change endpoint"
        onClick={() => console.log('change')}
      ></Button>
    </div>
  );
};
