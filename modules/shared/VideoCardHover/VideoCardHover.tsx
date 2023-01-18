import Link from 'next/link';
import React from 'react';
import Blur from '../Blur';
import Spacer from '../Spacer';
import Text from '../Text';
import ControlButton from './ControlButton';
import { StyledControlsRow, StyledHoverContainer, StyledVideoCardHover } from './styled';

import { intToString } from '@utils/intToString';
import Row from '../Row';
import IconWrapper from '../IconWrapper';
import { usePlaylistStore } from '@lib/store/playlist';

interface IVideoCardHoverProps {
  children?: React.ReactNode;
  likeCount: number;
  id: string;
}

const VideoCardHover:React.FC<IVideoCardHoverProps> = ({
  likeCount,
  id
}) => {
  const addToPlaylist = usePlaylistStore(store => store.addVideoToPL);
  const removeFromPlaylist = usePlaylistStore(store => store.removeVideoFromPL);
  const playlist = usePlaylistStore(store => store.videos);

  const isInPlaylist = playlist.includes(id);

  return (
    <StyledVideoCardHover>
      <Blur />
      <Link href={`/watch/${id}`} color='#FFF'>
        <StyledHoverContainer>
          <Spacer vertical={20} />
          <Row align='center' gap={4}>
            <IconWrapper size={40} icon='PlayArrowOutlined' style={{ marginLeft: '-.2em' }} />
            <Text size={18} weight='extraBold' color='#FFF'>
              Play
            </Text>
          </Row>
          <Row align='center' gap={8}>
            <IconWrapper size={20} icon='ThumbUpOffAltOutlined' />
            <Text size={13} weight={'regular'} color='#FFF'>
              {intToString(likeCount)}
            </Text>
          </Row>
        </StyledHoverContainer>
      </Link>
      <StyledControlsRow direction='column' align='flex-end' gap={8}>
        {/* <ControlButton
          text='Watch later'
          icon='WatchLaterOutlined'
        /> */}
        {/* <ControlButton
          text='Add to queue'
          icon='PlaylistPlayOutlined'
        /> */}
        <ControlButton
          text={isInPlaylist ? 'Remove from playlist' : 'Add to playlist'}
          onClick={() => isInPlaylist ? removeFromPlaylist(id) : addToPlaylist(id)}
          icon={isInPlaylist ? 'PlaylistRemove' : 'PlaylistAdd'}
        />
      </StyledControlsRow>
    </StyledVideoCardHover>
  );
}

export default VideoCardHover;
