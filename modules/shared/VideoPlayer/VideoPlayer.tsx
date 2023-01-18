import { useVideoId } from '@lib/hooks/useVideoId';
import { usePlayerAPI, usePlayerRefs, usePlayerMuted } from '@lib/providers/player-api';
import { usePlaylistAPI, usePlaylistIndex } from '@lib/providers/playlist-api';
import _ from 'lodash';
import React, { useCallback, useEffect, useRef, VideoHTMLAttributes } from 'react';
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
  const videoId = useVideoId();

  const { video, container } = usePlayerRefs();
  const { updateTimings, togglePlaying } = usePlayerAPI();
  const isMuted = usePlayerMuted();

  const { playNext } = usePlaylistAPI();

  const restartVideo = useCallback(() => {
    video.current?.pause();
    video.current!.currentTime = 0;
    video.current?.load();
  }, [video]);

  useEffect(() => {
    restartVideo();
    clearInterval(timeIntervalRef.current);
  }, [videoId, restartVideo]);

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
        onEnded={playNext}
        onPause={handlePause}
        onClick={togglePlaying}
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
