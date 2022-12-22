import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import YoutubeAPI from '@api/youtube';

import { } from './styled';

import Spacer from '@shared/Spacer';
import Title from '@shared/Title';
import VideoDescription from '@shared/VideoInfo/VideoDescription';
import VideoMetadata from '@shared/VideoInfo/VideoMetadata';
import Row from '@shared/Row';
import Avatar from '../Avatar';
import Expand from '../Expand';
const SubscribeButton = dynamic(() => import('./SubscribeButton'), { ssr: false })


interface IVideoInfoProps {
  children?: React.ReactNode;
}

const api = new YoutubeAPI();

const VideoInfo:React.FC<IVideoInfoProps> = (props) => {
  const { query } = useRouter()
  const { data: video } = useQuery({ 
    queryKey: ['watch', query.video_id], 
    queryFn: () => api.video({
      part: ['snippet', 'contentDetails', 'statistics'],
      id: [query.video_id as string]
    })
  });


  // TODO: Video loading skeleton
  if (!video) return (
    <div>Loading...</div>
  );

  return (
    <>
      <Title size={20}>
        {video.snippet.title}
      </Title>
      <Spacer vertical={15} />
      <VideoMetadata 
        views={video.statistics.viewCount}
        likes={video.statistics.likeCount}
        published={video.snippet.publishedAt}
      />
      <Spacer vertical={25} />
      <Row align='flex-start' gap={16}>
        <Avatar size={40} />
        <Expand>
          <VideoDescription desc={video.snippet.description} />
        </Expand>
        <SubscribeButton />
      </Row>
    </>
  );
}

export default VideoInfo;
