import { device } from '@const/cssMedia';
import Row from '@modules/shared/Row';
import Text from '@modules/shared/Text';
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