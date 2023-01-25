import React from 'react';

import { PlayControlsArea, RightControlsArea, StyledVideoControls, TimingsArea, VideoProgressArea } from './styled';
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
      <PlayControlsArea>
        <PlayControls />
      </PlayControlsArea>

      <VideoProgressArea>
        <VideoProgress />
      </VideoProgressArea>

      <TimingsArea>
        <VideoTimeRanges />
      </TimingsArea>

      <RightControlsArea>
        <VideoControlsRight />
      </RightControlsArea>
    </StyledVideoControls>
  );
}

export default React.memo(VideoControls);
