import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: grid;
  grid-template-areas:
    "sidebar navbar"
    "sidebar content"
  ;
  grid-auto-columns: auto minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  column-gap: var(--layout-col-gap);
  row-gap: var(--layout-row-gap);
  padding-right: 30px;
`;

export const StyledMain = styled.main`
  grid-area: content;
  padding-bottom: var(--content-padding-bottom);
  /* overflow-x: hidden; */
`;