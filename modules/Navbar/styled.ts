import styled from 'styled-components';

export const StyledNavbar = styled.header`
  grid-area: navbar;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: var(--navbar-height);
  padding: 1.5rem 0;
  margin-top: var(--navbar-margin);
  z-index: 1;
  background-color: var(--color-background-gray);
`;