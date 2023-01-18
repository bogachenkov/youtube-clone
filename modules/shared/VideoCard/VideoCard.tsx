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
import VideoCardHover from '../VideoCardHover';
import Link from 'next/link';

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
      viewCount,
      likeCount
    },
    contentDetails: {
      duration
    }
  }
}) => {
  const videoHref = `/watch/${id}`;
  return (
    <StyledVideoCard>
      <header>
        <StyledThumb 
          alt={title}
          src={thumbnails.medium.url}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          placeholder='blur'
          blurDataURL={thumbnails.standart ? thumbnails.standart.url : thumbnails.default.url}
        />
        <VideoCardHover likeCount={likeCount} href={videoHref} />
        <VideoDuration duration={duration} />
      </header>
      <Spacer vertical={16} />
      <Link href={videoHref}>
        <Title level={3} size={15}>
          {title}
        </Title>
      </Link>
      <Spacer vertical={10} />
      <Row gap={'1.5em'} align='flex-start'>
        <StyledChannelName size={12}>
          <strong>{channelTitle}</strong>
        </StyledChannelName>
        <Link href={videoHref}>
          <Text size={12}>{intToString(viewCount)} views | {getRelativeDate(publishedAt)}</Text>
        </Link>
      </Row>
    </StyledVideoCard>
  );
}

export default VideoCard;
