import { useQuery } from '@tanstack/react-query';
import React from 'react';
import VideosAPI from '@api/videos';
import GridContainer from '@shared/GridContainer';
import VideoCard from '@shared/VideoCard';
import {} from './styled';

interface IHomePageVideosProps {
  children?: React.ReactNode;
}

const HomePageVideos:React.FC<IHomePageVideosProps> = (props) => {
  const { data } = useQuery({ 
    queryKey: ['videos'], 
    queryFn: VideosAPI.fetchDefaultVideos 
  });

  return (
    <GridContainer>
      {
        !!data && data.map(vid => (
          <VideoCard key={vid.id} video={vid} />
        ))
      }
    </GridContainer>
  );
}

export default HomePageVideos;
