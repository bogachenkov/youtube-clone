import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: grid;
  grid-template-areas:
    "sidebar navbar"
    "sidebar content"
  ;
  column-gap: 2.5em;
`;