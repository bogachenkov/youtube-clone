import { getHighResThumb } from '@lib/utils/getHighResThumb';
import Container from '@modules/shared/Container';
import Spacer from '@modules/shared/Spacer';
import TwoColumnGrid from '@modules/shared/TwoColumnGrid';
import { IVideoPreview } from '@ts-types/Video';
import React from 'react';
import PlaylistCollection from './PlaylistCollection';
import PlaylistCover from './PlaylistCover';
import PlaylistMeta from './PlaylistMeta';

interface IPlaylistProps {
  children?: React.ReactNode;
  videos: IVideoPreview[];
  name: string;
  isPrivate?: boolean;
  lastUpdate: string;
}

const Playlist:React.FC<IPlaylistProps> = ({
  videos,
  name,
  isPrivate = true,
  lastUpdate
}) => {
  
  return (
    <>
      <TwoColumnGrid firstCol='1fr' secondCol='350px'>
        <Container>
          <PlaylistCover
            alt={name}
            href={`/watch/${videos[0].id}`}
            cover={getHighResThumb(videos[0].snippet.thumbnails)}
          />
        </Container>
        <Container>
          <PlaylistMeta
            name={name}
            totalVideos={videos.length}
            totalViews={0}
            lastUpdate={lastUpdate}
            isPrivate={isPrivate}
          />
        </Container>
      </TwoColumnGrid>
      <Spacer vertical={30} />
      <Container>
        <PlaylistCollection
          collection={videos}
        />
      </Container>
    </>
  );
}

export default Playlist;
