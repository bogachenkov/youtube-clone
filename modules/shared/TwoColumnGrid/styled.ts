import styled from 'styled-components';

export const StyledTwoColumnGrid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: var(--first-col-width) var(--second-col-width);
`;