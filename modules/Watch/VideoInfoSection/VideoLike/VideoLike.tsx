import React from 'react';

import { StyledLikeButton } from './styled';
import Text from '@ui/Text';
import { intToString } from '@utils/intToString';
import { useLikesStore } from '@store';
import { useRouter } from 'next/router';
import IconWrapper from '@ui/IconWrapper';

interface IVideoLikeProps {
  children?: React.ReactNode;
  likesCount: number;
}

const VideoLike:React.FC<IVideoLikeProps> = ({
  likesCount
}) => {
  const router = useRouter();
  const { likedIds, toggleLike } = useLikesStore(store => store);

  const videoId = router.query.video_id as string;

  const isVideoLiked = likedIds.includes(videoId as string);

  return (
    <StyledLikeButton
      style={{
        ['--like-button-color' as string]: isVideoLiked ? 'red' : 'var(--color-light)'
      }}
      onClick={() => toggleLike(videoId as string)}
    >
      <IconWrapper icon='ThumbUpOutlined' />
      <Text size={16}>{intToString(likesCount + (isVideoLiked ? 1 : 0))}</Text>
    </StyledLikeButton>
  );
}

export default VideoLike;
