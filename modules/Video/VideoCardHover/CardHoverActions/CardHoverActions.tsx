import React from 'react';
import ControlButton from '../ControlButton';

import { usePlaylistStore } from '@lib/store/playlist';

interface ICardHoverActionsProps {
  children?: React.ReactNode;
  id: string;
}

const CardHoverActions:React.FC<ICardHoverActionsProps> = ({
  id
}) => {
  const addToPlaylist = usePlaylistStore(store => store.addVideoToPL);
  const removeFromPlaylist = usePlaylistStore(store => store.removeVideoFromPL);
  const playlist = usePlaylistStore(store => store.videos);

  const isInPlaylist = playlist.includes(id);

  return (
    <ControlButton
      text={isInPlaylist ? 'Remove from playlist' : 'Add to playlist'}
      onClick={() => isInPlaylist ? removeFromPlaylist(id) : addToPlaylist(id)}
      icon={isInPlaylist ? 'PlaylistRemove' : 'PlaylistAdd'}
    />
  );
}

export default CardHoverActions;
