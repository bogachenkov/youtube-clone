import { LaptopOnly, TabletOnly } from '@modules/MediaQuery';
import GridContainer from '@modules/shared/GridContainer';
import Row from '@modules/shared/Row';
import SortButton from '@modules/shared/SortButton';
import Spacer from '@modules/shared/Spacer';
import Text from '@modules/shared/Text';
import VideoCard from '@modules/shared/VideoCard';
import { IVideoPreview } from '@ts-types/Video';
import React from 'react';

interface IPlaylistCollectionProps {
  collection: IVideoPreview[];
  totalVideos: number;
}

const PlaylistCollection:React.FC<IPlaylistCollectionProps> = ({
  collection,
  totalVideos
}) => {
  return (
    <>
      <TabletOnly>
        <Row gap={24}>
          <Text weight='regular' color='var(--color-light)' size={16}>
            {totalVideos} videos
          </Text>
          <SortButton
            text='Sort'
            fontSize={16}
          />
        </Row>
        <Spacer vertical={16} />
      </TabletOnly>
      <LaptopOnly>
        <SortButton
          text='Sort'
          fontSize={24}
        />
        <Spacer vertical={44} />
      </LaptopOnly>
      <GridContainer>
        {
          collection.map(item => <VideoCard key={item.id} video={item} />)
        }
      </GridContainer>
    </>
  );
}

export default PlaylistCollection;
