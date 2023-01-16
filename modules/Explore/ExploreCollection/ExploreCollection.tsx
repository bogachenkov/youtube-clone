import { exploreQuery } from '@const/queries';
import { useVideoCollection } from '@lib/hooks/useVideoCollection';
import Title from '@modules/shared/Title';
import VideoCard from '@modules/shared/VideoCard';
import React from 'react';
import { StyledExploreCollection } from './styled';

interface IExploreCollectionProps {
  children?: React.ReactNode;
}

const ExploreCollection:React.FC<IExploreCollectionProps> = (props) => {
  const { data, isLoading } = useVideoCollection(exploreQuery);

  if (isLoading) return <Title>Loading...</Title>

  if (!data) return null;

  return (
    <StyledExploreCollection>
      {data.map(v => <VideoCard key={v.id} video={v} />)}
    </StyledExploreCollection>
  );
}

export default React.memo(ExploreCollection);
