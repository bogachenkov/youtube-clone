import React from 'react';

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

import { StyledLikeButton } from './styled';
import Text from '@shared/Text';
import { intToString } from '@utils/intToString';
import { useLikesStore } from '@store';
import { useRouter } from 'next/router';

interface IVideoLikeProps {
  children?: React.ReactNode;
  likesCount: number;
}

const VideoLike:React.FC<IVideoLikeProps> = ({
  likesCount
}) => {
  const { query: {video_id} } = useRouter();
  const {likedIds, toggleLike} = useLikesStore();

  const isVideoLiked = likedIds.includes(video_id as string);

  return (
    <StyledLikeButton
      style={{
        ['--like-button-color' as string]: isVideoLiked ? 'red' : 'var(--color-white)'
      }}
      onClick={() => toggleLike(video_id as string)}
    >
      <ThumbUpOutlinedIcon fontSize='inherit' />
      <Text size={16}>{intToString(likesCount + (isVideoLiked ? 1 : 0))}</Text>
    </StyledLikeButton>
  );
}

export default VideoLike;
