import { usePlayerRefs } from '@lib/providers/player-api';
import _ from 'lodash';
import React, { VideoHTMLAttributes } from 'react';
import { StyledVideoPlayer } from './styled';
import VideoControls from './VideoControls';
import VideoElement from './VideoElement';

export interface IVideoPlayerProps extends VideoHTMLAttributes<HTMLVideoElement> {
  children?: React.ReactNode;
}

type ExitFullscreen = typeof document.exitFullscreen
type RequestFullscreen = typeof document.documentElement.requestFullscreen

declare global {
  interface Document {
    webkitExitFullscreen: ExitFullscreen;
    mozCancelFullScreen: ExitFullscreen;
    msExitFullscreen: ExitFullscreen;
  }

  interface HTMLElement {
    webkitRequestFullscreen: RequestFullscreen;
    mozRequestFullScreen: RequestFullscreen;
    msRequestFullscreen: RequestFullscreen;
  }
}

const VideoPlayer:React.FC<IVideoPlayerProps> = (props) => {
  const { container } = usePlayerRefs();

  return (
    <StyledVideoPlayer ref={container}>
      <VideoElement {...props} />
      <VideoControls />
    </StyledVideoPlayer>
  );
}

export default VideoPlayer;
