import { useLikesStore, useSubscriptionsStore } from '@lib/store';
import Text from '@ui/Text';
import React from 'react';
import { StyledLibraryStats, StyledLibraryText } from './styled';

interface ILibraryStatsProps {
  children?: React.ReactNode;
}

const LibraryStats:React.FC<ILibraryStatsProps> = (props) => {
  const subs = useSubscriptionsStore(store => store.subscriptions);
  const likes = useLikesStore(store => store.likedIds);

  return (
    <StyledLibraryStats gap={29}>
      <StyledLibraryText>
        Subscriptions:
        <span style={{ marginLeft: 8 }}>{subs.length}</span>
      </StyledLibraryText>
      <Text weight='thin' size={16}>|</Text>
      <StyledLibraryText>
        Uploads:
        <span style={{ marginLeft: 8 }}>0</span>
      </StyledLibraryText>
      <Text weight='thin' size={16}>|</Text>
      <StyledLibraryText>
        Likes:
        <span style={{ marginLeft: 8 }}>{likes.length}</span>
      </StyledLibraryText>
    </StyledLibraryStats>
  );
}

export default React.memo(LibraryStats);
