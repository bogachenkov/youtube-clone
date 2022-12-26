import styled from 'styled-components';
import Row from '../Row';

export const StyledComment = styled(Row)`
  margin-bottom: var(--comment-margin);

  a {
    text-decoration: none;
    color: var(--color-red);
    font-weight: 500;
    font-variant-numeric: tabular-nums;
  }
`;