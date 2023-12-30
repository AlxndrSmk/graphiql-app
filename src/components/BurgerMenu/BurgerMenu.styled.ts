import styled from 'styled-components';
import { colors } from '@/styles/global';

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: -640px;
  height: 100vh;
  width: 320px;
  position: fixed;
  background-color: ${colors.lightbrown};
  z-index: 1;

  display: ${({ open }) => (open ? 'flex' : 'none')};
  gap: 10px;
  flex-direction: column;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) =>
    open ? 'translateX(-200%)' : 'translateX(-100%)'};
`;

export const StyledLink = {
  padding: '0 2rem',
  fontSize: '2rem',
  color: '#ffffff',
  textDecoration: 'none',
};
