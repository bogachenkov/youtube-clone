import styled from 'styled-components';

export const StyledVideoWrapper = styled.div`
  aspect-ratio: 16 / 9;
`;

export const StyledVideoPlayer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  aspect-ratio: 16 / 9;
`;

export const StyledVideoElement = styled.video`
  width: 100%;
  object-fit: contain;
  object-position: center;
  overflow-clip-margin: clip;
  border-radius: 30px;
`;