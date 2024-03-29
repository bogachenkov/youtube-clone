import Container from '@ui/Container';
import Sticky from '@ui/Sticky';
import Spacer from '@ui/Spacer';
import Title from '@ui/Title';
import TwoColumnGrid from '@ui/TwoColumnGrid';
import React, { useState } from 'react';
import HistoryControls from './HistoryControls';
import HistoryVideoCollection from './HistoryVideoCollection';
import EmptyScreen from '@ui/EmptyScreen';
import { IVideoPreview } from '@ts-types/Video';
import { useHistoryCollection } from '@lib/hooks/useHistoryCollection';

interface IHistoryProps {
  children?: React.ReactNode;
  mockedHistoryCollection?: IVideoPreview[];
}

const History:React.FC<IHistoryProps> = ({
  mockedHistoryCollection = null
}) => {
  const [ search, setSearch ] = useState('');
  const historyCollection = useHistoryCollection(search);

  const collection = mockedHistoryCollection ?? historyCollection;

  return (
    <TwoColumnGrid secondCol="350px">
      <Container>
        {
          collection.length === 0 && (
            <EmptyScreen
              emojiCode='1F627'
              title='Keep Track Of What You Watch'
              text={'Your watch history is empty'}
            />
          )
        }
        {
          collection.length > 0 && (
            <>
              <Title size={34}>
                Watch History
              </Title>
              <Spacer vertical={19} />
              <HistoryVideoCollection collection={collection} />
            </>
          )
        }
      </Container>
      <Sticky top={66}>
        <Container>
          <HistoryControls search={search} setSearch={setSearch} />
        </Container>
      </Sticky>
    </TwoColumnGrid>
  );
}

export default History;
