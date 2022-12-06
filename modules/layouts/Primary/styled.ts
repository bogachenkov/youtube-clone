import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: grid;
  grid-template-areas:
    "sidebar navbar"
    "sidebar content"
  ;
  grid-auto-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 2.5em;
`;