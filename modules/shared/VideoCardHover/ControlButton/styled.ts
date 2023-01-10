import Button from '@modules/shared/Button';
import styled from 'styled-components';

export const StyledButtonText = styled.span`
  display: none;
`;

export const StyledControlButton = styled(Button)`
  background-color: rgba(0, 0, 0, .5);
  text-transform: capitalize;
  padding: .35em .5em;
  border-radius: 4;

  &:hover ${StyledButtonText} {
    display: inline-block;
  }
`;