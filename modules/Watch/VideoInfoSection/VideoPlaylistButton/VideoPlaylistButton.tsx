import { useVideoId } from '@lib/hooks/useVideoId';
import { usePlaylistStore } from '@lib/store/playlist';
import IconButton from '@ui/IconButton';
import React from 'react';

interface IVideoPlaylistButtonProps {
  children?: React.ReactNode;
}

const VideoPlaylistButton:React.FC<IVideoPlaylistButtonProps> = (props) => {
  const videoId = useVideoId();
  const addToPlaylist = usePlaylistStore(store => store.addVideoToPL);
  const removeFromPlaylist = usePlaylistStore(store => store.removeVideoFromPL);
  const playlistCollection = usePlaylistStore(store => store.videos);

  const isInPlaylistCollection = playlistCollection.includes(videoId);

  const onPlaylistClick = () => {
    if (isInPlaylistCollection) return removeFromPlaylist(videoId);
    return addToPlaylist(videoId);
  }

  return (
    <IconButton
      size={26}
      icon={isInPlaylistCollection ? 'PlaylistRemove' : 'PlaylistAdd'}
      theme='text'
      onClick={onPlaylistClick}
      title={isInPlaylistCollection ? 'Remove from playlist' : 'Add to playlist'}
    />
  );
}

export default VideoPlaylistButton;
