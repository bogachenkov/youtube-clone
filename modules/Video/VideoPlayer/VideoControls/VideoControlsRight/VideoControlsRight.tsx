import React from 'react';

import { StyledVideoControlsRight } from './styled';
import VolumeControl from '@modules/shared/VolumeControl';
import { usePlayerAPI, usePlayerFullscreen } from '@lib/providers/player-api';
import IconWrapper from '@modules/shared/IconWrapper';
import Button from '@modules/shared/Button';

interface IVideoControlsRightProps {
  children?: React.ReactNode;
}

const VideoControlsRight:React.FC<IVideoControlsRightProps> = () => {
  const { toggleFullscreen } = usePlayerAPI();
  const isFullscreen = usePlayerFullscreen();

  return (
    <StyledVideoControlsRight gap={'2.2em'}>
      <VolumeControl />
      <Button theme='text' title='Not Implemented'>
        <IconWrapper icon='SettingsOutlined' />
      </Button>
      <Button
        theme='text'
        onClick={toggleFullscreen}
        title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      >
        {
          isFullscreen ?
          <IconWrapper icon='FullscreenExit' />
          :
          <IconWrapper icon='FullscreenOutlined' />
        }
      </Button>
    </StyledVideoControlsRight>
  );
}

export default VideoControlsRight;