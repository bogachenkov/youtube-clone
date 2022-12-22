import React from 'react';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';

import { StyledPlayControls } from './styled';

interface IPlayControlsProps {
  children?: React.ReactNode;
  isPlaying: boolean;
  togglePlaying: VoidFunction;
}

const PlayControls:React.FC<IPlayControlsProps> = ({
  isPlaying,
  togglePlaying
}) => {
  return (
    <StyledPlayControls gap={3}>
      <button>
        <SkipPreviousOutlinedIcon fontSize='inherit' />
      </button>
      <button onClick={togglePlaying}>
        {isPlaying ? <PauseOutlinedIcon fontSize='inherit' /> : <PlayArrowIcon fontSize='inherit' />}
      </button>
      <button>
        <SkipNextOutlinedIcon fontSize='inherit' />
      </button>
    </StyledPlayControls>
  );
}

export default PlayControls;
