import React from 'react';

import { StyledVideoControls } from './styled';
import { IVideoControls, IVideoStates, TimeRanges } from '../VideoPlayer';
import VideoProgress from './VideoProgress';
import PlayControls from './PlayControls';
import VideoTimeRanges from './VideoTimeRanges';
import VideoControlsRight from './VideoControlsRight';


interface IVideoControlsProps {
  children?: React.ReactNode;
  controls: IVideoControls;
  states: IVideoStates;
  timeRanges: TimeRanges;
}

const VideoControls:React.FC<IVideoControlsProps> = ({
  controls,
  states,
  timeRanges,
}) => {
  return (
    <StyledVideoControls>
      <PlayControls
        togglePlaying={controls.togglePlaying}
        isPlaying={states.isPlaying}
      />
      <VideoProgress timeRanges={timeRanges} onTimeChange={controls.handleTimingChange} />
      <VideoTimeRanges 
        played={timeRanges.played}
        duration={timeRanges.duration}
      />
      <VideoControlsRight
        isMuted={states.isMuted}
        isFullscreen={states.isFullscreen}
        toggleMute={controls.toggleMute}
        toggleFullscreen={controls.toggleFullscreen}
      />
    </StyledVideoControls>
  );
}

export default VideoControls;
