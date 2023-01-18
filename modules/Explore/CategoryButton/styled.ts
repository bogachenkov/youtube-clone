import styled from 'styled-components';

export const StyledCategoryButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: none;
  border-radius: 8px;
  padding: 20px;
  /* width: 152px;
  height: 140px; */
  aspect-ratio: 1.1 / 1;
  background: var(--color-background-blue);
  color: var(--color-light);
  border: 1px solid var(--button-border-color);
  cursor: pointer;
  transition: all .2s;

  &:hover {
    transform: scale(1.1);
  }
`;