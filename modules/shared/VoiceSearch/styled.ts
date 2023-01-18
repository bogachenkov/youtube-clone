import styled from 'styled-components';
import DefaultIconButton from '@modules/shared/DefaultIconButton';

export const StyledVoiceSearch = styled.div`
  flex: 1;
  position: relative;
`;

export const StyledMicroButton = styled(DefaultIconButton)`
  position: absolute !important;
  top: .35em;
  right: 1em;
`;