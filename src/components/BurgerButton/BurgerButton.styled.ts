import styled from 'styled-components';
import { colors } from '@/styles/global';

export const StyledBurgerButton = styled.button<{ open: boolean }>`
  right: 25px;
  display: none;
  top: 25px;
  width: 2rem;
  height: 2rem;
  padding: 0;
  position: absolute;
  background: transparent;

  flex-direction: column;
  justify-content: space-around;

  border: none;
  cursor: pointer;
  outline: none;
  z-index: 199;

  @media (max-width: 675px) {
    display: flex;
  }

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: ${colors.white};

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
