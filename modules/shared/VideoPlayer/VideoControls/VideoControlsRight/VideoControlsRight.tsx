import React from 'react';

import { StyledVideoControlsRight } from './styled';
import VolumeControl from '@modules/shared/VolumeControl';
import { usePlayerAPI, usePlayerFullscreen } from '@lib/providers/player-api';
import IconWrapper from '@modules/shared/IconWrapper';

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
        <IconWrapper icon='SettingsOutlined' />
      </button>
      <button onClick={toggleFullscreen}>
        {
          isFullscreen ?
          <IconWrapper icon='FullscreenExit' />
          :
          <IconWrapper icon='FullscreenOutlined' />
        }
      </button>
    </StyledVideoControlsRight>
  );
}

export default VideoControlsRight;
