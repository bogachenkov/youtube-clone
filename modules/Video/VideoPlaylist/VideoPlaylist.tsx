import { useToggle } from '@lib/hooks/useToggle';
import Button from '@modules/shared/Button';
import Container from '@modules/shared/Container';
import IconWrapper from '@modules/shared/IconWrapper';
import Input from '@modules/shared/Input';
import Row from '@modules/shared/Row';
import Spacer from '@modules/shared/Spacer';
import Sticky from '@modules/shared/Sticky';
import React from 'react';
import PlaylistActions from './PlaylistActions';
import PlaylistCollection from './PlaylistCollection';
import PlaylistInfo from './PlaylistInfo';
import {} from './styled';

interface IVideoPlaylistProps {
  children?: React.ReactNode;
}

const VideoPlaylist:React.FC<IVideoPlaylistProps> = (props) => {
  return (
    <Sticky top={66}>
      <Container
        style={{
          background: 'transparent',
          maxHeight: 'var(--content-full-height)',
          overflow: 'auto'
        }}
      >
        <Input
          placeholder='Search name'
          iconLeft='Search'
        />
        <Spacer vertical={32} />
        <PlaylistInfo />
        <Spacer vertical={12} />
        <PlaylistActions />
        <Spacer vertical={23} />
        <PlaylistCollection />
      </Container>
    </Sticky>
  );
}

export default VideoPlaylist;
