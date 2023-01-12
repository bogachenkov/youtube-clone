import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 0;
  padding: .5rem 0;
  gap: 5rem;
`;

export const StyledTab = styled.button`
  border: none;
  background: transparent;
  color: var(--tab-font-color);
  font-size: 1.3rem;
  letter-spacing: .2px;
  padding: .45em .6em;
  font-weight: 600;
  cursor: pointer;

  &:first-of-type {
    margin-left: -.6em;
  }
`;

export const StyledUnderline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 2px;
  background-color: red;
`;