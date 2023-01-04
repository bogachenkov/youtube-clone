import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: grid;
  grid-template-areas:
    "sidebar navbar"
    "sidebar content"
  ;
  grid-auto-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 3rem;
  row-gap: 1.5rem;
  padding-right: 30px;
`;

export const StyledMain = styled.main`
  grid-area: content;
`;