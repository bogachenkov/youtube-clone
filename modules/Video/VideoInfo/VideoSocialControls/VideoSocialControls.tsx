import DefaultIconButton from '@modules/shared/DefaultIconButton';
import React from 'react';
import VideoLike from '../VideoLike';
import VideoPlaylistButton from '../VideoPlaylistButton';
import { StyledSocialControls } from './styled';

interface IVideoSocialControlsProps {
  children?: React.ReactNode;
  likes: number;
}

const VideoSocialControls:React.FC<IVideoSocialControlsProps> = ({
  likes
}) => {
  return (
    <StyledSocialControls gap={'3.6em'}>
      <VideoLike
        likesCount={likes}
      />
      <VideoPlaylistButton />
      <DefaultIconButton
        title='Not Implemented'
        theme='text'
        icon='ShareOutlined'
        size={26}
      />
      <DefaultIconButton
        title='Not Implemented'
        theme='text'
        icon='MoreHorizOutlined'
        size={26}
      />
    </StyledSocialControls>
  );
}

export default VideoSocialControls;
