import React from 'react';

import { StyledPlayControls } from './styled';
import { usePlayerAPI, usePlayerPlaying } from '@lib/providers/player-api';
import IconWrapper from '@ui/IconWrapper';
import { useCanPlayNext, usePlaylistAPI, usePlaylistIndex } from '@lib/providers/playlist-api';
import Button from '@ui/Button';

interface IPlayControlsProps {
  children?: React.ReactNode;
}

const PlayControls:React.FC<IPlayControlsProps> = () => {
  const { togglePlaying } = usePlayerAPI();
  const isPlaying = usePlayerPlaying();

  const { playNext, playPrev } = usePlaylistAPI();
  const canPlayNext = useCanPlayNext();
  const canPlayPrev = usePlaylistIndex() !== 0;

  return (
    <StyledPlayControls>
      {
        canPlayPrev && (
          <Button title='Play previous' theme='text' onClick={playPrev}>
            <IconWrapper icon='SkipPreviousOutlined' />
          </Button>
        )
      }
      <Button title={isPlaying ? 'Pause' : 'Play'} theme='text' onClick={togglePlaying}>
        {
          isPlaying ?
          <IconWrapper icon='PauseOutlined' />
          :
          <IconWrapper icon='PlayArrow' />
        }
      </Button>
      {
        canPlayNext && (
          <Button title='Play next' theme='text' onClick={playNext}>
            <IconWrapper icon='SkipNextOutlined' />
          </Button>
        )
      }
    </StyledPlayControls>
  );
}

export default PlayControls;
