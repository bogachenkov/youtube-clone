import React from 'react';
import GridContainer from '@shared/GridContainer';
import VideoCard from '@shared/VideoCard';
import { useVideoCollection } from '@lib/hooks/useVideoCollection';

interface IHomePageVideosProps {
  children?: React.ReactNode;
}

const HomePageVideos:React.FC<IHomePageVideosProps> = (props) => {
  const data = useVideoCollection();

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
