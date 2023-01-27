import React from 'react';
import GridContainer from '@ui/GridContainer';
import VideoCard from '@modules/Video/VideoCard';
import { useVideoCollection } from '@lib/hooks/useVideoCollection';

interface IHomePageVideosProps {
  children?: React.ReactNode;
}

const HomePageVideos:React.FC<IHomePageVideosProps> = (props) => {
  const { data } = useVideoCollection();

  if (!data) return null;

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
