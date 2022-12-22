import React from 'react';

import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';

import {} from './styled';
import { usePlayerAPI, usePlayerMuted, usePlayerVolume } from '@lib/providers/player-api';

interface IVolumeControlProps {
  children?: React.ReactNode;
}

const VolumeControl:React.FC<IVolumeControlProps> = (props) => {
  const { toggleMute, setVolume } = usePlayerAPI();
  const isMuted = usePlayerMuted();
  const volume = usePlayerVolume();

  return (
    <>
      <button onClick={toggleMute}>
        {isMuted ? <VolumeOffOutlinedIcon fontSize='inherit' /> : <VolumeUpOutlinedIcon fontSize='inherit' />}
      </button>
    </>
  );
}

export default VolumeControl;
