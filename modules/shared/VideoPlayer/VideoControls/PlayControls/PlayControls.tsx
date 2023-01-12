import React from 'react';

import { StyledPlayControls } from './styled';
import { usePlayerAPI, usePlayerPlaying } from '@lib/providers/player-api';
import IconWrapper from '@modules/shared/IconWrapper';

interface IPlayControlsProps {
  children?: React.ReactNode;
}

const PlayControls:React.FC<IPlayControlsProps> = () => {
  const { togglePlaying } = usePlayerAPI();
  const isPlaying = usePlayerPlaying();

  console.log(isPlaying);

  return (
    <StyledPlayControls gap={3}>
      <button>
        <IconWrapper icon='SkipPreviousOutlined' />
      </button>
      <button onClick={togglePlaying}>
        {
          isPlaying ?
          <IconWrapper icon='PauseOutlined' />
          :
          <IconWrapper icon='PlayArrow' />
        }
      </button>
      <button>
        <IconWrapper icon='SkipNextOutlined' />
      </button>
    </StyledPlayControls>
  );
}

export default PlayControls;
