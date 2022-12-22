import styled from 'styled-components';

export const StyledNavbar = styled.header`
  grid-area: navbar;
  padding: 3em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: var(--color-background-gray);
`;