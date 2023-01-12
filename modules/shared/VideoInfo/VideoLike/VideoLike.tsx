import React from 'react';

import { StyledLikeButton } from './styled';
import Text from '@shared/Text';
import { intToString } from '@utils/intToString';
import { useLikesStore } from '@store';
import { useRouter } from 'next/router';
import IconWrapper from '@modules/shared/IconWrapper';

interface IVideoLikeProps {
  children?: React.ReactNode;
  likesCount: number;
}

const VideoLike:React.FC<IVideoLikeProps> = ({
  likesCount
}) => {
  const { query: {video_id} } = useRouter();
  const { likedIds, toggleLike } = useLikesStore(store => store);

  const isVideoLiked = likedIds.includes(video_id as string);

  return (
    <StyledLikeButton
      style={{
        ['--like-button-color' as string]: isVideoLiked ? 'red' : 'var(--color-light)'
      }}
      onClick={() => toggleLike(video_id as string)}
    >
      <IconWrapper icon='ThumbUpOutlined' />
      <Text size={16}>{intToString(likesCount + (isVideoLiked ? 1 : 0))}</Text>
    </StyledLikeButton>
  );
}

export default VideoLike;
