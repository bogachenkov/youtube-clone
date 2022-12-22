import _ from 'lodash';
import React, { useEffect, useMemo, useRef, useState, VideoHTMLAttributes } from 'react';
import { StyledVideoElement, StyledVideoPlayer } from './styled';
import VideoControls from './VideoControls';

interface IVideoPlayerProps extends VideoHTMLAttributes<HTMLVideoElement> {
  children?: React.ReactNode;
}

export interface IVideoControls {
  togglePlaying: VoidFunction;
  toggleMute: VoidFunction;
  toggleFullscreen: VoidFunction;
  handleTimingChange: (value: number) => void;
}

export interface IVideoStates {
  isPlaying: boolean;
  isFullscreen: boolean;
  isMuted: boolean;
}

export interface TimeRanges {
  played: number;
  buffered: number;
  duration: number;
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(50);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [timeRanges, setTimeRanges] = useState<TimeRanges>({
    played: 0,
    buffered: 0,
    duration: 0
  });
  const [] = useState();

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const timeIntervalRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    return () => {
      clearInterval(timeIntervalRef.current);
    }
  }, []);

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying]);

  const setVideoTimings = (el: HTMLVideoElement) => {
    const buffered = el.buffered;
    setTimeRanges({
      played: el.currentTime,
      buffered: buffered.length > 0 ? buffered.end(buffered.length - 1) : 0,
      duration: el.duration
    });
  }

  const setPlayInterval = (el: HTMLVideoElement) => {
    timeIntervalRef.current = setInterval(() => {
      setVideoTimings(el);
    }, 1000);
  }

  const handlePlay:React.ReactEventHandler<HTMLVideoElement> = (e) => {
    setPlayInterval(e.target as HTMLVideoElement);
  }

  const handlePause:React.ReactEventHandler<HTMLVideoElement> = (e) => {
    clearInterval(timeIntervalRef.current);
  };

  const handleTimingChange = (value: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = value;
    setVideoTimings(videoRef.current);
  };

  const togglePlaying = () => {
    setIsPlaying(playing => !playing);
  };

  const toggleMute = () => {
    setIsMuted(muted => !muted);
  };

  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return;
    const element = videoContainerRef.current;

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
      }
      setIsFullscreen(true);
      setIsMuted(false);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }  
  };

  const controls:IVideoControls = useMemo(() => ({
    togglePlaying,
    toggleMute,
    handleTimingChange,
    toggleFullscreen
  }), [isFullscreen]);

  const states:IVideoStates = useMemo(() => ({
    isMuted,
    isFullscreen,
    isPlaying
  }), [isMuted, isFullscreen, isPlaying])

  return (
    <StyledVideoPlayer ref={videoContainerRef}>
      <StyledVideoElement
        playsInline 
        autoPlay 
        muted={isMuted} 
        ref={videoRef}
        onPlay={handlePlay}
        onPause={handlePause}
        preload={'auto'}
        {...props} 
        controls={false}
      >
        <source src={src} type='video/mp4' />
      </StyledVideoElement>
      <VideoControls
        states={states}
        controls={controls}
        timeRanges={timeRanges}
      />
    </StyledVideoPlayer>
  );
}

export default VideoPlayer;
