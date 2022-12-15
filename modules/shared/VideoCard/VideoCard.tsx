import React from 'react';
import { getRelativeDate } from '../../../lib/utils/getRelativeDate';
import { intToString } from '../../../lib/utils/intToString';
import { IVideoPreview } from '../../../types/Video';
import Spacer from '../Spacer';
import Text from '../Text';
import Title from '../Title';
import VideoDuration from '../VideoDuration';
import { StyledChannelName, StyledDetailsRow, StyledThumb, StyledVideoCard } from './styled';

interface IVideoCardProps {
  children?: React.ReactNode;
  video: IVideoPreview;
}

const VideoCard:React.FC<IVideoCardProps> = ({
  video: {
    snippet: {
      title,
      channelTitle,
      thumbnails,
      publishedAt,
    },
    statistics: {
      viewCount
    },
    contentDetails: {
      duration
    }
  }
}) => {
  return (
    <StyledVideoCard>
      <header>
        <StyledThumb 
          alt={'Title'} 
          src={thumbnails.medium.url}
          fill
        />
        <VideoDuration duration={duration} />
      </header>
      <Spacer vertical={16} />
      <Title level={3} size={15}>
        {title}
      </Title>
      <Spacer vertical={10} />
      <StyledDetailsRow>
        <StyledChannelName size={12}>
          <strong>{channelTitle}</strong>
        </StyledChannelName>
        <Text size={12}>{intToString(viewCount)} views | {getRelativeDate(publishedAt)}</Text>
      </StyledDetailsRow>
    </StyledVideoCard>
  );
}

export default VideoCard;
