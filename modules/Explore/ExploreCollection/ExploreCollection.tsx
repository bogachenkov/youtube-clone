import { exploreQuery } from '@const/queries';
import { useVideoCollection } from '@lib/hooks/useVideoCollection';
import VideoCard from '@modules/shared/VideoCard';
import React from 'react';
import { StyledExploreCollection } from './styled';

interface IExploreCollectionProps {
  children?: React.ReactNode;
}

const ExploreCollection:React.FC<IExploreCollectionProps> = (props) => {
  const data = useVideoCollection(exploreQuery.key, exploreQuery.config);
  return (
    <StyledExploreCollection>
      {data.map(v => <VideoCard key={v.id} video={v} />)}
    </StyledExploreCollection>
  );
}

export default React.memo(ExploreCollection);
