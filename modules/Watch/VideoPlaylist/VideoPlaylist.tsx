import { LaptopOnly } from '@ui/MediaQuery';
import Container from '@ui/Container';
import Input from '@ui/Input';
import Spacer from '@ui/Spacer';
import Sticky from '@ui/Sticky';
import React from 'react';
import PlaylistActions from './PlaylistActions';
import PlaylistCollection from './PlaylistCollection';
import PlaylistInfo from './PlaylistInfo';
import { VideoPlaylistSection } from './styled';

interface IVideoPlaylistProps {
  children?: React.ReactNode;
}

const VideoPlaylist:React.FC<IVideoPlaylistProps> = (props) => {
  return (
    <VideoPlaylistSection>
      <Sticky top={66}>
        <Container
          style={{
            background: 'transparent',
            // maxHeight: 'var(--content-full-height)',
          }}
        >
          {/* <LaptopOnly>
            <Input
              placeholder='Search name'
              iconLeft='Search'
            />
            <Spacer vertical={32} />
          </LaptopOnly> */}
          <PlaylistInfo />
          <Spacer vertical={12} />
          <PlaylistActions />
          <Spacer vertical={23} />
          <PlaylistCollection />
        </Container>
      </Sticky>
    </VideoPlaylistSection>
  );
}

export default VideoPlaylist;
