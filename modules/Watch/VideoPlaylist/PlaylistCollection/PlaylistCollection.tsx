import { usePlaylistCollection, usePlaylistIndex } from '@lib/providers/playlist-api';
import Scrollbar from '@modules/shared/Scrollbar';
import _ from 'lodash';
import React from 'react';
import PlaylistItem from '../PlaylistItem';
import { StyledPlaylistCollection, StyledPlaylistWindow } from './styled';

interface IPlaylistCollectionProps {
  children?: React.ReactNode;
}

const PlaylistCollection:React.FC<IPlaylistCollectionProps> = () => {
  const collection = usePlaylistCollection();
  const activeIndex = usePlaylistIndex();
  
  return (
    <StyledPlaylistWindow>
      <Scrollbar
        autoHide
        initialScrollTop={(84 + 14) * (activeIndex - 1)}
        style={{
          height: 'calc(var(--item-height) * 4 + var(--collection-gap) * 3)'
        }}
      >
        <StyledPlaylistCollection>
          {
            collection.map((item, i) => (
              <PlaylistItem key={item.id} isActive={activeIndex === i} index={i} item={item} />
            ))
          }
        </StyledPlaylistCollection>
      </Scrollbar>
    </StyledPlaylistWindow>
  );
}

export default PlaylistCollection;
