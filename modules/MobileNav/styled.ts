import { device } from '@const/cssMedia';
import styled from 'styled-components';

export const StyledMobileNav = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  height: var(--mobile-nav-height);
  width: 100%;
  z-index: 10;
  background-color: var(--color-black);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1em 4.5em 0;

  @media ${device.laptop} {
    display: none;
  }
`;