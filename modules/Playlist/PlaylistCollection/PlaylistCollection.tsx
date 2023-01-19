import GridContainer from '@modules/shared/GridContainer';
import SortButton from '@modules/shared/SortButton';
import Spacer from '@modules/shared/Spacer';
import VideoCard from '@modules/shared/VideoCard';
import { IVideoPreview } from '@ts-types/Video';
import React from 'react';

interface IPlaylistCollectionProps {
  collection: IVideoPreview[];
}

const PlaylistCollection:React.FC<IPlaylistCollectionProps> = ({
  collection
}) => {
  return (
    <>
      <SortButton
        text='Sort'
        fontSize={24}
      />
      <Spacer vertical={44} />
      <GridContainer>
        {
          collection.map(item => <VideoCard key={item.id} video={item} />)
        }
      </GridContainer>
    </>
  );
}

export default PlaylistCollection;
