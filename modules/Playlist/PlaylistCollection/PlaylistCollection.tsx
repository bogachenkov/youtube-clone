import { LaptopOnly, TabletOnly } from '@ui/MediaQuery';
import GridContainer from '@ui/GridContainer';
import Row from '@ui/Row';
import SortButton from '@ui/SortButton';
import Spacer from '@ui/Spacer';
import Text from '@ui/Text';
import VideoCard from '@modules/Video/VideoCard';
import { IVideoPreview } from '@ts-types/Video';
import React from 'react';

interface IPlaylistCollectionProps {
  collection: IVideoPreview[];
}

const PlaylistCollection:React.FC<IPlaylistCollectionProps> = ({
  collection,
}) => {
  return (
    <>
      <TabletOnly>
        <Row gap={24}>
          <Text weight='regular' color='var(--color-light)' size={16}>
            {collection.length} videos
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

export default React.memo(PlaylistCollection);
