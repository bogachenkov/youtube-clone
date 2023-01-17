import { useVideoId } from '@lib/hooks/useVideoId';
import { usePlaylistStore } from '@lib/store/playlist';
import Button from '@modules/shared/Button';
import IconWrapper from '@modules/shared/IconWrapper';
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
    <Button
      theme='text'
      onClick={onPlaylistClick}
    >
      <IconWrapper
        color={isInPlaylistCollection ? 'red' : 'inherit'}
        icon={isInPlaylistCollection ? 'PlaylistRemove' : 'PlaylistAdd'}
      />
    </Button>
  );
}

export default VideoPlaylistButton;
