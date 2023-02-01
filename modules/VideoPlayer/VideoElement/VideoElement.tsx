import React, { useCallback, useEffect, VideoHTMLAttributes } from 'react';
import { useVideoId } from '@lib/hooks/useVideoId';
import { usePlayerAPI, usePlayerRefs, usePlayerMuted } from '@lib/providers/player-api';
import { usePlaylistAPI } from '@lib/providers/playlist-api';
import { StyledVideoElement } from './styled';

interface IVideoElementProps extends VideoHTMLAttributes<HTMLVideoElement> {
  children?: React.ReactNode;
}

const VideoElement:React.FC<IVideoElementProps> = (props) => {
  const videoId = useVideoId();

  const { video } = usePlayerRefs();
  const { togglePlaying } = usePlayerAPI();
  const isMuted = usePlayerMuted();

  const { playNext } = usePlaylistAPI();

  const restartVideo = useCallback(() => {
    video.current?.pause();
    video.current!.currentTime = 0;
    video.current?.load();
  }, [video]);

  useEffect(() => {
    console.log('Video player rerenders');
  })

  useEffect(() => {
    restartVideo();
  }, [videoId, restartVideo]);

  return (
    <StyledVideoElement
      playsInline 
      autoPlay 
      muted={isMuted} 
      ref={video}
      onEnded={playNext}
      onClick={togglePlaying}
      preload={'auto'}
      {...props} 
      controls={false}
    >
      <source src={props.src} type='video/mp4' />
    </StyledVideoElement>
  );
}

export default VideoElement;
