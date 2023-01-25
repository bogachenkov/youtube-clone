import { exploreQuery } from '@const/queries';
import { useVideoCollection } from '@lib/hooks/useVideoCollection';
import Title from '@ui/Title';
import VideoCard from '@modules/Video/VideoCard';
import React from 'react';
import { StyledExploreCollection } from './styled';
import SuspenseSpinner from '@modules/ui/SuspenseSpinner';

interface IExploreCollectionProps {
  children?: React.ReactNode;
}

const ExploreCollection:React.FC<IExploreCollectionProps> = (props) => {
  const { data, isLoading } = useVideoCollection(exploreQuery);

  if (isLoading) return <SuspenseSpinner />

  if (!data) return null;

  return (
    <StyledExploreCollection>
      {data.map(v => <VideoCard key={v.id} video={v} />)}
    </StyledExploreCollection>
  );
}

export default React.memo(ExploreCollection);
