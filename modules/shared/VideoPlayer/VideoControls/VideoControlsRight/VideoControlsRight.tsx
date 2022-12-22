import React from 'react';

import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

import { StyledVideoControlsRight } from './styled';

interface IVideoControlsRightProps {
  children?: React.ReactNode;
  toggleMute: VoidFunction;
  toggleFullscreen: VoidFunction;
  isMuted: boolean;
  isFullscreen: boolean;
}

const VideoControlsRight:React.FC<IVideoControlsRightProps> = ({
  isMuted,
  isFullscreen,
  toggleMute,
  toggleFullscreen
}) => {
  return (
    <StyledVideoControlsRight gap={'2.2em'}>
      <button onClick={toggleMute}>
        {isMuted ? <VolumeOffOutlinedIcon fontSize='inherit' /> : <VolumeUpOutlinedIcon fontSize='inherit' />}
      </button>
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
