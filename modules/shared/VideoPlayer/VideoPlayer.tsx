import { usePlayerAPI, usePlayerRefs, usePlayerMuted } from '@lib/providers/player-api';
import _ from 'lodash';
import React, { useEffect, useRef, VideoHTMLAttributes } from 'react';
import { StyledVideoElement, StyledVideoPlayer } from './styled';
import VideoControls from './VideoControls';

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

const VideoPlayer:React.FC<IVideoPlayerProps> = ({
  src,
  ...props
}) => {
  const timeIntervalRef = useRef<NodeJS.Timer>();

  const { video, container } = usePlayerRefs();
  const { updateTimings } = usePlayerAPI();
  const isMuted = usePlayerMuted();

  useEffect(() => {
    return () => {
      clearInterval(timeIntervalRef.current);
    }
  }, []);

  const setPlayInterval = (el: HTMLVideoElement) => {
    timeIntervalRef.current = setInterval(() => {
      updateTimings({
        el
      })
    }, 1000);
  }

  const handlePlay:React.ReactEventHandler<HTMLVideoElement> = (e) => {
    setPlayInterval(e.target as HTMLVideoElement);
  }

  const handlePause:React.ReactEventHandler<HTMLVideoElement> = (e) => {
    clearInterval(timeIntervalRef.current);
  };

  return (
    <StyledVideoPlayer ref={container}>
      <StyledVideoElement
        playsInline 
        autoPlay 
        muted={isMuted} 
        ref={video}
        onPlay={handlePlay}
        onPause={handlePause}
        preload={'auto'}
        {...props} 
        controls={false}
      >
        <source src={src} type='video/mp4' />
      </StyledVideoElement>
      <VideoControls />
    </StyledVideoPlayer>
  );
}

export default VideoPlayer;
