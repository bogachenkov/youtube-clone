import styled from 'styled-components';
import { StyledVideoControls } from './VideoControls/styled';

export const StyledVideoPlayer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: var(--content-full-height);

  @media all and (display-mode: fullscreen) {
    max-height: unset;
    border-radius: 0;
  }

  &:hover {
    & > ${StyledVideoControls} {
      bottom: 0;
    }
  }
`;

export const StyledVideoElement = styled.video`
  max-height: var(--content-full-height);
  height: 100%;
  width: 100%;
  border-radius: 30px;
  aspect-ratio: 16 / 9;

  @media all and (display-mode: fullscreen) {
    max-height: unset;
    border-radius: 10px;
  }
`;