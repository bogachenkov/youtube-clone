import React from 'react';

import Spacer from '@shared/Spacer';
import Title from '@shared/Title';
import VideoDescription from '@modules/Video/VideoInfo/VideoDescription';
import VideoMetadata from '@modules/Video/VideoInfo/VideoMetadata';
import Row from '@shared/Row';
import Avatar from '../../shared/Avatar';
import Expand from '../../shared/Expand';
import Text from '../../shared/Text';
import { intToString } from '@lib/utils/intToString';
import { useVideoData } from '@lib/hooks/useVideoData';
import IconWrapper from '../../shared/IconWrapper';
import SubscribeButton from './SubscribeButton';
import Head from 'next/head';


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
      <Head>
        <title>{video.snippet.title} - YouTube Clone</title>
      </Head>
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
        <Avatar size={40} name={channel?.snippet.title!} />
        <Expand>
          <Spacer vertical={5} />
          <Title size={13}>
            <Row gap={5}>
              {channel?.snippet.title}
              {channel?.status.longUploadsStatus === 'eligible' && <IconWrapper icon='DoneOutlined' />}
            </Row>
          </Title>
          <Spacer vertical={5} />
          <Text size={11}>
            {intToString(channel?.statistics.subscriberCount!)} subscribers
          </Text>
          <Spacer vertical={10} />
          <VideoDescription desc={video.snippet.description} />
        </Expand>
        <SubscribeButton id={video.snippet.channelId} />
      </Row>
    </>
  );
}

export default VideoInfo;
