import React from 'react';

import Spacer from '@shared/Spacer';
import Title from '@shared/Title';
import VideoDescription from '@modules/Video/VideoInfo/VideoDescription';
import VideoMetadata from '@modules/Video/VideoInfo/VideoMetadata';
import Row from '@shared/Row';
import Avatar from '../../shared/Avatar';
import Text from '../../shared/Text';
import { intToString } from '@lib/utils/intToString';
import { useVideoData } from '@lib/hooks/useVideoData';
import IconWrapper from '../../shared/IconWrapper';
import SubscribeButton from './SubscribeButton';
import Head from 'next/head';
import { LaptopOnly, TabletOnly } from '@modules/MediaQuery';
import VideoSocialControls from './VideoSocialControls';
import { StyledAvatarArea, StyledChannelArea, StyledDescArea, StyledSubscribeArea, StyledVideoInfo, StyledVideoInfoGrid } from './styled';


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
    <StyledVideoInfo>
      <Head>
        <title>{`${data.video.snippet.title} - YouTube Clone`}</title>
      </Head>
      <TabletOnly>
        <Title size={16}>
          {video.snippet.title}
        </Title>
      </TabletOnly>
      <LaptopOnly>
        <Title size={20}>
          {video.snippet.title}
        </Title>
        <Spacer vertical={12} />
      </LaptopOnly>
      <VideoMetadata 
        views={video.statistics.viewCount}
        likes={video.statistics.likeCount}
        published={video.snippet.publishedAt}
      />
      <Spacer vertical={32} />

      <StyledVideoInfoGrid>
        <StyledAvatarArea>
          <Avatar size={40} name={channel?.snippet.title!} />
        </StyledAvatarArea>

        <StyledChannelArea>
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
        </StyledChannelArea>

        <StyledDescArea>
          <VideoDescription desc={video.snippet.description} />
        </StyledDescArea>

        <StyledSubscribeArea>
          <SubscribeButton id={video.snippet.channelId} />
        </StyledSubscribeArea>
      </StyledVideoInfoGrid>

      <TabletOnly>
        <Spacer vertical={16} />
        <VideoSocialControls likes={video.statistics.likeCount} />
      </TabletOnly>
    </StyledVideoInfo>
  );
}

export default VideoInfo;
