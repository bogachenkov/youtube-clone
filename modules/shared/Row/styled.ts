import styled from 'styled-components';

export const StyledRow = styled.div`
  --row-align: center;
  --row-justify: flex-start;
  --row-gap: 0px;
  
  display: flex;
  align-items: var(--row-align);
  justify-content: var(--row-justify);
  gap: var(--row-gap);
`;