import React from 'react';

import { StyledVideoControls } from './styled';
import VideoProgress from './VideoProgress';
import PlayControls from './PlayControls';
import VideoTimeRanges from './VideoTimeRanges';
import VideoControlsRight from './VideoControlsRight';

interface IVideoControlsProps {
  children?: React.ReactNode;
}

const VideoControls:React.FC<IVideoControlsProps> = () => {
  return (
    <StyledVideoControls>
      <PlayControls />
      <VideoProgress />
      <VideoTimeRanges />
      <VideoControlsRight />
    </StyledVideoControls>
  );
}

export default VideoControls;
