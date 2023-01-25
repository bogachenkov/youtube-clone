import React from 'react';
import GridContainer from '@ui/GridContainer';
import VideoCard from '@modules/Video/VideoCard';
import { useVideoCollection } from '@lib/hooks/useVideoCollection';
import SuspenseSpinner from '@modules/ui/SuspenseSpinner';

interface IHomePageVideosProps {
  children?: React.ReactNode;
}

const HomePageVideos:React.FC<IHomePageVideosProps> = (props) => {
  const { data, isLoading } = useVideoCollection();

  if (isLoading) return <SuspenseSpinner />

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
