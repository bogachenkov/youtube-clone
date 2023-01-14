import styled from 'styled-components';
import { StyledVideoControls } from './VideoControls/styled';

export const StyledVideoPlayer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    & > ${StyledVideoControls} {
      bottom: 0;
    }
  }
`;

export const StyledVideoElement = styled.video`
  max-height: 80vh;
  max-width: 100%;
  border-radius: 30px;
  aspect-ratio: 16 / 9;
`;