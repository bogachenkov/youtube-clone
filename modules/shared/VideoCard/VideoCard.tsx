import React from 'react';
import { getRelativeDate } from '@utils/getRelativeDate';
import { intToString } from '@utils/intToString';
import { IVideoPreview } from '@ts-types/Video';
import Row from '@shared/Row';
import Spacer from '@shared/Spacer';
import Text from '@shared/Text';
import Title from '@shared/Title';
import VideoDuration from '@shared/VideoDuration';
import { StyledChannelName, StyledThumb, StyledVideoCard, StyledVideoCardLink } from './styled';

interface IVideoCardProps {
  children?: React.ReactNode;
  video: IVideoPreview;
}

const VideoCard:React.FC<IVideoCardProps> = ({
  video: {
    id,
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
    <StyledVideoCardLink href={`/watch/${id}`}>
      <StyledVideoCard>
        <header>
          <StyledThumb 
            alt={'Title'} 
            src={thumbnails.medium.url}
            fill
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            placeholder='blur'
            blurDataURL={thumbnails.standart ? thumbnails.standart.url : thumbnails.default.url}
          />
          <VideoDuration duration={duration} />
        </header>
        <Spacer vertical={16} />
        <Title level={3} size={15}>
          {title}
        </Title>
        <Spacer vertical={10} />
        <Row gap={'1.5em'} align='flex-start'>
          <StyledChannelName size={12}>
            <strong>{channelTitle}</strong>
          </StyledChannelName>
          <Text size={12}>{intToString(viewCount)} views | {getRelativeDate(publishedAt)}</Text>
        </Row>
      </StyledVideoCard>
    </StyledVideoCardLink>
  );
}

export default VideoCard;
