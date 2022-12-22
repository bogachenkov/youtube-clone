import styled from 'styled-components';
import Row from '../../Row';

export const StyledMetadataControls = styled(Row)`
  & > button {
    padding: 0;
    background: none;
    border: none;
    color: var(--color-white);
    font-size: 2.6rem;
    display: inline-flex;
    align-items: center;
    gap: .4em;
    cursor: pointer;

    &:first-of-type {
      font-size: 2rem;
      
      & > p {
        font-weight: 600;
      }
    }
  }
`;