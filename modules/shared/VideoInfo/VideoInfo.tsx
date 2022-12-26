import dynamic from 'next/dynamic';
import React from 'react';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

import { } from './styled';

import Spacer from '@shared/Spacer';
import Title from '@shared/Title';
import VideoDescription from '@shared/VideoInfo/VideoDescription';
import VideoMetadata from '@shared/VideoInfo/VideoMetadata';
import Row from '@shared/Row';
import Avatar from '../Avatar';
import Expand from '../Expand';
import Text from '../Text';
import { intToString } from '@lib/utils/intToString';
import { useVideoData } from '@lib/hooks/useVideoData';
const SubscribeButton = dynamic(() => import('./SubscribeButton'), { ssr: false })


interface IVideoInfoProps {
  children?: React.ReactNode;
}

const VideoInfo:React.FC<IVideoInfoProps> = (props) => {
  const data = useVideoData();

  // TODO: Video loading skeleton
  if (!data) return (
    <div>Loading...</div>
  );

  const { video, channel } = data;

  return (
    <>
      <Title size={20}>
        {video.snippet.title}
      </Title>
      <Spacer vertical={12} />
      <VideoMetadata 
        views={video.statistics.viewCount}
        likes={video.statistics.likeCount}
        published={video.snippet.publishedAt}
      />
      <Spacer vertical={32} />
      <Row align='flex-start' gap={16}>
        <Avatar size={40} src={channel?.snippet.thumbnails.default.url} />
        <Expand>
          <Spacer vertical={5} />
          <Title size={13}>
            <Row gap={5}>
              {channel?.snippet.title}
              {channel?.status.longUploadsStatus === 'eligible' && <DoneOutlinedIcon fontSize='small' />}
            </Row>
          </Title>
          <Spacer vertical={5} />
          <Text size={11}>
            {intToString(channel?.statistics.subscriberCount!)} subscribers
          </Text>
          <Spacer vertical={10} />
          <VideoDescription desc={video.snippet.description} />
        </Expand>
        <SubscribeButton />
      </Row>
    </>
  );
}

export default VideoInfo;
