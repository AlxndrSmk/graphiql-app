import { StyledBurgerButton } from './BurgerButton.styled';
import { BurgerButtonProps } from '@/types/types';

const BurgerButton: React.FC<BurgerButtonProps> = (props) => {
  return (
    <StyledBurgerButton
      open={props.open}
      onClick={() => props.setOpen(!props.open)}
    >
      <div />
      <div />
      <div />
    </StyledBurgerButton>
  );
};

export default BurgerButton;
