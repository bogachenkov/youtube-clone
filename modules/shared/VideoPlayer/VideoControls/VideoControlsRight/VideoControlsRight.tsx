import React from 'react';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

import { StyledVideoControlsRight } from './styled';
import VolumeControl from '@modules/shared/VolumeControl';
import { usePlayerAPI, usePlayerFullscreen } from '@lib/providers/player-api';

interface IVideoControlsRightProps {
  children?: React.ReactNode;
}

const VideoControlsRight:React.FC<IVideoControlsRightProps> = () => {
  const { toggleFullscreen } = usePlayerAPI();
  const isFullscreen = usePlayerFullscreen();

  return (
    <StyledVideoControlsRight gap={'2.2em'}>
      <VolumeControl />
      <button>
        <SettingsOutlinedIcon fontSize='inherit' />
      </button>
      <button onClick={toggleFullscreen}>
        {isFullscreen ? <FullscreenExitIcon fontSize='inherit' /> : <FullscreenOutlinedIcon fontSize='inherit' />}
      </button>
    </StyledVideoControlsRight>
  );
}

export default VideoControlsRight;
