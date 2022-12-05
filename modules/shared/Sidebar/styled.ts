import Link from 'next/link';
import styled from 'styled-components';
import { StyledHamburgerButton } from '../HamburgerMenu/styled';

export const StyledSidebarHeader = styled.header`
  max-width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledLogoLink = styled(Link)`
  display: var(--sidebar-items-display);
`;

export const StyledSidebar = styled.aside`
  --sidebar-padding-h: 2.7em;
  width: var(--sidebar-width);
  overflow: hidden;
  padding: 3.9em var(--sidebar-padding-h) 0;
  grid-area: sidebar;
  background-color: var(--color-background-blue);

  & ${StyledHamburgerButton} {
    margin-right: .9em;
  }

  & ${StyledSidebarHeader} {
    margin-bottom: 1.1em;
  }
`;
