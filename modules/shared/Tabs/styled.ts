import styled from 'styled-components';

export const StyledNavWrapper = styled.div`
  display: flex;
  max-width: 100%;
  position: relative;
  z-index: 0;
`;

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  /* flex-shrink: 0; */
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 15;
  padding: .5rem var(--tabs-pad-right) .4rem 0;
  gap: 5rem;
  overflow: hidden;
  scroll-behavior: smooth;
`;

export const StyledTab = styled.button`
  border: none;
  background: transparent;
  color: var(--tab-font-color);
  font-size: 1.3rem;
  letter-spacing: .2px;
  padding: .45em .6em;
  font-weight: 500;
  cursor: pointer;
  flex-shrink: 0;

  &:first-of-type {
    margin-left: -.6em;
  }
`;

export const StyledUnderline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;
  height: 2px;
  width: 100%;
  background-color: var(--color-grayDark);
`;

export const StyledUnderlineThumb = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 2px;
  background-color: red;
`;