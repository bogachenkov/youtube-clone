import styled from 'styled-components';

export const StyledCategoryButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: none;
  border-radius: 8px;
  padding: 20px 10px 10px 10px;
  /* width: 152px;
  height: 140px; */
  aspect-ratio: 1.1 / 1;
  background: var(--color-background-gray);
  color: var(--cat-button-color);
  cursor: pointer;
  transition: color .2s;

  &:hover {
    color: red;
  }
`;