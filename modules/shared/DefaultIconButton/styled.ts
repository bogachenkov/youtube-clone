import styled from 'styled-components';
import Button from '../Button';

export const StyledButton = styled(Button)`
  position: relative;
  
`;

export const InkWrapper = styled.span`
  position: absolute;
  top: -.5em;
  left: -.5em;
  font-size: inherit;
  height: 2em;
  width: 2em;
  border-radius: 50%;
`;