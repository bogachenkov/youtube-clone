import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 11px;
  color: #fff;
  text-transform: capitalize;
  text-decoration: none;
  font-size: 1.17rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: .5px;
  white-space: nowrap;

  & > *:first-of-type {
    transition: .3s;
    color: var(--sidebarlink-color);
  }

  &:hover {
    & > *:first-of-type {
      color: var(--color-red);
    }
  }
`;

export const StyledLinkIconWrapper = styled.span`
  font-size: var(--sidebar-icon-size);
`;

export const StyledLinkLabel = styled.span`
  display: var(--sidebar-items-display);
`;