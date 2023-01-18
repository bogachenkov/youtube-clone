import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: var(--button-f-size);
  font-weight: 600;
  color: var(--button-text-color);
  background-color: var(--button-bg-color);
  padding: var(--button-padding);
  border-radius: .55em;
  /* display: inline-flex;
  align-items: center; */
  transition: .2s;

  &:hover {
    color: var(--button-hover-color);
  }
`;