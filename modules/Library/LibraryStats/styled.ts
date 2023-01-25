import { device } from '@const/cssMedia';
import Row from '@ui/Row';
import Text from '@ui/Text';
import styled from 'styled-components';

export const StyledLibraryStats = styled(Row)`
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const StyledLibraryText = styled(Text)`
  font-size: 1rem;

  @media ${device.laptop} {
    font-size: 1.3rem;
  }
`;